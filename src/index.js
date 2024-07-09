// Copyright 2023 The MediaPipe Authors.

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//      http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {FilesetResolver, GestureRecognizer, DrawingUtils} from "@mediapipe/tasks-vision";
import {throttle} from 'throttle-debounce';
import gsap from "gsap";

if (module.hot) {
    // module.hot.accept()
    //   console.log(module,3223)
}

const demosSection = document.getElementById("demos");
let gestureRecognizer;
let runningMode = "VIDEO";
let enableWebcamButton;
let webcamRunning = false;
const videoHeight = "360px";
const videoWidth = "480px";

// Before we can use HandLandmarker class we must wait for it to finish
// loading. Machine Learning models can be large and take a moment to
// get everything needed to run.
const createGestureRecognizer = async () => {
    const vision = await FilesetResolver.forVisionTasks(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3/wasm"
    );

    //const model_path = "https://storage.googleapis.com/mediapipe-models/gesture_recognizer/gesture_recognizer/float16/1/gesture_recognizer.task";
    const model_path = 'static/custom_model_2.task'

    gestureRecognizer = await GestureRecognizer.createFromOptions(vision, {
        baseOptions: {
            modelAssetPath:
            model_path,
            delegate: "GPU"
        },
        runningMode: runningMode,
        numHands: 5
    });
};

window.addEventListener('load', createGestureRecognizer);

function webcam() {

    const video = document.getElementById("webcam");
    const canvasElement = document.getElementById("output_canvas");
    const canvasCtx = canvasElement.getContext("2d");

    const gestureOutput_left = document.getElementById("gesture_output-left");
    const gestureOutput_right = document.getElementById("gesture_output-right");
    const gestureOutput_meta = document.getElementById("gesture_output-meta");

// Check if webcam access is supported.
    function hasGetUserMedia() {
        return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
    }

// If webcam supported, add event listener to button for when user
// wants to activate it.
    if (hasGetUserMedia()) {
        enableWebcamButton = document.getElementById("webcamButton");
        enableWebcamButton.addEventListener("click", enableCam);
    } else {
        console.warn("getUserMedia() is not supported by your browser");
    }

// Enable the live webcam view and start detection.
    function enableCam(event) {
        if (!gestureRecognizer) {
            alert("Please wait for gestureRecognizer to load");
            return;
        }

        if (webcamRunning === true) {
            webcamRunning = false;
            enableWebcamButton.innerText = "ENABLE PREDICTIONS";
        } else {
            webcamRunning = true;
            enableWebcamButton.innerText = "DISABLE PREDICTIONS";
        }

        // getUsermedia parameters.
        const constraints = {
            video: true
        };

        // Activate the webcam stream.
        navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
            video.srcObject = stream;
            video.addEventListener("loadeddata", predictWebcam);

        });
    }

    let lastVideoTime = -1;
    let results = undefined;

    const throttleSensor = throttle(1000, (info) => {
        window.send_sensor_data('webcam_gesture', info);
    });

    const meta_gesture = (function () {
                let api = {};

                let gestures = {};

                function add_info(gesture_name, results) {
                    gestures[gesture_name].last_updated = new Date();
                    switch (gesture_name) {
                        case 'ok':
                            const thumb_tip1 = results.landmarks[0][4];
                            const thumb_tip2 = results.landmarks[1][4];
                            gestures[gesture_name]['gap'] = {
                                x: Math.abs(thumb_tip1.x - thumb_tip2.x),
                                y: Math.abs(thumb_tip1.y - thumb_tip2.y),
                                z: Math.abs(thumb_tip1.z - thumb_tip2.z)
                            }
                            break;
                    }
                }

                api.update = function (gesture_name, results) {
                    if(gesture_name === 'ok') {
                        if (!gestures[gesture_name] || (new Date() - gestures[gesture_name].last_updated > 500)) {
                            console.log('setting up OK')
                            gestures[gesture_name] = {
                                last_updated: new Date(),
                            }
                            add_info(gesture_name, results);
                            gestures[gesture_name]['baseline'] = gestures['ok'].gap;
                            return
                        }
                        add_info(gesture_name, results);

                        const info = {
                            x: (gestures[gesture_name]['gap'].x - gestures[gesture_name]['baseline'].x).toFixed(2),
                            y: (gestures[gesture_name]['gap'].y - gestures[gesture_name]['baseline'].y).toFixed(2),
                            z: (gestures[gesture_name]['gap'].z - gestures[gesture_name]['baseline'].z).toFixed(2),
                        }

                        gestureOutput_meta.style.display = "inline-block";
                        gestureOutput_meta.style.width = videoWidth;

                        gestureOutput_meta.innerText = JSON.stringify(info, null, 2);

                        gsap.to('#ball', {
                        left:  (200 *info.x) + "%",
                        top:  (-200 * info.y) + "%",
                    })

                        throttleSensor(info);
                    }


                }

                return api;
            }()
        )
    ;


    async function predictWebcam() {
        const webcamElement = document.getElementById("webcam");
        // Now let's start detecting the stream.

        let nowInMs = Date.now();
        if (video.currentTime !== lastVideoTime) {
            lastVideoTime = video.currentTime;
            results = gestureRecognizer.recognizeForVideo(video, nowInMs);
        }

        canvasCtx.save();

        canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
        const drawingUtils = new DrawingUtils(canvasCtx);

        canvasElement.style.height = videoHeight;
        webcamElement.style.height = videoHeight;
        canvasElement.style.width = videoWidth;
        webcamElement.style.width = videoWidth;

        if (results.landmarks) {
            for (const landmarks of results.landmarks) {
                drawingUtils.drawConnectors(
                    landmarks,
                    GestureRecognizer.HAND_CONNECTIONS,
                    {
                        color: "#00FF00",
                        lineWidth: 5
                    }
                );
                drawingUtils.drawLandmarks(landmarks, {
                    color: "#FF0000",
                    lineWidth: 2
                });
            }
        }

        canvasCtx.restore();

        if (results.gestures.length > 0) {
            gestureOutput_left.style.display = "none";
            gestureOutput_right.style.display = "none";
            gestureOutput_meta.style.display = "none";
            for (let i = 0; i < results.gestures.length; i++) {
                const handedness = results.handednesses[i][0].displayName;

                let gestureOutput;

                if (handedness === "Left") {
                    gestureOutput = gestureOutput_left;

                } else {
                    gestureOutput = gestureOutput_right;
                    gestureOutput.style.float = 'right';
                }

                gestureOutput.style.display = "inline-block";
                gestureOutput.style.width = videoWidth;
                const categoryName = results.gestures[i][0].categoryName;
                const categoryScore = parseFloat(
                    results.gestures[i][0].score * 100
                ).toFixed(2);

                gestureOutput.innerText = `GestureRecognizer: ${categoryName}\n Confidence: ${categoryScore} %\n Handedness: ${handedness}`;
                if (categoryName !== "None") {
                    //throttleSensor({'gesture': categoryName});
                }
            }
        }
        if (results.gestures.length === 2) {
            if (results.gestures[0][0].categoryName === results.gestures[1][0].categoryName) {
                meta_gesture.update(results.gestures[0][0].categoryName, results);
            }
        }

        // Call this function again to keep predicting when the browser is ready.
        if (webcamRunning === true) {
            window.requestAnimationFrame(predictWebcam);
        }
    }
}

