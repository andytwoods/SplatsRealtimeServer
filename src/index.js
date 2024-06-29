import {FilesetResolver, GestureRecognizer} from "@mediapipe/tasks-vision";

console.log('Hello, Quart with Parcel!');
// Create task for image file processing:

async function start() {
    const vision = await FilesetResolver.forVisionTasks(
        // path/to/wasm/root
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm "
    );
    const gestureRecognizer = await GestureRecognizer.createFromOptions(vision, {
        baseOptions: {
            modelAssetPath: "https://storage.googleapis.com/mediapipe-tasks/gesture_recognizer/gesture_recognizer.task"
        },
        numHands: 2
    });
}

start();