window.addEventListener('load', webcam);


function websockets() {

    // https://stackoverflow.com/a/36712522/960471
    function newGradient() {

        function shuffle(array) {
            let currentIndex = array.length;

            // While there remain elements to shuffle...
            while (currentIndex != 0) {

                // Pick a remaining element...
                let randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;

                // And swap it with the current element.
                [array[currentIndex], array[randomIndex]] = [
                    array[randomIndex], array[currentIndex]];
            }
        }

        var cols = "AliceBlue,AntiqueWhite,Aqua,Aquamarine,Azure,Beige,Bisque,Black,BlanchedAlmond,Blue,BlueViolet,Brown,BurlyWood,CadetBlue,Chartreuse,Chocolate,Coral,CornflowerBlue,Cornsilk,Crimson,Cyan,DarkBlue,DarkCyan,DarkGoldenrod,DarkGray,DarkGreen,DarkKhaki,DarkMagenta,DarkOliveGreen,DarkOrange,DarkOrchid,DarkRed,DarkSalmon,DarkSeaGreen,DarkSlateBlue,DarkSlateGray,DarkTurquoise,DarkViolet,DeepPink,DeepSkyBlue,DimGray,DodgerBlue,FireBrick,FloralWhite,ForestGreen,Fuchsia,Gainsboro,GhostWhite,Gold,Goldenrod,Gray,Green,GreenYellow,HoneyDew,HotPink,Indigo,Ivory,Khaki,Lavender,LavenderBlush,LawnGreen,LemonChiffon,LightBlue,LightCoral,LightCyan,LightGoldenrodYellow,LightGray,LightGreen,LightPink,LightSalmon,LightSalmon,LightSeaGreen,LightSkyBlue,LightSlateGray,LightSteelBlue,LightYellow,Lime,LimeGreen,Linen,Magenta,Maroon,MediumAquamarine,MediumBlue,MediumOrchid,MediumPurple,MediumSeaGreen,MediumSlateBlue,MediumSlateBlue,MediumSpringGreen,MediumTurquoise,MediumVioletRed,MidnightBlue,MintCream,MistyRose,Moccasin,NavajoWhite,Navy,OldLace,Olive,OliveDrab,Orange,OrangeRed,Orchid,PaleGoldenrod,PaleGreen,PaleTurquoise,PaleVioletRed,PapayaWhip,PeachPuff,Peru,Pink,Plum,PowderBlue,Purple,RebeccaPurple,Red,RosyBrown,RoyalBlue,SaddleBrown,Salmon,SandyBrown,SeaGreen,SeaShell,Sienna,Silver,SkyBlue,SlateBlue,SlateGray,Snow,SpringGreen,SteelBlue,Tan,Teal,Thistle,Tomato,Turquoise,Violet,Wheat,White,WhiteSmoke,Yellow,YellowGreen".split(",");
        shuffle(cols);

        function rand_percent() {
            return Math.round(Math.random() * 100, 0) + "%"

        }

        var grad = 'radial-gradient(circle at 65% 15%, white 1px, ' + cols[0] + ' ' + rand_percent() +
            ', ' + cols[1] + ' ' + rand_percent() + ', ' + cols[2] + ' ' + rand_percent() + ')';

        return grad;
    }

    function makeid(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    }

    let ws;
    let id = makeid(4);

    const balls = (function () {

        let api = {}
        let all_balls = {};

        function gen_ball(id) {
            let div = document.createElement("div");
            div.id = id;
            div.className = "ball"
            div.style.background = newGradient();
            document.body.appendChild(div);
        }

        api.move = function (ball_info, this_id) {
            const ball_id = ball_info['id'];
            if (all_balls[ball_id] === undefined) {
                console.log(ball_id)
                gen_ball(ball_id);
                all_balls[ball_id] = {data: {}}
            }
            all_balls[ball_id] = {data: ball_info.data}

            if (this_id || all_balls[ball_id] !== id)

                if (this_id || (!this_id && all_balls[ball_id] !== id)) {
                    const ball = document.getElementById(ball_id);
                    let screen_width = window.screen.width;
                    let screen_height = window.screen.height;

                    //orientation utter rubbish JS chaos
                    if (screen_width < screen_height) {
                        var temp = screen_width;
                        screen_width = screen_width;
                        screen_height = temp;
                    }
                    const ball_diameter = 50 - ball_info.data.z * 5 + 50;

                    let left = screen_width * .5 - (ball_diameter * .25) - ball_info.data.x * 50;
                    let top = screen_height * .5 + (ball_diameter * 1.25) + ball_info.data.y * 200;


                    if (top > (screen_height - ball_diameter)) top = screen_height - ball_diameter;
                    if (left > (screen_width - ball_diameter)) left = screen_width - ball_diameter;

                    if (top < 0) top = 0;
                    if (left < 0) left = 0;

                    // console.log(top, left)
                    gsap.to(ball, {
                        left: left,
                        top: top,
                        width: ball_diameter,
                        height: ball_diameter
                    })
                }
        }

        return api
    }());


    function link_ws() {
        console.log('linking...')
        let linked = true;

        let ws_url = `://${location.host}/ws`
        if (window.location.href.indexOf("https") !== -1) {
            ws_url = 'wss' + ws_url
        } else {
            ws_url = 'ws' + ws_url;
        }
        const _ws = new WebSocket(ws_url);

        _ws.addEventListener('message', function (event) {

            const ball_info = JSON.parse(event.data);
            if (ball_info.id === id) return;
            balls.move(ball_info);
            // const li = document.createElement("li");
            //li.appendChild(document.createTextNode(event.data));
            //document.getElementById("messages").appendChild(li);
        });

        function reconnect() {
            _ws.close();
            ws = undefined;

            if (!linked) {
                return;
            }
            linked = false;
            console.log('lost connection, relinking shortly...')
            setTimeout(function () {
                linked = true;
                link_ws();
            }, 1000);

        }

        _ws.addEventListener('close', reconnect);
        _ws.addEventListener('error', reconnect);
        _ws.addEventListener('open', function () {
            console.log('ws connected');
            ws = _ws;
        });

        function send(event) {
            const message = (new FormData(event.target)).get("message");
            if (message) {
                ws.send(message);
            }
            event.target.reset();
            return false;
        }
    }

    link_ws();

    const acl = new Accelerometer({frequency: 5});
    acl.addEventListener("reading", () => {
        var ball_data = {id: id, sensor: 'gyroscope', data: {x: acl.x, y: acl.y, z: acl.z}}
        var info_str = JSON.stringify(ball_data);
        balls.move(ball_data, true);
        if (!!ws) ws.send(info_str);
    });

    acl.start();

    window.send_sensor_data = function (sensor, data) {
        var info_str = JSON.stringify({id: id, sensor: sensor, data: data});

        if (!!ws) {
            console.log('sending:', info_str);
            ws.send(info_str);
        }
        else{
            console.log('ws not working...')
        }
    }

}

window.addEventListener('load', websockets);