// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"3Ms8d":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "eb053f256d819bf2";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8lqZg":[function(require,module,exports) {
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
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _tasksVision = require("@mediapipe/tasks-vision");
var _throttleDebounce = require("throttle-debounce");
var _gsap = require("gsap");
var _gsapDefault = parcelHelpers.interopDefault(_gsap);
module.hot;
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
const createGestureRecognizer = async ()=>{
    const vision = await (0, _tasksVision.FilesetResolver).forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3/wasm");
    //const model_path = "https://storage.googleapis.com/mediapipe-models/gesture_recognizer/gesture_recognizer/float16/1/gesture_recognizer.task";
    const model_path = "static/custom_model_2.task";
    gestureRecognizer = await (0, _tasksVision.GestureRecognizer).createFromOptions(vision, {
        baseOptions: {
            modelAssetPath: model_path,
            delegate: "GPU"
        },
        runningMode: runningMode,
        numHands: 5
    });
};
window.addEventListener("load", createGestureRecognizer);
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
    } else console.warn("getUserMedia() is not supported by your browser");
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
        navigator.mediaDevices.getUserMedia(constraints).then(function(stream) {
            video.srcObject = stream;
            video.addEventListener("loadeddata", predictWebcam);
        });
    }
    let lastVideoTime = -1;
    let results = undefined;
    const throttleSensor = (0, _throttleDebounce.throttle)(50, (info)=>{
        window.send_sensor_data("webcam_gesture", info);
    });
    const meta_gesture = function() {
        let api = {};
        let gestures = {};
        function add_info(gesture_name, results) {
            gestures[gesture_name].last_updated = new Date();
            const thumb_tip1 = results.landmarks[0][4];
            const thumb_tip2 = results.landmarks[1][4];
            switch(gesture_name){
                case "ok":
                    gestures[gesture_name]["gap"] = {
                        x: Math.abs(thumb_tip1.x - thumb_tip2.x),
                        y: Math.abs(thumb_tip1.y - thumb_tip2.y),
                        z: Math.abs(thumb_tip1.z - thumb_tip2.z)
                    };
                    break;
                case "palm":
                    gestures[gesture_name]["gap"] = {
                        x: Math.abs(thumb_tip1.x - thumb_tip2.x),
                        y: Math.abs(thumb_tip1.y - thumb_tip2.y),
                        z: Math.abs(thumb_tip1.z - thumb_tip2.z)
                    };
                    break;
                case "paper":
                    gestures[gesture_name]["gap"] = {
                        x: Math.abs(thumb_tip1.x - thumb_tip2.x),
                        y: Math.abs(thumb_tip1.y - thumb_tip2.y),
                        z: Math.abs(thumb_tip1.z - thumb_tip2.z)
                    };
                    break;
                case "rock":
                    gestures[gesture_name]["gap"] = {
                        x: Math.abs(thumb_tip1.x - thumb_tip2.x),
                        y: Math.abs(thumb_tip1.y - thumb_tip2.y),
                        z: Math.abs(thumb_tip1.z - thumb_tip2.z)
                    };
                    break;
            }
        }
        api.update = function(gesture_name, results) {
            if (gesture_name === "ok" || gesture_name === "palm" || gesture_name === "rock" || gesture_name === "paper") {
                if (!gestures[gesture_name] || new Date() - gestures[gesture_name].last_updated > 500) {
                    console.log("setting up OK");
                    gestures[gesture_name] = {
                        last_updated: new Date()
                    };
                    add_info(gesture_name, results);
                    gestures[gesture_name]["baseline"] = gestures[gesture_name].gap;
                    return;
                }
                add_info(gesture_name, results);
                const info = {
                    x: (gestures[gesture_name]["gap"].x - gestures[gesture_name]["baseline"].x).toFixed(2),
                    y: (gestures[gesture_name]["gap"].y - gestures[gesture_name]["baseline"].y).toFixed(2),
                    z: (gestures[gesture_name]["gap"].z - gestures[gesture_name]["baseline"].z).toFixed(2)
                };
                console.log(info);
                //window.send_sensor_data('webcam_gesture', info);
                gestureOutput_meta.style.display = "inline-block";
                gestureOutput_meta.style.width = videoWidth;
                gestureOutput_meta.innerText = JSON.stringify(info, null, 2);
                (0, _gsapDefault.default).to("#ball", {
                    left: 200 * info.x + "%",
                    top: -200 * info.y + "%"
                });
                throttleSensor(info);
            }
        };
        return api;
    }();
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
        const drawingUtils = new (0, _tasksVision.DrawingUtils)(canvasCtx);
        canvasElement.style.height = videoHeight;
        webcamElement.style.height = videoHeight;
        canvasElement.style.width = videoWidth;
        webcamElement.style.width = videoWidth;
        if (results.landmarks) for (const landmarks of results.landmarks){
            drawingUtils.drawConnectors(landmarks, (0, _tasksVision.GestureRecognizer).HAND_CONNECTIONS, {
                color: "#00FF00",
                lineWidth: 5
            });
            drawingUtils.drawLandmarks(landmarks, {
                color: "#FF0000",
                lineWidth: 2
            });
        }
        canvasCtx.restore();
        if (results.gestures.length > 0) {
            gestureOutput_left.style.display = "none";
            gestureOutput_right.style.display = "none";
            gestureOutput_meta.style.display = "none";
            for(let i = 0; i < results.gestures.length; i++){
                const handedness = results.handednesses[i][0].displayName;
                let gestureOutput;
                if (handedness === "Left") gestureOutput = gestureOutput_left;
                else {
                    gestureOutput = gestureOutput_right;
                    gestureOutput.style.float = "right";
                }
                gestureOutput.style.display = "inline-block";
                gestureOutput.style.width = videoWidth;
                const categoryName = results.gestures[i][0].categoryName;
                const categoryScore = parseFloat(results.gestures[i][0].score * 100).toFixed(2);
                gestureOutput.innerText = `GestureRecognizer: ${categoryName}\n Confidence: ${categoryScore} %\n Handedness: ${handedness}`;
                categoryName;
            }
        }
        if (results.gestures.length === 2) {
            if (results.gestures[0][0].categoryName === results.gestures[1][0].categoryName) meta_gesture.update(results.gestures[0][0].categoryName, results);
        }
        // Call this function again to keep predicting when the browser is ready.
        if (webcamRunning === true) window.requestAnimationFrame(predictWebcam);
    }
}
window.addEventListener("load", webcam);
function websockets() {
    // https://stackoverflow.com/a/36712522/960471
    function newGradient() {
        function shuffle(array) {
            let currentIndex = array.length;
            // While there remain elements to shuffle...
            while(currentIndex != 0){
                // Pick a remaining element...
                let randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;
                // And swap it with the current element.
                [array[currentIndex], array[randomIndex]] = [
                    array[randomIndex],
                    array[currentIndex]
                ];
            }
        }
        var cols = "AliceBlue,AntiqueWhite,Aqua,Aquamarine,Azure,Beige,Bisque,Black,BlanchedAlmond,Blue,BlueViolet,Brown,BurlyWood,CadetBlue,Chartreuse,Chocolate,Coral,CornflowerBlue,Cornsilk,Crimson,Cyan,DarkBlue,DarkCyan,DarkGoldenrod,DarkGray,DarkGreen,DarkKhaki,DarkMagenta,DarkOliveGreen,DarkOrange,DarkOrchid,DarkRed,DarkSalmon,DarkSeaGreen,DarkSlateBlue,DarkSlateGray,DarkTurquoise,DarkViolet,DeepPink,DeepSkyBlue,DimGray,DodgerBlue,FireBrick,FloralWhite,ForestGreen,Fuchsia,Gainsboro,GhostWhite,Gold,Goldenrod,Gray,Green,GreenYellow,HoneyDew,HotPink,Indigo,Ivory,Khaki,Lavender,LavenderBlush,LawnGreen,LemonChiffon,LightBlue,LightCoral,LightCyan,LightGoldenrodYellow,LightGray,LightGreen,LightPink,LightSalmon,LightSalmon,LightSeaGreen,LightSkyBlue,LightSlateGray,LightSteelBlue,LightYellow,Lime,LimeGreen,Linen,Magenta,Maroon,MediumAquamarine,MediumBlue,MediumOrchid,MediumPurple,MediumSeaGreen,MediumSlateBlue,MediumSlateBlue,MediumSpringGreen,MediumTurquoise,MediumVioletRed,MidnightBlue,MintCream,MistyRose,Moccasin,NavajoWhite,Navy,OldLace,Olive,OliveDrab,Orange,OrangeRed,Orchid,PaleGoldenrod,PaleGreen,PaleTurquoise,PaleVioletRed,PapayaWhip,PeachPuff,Peru,Pink,Plum,PowderBlue,Purple,RebeccaPurple,Red,RosyBrown,RoyalBlue,SaddleBrown,Salmon,SandyBrown,SeaGreen,SeaShell,Sienna,Silver,SkyBlue,SlateBlue,SlateGray,Snow,SpringGreen,SteelBlue,Tan,Teal,Thistle,Tomato,Turquoise,Violet,Wheat,White,WhiteSmoke,Yellow,YellowGreen".split(",");
        shuffle(cols);
        function rand_percent() {
            return Math.round(Math.random() * 100, 0) + "%";
        }
        var grad = "radial-gradient(circle at 65% 15%, white 1px, " + cols[0] + " " + rand_percent() + ", " + cols[1] + " " + rand_percent() + ", " + cols[2] + " " + rand_percent() + ")";
        return grad;
    }
    function makeid(length) {
        let result = "";
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        const charactersLength = characters.length;
        let counter = 0;
        while(counter < length){
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    }
    let ws;
    let id = makeid(4);
    const balls = function() {
        let api = {};
        let all_balls = {};
        function gen_ball(id) {
            let div = document.createElement("div");
            div.id = id;
            div.className = "ball";
            div.style.background = newGradient();
            document.body.appendChild(div);
        }
        api.move = function(ball_info, this_id) {
            const ball_id = ball_info["id"];
            if (all_balls[ball_id] === undefined) {
                console.log(ball_id);
                gen_ball(ball_id);
                all_balls[ball_id] = {
                    data: {}
                };
            }
            all_balls[ball_id] = {
                data: ball_info.data
            };
            if (this_id || all_balls[ball_id] !== id) {
                if (this_id || !this_id && all_balls[ball_id] !== id) {
                    const ball = document.getElementById(ball_id);
                    let screen_width = window.screen.width;
                    let screen_height = window.screen.height;
                    //orientation utter rubbish JS chaos
                    if (screen_width < screen_height) {
                        var temp = screen_width;
                        screen_width;
                        screen_height = temp;
                    }
                    const ball_diameter = 50 - ball_info.data.z * 5 + 50;
                    let left = screen_width * .5 - ball_diameter * .25 - ball_info.data.x * 50;
                    let top = screen_height * .5 + ball_diameter * 1.25 + ball_info.data.y * 200;
                    if (top > screen_height - ball_diameter) top = screen_height - ball_diameter;
                    if (left > screen_width - ball_diameter) left = screen_width - ball_diameter;
                    if (top < 0) top = 0;
                    if (left < 0) left = 0;
                    // console.log(top, left)
                    (0, _gsapDefault.default).to(ball, {
                        left: left,
                        top: top,
                        width: ball_diameter,
                        height: ball_diameter
                    });
                }
            }
        };
        return api;
    }();
    function link_ws() {
        console.log("linking...");
        let linked = true;
        let ws_url = `://${location.host}/ws`;
        if (window.location.href.indexOf("https") !== -1) ws_url = "wss" + ws_url;
        else ws_url = "ws" + ws_url;
        const _ws = new WebSocket(ws_url);
        _ws.addEventListener("message", function(event) {
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
            if (!linked) return;
            linked = false;
            console.log("lost connection, relinking shortly...");
            setTimeout(function() {
                linked = true;
                link_ws();
            }, 1000);
        }
        _ws.addEventListener("close", reconnect);
        _ws.addEventListener("error", reconnect);
        _ws.addEventListener("open", function() {
            console.log("ws connected");
            ws = _ws;
        });
        function send(event) {
            const message = new FormData(event.target).get("message");
            if (message) ws.send(message);
            event.target.reset();
            return false;
        }
    }
    link_ws();
    const acl = new Accelerometer({
        frequency: 5
    });
    acl.addEventListener("reading", ()=>{
        var ball_data = {
            id: id,
            sensor: "gyroscope",
            data: {
                x: acl.x,
                y: acl.y,
                z: acl.z
            }
        };
        var info_str = JSON.stringify(ball_data);
        balls.move(ball_data, true);
        if (!!ws) ws.send(info_str);
    });
    acl.start();
    window.send_sensor_data = function(sensor, data) {
        var info_str = JSON.stringify({
            id: id,
            sensor: sensor,
            data: data
        });
        console.log("sending:", info_str);
        if (!!ws) ws.send(info_str);
    };
}
window.addEventListener("load", websockets);

},{"@mediapipe/tasks-vision":"e5Mjq","throttle-debounce":"81w4t","gsap":"fPSuC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e5Mjq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DrawingUtils", ()=>Na) //# sourceMappingURL=vision_bundle_mjs.js.map
;
parcelHelpers.export(exports, "FaceDetector", ()=>sh);
parcelHelpers.export(exports, "FaceLandmarker", ()=>yh);
parcelHelpers.export(exports, "FaceStylizer", ()=>_h);
parcelHelpers.export(exports, "FilesetResolver", ()=>Xo);
parcelHelpers.export(exports, "GestureRecognizer", ()=>Ah);
parcelHelpers.export(exports, "HandLandmarker", ()=>kh);
parcelHelpers.export(exports, "HolisticLandmarker", ()=>Rh);
parcelHelpers.export(exports, "ImageClassifier", ()=>Mh);
parcelHelpers.export(exports, "ImageEmbedder", ()=>Ph);
parcelHelpers.export(exports, "ImageSegmenter", ()=>Uh);
parcelHelpers.export(exports, "ImageSegmenterResult", ()=>Ch);
parcelHelpers.export(exports, "InteractiveSegmenter", ()=>rc);
parcelHelpers.export(exports, "InteractiveSegmenterResult", ()=>Dh);
parcelHelpers.export(exports, "MPImage", ()=>Ka);
parcelHelpers.export(exports, "MPMask", ()=>Sa);
parcelHelpers.export(exports, "ObjectDetector", ()=>ic);
parcelHelpers.export(exports, "PoseLandmarker", ()=>hc);
parcelHelpers.export(exports, "VisionTaskRunner", ()=>ih);
var t = "undefined" != typeof self ? self : {};
function e(e) {
    t: {
        for(var n = [
            "CLOSURE_FLAGS"
        ], r = t, i = 0; i < n.length; i++)if (null == (r = r[n[i]])) {
            n = null;
            break t;
        }
        n = r;
    }
    return null != (e = n && n[e]) && e;
}
function n() {
    throw Error("Invalid UTF8");
}
function r(t, e) {
    return e = String.fromCharCode.apply(null, e), null == t ? e : t + e;
}
let i, s;
const o = "undefined" != typeof TextDecoder;
let a;
const h = "undefined" != typeof TextEncoder;
function c(t) {
    if (h) t = (a ||= new TextEncoder).encode(t);
    else {
        let n = 0;
        const r = new Uint8Array(3 * t.length);
        for(let i = 0; i < t.length; i++){
            var e = t.charCodeAt(i);
            if (128 > e) r[n++] = e;
            else {
                if (2048 > e) r[n++] = e >> 6 | 192;
                else {
                    if (55296 <= e && 57343 >= e) {
                        if (56319 >= e && i < t.length) {
                            const s = t.charCodeAt(++i);
                            if (56320 <= s && 57343 >= s) {
                                e = 1024 * (e - 55296) + s - 56320 + 65536, r[n++] = e >> 18 | 240, r[n++] = e >> 12 & 63 | 128, r[n++] = e >> 6 & 63 | 128, r[n++] = 63 & e | 128;
                                continue;
                            }
                            i--;
                        }
                        e = 65533;
                    }
                    r[n++] = e >> 12 | 224, r[n++] = e >> 6 & 63 | 128;
                }
                r[n++] = 63 & e | 128;
            }
        }
        t = n === r.length ? r : r.subarray(0, n);
    }
    return t;
}
var u, l = e(610401301), d = e(188588736);
const f = t.navigator;
function p(t) {
    return !!l && !!u && u.brands.some(({ brand: e })=>e && -1 != e.indexOf(t));
}
function g(e) {
    var n;
    return (n = t.navigator) && (n = n.userAgent) || (n = ""), -1 != n.indexOf(e);
}
function m() {
    return !!l && !!u && 0 < u.brands.length;
}
function y() {
    return m() ? p("Chromium") : (g("Chrome") || g("CriOS")) && !(!m() && g("Edge")) || g("Silk");
}
function _(t) {
    return _[" "](t), t;
}
u = f && f.userAgentData || null, _[" "] = function() {};
var v = !m() && (g("Trident") || g("MSIE"));
!g("Android") || y(), y(), g("Safari") && (y() || !m() && g("Coast") || !m() && g("Opera") || !m() && g("Edge") || (m() ? p("Microsoft Edge") : g("Edg/")) || m() && p("Opera"));
var E = {}, w = null;
function T(t) {
    var e = t.length, n = 3 * e / 4;
    n % 3 ? n = Math.floor(n) : -1 != "=.".indexOf(t[e - 1]) && (n = -1 != "=.".indexOf(t[e - 2]) ? n - 2 : n - 1);
    var r = new Uint8Array(n), i = 0;
    return function(t, e) {
        function n(e) {
            for(; r < t.length;){
                var n = t.charAt(r++), i = w[n];
                if (null != i) return i;
                if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
            }
            return e;
        }
        A();
        for(var r = 0;;){
            var i = n(-1), s = n(0), o = n(64), a = n(64);
            if (64 === a && -1 === i) break;
            e(i << 2 | s >> 4), 64 != o && (e(s << 4 & 240 | o >> 2), 64 != a && e(o << 6 & 192 | a));
        }
    }(t, function(t) {
        r[i++] = t;
    }), i !== n ? r.subarray(0, i) : r;
}
function A() {
    if (!w) {
        w = {};
        for(var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), e = [
            "+/=",
            "+/",
            "-_=",
            "-_.",
            "-_"
        ], n = 0; 5 > n; n++){
            var r = t.concat(e[n].split(""));
            E[n] = r;
            for(var i = 0; i < r.length; i++){
                var s = r[i];
                void 0 === w[s] && (w[s] = i);
            }
        }
    }
}
var b = "undefined" != typeof Uint8Array, k = !v && "function" == typeof btoa;
function x(t) {
    if (!k) {
        var e;
        void 0 === e && (e = 0), A(), e = E[e];
        var n = Array(Math.floor(t.length / 3)), r = e[64] || "";
        let h = 0, c = 0;
        for(; h < t.length - 2; h += 3){
            var i = t[h], s = t[h + 1], o = t[h + 2], a = e[i >> 2];
            i = e[(3 & i) << 4 | s >> 4], s = e[(15 & s) << 2 | o >> 6], o = e[63 & o], n[c++] = a + i + s + o;
        }
        switch(a = 0, o = r, t.length - h){
            case 2:
                o = e[(15 & (a = t[h + 1])) << 2] || r;
            case 1:
                t = t[h], n[c] = e[t >> 2] + e[(3 & t) << 4 | a >> 4] + o + r;
        }
        return n.join("");
    }
    for(e = "", n = 0, r = t.length - 10240; n < r;)e += String.fromCharCode.apply(null, t.subarray(n, n += 10240));
    return e += String.fromCharCode.apply(null, n ? t.subarray(n) : t), btoa(e);
}
const S = /[-_.]/g, L = {
    "-": "+",
    _: "/",
    ".": "="
};
function F(t) {
    return L[t] || "";
}
function R(t) {
    if (!k) return T(t);
    S.test(t) && (t = t.replace(S, F)), t = atob(t);
    const e = new Uint8Array(t.length);
    for(let n = 0; n < t.length; n++)e[n] = t.charCodeAt(n);
    return e;
}
function M(t) {
    return b && null != t && t instanceof Uint8Array;
}
let P;
function C() {
    return P ||= new Uint8Array(0);
}
var O = {};
let I;
function U(t) {
    if (t !== O) throw Error("illegal external caller");
}
function D() {
    return I ||= new B(null, O);
}
function N(t) {
    U(O);
    var e = t.g;
    return null == (e = null == e || M(e) ? e : "string" == typeof e ? R(e) : null) ? e : t.g = e;
}
var B = class {
    constructor(t, e){
        if (U(e), this.g = t, null != t && 0 === t.length) throw Error("ByteString should be constructed with non-empty values");
    }
    h() {
        const t = N(this);
        return t ? new Uint8Array(t) : C();
    }
};
function G(t, e) {
    return Error(`Invalid wire type: ${t} (at position ${e})`);
}
function j() {
    return Error("Failed to read varint, encoding is invalid.");
}
function V(t, e) {
    return Error(`Tried to read past the end of the data ${e} > ${t}`);
}
function X(t) {
    if ("string" == typeof t) return {
        buffer: R(t),
        P: !1
    };
    if (Array.isArray(t)) return {
        buffer: new Uint8Array(t),
        P: !1
    };
    if (t.constructor === Uint8Array) return {
        buffer: t,
        P: !1
    };
    if (t.constructor === ArrayBuffer) return {
        buffer: new Uint8Array(t),
        P: !1
    };
    if (t.constructor === B) return {
        buffer: N(t) || C(),
        P: !0
    };
    if (t instanceof Uint8Array) return {
        buffer: new Uint8Array(t.buffer, t.byteOffset, t.byteLength),
        P: !1
    };
    throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers");
}
function H() {
    return "function" == typeof BigInt;
}
const W = "function" == typeof Uint8Array.prototype.slice;
let z, K = 0, Y = 0;
function $(t) {
    const e = 0 > t;
    let n = (t = Math.abs(t)) >>> 0;
    if (t = Math.floor((t - n) / 4294967296), e) {
        const [e, r] = rt(n, t);
        t = r, n = e;
    }
    K = n >>> 0, Y = t >>> 0;
}
function q(t) {
    const e = z ||= new DataView(new ArrayBuffer(8));
    e.setFloat32(0, +t, !0), Y = 0, K = e.getUint32(0, !0);
}
function J(t, e) {
    return 4294967296 * e + (t >>> 0);
}
function Z(t, e) {
    const n = 2147483648 & e;
    return n && (e = ~e >>> 0, 0 == (t = 1 + ~t >>> 0) && (e = e + 1 >>> 0)), t = J(t, e), n ? -t : t;
}
function Q(t, e) {
    if (t >>>= 0, 2097151 >= (e >>>= 0)) var n = "" + (4294967296 * e + t);
    else H() ? n = "" + (BigInt(e) << BigInt(32) | BigInt(t)) : (t = (16777215 & t) + 6777216 * (n = 16777215 & (t >>> 24 | e << 8)) + 6710656 * (e = e >> 16 & 65535), n += 8147497 * e, e *= 2, 1e7 <= t && (n += Math.floor(t / 1e7), t %= 1e7), 1e7 <= n && (e += Math.floor(n / 1e7), n %= 1e7), n = e + tt(n) + tt(t));
    return n;
}
function tt(t) {
    return t = String(t), "0000000".slice(t.length) + t;
}
function et() {
    var t = K, e = Y;
    if (2147483648 & e) {
        if (H()) t = "" + (BigInt(0 | e) << BigInt(32) | BigInt(t >>> 0));
        else {
            const [n, r] = rt(t, e);
            t = "-" + Q(n, r);
        }
    } else t = Q(t, e);
    return t;
}
function nt(t) {
    if (16 > t.length) $(Number(t));
    else if (H()) t = BigInt(t), K = Number(t & BigInt(4294967295)) >>> 0, Y = Number(t >> BigInt(32) & BigInt(4294967295));
    else {
        const e = +("-" === t[0]);
        Y = K = 0;
        const n = t.length;
        for(let r = e, i = (n - e) % 6 + e; i <= n; r = i, i += 6){
            const e = Number(t.slice(r, i));
            Y *= 1e6, K = 1e6 * K + e, 4294967296 <= K && (Y += Math.trunc(K / 4294967296), Y >>>= 0, K >>>= 0);
        }
        if (e) {
            const [t, e] = rt(K, Y);
            K = t, Y = e;
        }
    }
}
function rt(t, e) {
    return e = ~e, t ? t = 1 + ~t : e += 1, [
        t,
        e
    ];
}
function it(t, e) {
    let n, r = 0, i = 0, s = 0;
    const o = t.h;
    let a = t.g;
    do n = o[a++], r |= (127 & n) << s, s += 7;
    while (32 > s && 128 & n);
    for(32 < s && (i |= (127 & n) >> 4), s = 3; 32 > s && 128 & n; s += 7)n = o[a++], i |= (127 & n) << s;
    if (dt(t, a), 128 > n) return e(r >>> 0, i >>> 0);
    throw j();
}
function st(t) {
    let e = 0, n = t.g;
    const r = n + 10, i = t.h;
    for(; n < r;){
        const r = i[n++];
        if (e |= r, 0 == (128 & r)) return dt(t, n), !!(127 & e);
    }
    throw j();
}
function ot(t) {
    const e = t.h;
    let n = t.g, r = e[n++], i = 127 & r;
    if (128 & r && (r = e[n++], i |= (127 & r) << 7, 128 & r && (r = e[n++], i |= (127 & r) << 14, 128 & r && (r = e[n++], i |= (127 & r) << 21, 128 & r && (r = e[n++], i |= r << 28, 128 & r && 128 & e[n++] && 128 & e[n++] && 128 & e[n++] && 128 & e[n++] && 128 & e[n++]))))) throw j();
    return dt(t, n), i;
}
function at(t) {
    return ot(t) >>> 0;
}
function ht(t) {
    var e = t.h;
    const n = t.g, r = e[n], i = e[n + 1], s = e[n + 2];
    return e = e[n + 3], dt(t, t.g + 4), (r << 0 | i << 8 | s << 16 | e << 24) >>> 0;
}
function ct(t) {
    var e = ht(t);
    t = 2 * (e >> 31) + 1;
    const n = e >>> 23 & 255;
    return e &= 8388607, 255 == n ? e ? NaN : 1 / 0 * t : 0 == n ? t * Math.pow(2, -149) * e : t * Math.pow(2, n - 150) * (e + Math.pow(2, 23));
}
function ut(t) {
    return ot(t);
}
function lt(t, e, { ca: n = !1 } = {}) {
    t.ca = n, e && (e = X(e), t.h = e.buffer, t.m = e.P, t.j = 0, t.l = t.h.length, t.g = t.j);
}
function dt(t, e) {
    if (t.g = e, e > t.l) throw V(t.l, e);
}
function ft(t, e) {
    if (0 > e) throw Error(`Tried to read a negative byte length: ${e}`);
    const n = t.g, r = n + e;
    if (r > t.l) throw V(e, t.l - n);
    return t.g = r, n;
}
function pt(t, e) {
    if (0 == e) return D();
    var n = ft(t, e);
    return t.ca && t.m ? n = t.h.subarray(n, n + e) : (t = t.h, n = n === (e = n + e) ? C() : W ? t.slice(n, e) : new Uint8Array(t.subarray(n, e))), 0 == n.length ? D() : new B(n, O);
}
var gt = [];
function mt(t) {
    var e = t.g;
    if (e.g == e.l) return !1;
    t.l = t.g.g;
    var n = at(t.g);
    if (e = n >>> 3, !(0 <= (n &= 7) && 5 >= n)) throw G(n, t.l);
    if (1 > e) throw Error(`Invalid field number: ${e} (at position ${t.l})`);
    return t.m = e, t.h = n, !0;
}
function yt(t) {
    switch(t.h){
        case 0:
            0 != t.h ? yt(t) : st(t.g);
            break;
        case 1:
            dt(t = t.g, t.g + 8);
            break;
        case 2:
            if (2 != t.h) yt(t);
            else {
                var e = at(t.g);
                dt(t = t.g, t.g + e);
            }
            break;
        case 5:
            dt(t = t.g, t.g + 4);
            break;
        case 3:
            for(e = t.m;;){
                if (!mt(t)) throw Error("Unmatched start-group tag: stream EOF");
                if (4 == t.h) {
                    if (t.m != e) throw Error("Unmatched end-group tag");
                    break;
                }
                yt(t);
            }
            break;
        default:
            throw G(t.h, t.l);
    }
}
function _t(t, e, n) {
    const r = t.g.l, i = at(t.g), s = t.g.g + i;
    let o = s - r;
    if (0 >= o && (t.g.l = s, n(e, t, void 0, void 0, void 0), o = s - t.g.g), o) throw Error(`Message parsing ended unexpectedly. Expected to read ${i} bytes, instead read ${i - o} bytes, either the data ended unexpectedly or the message misreported its own length`);
    return t.g.g = s, t.g.l = r, e;
}
function vt(t) {
    var e = at(t.g), a = ft(t = t.g, e);
    if (t = t.h, o) {
        var h, c = t;
        (h = s) || (h = s = new TextDecoder("utf-8", {
            fatal: !0
        })), e = a + e, c = 0 === a && e === c.length ? c : c.subarray(a, e);
        try {
            var u = h.decode(c);
        } catch (t) {
            if (void 0 === i) {
                try {
                    h.decode(new Uint8Array([
                        128
                    ]));
                } catch (t) {}
                try {
                    h.decode(new Uint8Array([
                        97
                    ])), i = !0;
                } catch (t) {
                    i = !1;
                }
            }
            throw !i && (s = void 0), t;
        }
    } else {
        e = (u = a) + e, a = [];
        let i, s = null;
        for(; u < e;){
            var l = t[u++];
            128 > l ? a.push(l) : 224 > l ? u >= e ? n() : (i = t[u++], 194 > l || 128 != (192 & i) ? (u--, n()) : a.push((31 & l) << 6 | 63 & i)) : 240 > l ? u >= e - 1 ? n() : (i = t[u++], 128 != (192 & i) || 224 === l && 160 > i || 237 === l && 160 <= i || 128 != (192 & (h = t[u++])) ? (u--, n()) : a.push((15 & l) << 12 | (63 & i) << 6 | 63 & h)) : 244 >= l ? u >= e - 2 ? n() : (i = t[u++], 128 != (192 & i) || 0 != i - 144 + (l << 28) >> 30 || 128 != (192 & (h = t[u++])) || 128 != (192 & (c = t[u++])) ? (u--, n()) : (l = (7 & l) << 18 | (63 & i) << 12 | (63 & h) << 6 | 63 & c, l -= 65536, a.push(55296 + (l >> 10 & 1023), 56320 + (1023 & l)))) : n(), 8192 <= a.length && (s = r(s, a), a.length = 0);
        }
        u = r(s, a);
    }
    return u;
}
function Et(t) {
    const e = at(t.g);
    return pt(t.g, e);
}
function wt(t, e, n) {
    var r = at(t.g);
    for(r = t.g.g + r; t.g.g < r;)n.push(e(t.g));
}
var Tt = [];
function At(t) {
    return t ? /^\d+$/.test(t) ? (nt(t), new bt(K, Y)) : null : kt ||= new bt(0, 0);
}
var bt = class {
    constructor(t, e){
        this.h = t >>> 0, this.g = e >>> 0;
    }
};
let kt;
function xt(t) {
    return t ? /^-?\d+$/.test(t) ? (nt(t), new St(K, Y)) : null : Lt ||= new St(0, 0);
}
var St = class {
    constructor(t, e){
        this.h = t >>> 0, this.g = e >>> 0;
    }
};
let Lt;
function Ft(t, e, n) {
    for(; 0 < n || 127 < e;)t.g.push(127 & e | 128), e = (e >>> 7 | n << 25) >>> 0, n >>>= 7;
    t.g.push(e);
}
function Rt(t, e) {
    for(; 127 < e;)t.g.push(127 & e | 128), e >>>= 7;
    t.g.push(e);
}
function Mt(t, e) {
    if (0 <= e) Rt(t, e);
    else {
        for(let n = 0; 9 > n; n++)t.g.push(127 & e | 128), e >>= 7;
        t.g.push(1);
    }
}
function Pt(t, e) {
    t.g.push(e >>> 0 & 255), t.g.push(e >>> 8 & 255), t.g.push(e >>> 16 & 255), t.g.push(e >>> 24 & 255);
}
function Ct(t, e) {
    0 !== e.length && (t.l.push(e), t.h += e.length);
}
function Ot(t, e, n) {
    Rt(t.g, 8 * e + n);
}
function It(t, e) {
    return Ot(t, e, 2), e = t.g.end(), Ct(t, e), e.push(t.h), e;
}
function Ut(t, e) {
    var n = e.pop();
    for(n = t.h + t.g.length() - n; 127 < n;)e.push(127 & n | 128), n >>>= 7, t.h++;
    e.push(n), t.h++;
}
function Dt(t, e, n) {
    Ot(t, e, 2), Rt(t.g, n.length), Ct(t, t.g.end()), Ct(t, n);
}
function Nt(t, e, n, r) {
    null != n && (e = It(t, e), r(n, t), Ut(t, e));
}
class Bt {
    constructor(t, e, n, r){
        this.g = t, this.h = e, this.l = n, this.pa = r;
    }
}
function Gt(t) {
    return Array.prototype.slice.call(t);
}
function jt(t) {
    return "function" == typeof Symbol && "symbol" == typeof Symbol() ? Symbol() : t;
}
var Vt = jt(), Xt = jt("0di"), Ht = jt("2ex"), Wt = jt("0dg"), zt = Vt ? (t, e)=>{
    t[Vt] |= e;
} : (t, e)=>{
    void 0 !== t.g ? t.g |= e : Object.defineProperties(t, {
        g: {
            value: e,
            configurable: !0,
            writable: !0,
            enumerable: !1
        }
    });
}, Kt = Vt ? (t, e)=>{
    t[Vt] &= ~e;
} : (t, e)=>{
    void 0 !== t.g && (t.g &= ~e);
};
function Yt(t, e, n) {
    return n ? t | e : t & ~e;
}
var $t = Vt ? (t)=>0 | t[Vt] : (t)=>0 | t.g, qt = Vt ? (t)=>t[Vt] : (t)=>t.g, Jt = Vt ? (t, e)=>(t[Vt] = e, t) : (t, e)=>(void 0 !== t.g ? t.g = e : Object.defineProperties(t, {
        g: {
            value: e,
            configurable: !0,
            writable: !0,
            enumerable: !1
        }
    }), t);
function Zt(t) {
    return zt(t, 34), t;
}
function Qt(t, e) {
    Jt(e, -14591 & (0 | t));
}
function te(t, e) {
    Jt(e, -14557 & (34 | t));
}
function ee(t) {
    return 0 === (t = t >> 14 & 1023) ? 536870912 : t;
}
var ne, re = {}, ie = {};
function se(t) {
    return !(!t || "object" != typeof t || t.Ja !== ie);
}
function oe(t) {
    return null !== t && "object" == typeof t && !Array.isArray(t) && t.constructor === Object;
}
function ae(t, e, n) {
    if (null != t) {
        if ("string" == typeof t) t = t ? new B(t, O) : D();
        else if (t.constructor !== B) {
            if (M(t)) t = t.length ? new B(n ? t : new Uint8Array(t), O) : D();
            else {
                if (!e) throw Error();
                t = void 0;
            }
        }
    }
    return t;
}
function he(t, e, n) {
    if (!Array.isArray(t) || t.length) return !1;
    const r = $t(t);
    return !!(1 & r) || !(!e || !(Array.isArray(e) ? e.includes(n) : e.has(n))) && (Jt(t, 1 | r), !0);
}
const ce = [];
function ue(t) {
    if (2 & t) throw Error();
}
Jt(ce, 55), ne = Object.freeze(ce);
class le {
    constructor(t, e, n){
        this.l = 0, this.g = t, this.h = e, this.m = n;
    }
    next() {
        if (this.l < this.g.length) {
            const t = this.g[this.l++];
            return {
                done: !1,
                value: this.h ? this.h.call(this.m, t) : t
            };
        }
        return {
            done: !0,
            value: void 0
        };
    }
    [Symbol.iterator]() {
        return new le(this.g, this.h, this.m);
    }
}
let de, fe, pe;
function ge(t, e) {
    (e = de ? e[de] : void 0) && (t[de] = Gt(e));
}
function me(t, e) {
    t.__closure__error__context__984382 || (t.__closure__error__context__984382 = {}), t.__closure__error__context__984382.severity = e;
}
function ye() {
    const e = Error();
    me(e, "incident"), function(e) {
        t.setTimeout(()=>{
            throw e;
        }, 0);
    }(e);
}
function _e(t) {
    return me(t = Error(t), "warning"), t;
}
function ve(t) {
    return null == t || "number" == typeof t ? t : "NaN" === t || "Infinity" === t || "-Infinity" === t ? Number(t) : void 0;
}
function Ee(t) {
    return null == t || "boolean" == typeof t ? t : "number" == typeof t ? !!t : void 0;
}
Object.freeze(new class {
}), Object.freeze(new class {
});
const we = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
function Te(t) {
    const e = typeof t;
    return "number" === e ? Number.isFinite(t) : "string" === e && we.test(t);
}
function Ae(t) {
    if (null == t) return t;
    if ("string" == typeof t) {
        if (!t) return;
        t = +t;
    }
    return "number" == typeof t && Number.isFinite(t) ? 0 | t : void 0;
}
function be(t) {
    if (null == t) return t;
    if ("string" == typeof t) {
        if (!t) return;
        t = +t;
    }
    return "number" == typeof t && Number.isFinite(t) ? t >>> 0 : void 0;
}
function ke(t) {
    return "-" !== t[0] && (20 > t.length || 20 === t.length && 184467 > Number(t.substring(0, 6)));
}
function xe(t) {
    return "-" === t[0] ? 20 > t.length || 20 === t.length && -922337 < Number(t.substring(0, 7)) : 19 > t.length || 19 === t.length && 922337 > Number(t.substring(0, 6));
}
function Se(t) {
    return t = Math.trunc(t), Number.isSafeInteger(t) || ($(t), t = Z(K, Y)), t;
}
function Le(t) {
    var e = Math.trunc(Number(t));
    return Number.isSafeInteger(e) ? String(e) : (-1 !== (e = t.indexOf(".")) && (t = t.substring(0, e)), xe(t) || (nt(t), t = et()), t);
}
function Fe(t) {
    return null == t ? t : Te(t) ? "number" == typeof t ? Se(t) : Le(t) : void 0;
}
function Re(t) {
    if ("string" != typeof t) throw Error();
    return t;
}
function Me(t) {
    if (null != t && "string" != typeof t) throw Error();
    return t;
}
function Pe(t) {
    return null == t || "string" == typeof t ? t : void 0;
}
function Ce(t, e, n, r) {
    if (null != t && "object" == typeof t && t.X === re) return t;
    if (!Array.isArray(t)) return n ? 2 & r ? (t = e[Xt]) ? e = t : (Zt((t = new e).s), e = e[Xt] = t) : e = new e : e = void 0, e;
    let i = n = $t(t);
    return 0 === i && (i |= 32 & r), i |= 2 & r, i !== n && Jt(t, i), new e(t);
}
function Oe(t, e, n) {
    if (e) {
        var r = !!r;
        if (!Te(e = t)) throw _e("int64");
        "string" == typeof e ? r = Le(e) : r ? (r = Math.trunc(e), Number.isSafeInteger(r) ? r = String(r) : xe(e = String(r)) ? r = e : ($(r), r = et())) : r = Se(e);
    } else r = Fe(t);
    return "string" == typeof (n = null == (t = r) ? n ? 0 : void 0 : t) && (r = +n, Number.isSafeInteger(r)) ? r : n;
}
let Ie, Ue, De;
function Ne(t) {
    switch(typeof t){
        case "boolean":
            return Ue ||= [
                0,
                void 0,
                !0
            ];
        case "number":
            return 0 < t ? void 0 : 0 === t ? De ||= [
                0,
                void 0
            ] : [
                -t,
                void 0
            ];
        case "string":
            return [
                0,
                t
            ];
        case "object":
            return t;
    }
}
function Be(t, e) {
    return Ge(t, e[0], e[1]);
}
function Ge(t, e, n) {
    if (null == t && (t = Ie), Ie = void 0, null == t) {
        var r = 96;
        n ? (t = [
            n
        ], r |= 512) : t = [], e && (r = -16760833 & r | (1023 & e) << 14);
    } else {
        if (!Array.isArray(t)) throw Error("narr");
        if (2048 & (r = $t(t))) throw Error("farr");
        if (64 & r) return t;
        if (r |= 64, n && (r |= 512, n !== t[0])) throw Error("mid");
        t: {
            const i = (n = t).length;
            if (i) {
                const t = i - 1;
                if (oe(n[t])) {
                    if (1024 <= (e = t - (+!!(512 & (r |= 256)) - 1))) throw Error("pvtlmt");
                    r = -16760833 & r | (1023 & e) << 14;
                    break t;
                }
            }
            if (e) {
                if (1024 < (e = Math.max(e, i - (+!!(512 & r) - 1)))) throw Error("spvt");
                r = -16760833 & r | (1023 & e) << 14;
            }
        }
    }
    return Jt(t, r), t;
}
const je = {};
let Ve = function() {
    try {
        return _(new class extends Map {
            constructor(){
                super();
            }
        }), !1;
    } catch  {
        return !0;
    }
}();
class Xe {
    constructor(){
        this.g = new Map;
    }
    get(t) {
        return this.g.get(t);
    }
    set(t, e) {
        return this.g.set(t, e), this.size = this.g.size, this;
    }
    delete(t) {
        return t = this.g.delete(t), this.size = this.g.size, t;
    }
    clear() {
        this.g.clear(), this.size = this.g.size;
    }
    has(t) {
        return this.g.has(t);
    }
    entries() {
        return this.g.entries();
    }
    keys() {
        return this.g.keys();
    }
    values() {
        return this.g.values();
    }
    forEach(t, e) {
        return this.g.forEach(t, e);
    }
    [Symbol.iterator]() {
        return this.entries();
    }
}
const He = Ve ? (Object.setPrototypeOf(Xe.prototype, Map.prototype), Object.defineProperties(Xe.prototype, {
    size: {
        value: 0,
        configurable: !0,
        enumerable: !0,
        writable: !0
    }
}), Xe) : class extends Map {
    constructor(){
        super();
    }
};
function We(t) {
    return t;
}
function ze(t) {
    if (2 & t.N) throw Error("Cannot mutate an immutable Map");
}
var Ke = class extends He {
    constructor(t, e, n = We, r = We){
        super();
        let i = $t(t);
        i |= 64, Jt(t, i), this.N = i, this.U = e, this.S = n, this.Z = this.U ? Ye : r;
        for(let s = 0; s < t.length; s++){
            const o = t[s], a = n(o[0], !1, !0);
            let h = o[1];
            e ? void 0 === h && (h = null) : h = r(o[1], !1, !0, void 0, void 0, i), super.set(a, h);
        }
    }
    oa(t = $e) {
        if (0 !== this.size) return this.Y(t);
    }
    Y(t = $e) {
        const e = [], n = super.entries();
        for(var r; !(r = n.next()).done;)(r = r.value)[0] = t(r[0]), r[1] = t(r[1]), e.push(r);
        return e;
    }
    clear() {
        ze(this), super.clear();
    }
    delete(t) {
        return ze(this), super.delete(this.S(t, !0, !1));
    }
    entries() {
        var t = this.na();
        return new le(t, qe, this);
    }
    keys() {
        return this.Ia();
    }
    values() {
        var t = this.na();
        return new le(t, Ke.prototype.get, this);
    }
    forEach(t, e) {
        super.forEach((n, r)=>{
            t.call(e, this.get(r), r, this);
        });
    }
    set(t, e) {
        return ze(this), null == (t = this.S(t, !0, !1)) ? this : null == e ? (super.delete(t), this) : super.set(t, this.Z(e, !0, !0, this.U, !1, this.N));
    }
    Oa(t) {
        const e = this.S(t[0], !1, !0);
        t = t[1], t = this.U ? void 0 === t ? null : t : this.Z(t, !1, !0, void 0, !1, this.N), super.set(e, t);
    }
    has(t) {
        return super.has(this.S(t, !1, !1));
    }
    get(t) {
        t = this.S(t, !1, !1);
        const e = super.get(t);
        if (void 0 !== e) {
            var n = this.U;
            return n ? ((n = this.Z(e, !1, !0, n, this.ta, this.N)) !== e && super.set(t, n), n) : e;
        }
    }
    na() {
        return Array.from(super.keys());
    }
    Ia() {
        return super.keys();
    }
    [Symbol.iterator]() {
        return this.entries();
    }
};
function Ye(t, e, n, r, i, s) {
    return t = Ce(t, r, n, s), i && (t = an(t)), t;
}
function $e(t) {
    return t;
}
function qe(t) {
    return [
        t,
        this.get(t)
    ];
}
let Je;
function Ze() {
    return Je ||= new Ke(Zt([]), void 0, void 0, void 0, je);
}
function Qe(t, e, n, r, i) {
    if (null != t) {
        if (Array.isArray(t)) t = he(t, void 0, 0) ? void 0 : i && 2 & $t(t) ? t : tn(t, e, n, void 0 !== r, i);
        else if (oe(t)) {
            const s = {};
            for(let o in t)s[o] = Qe(t[o], e, n, r, i);
            t = s;
        } else t = e(t, r);
        return t;
    }
}
function tn(t, e, n, r, i) {
    const s = r || n ? $t(t) : 0;
    r = r ? !!(32 & s) : void 0;
    const o = Gt(t);
    for(let t = 0; t < o.length; t++)o[t] = Qe(o[t], e, n, r, i);
    return n && (ge(o, t), n(s, o)), o;
}
function en(t) {
    return Qe(t, nn, void 0, void 0, !1);
}
function nn(t) {
    return t.X === re ? t.toJSON() : t instanceof Ke ? t.oa(en) : function(t) {
        switch(typeof t){
            case "number":
                return isFinite(t) ? t : String(t);
            case "boolean":
                return t ? 1 : 0;
            case "object":
                if (t) {
                    if (Array.isArray(t)) {
                        if (he(t, void 0, 0)) return;
                    } else {
                        if (M(t)) return x(t);
                        if (t instanceof B) {
                            const e = t.g;
                            return null == e ? "" : "string" == typeof e ? e : t.g = x(e);
                        }
                        if (t instanceof Ke) return t.oa();
                    }
                }
        }
        return t;
    }(t);
}
function rn(t, e, n = te) {
    if (null != t) {
        if (b && t instanceof Uint8Array) return e ? t : new Uint8Array(t);
        if (Array.isArray(t)) {
            var r = $t(t);
            return 2 & r || (e &&= 0 === r || !!(32 & r) && !(64 & r || !(16 & r)), t = e ? Jt(t, -12293 & (34 | r)) : tn(t, rn, 4 & r ? te : n, !0, !0)), t;
        }
        return t.X === re ? (n = t.s, t = 2 & (r = qt(n)) ? t : sn(t, n, r, !0)) : t instanceof Ke && !(2 & t.N) && (n = Zt(t.Y(rn)), t = new Ke(n, t.U, t.S, t.Z)), t;
    }
}
function sn(t, e, n, r) {
    return t = t.constructor, Ie = e = on(e, n, r), e = new t(e), Ie = void 0, e;
}
function on(t, e, n) {
    const r = n || 2 & e ? te : Qt, i = !!(32 & e);
    return t = function(t, e, n) {
        const r = Gt(t);
        var i = r.length;
        const s = 256 & e ? r[i - 1] : void 0;
        for(i += s ? -1 : 0, e = 512 & e ? 1 : 0; e < i; e++)r[e] = n(r[e]);
        if (s) {
            e = r[e] = {};
            for(const t in s)e[t] = n(s[t]);
        }
        return ge(r, t), r;
    }(t, e, (t)=>rn(t, i, r)), zt(t, 32 | (n ? 2 : 0)), t;
}
function an(t) {
    const e = t.s, n = qt(e);
    return 2 & n ? sn(t, e, n, !1) : t;
}
function hn(t, e, n, r) {
    return !(4 & e) || null != n && (!r && 0 === n && (4096 & e || 8192 & e) && 5 > (t.constructor[Wt] = 1 + (0 | t.constructor[Wt])) && ye(), 0 !== n && !(n & e));
}
function cn(t, e) {
    return ln(t = t.s, qt(t), e);
}
function un(t, e, n, r) {
    if (!(0 > (e = r + (+!!(512 & e) - 1)) || e >= t.length || e >= n)) return t[e];
}
function ln(t, e, n, r) {
    if (-1 === n) return null;
    const i = ee(e);
    if (!(n >= i)) {
        var s = t.length;
        return r && 256 & e && null != (r = t[s - 1][n]) ? (un(t, e, i, n) && null != Ht && (4 <= (e = (t = pe ??= {})[Ht] || 0) || (t[Ht] = e + 1, ye())), r) : un(t, e, i, n);
    }
    return 256 & e ? t[t.length - 1][n] : void 0;
}
function dn(t, e, n, r) {
    const i = t.s;
    let s = qt(i);
    return ue(s), fn(i, s, e, n, r), t;
}
function fn(t, e, n, r, i) {
    const s = ee(e);
    if (n >= s || i) {
        let o = e;
        if (256 & e) i = t[t.length - 1];
        else {
            if (null == r) return o;
            i = t[s + (+!!(512 & e) - 1)] = {}, o |= 256;
        }
        return i[n] = r, n < s && (t[n + (+!!(512 & e) - 1)] = void 0), o !== e && Jt(t, o), o;
    }
    return t[n + (+!!(512 & e) - 1)] = r, 256 & e && n in (t = t[t.length - 1]) && delete t[n], e;
}
function pn(t, e, n, r, i) {
    var s = 2 & e;
    let o = ln(t, e, n, i);
    Array.isArray(o) || (o = ne);
    const a = !(2 & r);
    r = !(1 & r);
    const h = !!(32 & e);
    let c = $t(o);
    return 0 !== c || !h || s || a ? 1 & c || (c |= 1, Jt(o, c)) : (c |= 33, Jt(o, c)), s ? (t = !1, 2 & c || (Zt(o), t = !!(4 & c)), (r || t) && Object.freeze(o)) : (s = !!(2 & c) || !!(2048 & c), r && s ? (o = Gt(o), r = 1, h && !a && (r |= 32), Jt(o, r), fn(t, e, n, o, i)) : a && 32 & c && !s && Kt(o, 32)), o;
}
function gn(t, e) {
    t = t.s;
    let n = qt(t);
    const r = ln(t, n, e), i = ve(r);
    return null != i && i !== r && fn(t, n, e, i), i;
}
function mn(t) {
    t = t.s;
    let e = qt(t);
    const n = ln(t, e, 1), r = ae(n, !0, !!(34 & e));
    return null != r && r !== n && fn(t, e, 1, r), r;
}
function yn(t, e, n) {
    const r = t.s;
    let i = qt(r);
    const s = 2 & i ? 1 : 2;
    let o = _n(r, i, e);
    var a = $t(o);
    if (hn(t, a, void 0, !1)) {
        (4 & a || Object.isFrozen(o)) && (o = Gt(o), a = In(a, i), i = fn(r, i, e, o));
        let s = t = 0;
        for(; t < o.length; t++){
            const e = n(o[t]);
            null != e && (o[s++] = e);
        }
        s < t && (o.length = s), a = Yt(a = vn(a, i), 20, !0), a = Yt(a, 4096, !1), a = Yt(a, 8192, !1), Jt(o, a), 2 & a && Object.freeze(o);
    }
    return En(a) || (n = a, (a = (t = 1 === s || 4 === s && !!(32 & a)) ? Yt(a, 2, !0) : Un(a, i, !1)) !== n && Jt(o, a), t && Object.freeze(o)), 2 === s && En(a) && (o = Gt(o), a = Un(a = In(a, i), i, !1), Jt(o, a), fn(r, i, e, o)), o;
}
function _n(t, e, n) {
    return t = ln(t, e, n), Array.isArray(t) ? t : ne;
}
function vn(t, e) {
    return 0 === t && (t = In(t, e)), Yt(t, 1, !0);
}
function En(t) {
    return !!(2 & t) && !!(4 & t) || !!(2048 & t);
}
function wn(t) {
    t = Gt(t);
    for(let e = 0; e < t.length; e++){
        const n = t[e] = Gt(t[e]);
        Array.isArray(n[1]) && (n[1] = Zt(n[1]));
    }
    return t;
}
function Tn(t, e, n) {
    {
        const a = t.s;
        let h = qt(a);
        if (ue(h), null == n) fn(a, h, e);
        else {
            var r, i = $t(n), s = i, o = !!(2 & i) || Object.isFrozen(n);
            if ((r = !o) && (r = !1), hn(t, i)) for(i = 21, o && (n = Gt(n), s = 0, i = Un(i = In(i, h), h, !0)), t = 0; t < n.length; t++)n[t] = Re(n[t]);
            r && (n = Gt(n), s = 0, i = Un(i = In(i, h), h, !0)), i !== s && Jt(n, i), fn(a, h, e, n);
        }
    }
}
function An(t, e, n, r) {
    t = t.s;
    let i = qt(t);
    ue(i), fn(t, i, e, ("0" === r ? 0 === Number(n) : n === r) ? void 0 : n);
}
function bn(t, e, n, r) {
    const i = qt(t);
    ue(i), t = pn(t, i, e, 2), r = n(r, !!(4 & (e = $t(t))) && !!(4096 & e)), t.push(r);
}
function kn(t) {
    return t;
}
function xn(t, e) {
    return Sn(t = t.s, qt(t), ws) === e ? e : -1;
}
function Sn(t, e, n) {
    let r = 0;
    for(let i = 0; i < n.length; i++){
        const s = n[i];
        null != ln(t, e, s) && (0 !== r && (e = fn(t, e, r)), r = s);
    }
    return r;
}
function Ln(t, e, n, r) {
    let i = qt(t);
    ue(i);
    const s = ln(t, i, n, r);
    let o;
    if (null != s && s.X === re) return (e = an(s)) !== s && fn(t, i, n, e, r), e.s;
    if (Array.isArray(s)) {
        const t = $t(s);
        o = 2 & t ? on(s, t, !1) : s, o = Be(o, e);
    } else o = Be(void 0, e);
    return o !== s && fn(t, i, n, o, r), o;
}
function Fn(t, e, n, r) {
    t = t.s;
    let i = qt(t);
    const s = ln(t, i, n, r);
    return (e = Ce(s, e, !1, i)) !== s && null != e && fn(t, i, n, e, r), e;
}
function Rn(t, e, n, r = !1) {
    if (null == (e = Fn(t, e, n, r))) return e;
    t = t.s;
    let i = qt(t);
    if (!(2 & i)) {
        const s = an(e);
        s !== e && fn(t, i, n, e = s, r);
    }
    return e;
}
function Mn(t, e, n, r, i, s) {
    var o = 2, a = !!(2 & e);
    o = a ? 1 : o, i = !!i, s &&= !a, a = _n(t, e, r);
    var h = $t(a);
    const c = !!(4 & h);
    if (!c) {
        var u = a, l = e;
        const t = !!(2 & (h = vn(h, e)));
        t && (l = Yt(l, 2, !0));
        let r = !t, i = !0, s = 0, o = 0;
        for(; s < u.length; s++){
            const e = Ce(u[s], n, !1, l);
            if (e instanceof n) {
                if (!t) {
                    const t = !!(2 & $t(e.s));
                    r &&= !t, i &&= t;
                }
                u[o++] = e;
            }
        }
        o < s && (u.length = o), h = Yt(h, 4, !0), h = Yt(h, 16, i), h = Yt(h, 8, r), Jt(u, h), t && Object.freeze(u);
    }
    if (s && !(8 & h || !a.length && (1 === o || 4 === o && 32 & h))) {
        for(En(h) && (a = Gt(a), h = In(h, e), e = fn(t, e, r, a)), n = a, s = h, u = 0; u < n.length; u++)(h = n[u]) !== (l = an(h)) && (n[u] = l);
        s = Yt(s, 8, !0), s = Yt(s, 16, !n.length), Jt(n, s), h = s;
    }
    return En(h) || (n = h, (h = (s = 1 === o || 4 === o && !!(32 & h)) ? Yt(h, !a.length || 16 & h && (!c || 32 & h) ? 2 : 2048, !0) : Un(h, e, i)) !== n && Jt(a, h), s && Object.freeze(a)), 2 === o && En(h) && (a = Gt(a), h = Un(h = In(h, e), e, i), Jt(a, h), fn(t, e, r, a)), a;
}
function Pn(t, e, n) {
    t = t.s;
    const r = qt(t);
    return Mn(t, r, e, n, !1, !(2 & r));
}
function Cn(t, e, n, r, i) {
    return null == r && (r = void 0), dn(t, n, r, i);
}
function On(t, e, n, r) {
    null == r && (r = void 0), t = t.s;
    let i = qt(t);
    ue(i), (n = Sn(t, i, n)) && n !== e && null != r && (i = fn(t, i, n)), fn(t, i, e, r);
}
function In(t, e) {
    return t = Yt(t, 2, !!(2 & e)), t = Yt(t, 32, !0), Yt(t, 2048, !1);
}
function Un(t, e, n) {
    return 32 & e && n || (t = Yt(t, 32, !1)), t;
}
function Dn(t, e, n, r) {
    t = t.s;
    const i = qt(t);
    ue(i), e = Mn(t, i, n, e, !0), n = null != r ? r : new n, e.push(n), 2 & $t(n.s) ? Kt(e, 8) : Kt(e, 16);
}
function Nn(t, e) {
    return Ae(cn(t, e));
}
function Bn(t, e) {
    return t ?? e;
}
function Gn(t, e) {
    return Bn(gn(t, e), 0);
}
function jn(t, e) {
    return Bn(Pe(cn(t, e)), "");
}
function Vn(t, e, n) {
    if (null != n && "boolean" != typeof n) throw t = typeof n, Error(`Expected boolean but got ${"object" != t ? t : n ? Array.isArray(n) ? "array" : t : "null"}: ${n}`);
    dn(t, e, n);
}
function Xn(t, e, n) {
    if (null != n) {
        if ("number" != typeof n) throw _e("int32");
        if (!Number.isFinite(n)) throw _e("int32");
        n |= 0;
    }
    dn(t, e, n);
}
function Hn(t, e, n) {
    if (null != n && "number" != typeof n) throw Error(`Value of float/double field must be a number, found ${typeof n}: ${n}`);
    dn(t, e, n);
}
function Wn(t, e, n) {
    e.g ? e.m(t, e.g, e.h, n, !0) : e.m(t, e.h, n, !0);
}
Ke.prototype.toJSON = void 0, Ke.prototype.Ja = ie;
var zn = class {
    constructor(t, e){
        this.s = Ge(t, e);
    }
    toJSON() {
        return Kn(this, tn(this.s, nn, void 0, void 0, !1), !0);
    }
    l() {
        var t = ko;
        return t.g ? t.l(this, t.g, t.h, !0) : t.l(this, t.h, t.defaultValue, !0);
    }
    clone() {
        const t = this.s;
        return sn(this, t, qt(t), !1);
    }
    P() {
        return !!(2 & $t(this.s));
    }
};
function Kn(t, e, n) {
    var r = d ? void 0 : t.constructor.B;
    const i = qt(n ? t.s : e);
    if (!(t = e.length)) return e;
    let s, o;
    if (oe(n = e[t - 1])) {
        t: {
            var a = n;
            let t = {}, e = !1;
            for(var h in a){
                let n = a[h];
                if (Array.isArray(n)) {
                    let t = n;
                    (he(n, r, +h) || se(n) && 0 === n.size) && (n = null), n != t && (e = !0);
                }
                null != n ? t[h] = n : e = !0;
            }
            if (e) {
                for(var c in t){
                    a = t;
                    break t;
                }
                a = null;
            }
        }
        a != n && (s = !0), t--;
    }
    for(h = +!!(512 & i) - 1; 0 < t && (n = e[c = t - 1], c -= h, null == n || he(n, r, c) || se(n) && 0 === n.size); t--)o = !0;
    return s || o ? (e = Array.prototype.slice.call(e, 0, t), a && e.push(a), e) : e;
}
function Yn(t) {
    return Array.isArray(t) ? t[0] instanceof Bt ? t : [
        $r,
        t
    ] : [
        t,
        void 0
    ];
}
function $n(t, e) {
    if (Array.isArray(e)) {
        var n = $t(e);
        if (4 & n) return e;
        for(var r = 0, i = 0; r < e.length; r++){
            const n = t(e[r]);
            null != n && (e[i++] = n);
        }
        return i < r && (e.length = i), Jt(e, -12289 & (5 | n)), 2 & n && Object.freeze(e), e;
    }
}
zn.prototype.X = re, zn.prototype.toString = function() {
    return Kn(this, this.s, !1).toString();
};
const qn = Symbol();
function Jn(t) {
    let e = t[qn];
    if (!e) {
        const n = sr(t), r = yr(t), i = r.l;
        e = i ? (t, e)=>i(t, e, r) : (t, e)=>{
            for(; mt(e) && 4 != e.h;){
                var i = e.m, s = r[i];
                if (!s) {
                    var o = r.ea;
                    o && (o = o[i]) && (s = r[i] = Zn(o));
                }
                s && s(e, t, i) || (i = (s = e).l, yt(s), s.ia ? s = void 0 : (o = s.g.g - i, s.g.g = i, s = pt(s.g, o)), i = t, s && (de ||= Symbol(), (o = i[de]) ? o.push(s) : i[de] = [
                    s
                ]));
            }
            n === tr || n === er || n.j || (t[fe ||= Symbol()] = n);
        }, t[qn] = e;
    }
    return e;
}
function Zn(t) {
    const e = (t = Yn(t))[0].g;
    if (t = t[1]) {
        const n = Jn(t), r = yr(t).T;
        return (t, i, s)=>e(t, i, s, r, n);
    }
    return e;
}
class Qn {
}
let tr, er;
const nr = Symbol();
function rr(t, e, n) {
    const r = n[1];
    let i;
    if (r) {
        const n = r[nr];
        i = n ? n.T : Ne(r[0]), t[e] = n ?? r;
    }
    i && i === Ue ? (t.g || (t.g = new Set)).add(e) : n[0] && (t.h || (t.h = new Set)).add(e);
}
function ir(t, e) {
    return [
        t.l,
        !e || 0 < e[0] ? void 0 : e
    ];
}
function sr(t) {
    var e = t[nr];
    if (e) return e;
    if (!(e = ar(t, t[nr] = new Qn, ir, ir, rr)).ea && !e.h && !e.g) {
        let n = !0;
        for(let t in e)isNaN(t) || (n = !1);
        n ? (Ne(t[0]) === Ue ? er ? e = er : ((e = new Qn).T = Ne(!0), e = er = e) : e = tr ||= new Qn, e = t[nr] = e) : e.j = !0;
    }
    return e;
}
function or(t, e, n) {
    t[e] = n;
}
function ar(t, e, n, r, i = or) {
    e.T = Ne(t[0]);
    let s = 0;
    var o = t[++s];
    o && o.constructor === Object && (e.ea = o, "function" == typeof (o = t[++s]) && (e.l = o, e.m = t[++s], o = t[++s]));
    const a = {};
    for(; Array.isArray(o) && "number" == typeof o[0] && 0 < o[0];){
        for(var h = 0; h < o.length; h++)a[o[h]] = o;
        o = t[++s];
    }
    for(h = 1; void 0 !== o;){
        let l;
        "number" == typeof o && (h += o, o = t[++s]);
        var c = void 0;
        if (o instanceof Bt ? l = o : (l = qr, s--), l.pa) {
            o = t[++s], c = t;
            var u = s;
            "function" == typeof o && (o = o(), c[u] = o), c = o;
        }
        for(u = h + 1, "number" == typeof (o = t[++s]) && 0 > o && (u -= o, o = t[++s]); h < u; h++){
            const t = a[h];
            i(e, h, c ? r(l, c, t) : n(l, t));
        }
    }
    return e;
}
const hr = Symbol();
function cr(t) {
    let e = t[hr];
    if (!e) {
        const n = fr(t);
        e = (t, e)=>Er(t, e, n), t[hr] = e;
    }
    return e;
}
const ur = Symbol();
function lr(t) {
    return t.h;
}
function dr(t, e) {
    let n, r;
    const i = t.h;
    return (t, s, o)=>i(t, s, o, r ||= fr(e).T, n ||= cr(e));
}
function fr(t) {
    let e = t[ur];
    return e || (e = ar(t, t[ur] = {}, lr, dr), _r(t), e);
}
const pr = Symbol();
function gr(t, e) {
    const n = t.g;
    return e ? (t, r, i)=>n(t, r, i, e) : n;
}
function mr(t, e, n) {
    const r = t.g;
    let i, s;
    return (t, o, a)=>r(t, o, a, s ||= yr(e).T, i ||= Jn(e), n);
}
function yr(t) {
    let e = t[pr];
    return e || (sr(t), e = ar(t, t[pr] = {}, gr, mr), _r(t), e);
}
function _r(t) {
    pr in t && nr in t && ur in t && (t.length = 0);
}
function vr(t, e) {
    var n = t[e];
    if (n) return n;
    if ((n = t.ea) && (n = n[e])) {
        var r = (n = Yn(n))[0].h;
        if (n = n[1]) {
            const e = cr(n), i = fr(n).T;
            n = (n = t.m) ? n(i, e) : (t, n, s)=>r(t, n, s, i, e);
        } else n = r;
        return t[e] = n;
    }
}
function Er(t, e, n) {
    for(var r = qt(t), i = +!!(512 & r) - 1, s = t.length, o = 512 & r ? 1 : 0, a = s + (256 & r ? -1 : 0); o < a; o++){
        const r = t[o];
        if (null == r) continue;
        const s = o - i, a = vr(n, s);
        a && a(e, r, s);
    }
    if (256 & r) {
        r = t[s - 1];
        for(let t in r)i = +t, Number.isNaN(i) || null != (s = r[t]) && (a = vr(n, i)) && a(e, s, i);
    }
    if (t = de ? t[de] : void 0) for(Ct(e, e.g.end()), n = 0; n < t.length; n++)Ct(e, N(t[n]) || C());
}
function wr(t, e) {
    return new Bt(t, e, !1, !1);
}
function Tr(t, e) {
    return new Bt(t, e, !0, !1);
}
function Ar(t, e) {
    return new Bt(t, e, !1, !0);
}
function br(t, e, n) {
    fn(t, qt(t), e, n);
}
var kr = Ar(function(t, e, n, r, i) {
    return 2 === t.h && (t = _t(t, Be([
        void 0,
        void 0
    ], r), i), ue(r = qt(e)), (i = ln(e, r, n)) instanceof Ke ? 0 != (2 & i.N) ? ((i = i.Y()).push(t), fn(e, r, n, i)) : i.Oa(t) : Array.isArray(i) ? (2 & $t(i) && fn(e, r, n, i = wn(i)), i.push(t)) : fn(e, r, n, [
        t
    ]), !0);
}, function(t, e, n, r, i) {
    if (e instanceof Ke) e.forEach((e, s)=>{
        Nt(t, n, Be([
            s,
            e
        ], r), i);
    });
    else if (Array.isArray(e)) for(let s = 0; s < e.length; s++){
        const o = e[s];
        Array.isArray(o) && Nt(t, n, Be(o, r), i);
    }
});
function xr(t, e, n) {
    t: if (null != e) {
        if (Te(e)) {
            if ("string" == typeof e) {
                e = Le(e);
                break t;
            }
            if ("number" == typeof e) {
                e = Se(e);
                break t;
            }
        }
        e = void 0;
    }
    null != e && ("string" == typeof e && xt(e), null != e && (Ot(t, n, 0), "number" == typeof e ? (t = t.g, $(e), Ft(t, K, Y)) : (n = xt(e), Ft(t.g, n.h, n.g))));
}
function Sr(t, e, n) {
    null != (e = Ae(e)) && null != e && (Ot(t, n, 0), Mt(t.g, e));
}
function Lr(t, e, n) {
    null != (e = Ee(e)) && (Ot(t, n, 0), t.g.g.push(e ? 1 : 0));
}
function Fr(t, e, n) {
    null != (e = Pe(e)) && Dt(t, n, c(e));
}
function Rr(t, e, n, r, i) {
    Nt(t, n, e instanceof zn ? e.s : Array.isArray(e) ? Be(e, r) : void 0, i);
}
function Mr(t, e, n) {
    null != (e = null == e || "string" == typeof e || M(e) || e instanceof B ? e : void 0) && Dt(t, n, X(e).buffer);
}
function Pr(t, e, n) {
    return (5 === t.h || 2 === t.h) && (e = pn(e, qt(e), n, 2, !1), 2 == t.h ? wt(t, ct, e) : e.push(ct(t.g)), !0);
}
var Cr, Or = wr(function(t, e, n) {
    if (1 !== t.h) return !1;
    var r = t.g;
    t = ht(r);
    const i = ht(r);
    r = 2 * (i >> 31) + 1;
    const s = i >>> 20 & 2047;
    return t = 4294967296 * (1048575 & i) + t, br(e, n, 2047 == s ? t ? NaN : 1 / 0 * r : 0 == s ? r * Math.pow(2, -1074) * t : r * Math.pow(2, s - 1075) * (t + 4503599627370496)), !0;
}, function(t, e, n) {
    null != (e = ve(e)) && (Ot(t, n, 1), t = t.g, (n = z ||= new DataView(new ArrayBuffer(8))).setFloat64(0, +e, !0), K = n.getUint32(0, !0), Y = n.getUint32(4, !0), Pt(t, K), Pt(t, Y));
}), Ir = wr(function(t, e, n) {
    return 5 === t.h && (br(e, n, ct(t.g)), !0);
}, function(t, e, n) {
    null != (e = ve(e)) && (Ot(t, n, 5), t = t.g, q(e), Pt(t, K));
}), Ur = Tr(Pr, function(t, e, n) {
    if (null != (e = $n(ve, e))) for(let o = 0; o < e.length; o++){
        var r = t, i = n, s = e[o];
        null != s && (Ot(r, i, 5), r = r.g, q(s), Pt(r, K));
    }
}), Dr = Tr(Pr, function(t, e, n) {
    if (null != (e = $n(ve, e)) && e.length) {
        Ot(t, n, 2), Rt(t.g, 4 * e.length);
        for(let r = 0; r < e.length; r++)n = t.g, q(e[r]), Pt(n, K);
    }
}), Nr = wr(function(t, e, n) {
    return 0 === t.h && (br(e, n, it(t.g, Z)), !0);
}, xr), Br = wr(function(t, e, n) {
    return 0 === t.h && (br(e, n, 0 === (t = it(t.g, Z)) ? void 0 : t), !0);
}, xr), Gr = wr(function(t, e, n) {
    return 0 === t.h && (br(e, n, it(t.g, J)), !0);
}, function(t, e, n) {
    t: if (null != e) {
        if (Te(e)) {
            if ("string" == typeof e) {
                var r = Math.trunc(Number(e));
                Number.isSafeInteger(r) && 0 <= r ? e = String(r) : (-1 !== (r = e.indexOf(".")) && (e = e.substring(0, r)), ke(e) || (nt(e), e = Q(K, Y)));
                break t;
            }
            if ("number" == typeof e) {
                e = 0 <= (e = Math.trunc(e)) && Number.isSafeInteger(e) ? e : function(t) {
                    if (0 > t) {
                        $(t);
                        const e = Q(K, Y);
                        return t = Number(e), Number.isSafeInteger(t) ? t : e;
                    }
                    return ke(String(t)) ? t : ($(t), J(K, Y));
                }(e);
                break t;
            }
        }
        e = void 0;
    }
    null != e && ("string" == typeof e && At(e), null != e && (Ot(t, n, 0), "number" == typeof e ? (t = t.g, $(e), Ft(t, K, Y)) : (n = At(e), Ft(t.g, n.h, n.g))));
}), jr = wr(function(t, e, n) {
    return 0 === t.h && (br(e, n, ot(t.g)), !0);
}, Sr), Vr = Tr(function(t, e, n) {
    return (0 === t.h || 2 === t.h) && (e = pn(e, qt(e), n, 2, !1), 2 == t.h ? wt(t, ot, e) : e.push(ot(t.g)), !0);
}, function(t, e, n) {
    if (null != (e = $n(Ae, e)) && e.length) {
        n = It(t, n);
        for(let n = 0; n < e.length; n++)Mt(t.g, e[n]);
        Ut(t, n);
    }
}), Xr = wr(function(t, e, n) {
    return 0 === t.h && (br(e, n, 0 === (t = ot(t.g)) ? void 0 : t), !0);
}, Sr), Hr = wr(function(t, e, n) {
    return 0 === t.h && (br(e, n, st(t.g)), !0);
}, Lr), Wr = wr(function(t, e, n) {
    return 0 === t.h && (br(e, n, !1 === (t = st(t.g)) ? void 0 : t), !0);
}, Lr), zr = Tr(function(t, e, n) {
    return 2 === t.h && (bn(e, n, kn, t = vt(t)), !0);
}, function(t, e, n) {
    if (null != (e = $n(Pe, e))) for(let o = 0; o < e.length; o++){
        var r = t, i = n, s = e[o];
        null != s && Dt(r, i, c(s));
    }
}), Kr = wr(function(t, e, n) {
    return 2 === t.h && (br(e, n, "" === (t = vt(t)) ? void 0 : t), !0);
}, Fr), Yr = wr(function(t, e, n) {
    return 2 === t.h && (br(e, n, vt(t)), !0);
}, Fr), $r = Ar(function(t, e, n, r, i) {
    return 2 === t.h && (_t(t, Ln(e, r, n, !0), i), !0);
}, Rr), qr = Ar(function(t, e, n, r, i) {
    return 2 === t.h && (_t(t, Ln(e, r, n), i), !0);
}, Rr);
Cr = new Bt(function(t, e, n, r, i) {
    if (2 !== t.h) return !1;
    r = Be(void 0, r);
    let s = qt(e);
    ue(s);
    let o = pn(e, s, n, 3);
    return s = qt(e), 4 & $t(o) && (o = Gt(o), Jt(o, -2079 & (1 | $t(o))), fn(e, s, n, o)), o.push(r), _t(t, r, i), !0;
}, function(t, e, n, r, i) {
    if (Array.isArray(e)) for(let s = 0; s < e.length; s++)Rr(t, e[s], n, r, i);
}, !0, !0);
var Jr = Ar(function(t, e, n, r, i, s) {
    if (2 !== t.h) return !1;
    let o = qt(e);
    return ue(o), (s = Sn(e, o, s)) && n !== s && fn(e, o, s), _t(t, e = Ln(e, r, n), i), !0;
}, Rr), Zr = wr(function(t, e, n) {
    return 2 === t.h && (br(e, n, Et(t)), !0);
}, Mr), Qr = Tr(function(t, e, n) {
    return (0 === t.h || 2 === t.h) && (e = pn(e, qt(e), n, 2, !1), 2 == t.h ? wt(t, at, e) : e.push(at(t.g)), !0);
}, function(t, e, n) {
    if (null != (e = $n(be, e))) for(let o = 0; o < e.length; o++){
        var r = t, i = n, s = e[o];
        null != s && (Ot(r, i, 0), Rt(r.g, s));
    }
}), ti = wr(function(t, e, n) {
    return 0 === t.h && (br(e, n, ot(t.g)), !0);
}, function(t, e, n) {
    null != (e = Ae(e)) && (e = parseInt(e, 10), Ot(t, n, 0), Mt(t.g, e));
}), ei = Tr(function(t, e, n) {
    return (0 === t.h || 2 === t.h) && (e = pn(e, qt(e), n, 2, !1), 2 == t.h ? wt(t, ut, e) : e.push(ot(t.g)), !0);
}, function(t, e, n) {
    if (null != (e = $n(Ae, e)) && e.length) {
        n = It(t, n);
        for(let n = 0; n < e.length; n++)Mt(t.g, e[n]);
        Ut(t, n);
    }
});
class ni {
    constructor(t, e){
        this.h = t, this.g = e, this.l = Rn, this.m = Cn, this.defaultValue = void 0;
    }
}
function ri(t, e) {
    return new ni(t, e);
}
function ii(t, e) {
    return (n, r)=>{
        if (Tt.length) {
            const t = Tt.pop();
            t.o(r), lt(t.g, n, r), n = t;
        } else n = new class {
            constructor(t, e){
                if (gt.length) {
                    const n = gt.pop();
                    lt(n, t, e), t = n;
                } else t = new class {
                    constructor(t, e){
                        this.h = null, this.m = !1, this.g = this.l = this.j = 0, lt(this, t, e);
                    }
                    clear() {
                        this.h = null, this.m = !1, this.g = this.l = this.j = 0, this.ca = !1;
                    }
                }(t, e);
                this.g = t, this.l = this.g.g, this.h = this.m = -1, this.o(e);
            }
            o({ ia: t = !1 } = {}) {
                this.ia = t;
            }
        }(n, r);
        try {
            const r = new t, s = r.s;
            Jn(e)(s, n);
            var i = r;
        } finally{
            n.g.clear(), n.m = -1, n.h = -1, 100 > Tt.length && Tt.push(n);
        }
        return i;
    };
}
function si(t) {
    return function() {
        const e = new class {
            constructor(){
                this.l = [], this.h = 0, this.g = new class {
                    constructor(){
                        this.g = [];
                    }
                    length() {
                        return this.g.length;
                    }
                    end() {
                        const t = this.g;
                        return this.g = [], t;
                    }
                };
            }
        };
        Er(this.s, e, fr(t)), Ct(e, e.g.end());
        const n = new Uint8Array(e.h), r = e.l, i = r.length;
        let s = 0;
        for(let t = 0; t < i; t++){
            const e = r[t];
            n.set(e, s), s += e.length;
        }
        return e.l = [
            n
        ], n;
    };
}
var oi = class extends zn {
    constructor(t){
        super(t);
    }
}, ai = [
    0,
    Kr,
    wr(function(t, e, n) {
        return 2 === t.h && (br(e, n, (t = Et(t)) === D() ? void 0 : t), !0);
    }, function(t, e, n) {
        if (null != e) {
            if (e instanceof zn) {
                const r = e.Qa;
                return void (r && (e = r(e), null != e && Dt(t, n, X(e).buffer)));
            }
            if (Array.isArray(e)) return;
        }
        Mr(t, e, n);
    })
], hi = [
    0,
    Yr
], ci = [
    0,
    jr,
    ti,
    Hr,
    -1,
    Vr,
    ti,
    -1
], ui = [
    0,
    Hr,
    -1
], li = class extends zn {
    constructor(){
        super();
    }
};
li.B = [
    6
];
var di = [
    0,
    Hr,
    Yr,
    Hr,
    ti,
    -1,
    ei,
    Yr,
    -1,
    ui,
    ti
], fi = [
    0,
    Yr,
    -2
], pi = class extends zn {
    constructor(){
        super();
    }
}, gi = [
    0
], mi = [
    0,
    jr,
    Hr,
    -4
], yi = class extends zn {
    constructor(t){
        super(t, 2);
    }
}, _i = {}, vi = [
    -2,
    _i,
    Hr
];
_i[336783863] = [
    0,
    Yr,
    Hr,
    -1,
    jr,
    [
        0,
        [
            1,
            2,
            3,
            4,
            5,
            6
        ],
        Jr,
        gi,
        Jr,
        di,
        Jr,
        fi,
        Jr,
        mi,
        Jr,
        ci,
        Jr,
        [
            0,
            Yr
        ]
    ],
    hi,
    Hr,
    [
        0,
        [
            1,
            3
        ],
        [
            2,
            4
        ],
        Jr,
        [
            0,
            Vr
        ],
        -1,
        Jr,
        [
            0,
            zr
        ],
        -1,
        Cr,
        [
            0,
            Yr,
            -1
        ]
    ],
    Yr
];
var Ei = [
    0,
    Kr,
    Wr
], wi = [
    0,
    Br,
    -1,
    Wr,
    -3,
    Br,
    Vr,
    Kr,
    Xr,
    Br,
    -1,
    Wr,
    Xr,
    Wr,
    -2,
    Kr
], Ti = [
    -1,
    {}
], Ai = [
    0,
    Yr,
    1,
    Ti
], bi = [
    0,
    Yr,
    zr,
    Ti
];
function ki(t, e) {
    An(t, 2, Me(e), "");
}
function xi(t, e) {
    bn(t.s, 3, Re, e);
}
function Si(t, e) {
    bn(t.s, 4, Re, e);
}
var Li = class extends zn {
    constructor(t){
        super(t, 500);
    }
    o(t) {
        return Cn(this, 0, 7, t);
    }
};
Li.B = [
    3,
    4,
    5,
    6,
    8,
    13,
    17,
    1005
];
var Fi = [
    -500,
    Kr,
    -1,
    zr,
    -3,
    vi,
    Cr,
    ai,
    Xr,
    -1,
    Ai,
    bi,
    Cr,
    Ei,
    Kr,
    wi,
    Xr,
    zr,
    987,
    zr
], Ri = [
    0,
    Kr,
    -1,
    Ti
], Mi = [
    -500,
    Yr,
    -1,
    [
        -1,
        {}
    ],
    998,
    Yr
], Pi = [
    -500,
    Yr,
    zr,
    -1,
    [
        -2,
        {},
        Hr
    ],
    997,
    zr,
    -1
], Ci = [
    -500,
    Yr,
    zr,
    Ti,
    998,
    zr
];
function Oi(t, e) {
    Dn(t, 1, Li, e);
}
function Ii(t, e) {
    bn(t.s, 10, Re, e);
}
function Ui(t, e) {
    bn(t.s, 15, Re, e);
}
var Di = class extends zn {
    constructor(t){
        super(t, 500);
    }
    o(t) {
        return Cn(this, 0, 1001, t);
    }
};
Di.B = [
    1,
    6,
    7,
    9,
    10,
    15,
    16,
    17,
    14,
    1002
];
var Ni = [
    -500,
    Cr,
    Fi,
    4,
    Cr,
    Mi,
    Cr,
    Pi,
    Xr,
    Cr,
    Ci,
    zr,
    Xr,
    Ai,
    bi,
    Cr,
    Ri,
    zr,
    -2,
    wi,
    Kr,
    -1,
    Wr,
    979,
    Ti,
    Cr,
    ai
], Bi = ii(Di, Ni);
Di.prototype.g = si(Ni);
var Gi = [
    0,
    Cr,
    [
        0,
        jr,
        -2
    ]
], ji = class extends zn {
    constructor(t){
        super(t);
    }
}, Vi = [
    0,
    jr,
    Ir,
    Yr,
    -1
], Xi = class extends zn {
    constructor(t){
        super(t);
    }
    g() {
        return Pn(this, ji, 1);
    }
};
Xi.B = [
    1
];
var Hi = [
    0,
    Cr,
    Vi
], Wi = ii(Xi, Hi), zi = [
    0,
    jr,
    Ir
], Ki = [
    0,
    jr,
    -1,
    Gi
], Yi = class extends zn {
    constructor(t){
        super(t);
    }
}, $i = [
    0,
    jr,
    -3
], qi = [
    0,
    Ir,
    -3
], Ji = class extends zn {
    constructor(t){
        super(t);
    }
}, Zi = [
    0,
    Ir,
    -1,
    Yr,
    Ir
], Qi = class extends zn {
    constructor(t){
        super(t);
    }
    h() {
        return Rn(this, Yi, 2);
    }
    g() {
        return Pn(this, Ji, 5);
    }
};
Qi.B = [
    5
];
var ts = [
    0,
    ti,
    $i,
    qi,
    Ki,
    Cr,
    Zi
], es = class extends zn {
    constructor(t){
        super(t);
    }
};
es.B = [
    1,
    2,
    3,
    8,
    9
];
var ns = ii(es, [
    0,
    zr,
    Vr,
    Dr,
    ts,
    Yr,
    -1,
    Nr,
    Cr,
    zi,
    zr,
    Nr
]), rs = class extends zn {
    constructor(t){
        super(t);
    }
}, is = [
    0,
    Ir,
    -4
], ss = class extends zn {
    constructor(t){
        super(t);
    }
};
ss.B = [
    1
];
var os = ii(ss, [
    0,
    Cr,
    is
]), as = class extends zn {
    constructor(t){
        super(t);
    }
}, hs = [
    0,
    Ir,
    -4
], cs = class extends zn {
    constructor(t){
        super(t);
    }
};
cs.B = [
    1
];
var us = ii(cs, [
    0,
    Cr,
    hs
]), ls = class extends zn {
    constructor(t){
        super(t);
    }
};
ls.B = [
    3
];
var ds = [
    0,
    jr,
    -1,
    Dr,
    ti
], fs = class extends zn {
    constructor(){
        super();
    }
};
fs.prototype.g = si([
    0,
    Ir,
    -4,
    Nr
]);
var ps = class extends zn {
    constructor(t){
        super(t);
    }
}, gs = [
    0,
    1,
    jr,
    Yr,
    Hi
], ms = class extends zn {
    constructor(t){
        super(t);
    }
};
ms.B = [
    1
];
var ys = ii(ms, [
    0,
    Cr,
    gs,
    Nr
]), _s = class extends zn {
    constructor(t){
        super(t);
    }
};
_s.B = [
    1
];
var vs = class extends zn {
    constructor(t){
        super(t);
    }
    qa() {
        const t = mn(this);
        return null == t ? D() : t;
    }
}, Es = class extends zn {
    constructor(t){
        super(t);
    }
}, ws = [
    1,
    2
], Ts = [
    0,
    ws,
    Jr,
    [
        0,
        Dr
    ],
    Jr,
    [
        0,
        Zr
    ],
    jr,
    Yr
], As = class extends zn {
    constructor(t){
        super(t);
    }
};
As.B = [
    1
];
var bs = ii(As, [
    0,
    Cr,
    Ts,
    Nr
]), ks = class extends zn {
    constructor(t){
        super(t);
    }
};
ks.B = [
    4,
    5
];
var xs = [
    0,
    Yr,
    jr,
    Ir,
    zr,
    -1
], Ss = class extends zn {
    constructor(t){
        super(t);
    }
}, Ls = [
    0,
    Hr,
    -1
], Fs = class extends zn {
    constructor(t){
        super(t);
    }
}, Rs = [
    1,
    2,
    3,
    4,
    5
], Ms = class extends zn {
    constructor(t){
        super(t);
    }
    g() {
        return null != mn(this);
    }
    h() {
        return null != Pe(cn(this, 2));
    }
}, Ps = [
    0,
    Zr,
    Yr,
    [
        0,
        jr,
        Nr,
        -1
    ],
    [
        0,
        Gr,
        Nr
    ]
], Cs = class extends zn {
    constructor(t){
        super(t);
    }
    g() {
        return Ee(cn(this, 2)) ?? !1;
    }
}, Os = [
    0,
    Ps,
    Hr,
    [
        0,
        Rs,
        Jr,
        mi,
        Jr,
        di,
        Jr,
        ci,
        Jr,
        gi,
        Jr,
        fi
    ],
    ti
], Is = class extends zn {
    constructor(t){
        super(t);
    }
}, Us = [
    0,
    Os,
    Ir,
    -1,
    jr
], Ds = ri(502141897, Is);
_i[502141897] = Us;
var Ns = [
    0,
    Ps
];
_i[512499200] = Ns;
var Bs = [
    0,
    Ns
];
_i[515723506] = Bs;
var Gs = ii(class extends zn {
    constructor(t){
        super(t);
    }
}, [
    0,
    [
        0,
        ti,
        -1,
        Ur,
        Qr
    ],
    ds
]), js = [
    0,
    Os
];
_i[508981768] = js;
var Vs = class extends zn {
    constructor(t){
        super(t);
    }
}, Xs = [
    0,
    Os,
    Ir,
    js,
    Hr
], Hs = class extends zn {
    constructor(t){
        super(t);
    }
}, Ws = [
    0,
    Os,
    Us,
    Xs,
    Ir,
    Bs
];
_i[508968149] = Xs;
var zs = ri(508968150, Hs);
_i[508968150] = Ws;
var Ks = class extends zn {
    constructor(t){
        super(t);
    }
}, Ys = ri(513916220, Ks);
_i[513916220] = [
    0,
    Os,
    Ws,
    jr
];
var $s = class extends zn {
    constructor(t){
        super(t);
    }
    h() {
        return Rn(this, ks, 2);
    }
    g() {
        dn(this, 2);
    }
}, qs = [
    0,
    Os,
    xs
];
_i[478825465] = qs;
var Js = [
    0,
    Os
];
_i[478825422] = Js;
var Zs = class extends zn {
    constructor(t){
        super(t);
    }
}, Qs = [
    0,
    Os,
    Js,
    qs,
    -1
], to = class extends zn {
    constructor(t){
        super(t);
    }
}, eo = [
    0,
    Os,
    Ir,
    jr
], no = class extends zn {
    constructor(t){
        super(t);
    }
}, ro = [
    0,
    Os,
    Ir
], io = class extends zn {
    constructor(t){
        super(t);
    }
}, so = [
    0,
    Os,
    eo,
    ro,
    Ir
], oo = class extends zn {
    constructor(t){
        super(t);
    }
}, ao = [
    0,
    Os,
    so,
    Qs
];
_i[463370452] = Qs, _i[464864288] = eo, _i[474472470] = ro;
var ho = ri(462713202, io);
_i[462713202] = so;
var co = ri(479097054, oo);
_i[479097054] = ao;
var uo = class extends zn {
    constructor(t){
        super(t);
    }
}, lo = [
    0,
    Os
], fo = class extends zn {
    constructor(t){
        super(t);
    }
}, po = [
    0,
    Os,
    Ir,
    -1,
    jr
];
_i[514774813] = po;
var go = class extends zn {
    constructor(t){
        super(t);
    }
}, mo = [
    0,
    Os,
    Ir,
    Hr
];
_i[518928384] = mo;
var yo = class extends zn {
    constructor(){
        super();
    }
};
yo.prototype.g = si([
    0,
    Os,
    ro,
    lo,
    Us,
    Xs,
    po,
    mo
]);
var _o = class extends zn {
    constructor(t){
        super(t);
    }
}, vo = ri(456383383, _o);
_i[456383383] = [
    0,
    Os,
    xs
];
var Eo = class extends zn {
    constructor(t){
        super(t);
    }
}, wo = ri(476348187, Eo);
_i[476348187] = [
    0,
    Os,
    Ls
];
var To = class extends zn {
    constructor(t){
        super(t);
    }
}, Ao = [
    0,
    ti,
    -1
], bo = class extends zn {
    constructor(t){
        super(t);
    }
};
bo.B = [
    3
];
var ko = ri(458105876, class extends zn {
    constructor(t){
        super(t);
    }
    g() {
        var t = this.s;
        const e = qt(t);
        var n = 2 & e;
        return t = function(t, e, n) {
            var r = bo;
            const i = 2 & e;
            let s = !1;
            if (null == n) {
                if (i) return Ze();
                n = [];
            } else if (n.constructor === Ke) {
                if (0 == (2 & n.N) || i) return n;
                n = n.Y();
            } else Array.isArray(n) ? s = !!(2 & $t(n)) : n = [];
            if (i) {
                if (!n.length) return Ze();
                s || (s = !0, Zt(n));
            } else s && (s = !1, n = wn(n));
            return s || (64 & $t(n) ? Kt(n, 32) : 32 & e && zt(n, 32)), fn(t, e, 2, r = new Ke(n, r, Oe, void 0), !1), r;
        }(t, e, ln(t, e, 2)), null == t || !n && bo && (t.ta = !0), n = t;
    }
});
_i[458105876] = [
    0,
    Ao,
    kr,
    [
        !0,
        Nr,
        [
            0,
            Yr,
            -1,
            zr
        ]
    ]
];
var xo = class extends zn {
    constructor(t){
        super(t);
    }
}, So = ri(458105758, xo);
_i[458105758] = [
    0,
    Os,
    Yr,
    Ao
];
var Lo = class extends zn {
    constructor(t){
        super(t);
    }
};
Lo.B = [
    5,
    6
];
var Fo = ri(443442058, Lo);
_i[443442058] = [
    0,
    Os,
    Yr,
    jr,
    Ir,
    zr,
    -1
];
var Ro = class extends zn {
    constructor(t){
        super(t);
    }
}, Mo = ri(516587230, Ro);
function Po(t, e) {
    return e = e ? e.clone() : new ks, void 0 !== t.displayNamesLocale ? dn(e, 1, Me(t.displayNamesLocale)) : void 0 === t.displayNamesLocale && dn(e, 1), void 0 !== t.maxResults ? Xn(e, 2, t.maxResults) : "maxResults" in t && dn(e, 2), void 0 !== t.scoreThreshold ? Hn(e, 3, t.scoreThreshold) : "scoreThreshold" in t && dn(e, 3), void 0 !== t.categoryAllowlist ? Tn(e, 4, t.categoryAllowlist) : "categoryAllowlist" in t && dn(e, 4), void 0 !== t.categoryDenylist ? Tn(e, 5, t.categoryDenylist) : "categoryDenylist" in t && dn(e, 5), e;
}
function Co(t, e = -1, n = "") {
    return {
        categories: t.map((t)=>({
                index: Bn(Nn(t, 1), 0) ?? -1,
                score: Gn(t, 2) ?? 0,
                categoryName: jn(t, 3) ?? "",
                displayName: jn(t, 4) ?? ""
            })),
        headIndex: e,
        headName: n
    };
}
function Oo(t) {
    var e = yn(t, 3, ve), n = yn(t, 2, Ae), r = yn(t, 1, Pe), i = yn(t, 9, Pe);
    const s = {
        categories: [],
        keypoints: []
    };
    for(let t = 0; t < e.length; t++)s.categories.push({
        score: e[t],
        index: n[t] ?? -1,
        categoryName: r[t] ?? "",
        displayName: i[t] ?? ""
    });
    if ((e = Rn(t, Qi, 4)?.h()) && (s.boundingBox = {
        originX: Nn(e, 1) ?? 0,
        originY: Nn(e, 2) ?? 0,
        width: Nn(e, 3) ?? 0,
        height: Nn(e, 4) ?? 0,
        angle: 0
    }), Rn(t, Qi, 4)?.g().length) for (const e of Rn(t, Qi, 4).g())s.keypoints.push({
        x: gn(e, 1) ?? 0,
        y: gn(e, 2) ?? 0,
        score: gn(e, 4) ?? 0,
        label: Pe(cn(e, 3)) ?? ""
    });
    return s;
}
function Io(t) {
    const e = [];
    for (const n of Pn(t, as, 1))e.push({
        x: Gn(n, 1) ?? 0,
        y: Gn(n, 2) ?? 0,
        z: Gn(n, 3) ?? 0,
        visibility: Gn(n, 4) ?? 0
    });
    return e;
}
function Uo(t) {
    const e = [];
    for (const n of Pn(t, rs, 1))e.push({
        x: Gn(n, 1) ?? 0,
        y: Gn(n, 2) ?? 0,
        z: Gn(n, 3) ?? 0,
        visibility: Gn(n, 4) ?? 0
    });
    return e;
}
function Do(t) {
    return Array.from(t, (t)=>127 < t ? t - 256 : t);
}
function No(t, e) {
    if (t.length !== e.length) throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${t.length} vs. ${e.length}).`);
    let n = 0, r = 0, i = 0;
    for(let s = 0; s < t.length; s++)n += t[s] * e[s], r += t[s] * t[s], i += e[s] * e[s];
    if (0 >= r || 0 >= i) throw Error("Cannot compute cosine similarity on embedding with 0 norm.");
    return n / Math.sqrt(r * i);
}
let Bo;
_i[516587230] = [
    0,
    Os,
    po,
    mo,
    Ir
];
const Go = new Uint8Array([
    0,
    97,
    115,
    109,
    1,
    0,
    0,
    0,
    1,
    5,
    1,
    96,
    0,
    1,
    123,
    3,
    2,
    1,
    0,
    10,
    10,
    1,
    8,
    0,
    65,
    0,
    253,
    15,
    253,
    98,
    11
]);
async function jo() {
    if (void 0 === Bo) try {
        await WebAssembly.instantiate(Go), Bo = !0;
    } catch  {
        Bo = !1;
    }
    return Bo;
}
async function Vo(t, e = "") {
    const n = await jo() ? "wasm_internal" : "wasm_nosimd_internal";
    return {
        wasmLoaderPath: `${e}/${t}_${n}.js`,
        wasmBinaryPath: `${e}/${t}_${n}.wasm`
    };
}
var Xo = class {
};
function Ho() {
    var t = navigator;
    return "undefined" != typeof OffscreenCanvas && (!function(t = navigator) {
        return (t = t.userAgent).includes("Safari") && !t.includes("Chrome");
    }(t) || !!((t = t.userAgent.match(/Version\/([\d]+).*Safari/)) && 1 <= t.length && 17 <= Number(t[1])));
}
async function Wo(t) {
    if ("function" != typeof importScripts) {
        const e = document.createElement("script");
        return e.src = t.toString(), e.crossOrigin = "anonymous", new Promise((t, n)=>{
            e.addEventListener("load", ()=>{
                t();
            }, !1), e.addEventListener("error", (t)=>{
                n(t);
            }, !1), document.body.appendChild(e);
        });
    }
    importScripts(t.toString());
}
function zo(t) {
    return void 0 !== t.videoWidth ? [
        t.videoWidth,
        t.videoHeight
    ] : void 0 !== t.naturalWidth ? [
        t.naturalWidth,
        t.naturalHeight
    ] : void 0 !== t.displayWidth ? [
        t.displayWidth,
        t.displayHeight
    ] : [
        t.width,
        t.height
    ];
}
function Ko(t, e, n) {
    t.m || console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"), n(e = t.i.stringToNewUTF8(e)), t.i._free(e);
}
function Yo(t, e, n) {
    if (!t.i.canvas) throw Error("No OpenGL canvas configured.");
    if (n ? t.i._bindTextureToStream(n) : t.i._bindTextureToCanvas(), !(n = t.i.canvas.getContext("webgl2") || t.i.canvas.getContext("webgl"))) throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");
    t.i.gpuOriginForWebTexturesIsBottomLeft && n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL, !0), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, e), t.i.gpuOriginForWebTexturesIsBottomLeft && n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL, !1);
    const [r, i] = zo(e);
    return !t.l || r === t.i.canvas.width && i === t.i.canvas.height || (t.i.canvas.width = r, t.i.canvas.height = i), [
        r,
        i
    ];
}
function $o(t, e, n) {
    t.m || console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");
    const r = new Uint32Array(e.length);
    for(let n = 0; n < e.length; n++)r[n] = t.i.stringToNewUTF8(e[n]);
    e = t.i._malloc(4 * r.length), t.i.HEAPU32.set(r, e >> 2), n(e);
    for (const e of r)t.i._free(e);
    t.i._free(e);
}
function qo(t, e, n) {
    t.i.simpleListeners = t.i.simpleListeners || {}, t.i.simpleListeners[e] = n;
}
function Jo(t, e, n) {
    let r = [];
    t.i.simpleListeners = t.i.simpleListeners || {}, t.i.simpleListeners[e] = (t, e, i)=>{
        e ? (n(r, i), r = []) : r.push(t);
    };
}
Xo.forVisionTasks = function(t) {
    return Vo("vision", t);
}, Xo.forTextTasks = function(t) {
    return Vo("text", t);
}, Xo.forGenAiExperimentalTasks = function(t) {
    return Vo("genai_experimental", t);
}, Xo.forGenAiTasks = function(t) {
    return Vo("genai", t);
}, Xo.forAudioTasks = function(t) {
    return Vo("audio", t);
}, Xo.isSimdSupported = function() {
    return jo();
};
async function Zo(t, e, n, r) {
    return t = await (async (t, e, n, r, i)=>{
        if (e && await Wo(e), !self.ModuleFactory) throw Error("ModuleFactory not set.");
        if (n && (await Wo(n), !self.ModuleFactory)) throw Error("ModuleFactory not set.");
        return self.Module && i && ((e = self.Module).locateFile = i.locateFile, i.mainScriptUrlOrBlob && (e.mainScriptUrlOrBlob = i.mainScriptUrlOrBlob)), i = await self.ModuleFactory(self.Module || i), self.ModuleFactory = self.Module = void 0, new t(i, r);
    })(t, n.wasmLoaderPath, n.assetLoaderPath, e, {
        locateFile: (t)=>t.endsWith(".wasm") ? n.wasmBinaryPath.toString() : n.assetBinaryPath && t.endsWith(".data") ? n.assetBinaryPath.toString() : t
    }), await t.o(r), t;
}
function Qo(t, e) {
    const n = Rn(t.baseOptions, Ms, 1) || new Ms;
    "string" == typeof e ? (dn(n, 2, Me(e)), dn(n, 1)) : e instanceof Uint8Array && (dn(n, 1, ae(e, !1, !1)), dn(n, 2)), Cn(t.baseOptions, 0, 1, n);
}
function ta(t) {
    try {
        const e = t.K.length;
        if (1 === e) throw Error(t.K[0].message);
        if (1 < e) throw Error("Encountered multiple errors: " + t.K.map((t)=>t.message).join(", "));
    } finally{
        t.K = [];
    }
}
function ea(t, e) {
    t.J = Math.max(t.J, e);
}
function na(t, e) {
    t.C = new Li, ki(t.C, "PassThroughCalculator"), xi(t.C, "free_memory"), Si(t.C, "free_memory_unused_out"), Ii(e, "free_memory"), Oi(e, t.C);
}
function ra(t, e) {
    xi(t.C, e), Si(t.C, e + "_unused_out");
}
function ia(t) {
    t.g.addBoolToStream(!0, "free_memory", t.J);
}
var sa = class {
    constructor(t){
        this.g = t, this.K = [], this.J = 0, this.g.setAutoRenderToScreen(!1);
    }
    l(t, e = !0) {
        if (e) {
            const e = t.baseOptions || {};
            if (t.baseOptions?.modelAssetBuffer && t.baseOptions?.modelAssetPath) throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");
            if (!(Rn(this.baseOptions, Ms, 1)?.g() || Rn(this.baseOptions, Ms, 1)?.h() || t.baseOptions?.modelAssetBuffer || t.baseOptions?.modelAssetPath)) throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");
            if (function(t, e) {
                let n = Rn(t.baseOptions, Fs, 3);
                if (!n) {
                    var r = n = new Fs, i = new pi;
                    On(r, 4, Rs, i);
                }
                "delegate" in e && ("GPU" === e.delegate ? (e = n, r = new li, On(e, 2, Rs, r)) : (e = n, r = new pi, On(e, 4, Rs, r))), Cn(t.baseOptions, 0, 3, n);
            }(this, e), e.modelAssetPath) return fetch(e.modelAssetPath.toString()).then((t)=>{
                if (t.ok) return t.arrayBuffer();
                throw Error(`Failed to fetch model: ${e.modelAssetPath} (${t.status})`);
            }).then((t)=>{
                try {
                    this.g.i.FS_unlink("/model.dat");
                } catch  {}
                this.g.i.FS_createDataFile("/", "model.dat", new Uint8Array(t), !0, !1, !1), Qo(this, "/model.dat"), this.m(), this.L();
            });
            if (e.modelAssetBuffer instanceof Uint8Array) Qo(this, e.modelAssetBuffer);
            else if (e.modelAssetBuffer) return (async function(t) {
                const e = [];
                for(var n = 0;;){
                    const { done: r, value: i } = await t.read();
                    if (r) break;
                    e.push(i), n += i.length;
                }
                if (0 === e.length) return new Uint8Array(0);
                if (1 === e.length) return e[0];
                t = new Uint8Array(n), n = 0;
                for (const r of e)t.set(r, n), n += r.length;
                return t;
            })(e.modelAssetBuffer).then((t)=>{
                Qo(this, t), this.m(), this.L();
            });
        }
        return this.m(), this.L(), Promise.resolve();
    }
    L() {}
    fa() {
        let t;
        if (this.g.fa((e)=>{
            t = Bi(e);
        }), !t) throw Error("Failed to retrieve CalculatorGraphConfig");
        return t;
    }
    setGraph(t, e) {
        this.g.attachErrorListener((t, e)=>{
            this.K.push(Error(e));
        }), this.g.Ma(), this.g.setGraph(t, e), this.C = void 0, ta(this);
    }
    finishProcessing() {
        this.g.finishProcessing(), ta(this);
    }
    close() {
        this.C = void 0, this.g.closeGraph();
    }
};
function oa(t, e) {
    if (!t) throw Error(`Unable to obtain required WebGL resource: ${e}`);
    return t;
}
sa.prototype.close = sa.prototype.close, function(e, n) {
    e = e.split(".");
    var r, i = t;
    e[0] in i || void 0 === i.execScript || i.execScript("var " + e[0]);
    for(; e.length && (r = e.shift());)e.length || void 0 === n ? i = i[r] && i[r] !== Object.prototype[r] ? i[r] : i[r] = {} : i[r] = n;
}("TaskRunner", sa);
class aa {
    constructor(t, e, n, r){
        this.g = t, this.h = e, this.m = n, this.l = r;
    }
    bind() {
        this.g.bindVertexArray(this.h);
    }
    close() {
        this.g.deleteVertexArray(this.h), this.g.deleteBuffer(this.m), this.g.deleteBuffer(this.l);
    }
}
function ha(t, e, n) {
    const r = t.g;
    if (n = oa(r.createShader(n), "Failed to create WebGL shader"), r.shaderSource(n, e), r.compileShader(n), !r.getShaderParameter(n, r.COMPILE_STATUS)) throw Error(`Could not compile WebGL shader: ${r.getShaderInfoLog(n)}`);
    return r.attachShader(t.h, n), n;
}
function ca(t, e) {
    const n = t.g, r = oa(n.createVertexArray(), "Failed to create vertex array");
    n.bindVertexArray(r);
    const i = oa(n.createBuffer(), "Failed to create buffer");
    n.bindBuffer(n.ARRAY_BUFFER, i), n.enableVertexAttribArray(t.K), n.vertexAttribPointer(t.K, 2, n.FLOAT, !1, 0, 0), n.bufferData(n.ARRAY_BUFFER, new Float32Array([
        -1,
        -1,
        -1,
        1,
        1,
        1,
        1,
        -1
    ]), n.STATIC_DRAW);
    const s = oa(n.createBuffer(), "Failed to create buffer");
    return n.bindBuffer(n.ARRAY_BUFFER, s), n.enableVertexAttribArray(t.J), n.vertexAttribPointer(t.J, 2, n.FLOAT, !1, 0, 0), n.bufferData(n.ARRAY_BUFFER, new Float32Array(e ? [
        0,
        1,
        0,
        0,
        1,
        0,
        1,
        1
    ] : [
        0,
        0,
        0,
        1,
        1,
        1,
        1,
        0
    ]), n.STATIC_DRAW), n.bindBuffer(n.ARRAY_BUFFER, null), n.bindVertexArray(null), new aa(n, r, i, s);
}
function ua(t, e) {
    if (t.g) {
        if (e !== t.g) throw Error("Cannot change GL context once initialized");
    } else t.g = e;
}
function la(t, e, n, r) {
    return ua(t, e), t.h || (t.m(), t.D()), n ? (t.v || (t.v = ca(t, !0)), n = t.v) : (t.A || (t.A = ca(t, !1)), n = t.A), e.useProgram(t.h), n.bind(), t.l(), t = r(), n.g.bindVertexArray(null), t;
}
function da(t, e, n) {
    return ua(t, e), t = oa(e.createTexture(), "Failed to create texture"), e.bindTexture(e.TEXTURE_2D, t), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, n ?? e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, n ?? e.LINEAR), e.bindTexture(e.TEXTURE_2D, null), t;
}
function fa(t, e, n) {
    ua(t, e), t.u || (t.u = oa(e.createFramebuffer(), "Failed to create framebuffe.")), e.bindFramebuffer(e.FRAMEBUFFER, t.u), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, n, 0);
}
function pa(t) {
    t.g?.bindFramebuffer(t.g.FRAMEBUFFER, null);
}
var ga = class {
    H() {
        return "\n  precision mediump float;\n  varying vec2 vTex;\n  uniform sampler2D inputTexture;\n  void main() {\n    gl_FragColor = texture2D(inputTexture, vTex);\n  }\n ";
    }
    m() {
        const t = this.g;
        if (this.h = oa(t.createProgram(), "Failed to create WebGL program"), this.ba = ha(this, "\n  attribute vec2 aVertex;\n  attribute vec2 aTex;\n  varying vec2 vTex;\n  void main(void) {\n    gl_Position = vec4(aVertex, 0.0, 1.0);\n    vTex = aTex;\n  }", t.VERTEX_SHADER), this.aa = ha(this, this.H(), t.FRAGMENT_SHADER), t.linkProgram(this.h), !t.getProgramParameter(this.h, t.LINK_STATUS)) throw Error(`Error during program linking: ${t.getProgramInfoLog(this.h)}`);
        this.K = t.getAttribLocation(this.h, "aVertex"), this.J = t.getAttribLocation(this.h, "aTex");
    }
    D() {}
    l() {}
    close() {
        if (this.h) {
            const t = this.g;
            t.deleteProgram(this.h), t.deleteShader(this.ba), t.deleteShader(this.aa);
        }
        this.u && this.g.deleteFramebuffer(this.u), this.A && this.A.close(), this.v && this.v.close();
    }
};
var ma = class extends ga {
    H() {
        return "\n  precision mediump float;\n  uniform sampler2D backgroundTexture;\n  uniform sampler2D maskTexture;\n  uniform sampler2D colorMappingTexture;\n  varying vec2 vTex;\n  void main() {\n    vec4 backgroundColor = texture2D(backgroundTexture, vTex);\n    float category = texture2D(maskTexture, vTex).r;\n    vec4 categoryColor = texture2D(colorMappingTexture, vec2(category, 0.0));\n    gl_FragColor = mix(backgroundColor, categoryColor, categoryColor.a);\n  }\n ";
    }
    D() {
        const t = this.g;
        t.activeTexture(t.TEXTURE1), this.C = da(this, t, t.LINEAR), t.activeTexture(t.TEXTURE2), this.j = da(this, t, t.NEAREST);
    }
    m() {
        super.m();
        const t = this.g;
        this.M = oa(t.getUniformLocation(this.h, "backgroundTexture"), "Uniform location"), this.V = oa(t.getUniformLocation(this.h, "colorMappingTexture"), "Uniform location"), this.L = oa(t.getUniformLocation(this.h, "maskTexture"), "Uniform location");
    }
    l() {
        super.l();
        const t = this.g;
        t.uniform1i(this.L, 0), t.uniform1i(this.M, 1), t.uniform1i(this.V, 2);
    }
    close() {
        this.C && this.g.deleteTexture(this.C), this.j && this.g.deleteTexture(this.j), super.close();
    }
}, ya = class extends ga {
    H() {
        return "\n  precision mediump float;\n  uniform sampler2D maskTexture;\n  uniform sampler2D defaultTexture;\n  uniform sampler2D overlayTexture;\n  varying vec2 vTex;\n  void main() {\n    float confidence = texture2D(maskTexture, vTex).r;\n    vec4 defaultColor = texture2D(defaultTexture, vTex);\n    vec4 overlayColor = texture2D(overlayTexture, vTex);\n    // Apply the alpha from the overlay and merge in the default color\n    overlayColor = mix(defaultColor, overlayColor, overlayColor.a);\n    gl_FragColor = mix(defaultColor, overlayColor, confidence);\n  }\n ";
    }
    D() {
        const t = this.g;
        t.activeTexture(t.TEXTURE1), this.j = da(this, t), t.activeTexture(t.TEXTURE2), this.C = da(this, t);
    }
    m() {
        super.m();
        const t = this.g;
        this.L = oa(t.getUniformLocation(this.h, "defaultTexture"), "Uniform location"), this.M = oa(t.getUniformLocation(this.h, "overlayTexture"), "Uniform location"), this.I = oa(t.getUniformLocation(this.h, "maskTexture"), "Uniform location");
    }
    l() {
        super.l();
        const t = this.g;
        t.uniform1i(this.I, 0), t.uniform1i(this.L, 1), t.uniform1i(this.M, 2);
    }
    close() {
        this.j && this.g.deleteTexture(this.j), this.C && this.g.deleteTexture(this.C), super.close();
    }
};
function _a(t, e) {
    switch(e){
        case 0:
            return t.g.find((t)=>t instanceof Uint8Array);
        case 1:
            return t.g.find((t)=>t instanceof Float32Array);
        case 2:
            return t.g.find((t)=>"undefined" != typeof WebGLTexture && t instanceof WebGLTexture);
        default:
            throw Error(`Type is not supported: ${e}`);
    }
}
function va(t) {
    var e = _a(t, 1);
    if (!e) {
        if (e = _a(t, 0)) e = new Float32Array(e).map((t)=>t / 255);
        else {
            e = new Float32Array(t.width * t.height);
            const r = wa(t);
            var n = Aa(t);
            if (fa(n, r, Ea(t)), "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in self.document) {
                n = new Float32Array(t.width * t.height * 4), r.readPixels(0, 0, t.width, t.height, r.RGBA, r.FLOAT, n);
                for(let t = 0, r = 0; t < e.length; ++t, r += 4)e[t] = n[r];
            } else r.readPixels(0, 0, t.width, t.height, r.RED, r.FLOAT, e);
        }
        t.g.push(e);
    }
    return e;
}
function Ea(t) {
    let e = _a(t, 2);
    if (!e) {
        const n = wa(t);
        e = ba(t);
        const r = va(t), i = Ta(t);
        n.texImage2D(n.TEXTURE_2D, 0, i, t.width, t.height, 0, n.RED, n.FLOAT, r), ka(t);
    }
    return e;
}
function wa(t) {
    if (!t.canvas) throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");
    return t.h || (t.h = oa(t.canvas.getContext("webgl2"), "You cannot use a canvas that is already bound to a different type of rendering context.")), t.h;
}
function Ta(t) {
    if (t = wa(t), !xa) {
        if (t.getExtension("EXT_color_buffer_float") && t.getExtension("OES_texture_float_linear") && t.getExtension("EXT_float_blend")) xa = t.R32F;
        else {
            if (!t.getExtension("EXT_color_buffer_half_float")) throw Error("GPU does not fully support 4-channel float32 or float16 formats");
            xa = t.R16F;
        }
    }
    return xa;
}
function Aa(t) {
    return t.l || (t.l = new ga), t.l;
}
function ba(t) {
    const e = wa(t);
    e.viewport(0, 0, t.width, t.height), e.activeTexture(e.TEXTURE0);
    let n = _a(t, 2);
    return n || (n = da(Aa(t), e, t.m ? e.LINEAR : e.NEAREST), t.g.push(n), t.j = !0), e.bindTexture(e.TEXTURE_2D, n), n;
}
function ka(t) {
    t.h.bindTexture(t.h.TEXTURE_2D, null);
}
var xa, Sa = class {
    constructor(t, e, n, r, i, s, o){
        this.g = t, this.m = e, this.j = n, this.canvas = r, this.l = i, this.width = s, this.height = o, this.j && 0 === --La && console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.");
    }
    Ha() {
        return !!_a(this, 0);
    }
    la() {
        return !!_a(this, 1);
    }
    R() {
        return !!_a(this, 2);
    }
    ka() {
        var t, e;
        return (e = _a(t = this, 0)) || (e = va(t), e = new Uint8Array(e.map((t)=>255 * t)), t.g.push(e)), e;
    }
    ja() {
        return va(this);
    }
    O() {
        return Ea(this);
    }
    clone() {
        const t = [];
        for (const e of this.g){
            let n;
            if (e instanceof Uint8Array) n = new Uint8Array(e);
            else if (e instanceof Float32Array) n = new Float32Array(e);
            else {
                if (!(e instanceof WebGLTexture)) throw Error(`Type is not supported: ${e}`);
                {
                    const t = wa(this), e = Aa(this);
                    t.activeTexture(t.TEXTURE1), n = da(e, t, this.m ? t.LINEAR : t.NEAREST), t.bindTexture(t.TEXTURE_2D, n);
                    const r = Ta(this);
                    t.texImage2D(t.TEXTURE_2D, 0, r, this.width, this.height, 0, t.RED, t.FLOAT, null), t.bindTexture(t.TEXTURE_2D, null), fa(e, t, n), la(e, t, !1, ()=>{
                        ba(this), t.clearColor(0, 0, 0, 0), t.clear(t.COLOR_BUFFER_BIT), t.drawArrays(t.TRIANGLE_FAN, 0, 4), ka(this);
                    }), pa(e), ka(this);
                }
            }
            t.push(n);
        }
        return new Sa(t, this.m, this.R(), this.canvas, this.l, this.width, this.height);
    }
    close() {
        this.j && wa(this).deleteTexture(_a(this, 2)), La = -1;
    }
};
Sa.prototype.close = Sa.prototype.close, Sa.prototype.clone = Sa.prototype.clone, Sa.prototype.getAsWebGLTexture = Sa.prototype.O, Sa.prototype.getAsFloat32Array = Sa.prototype.ja, Sa.prototype.getAsUint8Array = Sa.prototype.ka, Sa.prototype.hasWebGLTexture = Sa.prototype.R, Sa.prototype.hasFloat32Array = Sa.prototype.la, Sa.prototype.hasUint8Array = Sa.prototype.Ha;
var La = 250;
const Fa = {
    color: "white",
    lineWidth: 4,
    radius: 6
};
function Ra(t) {
    return {
        ...Fa,
        fillColor: (t = t || {}).color,
        ...t
    };
}
function Ma(t, e) {
    return t instanceof Function ? t(e) : t;
}
function Pa(t, e, n) {
    return Math.max(Math.min(e, n), Math.min(Math.max(e, n), t));
}
function Ca(t) {
    if (!t.l) throw Error("CPU rendering requested but CanvasRenderingContext2D not provided.");
    return t.l;
}
function Oa(t) {
    if (!t.j) throw Error("GPU rendering requested but WebGL2RenderingContext not provided.");
    return t.j;
}
function Ia(t, e, n) {
    if (e.R()) n(e.O());
    else {
        const r = e.la() ? e.ja() : e.ka();
        t.m = t.m ?? new ga;
        const i = Oa(t);
        n((t = new Sa([
            r
        ], e.m, !1, i.canvas, t.m, e.width, e.height)).O()), t.close();
    }
}
function Ua(t, e, n, r) {
    const i = function(t) {
        return t.g || (t.g = new ma), t.g;
    }(t), s = Oa(t), o = Array.isArray(n) ? new ImageData(new Uint8ClampedArray(n), 1, 1) : n;
    la(i, s, !0, ()=>{
        !function(t, e, n, r) {
            const i = t.g;
            if (i.activeTexture(i.TEXTURE0), i.bindTexture(i.TEXTURE_2D, e), i.activeTexture(i.TEXTURE1), i.bindTexture(i.TEXTURE_2D, t.C), i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, i.RGBA, i.UNSIGNED_BYTE, n), t.I && function(t, e) {
                if (t !== e) return !1;
                t = t.entries(), e = e.entries();
                for (const [r, i] of t){
                    t = r;
                    const s = i;
                    var n = e.next();
                    if (n.done) return !1;
                    const [o, a] = n.value;
                    if (n = a, t !== o || s[0] !== n[0] || s[1] !== n[1] || s[2] !== n[2] || s[3] !== n[3]) return !1;
                }
                return !!e.next().done;
            }(t.I, r)) i.activeTexture(i.TEXTURE2), i.bindTexture(i.TEXTURE_2D, t.j);
            else {
                t.I = r;
                const e = Array(1024).fill(0);
                r.forEach((t, n)=>{
                    if (4 !== t.length) throw Error(`Color at index ${n} is not a four-channel value.`);
                    e[4 * n] = t[0], e[4 * n + 1] = t[1], e[4 * n + 2] = t[2], e[4 * n + 3] = t[3];
                }), i.activeTexture(i.TEXTURE2), i.bindTexture(i.TEXTURE_2D, t.j), i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, 256, 1, 0, i.RGBA, i.UNSIGNED_BYTE, new Uint8Array(e));
            }
        }(i, e, o, r), s.clearColor(0, 0, 0, 0), s.clear(s.COLOR_BUFFER_BIT), s.drawArrays(s.TRIANGLE_FAN, 0, 4);
        const t = i.g;
        t.activeTexture(t.TEXTURE0), t.bindTexture(t.TEXTURE_2D, null), t.activeTexture(t.TEXTURE1), t.bindTexture(t.TEXTURE_2D, null), t.activeTexture(t.TEXTURE2), t.bindTexture(t.TEXTURE_2D, null);
    });
}
function Da(t, e, n, r) {
    const i = Oa(t), s = function(t) {
        return t.h || (t.h = new ya), t.h;
    }(t), o = Array.isArray(n) ? new ImageData(new Uint8ClampedArray(n), 1, 1) : n, a = Array.isArray(r) ? new ImageData(new Uint8ClampedArray(r), 1, 1) : r;
    la(s, i, !0, ()=>{
        var t = s.g;
        t.activeTexture(t.TEXTURE0), t.bindTexture(t.TEXTURE_2D, e), t.activeTexture(t.TEXTURE1), t.bindTexture(t.TEXTURE_2D, s.j), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, o), t.activeTexture(t.TEXTURE2), t.bindTexture(t.TEXTURE_2D, s.C), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, a), i.clearColor(0, 0, 0, 0), i.clear(i.COLOR_BUFFER_BIT), i.drawArrays(i.TRIANGLE_FAN, 0, 4), i.bindTexture(i.TEXTURE_2D, null), (t = s.g).activeTexture(t.TEXTURE0), t.bindTexture(t.TEXTURE_2D, null), t.activeTexture(t.TEXTURE1), t.bindTexture(t.TEXTURE_2D, null), t.activeTexture(t.TEXTURE2), t.bindTexture(t.TEXTURE_2D, null);
    });
}
var Na = class {
    constructor(t, e){
        t instanceof CanvasRenderingContext2D || t instanceof OffscreenCanvasRenderingContext2D ? (this.l = t, this.j = e) : this.j = t;
    }
    Aa(t, e) {
        if (t) {
            var n = Ca(this);
            e = Ra(e), n.save();
            var r = n.canvas, i = 0;
            for (const s of t)n.fillStyle = Ma(e.fillColor, {
                index: i,
                from: s
            }), n.strokeStyle = Ma(e.color, {
                index: i,
                from: s
            }), n.lineWidth = Ma(e.lineWidth, {
                index: i,
                from: s
            }), (t = new Path2D).arc(s.x * r.width, s.y * r.height, Ma(e.radius, {
                index: i,
                from: s
            }), 0, 2 * Math.PI), n.fill(t), n.stroke(t), ++i;
            n.restore();
        }
    }
    za(t, e, n) {
        if (t && e) {
            var r = Ca(this);
            n = Ra(n), r.save();
            var i = r.canvas, s = 0;
            for (const o of e){
                r.beginPath(), e = t[o.start];
                const a = t[o.end];
                e && a && (r.strokeStyle = Ma(n.color, {
                    index: s,
                    from: e,
                    to: a
                }), r.lineWidth = Ma(n.lineWidth, {
                    index: s,
                    from: e,
                    to: a
                }), r.moveTo(e.x * i.width, e.y * i.height), r.lineTo(a.x * i.width, a.y * i.height)), ++s, r.stroke();
            }
            r.restore();
        }
    }
    wa(t, e) {
        const n = Ca(this);
        e = Ra(e), n.save(), n.beginPath(), n.lineWidth = Ma(e.lineWidth, {}), n.strokeStyle = Ma(e.color, {}), n.fillStyle = Ma(e.fillColor, {}), n.moveTo(t.originX, t.originY), n.lineTo(t.originX + t.width, t.originY), n.lineTo(t.originX + t.width, t.originY + t.height), n.lineTo(t.originX, t.originY + t.height), n.lineTo(t.originX, t.originY), n.stroke(), n.fill(), n.restore();
    }
    xa(t, e, n = [
        0,
        0,
        0,
        255
    ]) {
        this.l ? function(t, e, n, r) {
            const i = Oa(t);
            Ia(t, e, (e)=>{
                Ua(t, e, n, r), (e = Ca(t)).drawImage(i.canvas, 0, 0, e.canvas.width, e.canvas.height);
            });
        }(this, t, n, e) : Ua(this, t.O(), n, e);
    }
    ya(t, e, n) {
        this.l ? function(t, e, n, r) {
            const i = Oa(t);
            Ia(t, e, (e)=>{
                Da(t, e, n, r), (e = Ca(t)).drawImage(i.canvas, 0, 0, e.canvas.width, e.canvas.height);
            });
        }(this, t, e, n) : Da(this, t.O(), e, n);
    }
    close() {
        this.g?.close(), this.g = void 0, this.h?.close(), this.h = void 0, this.m?.close(), this.m = void 0;
    }
};
function Ba(t, e) {
    switch(e){
        case 0:
            return t.g.find((t)=>t instanceof ImageData);
        case 1:
            return t.g.find((t)=>"undefined" != typeof ImageBitmap && t instanceof ImageBitmap);
        case 2:
            return t.g.find((t)=>"undefined" != typeof WebGLTexture && t instanceof WebGLTexture);
        default:
            throw Error(`Type is not supported: ${e}`);
    }
}
function Ga(t) {
    var e = Ba(t, 0);
    if (!e) {
        e = Va(t);
        const n = Xa(t), r = new Uint8Array(t.width * t.height * 4);
        fa(n, e, ja(t)), e.readPixels(0, 0, t.width, t.height, e.RGBA, e.UNSIGNED_BYTE, r), pa(n), e = new ImageData(new Uint8ClampedArray(r.buffer), t.width, t.height), t.g.push(e);
    }
    return e;
}
function ja(t) {
    let e = Ba(t, 2);
    if (!e) {
        const n = Va(t);
        e = Ha(t);
        const r = Ba(t, 1) || Ga(t);
        n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, r), Wa(t);
    }
    return e;
}
function Va(t) {
    if (!t.canvas) throw Error("Conversion to different image formats require that a canvas is passed when iniitializing the image.");
    return t.h || (t.h = oa(t.canvas.getContext("webgl2"), "You cannot use a canvas that is already bound to a different type of rendering context.")), t.h;
}
function Xa(t) {
    return t.l || (t.l = new ga), t.l;
}
function Ha(t) {
    const e = Va(t);
    e.viewport(0, 0, t.width, t.height), e.activeTexture(e.TEXTURE0);
    let n = Ba(t, 2);
    return n || (n = da(Xa(t), e), t.g.push(n), t.m = !0), e.bindTexture(e.TEXTURE_2D, n), n;
}
function Wa(t) {
    t.h.bindTexture(t.h.TEXTURE_2D, null);
}
function za(t) {
    const e = Va(t);
    return la(Xa(t), e, !0, ()=>(function(t, e) {
            const n = t.canvas;
            if (n.width === t.width && n.height === t.height) return e();
            const r = n.width, i = n.height;
            return n.width = t.width, n.height = t.height, t = e(), n.width = r, n.height = i, t;
        })(t, ()=>{
            if (e.bindFramebuffer(e.FRAMEBUFFER, null), e.clearColor(0, 0, 0, 0), e.clear(e.COLOR_BUFFER_BIT), e.drawArrays(e.TRIANGLE_FAN, 0, 4), !(t.canvas instanceof OffscreenCanvas)) throw Error("Conversion to ImageBitmap requires that the MediaPipe Tasks is initialized with an OffscreenCanvas");
            return t.canvas.transferToImageBitmap();
        }));
}
Na.prototype.close = Na.prototype.close, Na.prototype.drawConfidenceMask = Na.prototype.ya, Na.prototype.drawCategoryMask = Na.prototype.xa, Na.prototype.drawBoundingBox = Na.prototype.wa, Na.prototype.drawConnectors = Na.prototype.za, Na.prototype.drawLandmarks = Na.prototype.Aa, Na.lerp = function(t, e, n, r, i) {
    return Pa(r * (1 - (t - e) / (n - e)) + i * (1 - (n - t) / (n - e)), r, i);
}, Na.clamp = Pa;
var Ka = class {
    constructor(t, e, n, r, i, s, o){
        this.g = t, this.j = e, this.m = n, this.canvas = r, this.l = i, this.width = s, this.height = o, (this.j || this.m) && 0 === --Ya && console.error("You seem to be creating MPImage instances without invoking .close(). This leaks resources.");
    }
    Ga() {
        return !!Ba(this, 0);
    }
    ma() {
        return !!Ba(this, 1);
    }
    R() {
        return !!Ba(this, 2);
    }
    Ea() {
        return Ga(this);
    }
    Da() {
        var t = Ba(this, 1);
        return t || (ja(this), Ha(this), t = za(this), Wa(this), this.g.push(t), this.j = !0), t;
    }
    O() {
        return ja(this);
    }
    clone() {
        const t = [];
        for (const e of this.g){
            let n;
            if (e instanceof ImageData) n = new ImageData(e.data, this.width, this.height);
            else if (e instanceof WebGLTexture) {
                const t = Va(this), e = Xa(this);
                t.activeTexture(t.TEXTURE1), n = da(e, t), t.bindTexture(t.TEXTURE_2D, n), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, this.width, this.height, 0, t.RGBA, t.UNSIGNED_BYTE, null), t.bindTexture(t.TEXTURE_2D, null), fa(e, t, n), la(e, t, !1, ()=>{
                    Ha(this), t.clearColor(0, 0, 0, 0), t.clear(t.COLOR_BUFFER_BIT), t.drawArrays(t.TRIANGLE_FAN, 0, 4), Wa(this);
                }), pa(e), Wa(this);
            } else {
                if (!(e instanceof ImageBitmap)) throw Error(`Type is not supported: ${e}`);
                ja(this), Ha(this), n = za(this), Wa(this);
            }
            t.push(n);
        }
        return new Ka(t, this.ma(), this.R(), this.canvas, this.l, this.width, this.height);
    }
    close() {
        this.j && Ba(this, 1).close(), this.m && Va(this).deleteTexture(Ba(this, 2)), Ya = -1;
    }
};
Ka.prototype.close = Ka.prototype.close, Ka.prototype.clone = Ka.prototype.clone, Ka.prototype.getAsWebGLTexture = Ka.prototype.O, Ka.prototype.getAsImageBitmap = Ka.prototype.Da, Ka.prototype.getAsImageData = Ka.prototype.Ea, Ka.prototype.hasWebGLTexture = Ka.prototype.R, Ka.prototype.hasImageBitmap = Ka.prototype.ma, Ka.prototype.hasImageData = Ka.prototype.Ga;
var Ya = 250;
function $a(...t) {
    return t.map(([t, e])=>({
            start: t,
            end: e
        }));
}
const qa = function(t) {
    return class extends t {
        Ma() {
            this.i._registerModelResourcesGraphService();
        }
    };
}((Ja = class {
    constructor(t, e){
        this.l = !0, this.i = t, this.g = null, this.h = 0, this.m = "function" == typeof this.i._addIntToInputStream, void 0 !== e ? this.i.canvas = e : Ho() ? this.i.canvas = new OffscreenCanvas(1, 1) : (console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."), this.i.canvas = document.createElement("canvas"));
    }
    async initializeGraph(t) {
        const e = await (await fetch(t)).arrayBuffer();
        t = !(t.endsWith(".pbtxt") || t.endsWith(".textproto")), this.setGraph(new Uint8Array(e), t);
    }
    setGraphFromString(t) {
        this.setGraph((new TextEncoder).encode(t), !1);
    }
    setGraph(t, e) {
        const n = t.length, r = this.i._malloc(n);
        this.i.HEAPU8.set(t, r), e ? this.i._changeBinaryGraph(n, r) : this.i._changeTextGraph(n, r), this.i._free(r);
    }
    configureAudio(t, e, n, r, i) {
        this.i._configureAudio || console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'), Ko(this, r || "input_audio", (r)=>{
            Ko(this, i = i || "audio_header", (i)=>{
                this.i._configureAudio(r, i, t, e, n);
            });
        });
    }
    setAutoResizeCanvas(t) {
        this.l = t;
    }
    setAutoRenderToScreen(t) {
        this.i._setAutoRenderToScreen(t);
    }
    setGpuBufferVerticalFlip(t) {
        this.i.gpuOriginForWebTexturesIsBottomLeft = t;
    }
    fa(t) {
        qo(this, "__graph_config__", (e)=>{
            t(e);
        }), Ko(this, "__graph_config__", (t)=>{
            this.i._getGraphConfig(t, void 0);
        }), delete this.i.simpleListeners.__graph_config__;
    }
    attachErrorListener(t) {
        this.i.errorListener = t;
    }
    attachEmptyPacketListener(t, e) {
        this.i.emptyPacketListeners = this.i.emptyPacketListeners || {}, this.i.emptyPacketListeners[t] = e;
    }
    addAudioToStream(t, e, n) {
        this.addAudioToStreamWithShape(t, 0, 0, e, n);
    }
    addAudioToStreamWithShape(t, e, n, r, i) {
        const s = 4 * t.length;
        this.h !== s && (this.g && this.i._free(this.g), this.g = this.i._malloc(s), this.h = s), this.i.HEAPF32.set(t, this.g / 4), Ko(this, r, (t)=>{
            this.i._addAudioToInputStream(this.g, e, n, t, i);
        });
    }
    addGpuBufferToStream(t, e, n) {
        Ko(this, e, (e)=>{
            const [r, i] = Yo(this, t, e);
            this.i._addBoundTextureToStream(e, r, i, n);
        });
    }
    addBoolToStream(t, e, n) {
        Ko(this, e, (e)=>{
            this.i._addBoolToInputStream(t, e, n);
        });
    }
    addDoubleToStream(t, e, n) {
        Ko(this, e, (e)=>{
            this.i._addDoubleToInputStream(t, e, n);
        });
    }
    addFloatToStream(t, e, n) {
        Ko(this, e, (e)=>{
            this.i._addFloatToInputStream(t, e, n);
        });
    }
    addIntToStream(t, e, n) {
        Ko(this, e, (e)=>{
            this.i._addIntToInputStream(t, e, n);
        });
    }
    addUintToStream(t, e, n) {
        Ko(this, e, (e)=>{
            this.i._addUintToInputStream(t, e, n);
        });
    }
    addStringToStream(t, e, n) {
        Ko(this, e, (e)=>{
            Ko(this, t, (t)=>{
                this.i._addStringToInputStream(t, e, n);
            });
        });
    }
    addStringRecordToStream(t, e, n) {
        Ko(this, e, (e)=>{
            $o(this, Object.keys(t), (r)=>{
                $o(this, Object.values(t), (i)=>{
                    this.i._addFlatHashMapToInputStream(r, i, Object.keys(t).length, e, n);
                });
            });
        });
    }
    addProtoToStream(t, e, n, r) {
        Ko(this, n, (n)=>{
            Ko(this, e, (e)=>{
                const i = this.i._malloc(t.length);
                this.i.HEAPU8.set(t, i), this.i._addProtoToInputStream(i, t.length, e, n, r), this.i._free(i);
            });
        });
    }
    addEmptyPacketToStream(t, e) {
        Ko(this, t, (t)=>{
            this.i._addEmptyPacketToInputStream(t, e);
        });
    }
    addBoolVectorToStream(t, e, n) {
        Ko(this, e, (e)=>{
            const r = this.i._allocateBoolVector(t.length);
            if (!r) throw Error("Unable to allocate new bool vector on heap.");
            for (const e of t)this.i._addBoolVectorEntry(r, e);
            this.i._addBoolVectorToInputStream(r, e, n);
        });
    }
    addDoubleVectorToStream(t, e, n) {
        Ko(this, e, (e)=>{
            const r = this.i._allocateDoubleVector(t.length);
            if (!r) throw Error("Unable to allocate new double vector on heap.");
            for (const e of t)this.i._addDoubleVectorEntry(r, e);
            this.i._addDoubleVectorToInputStream(r, e, n);
        });
    }
    addFloatVectorToStream(t, e, n) {
        Ko(this, e, (e)=>{
            const r = this.i._allocateFloatVector(t.length);
            if (!r) throw Error("Unable to allocate new float vector on heap.");
            for (const e of t)this.i._addFloatVectorEntry(r, e);
            this.i._addFloatVectorToInputStream(r, e, n);
        });
    }
    addIntVectorToStream(t, e, n) {
        Ko(this, e, (e)=>{
            const r = this.i._allocateIntVector(t.length);
            if (!r) throw Error("Unable to allocate new int vector on heap.");
            for (const e of t)this.i._addIntVectorEntry(r, e);
            this.i._addIntVectorToInputStream(r, e, n);
        });
    }
    addUintVectorToStream(t, e, n) {
        Ko(this, e, (e)=>{
            const r = this.i._allocateUintVector(t.length);
            if (!r) throw Error("Unable to allocate new unsigned int vector on heap.");
            for (const e of t)this.i._addUintVectorEntry(r, e);
            this.i._addUintVectorToInputStream(r, e, n);
        });
    }
    addStringVectorToStream(t, e, n) {
        Ko(this, e, (e)=>{
            const r = this.i._allocateStringVector(t.length);
            if (!r) throw Error("Unable to allocate new string vector on heap.");
            for (const e of t)Ko(this, e, (t)=>{
                this.i._addStringVectorEntry(r, t);
            });
            this.i._addStringVectorToInputStream(r, e, n);
        });
    }
    addBoolToInputSidePacket(t, e) {
        Ko(this, e, (e)=>{
            this.i._addBoolToInputSidePacket(t, e);
        });
    }
    addDoubleToInputSidePacket(t, e) {
        Ko(this, e, (e)=>{
            this.i._addDoubleToInputSidePacket(t, e);
        });
    }
    addFloatToInputSidePacket(t, e) {
        Ko(this, e, (e)=>{
            this.i._addFloatToInputSidePacket(t, e);
        });
    }
    addIntToInputSidePacket(t, e) {
        Ko(this, e, (e)=>{
            this.i._addIntToInputSidePacket(t, e);
        });
    }
    addUintToInputSidePacket(t, e) {
        Ko(this, e, (e)=>{
            this.i._addUintToInputSidePacket(t, e);
        });
    }
    addStringToInputSidePacket(t, e) {
        Ko(this, e, (e)=>{
            Ko(this, t, (t)=>{
                this.i._addStringToInputSidePacket(t, e);
            });
        });
    }
    addProtoToInputSidePacket(t, e, n) {
        Ko(this, n, (n)=>{
            Ko(this, e, (e)=>{
                const r = this.i._malloc(t.length);
                this.i.HEAPU8.set(t, r), this.i._addProtoToInputSidePacket(r, t.length, e, n), this.i._free(r);
            });
        });
    }
    addBoolVectorToInputSidePacket(t, e) {
        Ko(this, e, (e)=>{
            const n = this.i._allocateBoolVector(t.length);
            if (!n) throw Error("Unable to allocate new bool vector on heap.");
            for (const e of t)this.i._addBoolVectorEntry(n, e);
            this.i._addBoolVectorToInputSidePacket(n, e);
        });
    }
    addDoubleVectorToInputSidePacket(t, e) {
        Ko(this, e, (e)=>{
            const n = this.i._allocateDoubleVector(t.length);
            if (!n) throw Error("Unable to allocate new double vector on heap.");
            for (const e of t)this.i._addDoubleVectorEntry(n, e);
            this.i._addDoubleVectorToInputSidePacket(n, e);
        });
    }
    addFloatVectorToInputSidePacket(t, e) {
        Ko(this, e, (e)=>{
            const n = this.i._allocateFloatVector(t.length);
            if (!n) throw Error("Unable to allocate new float vector on heap.");
            for (const e of t)this.i._addFloatVectorEntry(n, e);
            this.i._addFloatVectorToInputSidePacket(n, e);
        });
    }
    addIntVectorToInputSidePacket(t, e) {
        Ko(this, e, (e)=>{
            const n = this.i._allocateIntVector(t.length);
            if (!n) throw Error("Unable to allocate new int vector on heap.");
            for (const e of t)this.i._addIntVectorEntry(n, e);
            this.i._addIntVectorToInputSidePacket(n, e);
        });
    }
    addUintVectorToInputSidePacket(t, e) {
        Ko(this, e, (e)=>{
            const n = this.i._allocateUintVector(t.length);
            if (!n) throw Error("Unable to allocate new unsigned int vector on heap.");
            for (const e of t)this.i._addUintVectorEntry(n, e);
            this.i._addUintVectorToInputSidePacket(n, e);
        });
    }
    addStringVectorToInputSidePacket(t, e) {
        Ko(this, e, (e)=>{
            const n = this.i._allocateStringVector(t.length);
            if (!n) throw Error("Unable to allocate new string vector on heap.");
            for (const e of t)Ko(this, e, (t)=>{
                this.i._addStringVectorEntry(n, t);
            });
            this.i._addStringVectorToInputSidePacket(n, e);
        });
    }
    attachBoolListener(t, e) {
        qo(this, t, e), Ko(this, t, (t)=>{
            this.i._attachBoolListener(t);
        });
    }
    attachBoolVectorListener(t, e) {
        Jo(this, t, e), Ko(this, t, (t)=>{
            this.i._attachBoolVectorListener(t);
        });
    }
    attachIntListener(t, e) {
        qo(this, t, e), Ko(this, t, (t)=>{
            this.i._attachIntListener(t);
        });
    }
    attachIntVectorListener(t, e) {
        Jo(this, t, e), Ko(this, t, (t)=>{
            this.i._attachIntVectorListener(t);
        });
    }
    attachUintListener(t, e) {
        qo(this, t, e), Ko(this, t, (t)=>{
            this.i._attachUintListener(t);
        });
    }
    attachUintVectorListener(t, e) {
        Jo(this, t, e), Ko(this, t, (t)=>{
            this.i._attachUintVectorListener(t);
        });
    }
    attachDoubleListener(t, e) {
        qo(this, t, e), Ko(this, t, (t)=>{
            this.i._attachDoubleListener(t);
        });
    }
    attachDoubleVectorListener(t, e) {
        Jo(this, t, e), Ko(this, t, (t)=>{
            this.i._attachDoubleVectorListener(t);
        });
    }
    attachFloatListener(t, e) {
        qo(this, t, e), Ko(this, t, (t)=>{
            this.i._attachFloatListener(t);
        });
    }
    attachFloatVectorListener(t, e) {
        Jo(this, t, e), Ko(this, t, (t)=>{
            this.i._attachFloatVectorListener(t);
        });
    }
    attachStringListener(t, e) {
        qo(this, t, e), Ko(this, t, (t)=>{
            this.i._attachStringListener(t);
        });
    }
    attachStringVectorListener(t, e) {
        Jo(this, t, e), Ko(this, t, (t)=>{
            this.i._attachStringVectorListener(t);
        });
    }
    attachProtoListener(t, e, n) {
        qo(this, t, e), Ko(this, t, (t)=>{
            this.i._attachProtoListener(t, n || !1);
        });
    }
    attachProtoVectorListener(t, e, n) {
        Jo(this, t, e), Ko(this, t, (t)=>{
            this.i._attachProtoVectorListener(t, n || !1);
        });
    }
    attachAudioListener(t, e, n) {
        this.i._attachAudioListener || console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'), qo(this, t, (t, n)=>{
            t = new Float32Array(t.buffer, t.byteOffset, t.length / 4), e(t, n);
        }), Ko(this, t, (t)=>{
            this.i._attachAudioListener(t, n || !1);
        });
    }
    finishProcessing() {
        this.i._waitUntilIdle();
    }
    closeGraph() {
        this.i._closeGraph(), this.i.simpleListeners = void 0, this.i.emptyPacketListeners = void 0;
    }
}, class extends Ja {
    get ha() {
        return this.i;
    }
    sa(t, e, n) {
        Ko(this, e, (e)=>{
            const [r, i] = Yo(this, t, e);
            this.ha._addBoundTextureAsImageToStream(e, r, i, n);
        });
    }
    W(t, e) {
        qo(this, t, e), Ko(this, t, (t)=>{
            this.ha._attachImageListener(t);
        });
    }
    da(t, e) {
        Jo(this, t, e), Ko(this, t, (t)=>{
            this.ha._attachImageVectorListener(t);
        });
    }
}));
var Ja, Za = class extends qa {
};
async function Qa(t, e, n) {
    return async function(t, e, n, r) {
        return Zo(t, e, n, r);
    }(t, n.canvas ?? (Ho() ? void 0 : document.createElement("canvas")), e, n);
}
function th(t, e, n, r) {
    if (t.V) {
        const s = new fs;
        if (n?.regionOfInterest) {
            if (!t.ra) throw Error("This task doesn't support region-of-interest.");
            var i = n.regionOfInterest;
            if (i.left >= i.right || i.top >= i.bottom) throw Error("Expected RectF with left < right and top < bottom.");
            if (0 > i.left || 0 > i.top || 1 < i.right || 1 < i.bottom) throw Error("Expected RectF values to be in [0,1].");
            Hn(s, 1, (i.left + i.right) / 2), Hn(s, 2, (i.top + i.bottom) / 2), Hn(s, 4, i.right - i.left), Hn(s, 3, i.bottom - i.top);
        } else Hn(s, 1, .5), Hn(s, 2, .5), Hn(s, 4, 1), Hn(s, 3, 1);
        if (n?.rotationDegrees) {
            if (0 != n?.rotationDegrees % 90) throw Error("Expected rotation to be a multiple of 90\xb0.");
            if (Hn(s, 5, -Math.PI * n.rotationDegrees / 180), 0 != n?.rotationDegrees % 180) {
                const [t, r] = zo(e);
                n = Gn(s, 3) * r / t, i = Gn(s, 4) * t / r, Hn(s, 4, n), Hn(s, 3, i);
            }
        }
        t.g.addProtoToStream(s.g(), "mediapipe.NormalizedRect", t.V, r);
    }
    t.g.sa(e, t.ba, r ?? performance.now()), t.finishProcessing();
}
function eh(t, e, n) {
    if (t.baseOptions?.g()) throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");
    th(t, e, n, t.J + 1);
}
function nh(t, e, n, r) {
    if (!t.baseOptions?.g()) throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");
    th(t, e, n, r);
}
function rh(t, e, n, r) {
    var i = e.data;
    const s = e.width, o = s * (e = e.height);
    if ((i instanceof Uint8Array || i instanceof Float32Array) && i.length !== o) throw Error("Unsupported channel count: " + i.length / o);
    return t = new Sa([
        i
    ], n, !1, t.g.i.canvas, t.M, s, e), r ? t.clone() : t;
}
var ih = class extends sa {
    constructor(t, e, n, r){
        super(t), this.g = t, this.ba = e, this.V = n, this.ra = r, this.M = new ga;
    }
    l(t, e = !0) {
        if ("runningMode" in t && Vn(this.baseOptions, 2, !!t.runningMode && "IMAGE" !== t.runningMode), void 0 !== t.canvas && this.g.i.canvas !== t.canvas) throw Error("You must create a new task to reset the canvas.");
        return super.l(t, e);
    }
    close() {
        this.M.close(), super.close();
    }
};
ih.prototype.close = ih.prototype.close;
var sh = class extends ih {
    constructor(t, e){
        super(new Za(t, e), "image_in", "norm_rect_in", !1), this.j = {
            detections: []
        }, Cn(t = this.h = new Is, 0, 1, e = new Cs), Hn(this.h, 2, .5), Hn(this.h, 3, .3);
    }
    get baseOptions() {
        return Rn(this.h, Cs, 1);
    }
    set baseOptions(t) {
        Cn(this.h, 0, 1, t);
    }
    o(t) {
        return "minDetectionConfidence" in t && Hn(this.h, 2, t.minDetectionConfidence ?? .5), "minSuppressionThreshold" in t && Hn(this.h, 3, t.minSuppressionThreshold ?? .3), this.l(t);
    }
    F(t, e) {
        return this.j = {
            detections: []
        }, eh(this, t, e), this.j;
    }
    G(t, e, n) {
        return this.j = {
            detections: []
        }, nh(this, t, n, e), this.j;
    }
    m() {
        var t = new Di;
        Ii(t, "image_in"), Ii(t, "norm_rect_in"), Ui(t, "detections");
        const e = new yi;
        Wn(e, Ds, this.h);
        const n = new Li;
        ki(n, "mediapipe.tasks.vision.face_detector.FaceDetectorGraph"), xi(n, "IMAGE:image_in"), xi(n, "NORM_RECT:norm_rect_in"), Si(n, "DETECTIONS:detections"), n.o(e), Oi(t, n), this.g.attachProtoVectorListener("detections", (t, e)=>{
            for (const e of t)t = ns(e), this.j.detections.push(Oo(t));
            ea(this, e);
        }), this.g.attachEmptyPacketListener("detections", (t)=>{
            ea(this, t);
        }), t = t.g(), this.setGraph(new Uint8Array(t), !0);
    }
};
sh.prototype.detectForVideo = sh.prototype.G, sh.prototype.detect = sh.prototype.F, sh.prototype.setOptions = sh.prototype.o, sh.createFromModelPath = async function(t, e) {
    return Qa(sh, t, {
        baseOptions: {
            modelAssetPath: e
        }
    });
}, sh.createFromModelBuffer = function(t, e) {
    return Qa(sh, t, {
        baseOptions: {
            modelAssetBuffer: e
        }
    });
}, sh.createFromOptions = function(t, e) {
    return Qa(sh, t, e);
};
var oh = $a([
    61,
    146
], [
    146,
    91
], [
    91,
    181
], [
    181,
    84
], [
    84,
    17
], [
    17,
    314
], [
    314,
    405
], [
    405,
    321
], [
    321,
    375
], [
    375,
    291
], [
    61,
    185
], [
    185,
    40
], [
    40,
    39
], [
    39,
    37
], [
    37,
    0
], [
    0,
    267
], [
    267,
    269
], [
    269,
    270
], [
    270,
    409
], [
    409,
    291
], [
    78,
    95
], [
    95,
    88
], [
    88,
    178
], [
    178,
    87
], [
    87,
    14
], [
    14,
    317
], [
    317,
    402
], [
    402,
    318
], [
    318,
    324
], [
    324,
    308
], [
    78,
    191
], [
    191,
    80
], [
    80,
    81
], [
    81,
    82
], [
    82,
    13
], [
    13,
    312
], [
    312,
    311
], [
    311,
    310
], [
    310,
    415
], [
    415,
    308
]), ah = $a([
    263,
    249
], [
    249,
    390
], [
    390,
    373
], [
    373,
    374
], [
    374,
    380
], [
    380,
    381
], [
    381,
    382
], [
    382,
    362
], [
    263,
    466
], [
    466,
    388
], [
    388,
    387
], [
    387,
    386
], [
    386,
    385
], [
    385,
    384
], [
    384,
    398
], [
    398,
    362
]), hh = $a([
    276,
    283
], [
    283,
    282
], [
    282,
    295
], [
    295,
    285
], [
    300,
    293
], [
    293,
    334
], [
    334,
    296
], [
    296,
    336
]), ch = $a([
    474,
    475
], [
    475,
    476
], [
    476,
    477
], [
    477,
    474
]), uh = $a([
    33,
    7
], [
    7,
    163
], [
    163,
    144
], [
    144,
    145
], [
    145,
    153
], [
    153,
    154
], [
    154,
    155
], [
    155,
    133
], [
    33,
    246
], [
    246,
    161
], [
    161,
    160
], [
    160,
    159
], [
    159,
    158
], [
    158,
    157
], [
    157,
    173
], [
    173,
    133
]), lh = $a([
    46,
    53
], [
    53,
    52
], [
    52,
    65
], [
    65,
    55
], [
    70,
    63
], [
    63,
    105
], [
    105,
    66
], [
    66,
    107
]), dh = $a([
    469,
    470
], [
    470,
    471
], [
    471,
    472
], [
    472,
    469
]), fh = $a([
    10,
    338
], [
    338,
    297
], [
    297,
    332
], [
    332,
    284
], [
    284,
    251
], [
    251,
    389
], [
    389,
    356
], [
    356,
    454
], [
    454,
    323
], [
    323,
    361
], [
    361,
    288
], [
    288,
    397
], [
    397,
    365
], [
    365,
    379
], [
    379,
    378
], [
    378,
    400
], [
    400,
    377
], [
    377,
    152
], [
    152,
    148
], [
    148,
    176
], [
    176,
    149
], [
    149,
    150
], [
    150,
    136
], [
    136,
    172
], [
    172,
    58
], [
    58,
    132
], [
    132,
    93
], [
    93,
    234
], [
    234,
    127
], [
    127,
    162
], [
    162,
    21
], [
    21,
    54
], [
    54,
    103
], [
    103,
    67
], [
    67,
    109
], [
    109,
    10
]), ph = [
    ...oh,
    ...ah,
    ...hh,
    ...uh,
    ...lh,
    ...fh
], gh = $a([
    127,
    34
], [
    34,
    139
], [
    139,
    127
], [
    11,
    0
], [
    0,
    37
], [
    37,
    11
], [
    232,
    231
], [
    231,
    120
], [
    120,
    232
], [
    72,
    37
], [
    37,
    39
], [
    39,
    72
], [
    128,
    121
], [
    121,
    47
], [
    47,
    128
], [
    232,
    121
], [
    121,
    128
], [
    128,
    232
], [
    104,
    69
], [
    69,
    67
], [
    67,
    104
], [
    175,
    171
], [
    171,
    148
], [
    148,
    175
], [
    118,
    50
], [
    50,
    101
], [
    101,
    118
], [
    73,
    39
], [
    39,
    40
], [
    40,
    73
], [
    9,
    151
], [
    151,
    108
], [
    108,
    9
], [
    48,
    115
], [
    115,
    131
], [
    131,
    48
], [
    194,
    204
], [
    204,
    211
], [
    211,
    194
], [
    74,
    40
], [
    40,
    185
], [
    185,
    74
], [
    80,
    42
], [
    42,
    183
], [
    183,
    80
], [
    40,
    92
], [
    92,
    186
], [
    186,
    40
], [
    230,
    229
], [
    229,
    118
], [
    118,
    230
], [
    202,
    212
], [
    212,
    214
], [
    214,
    202
], [
    83,
    18
], [
    18,
    17
], [
    17,
    83
], [
    76,
    61
], [
    61,
    146
], [
    146,
    76
], [
    160,
    29
], [
    29,
    30
], [
    30,
    160
], [
    56,
    157
], [
    157,
    173
], [
    173,
    56
], [
    106,
    204
], [
    204,
    194
], [
    194,
    106
], [
    135,
    214
], [
    214,
    192
], [
    192,
    135
], [
    203,
    165
], [
    165,
    98
], [
    98,
    203
], [
    21,
    71
], [
    71,
    68
], [
    68,
    21
], [
    51,
    45
], [
    45,
    4
], [
    4,
    51
], [
    144,
    24
], [
    24,
    23
], [
    23,
    144
], [
    77,
    146
], [
    146,
    91
], [
    91,
    77
], [
    205,
    50
], [
    50,
    187
], [
    187,
    205
], [
    201,
    200
], [
    200,
    18
], [
    18,
    201
], [
    91,
    106
], [
    106,
    182
], [
    182,
    91
], [
    90,
    91
], [
    91,
    181
], [
    181,
    90
], [
    85,
    84
], [
    84,
    17
], [
    17,
    85
], [
    206,
    203
], [
    203,
    36
], [
    36,
    206
], [
    148,
    171
], [
    171,
    140
], [
    140,
    148
], [
    92,
    40
], [
    40,
    39
], [
    39,
    92
], [
    193,
    189
], [
    189,
    244
], [
    244,
    193
], [
    159,
    158
], [
    158,
    28
], [
    28,
    159
], [
    247,
    246
], [
    246,
    161
], [
    161,
    247
], [
    236,
    3
], [
    3,
    196
], [
    196,
    236
], [
    54,
    68
], [
    68,
    104
], [
    104,
    54
], [
    193,
    168
], [
    168,
    8
], [
    8,
    193
], [
    117,
    228
], [
    228,
    31
], [
    31,
    117
], [
    189,
    193
], [
    193,
    55
], [
    55,
    189
], [
    98,
    97
], [
    97,
    99
], [
    99,
    98
], [
    126,
    47
], [
    47,
    100
], [
    100,
    126
], [
    166,
    79
], [
    79,
    218
], [
    218,
    166
], [
    155,
    154
], [
    154,
    26
], [
    26,
    155
], [
    209,
    49
], [
    49,
    131
], [
    131,
    209
], [
    135,
    136
], [
    136,
    150
], [
    150,
    135
], [
    47,
    126
], [
    126,
    217
], [
    217,
    47
], [
    223,
    52
], [
    52,
    53
], [
    53,
    223
], [
    45,
    51
], [
    51,
    134
], [
    134,
    45
], [
    211,
    170
], [
    170,
    140
], [
    140,
    211
], [
    67,
    69
], [
    69,
    108
], [
    108,
    67
], [
    43,
    106
], [
    106,
    91
], [
    91,
    43
], [
    230,
    119
], [
    119,
    120
], [
    120,
    230
], [
    226,
    130
], [
    130,
    247
], [
    247,
    226
], [
    63,
    53
], [
    53,
    52
], [
    52,
    63
], [
    238,
    20
], [
    20,
    242
], [
    242,
    238
], [
    46,
    70
], [
    70,
    156
], [
    156,
    46
], [
    78,
    62
], [
    62,
    96
], [
    96,
    78
], [
    46,
    53
], [
    53,
    63
], [
    63,
    46
], [
    143,
    34
], [
    34,
    227
], [
    227,
    143
], [
    123,
    117
], [
    117,
    111
], [
    111,
    123
], [
    44,
    125
], [
    125,
    19
], [
    19,
    44
], [
    236,
    134
], [
    134,
    51
], [
    51,
    236
], [
    216,
    206
], [
    206,
    205
], [
    205,
    216
], [
    154,
    153
], [
    153,
    22
], [
    22,
    154
], [
    39,
    37
], [
    37,
    167
], [
    167,
    39
], [
    200,
    201
], [
    201,
    208
], [
    208,
    200
], [
    36,
    142
], [
    142,
    100
], [
    100,
    36
], [
    57,
    212
], [
    212,
    202
], [
    202,
    57
], [
    20,
    60
], [
    60,
    99
], [
    99,
    20
], [
    28,
    158
], [
    158,
    157
], [
    157,
    28
], [
    35,
    226
], [
    226,
    113
], [
    113,
    35
], [
    160,
    159
], [
    159,
    27
], [
    27,
    160
], [
    204,
    202
], [
    202,
    210
], [
    210,
    204
], [
    113,
    225
], [
    225,
    46
], [
    46,
    113
], [
    43,
    202
], [
    202,
    204
], [
    204,
    43
], [
    62,
    76
], [
    76,
    77
], [
    77,
    62
], [
    137,
    123
], [
    123,
    116
], [
    116,
    137
], [
    41,
    38
], [
    38,
    72
], [
    72,
    41
], [
    203,
    129
], [
    129,
    142
], [
    142,
    203
], [
    64,
    98
], [
    98,
    240
], [
    240,
    64
], [
    49,
    102
], [
    102,
    64
], [
    64,
    49
], [
    41,
    73
], [
    73,
    74
], [
    74,
    41
], [
    212,
    216
], [
    216,
    207
], [
    207,
    212
], [
    42,
    74
], [
    74,
    184
], [
    184,
    42
], [
    169,
    170
], [
    170,
    211
], [
    211,
    169
], [
    170,
    149
], [
    149,
    176
], [
    176,
    170
], [
    105,
    66
], [
    66,
    69
], [
    69,
    105
], [
    122,
    6
], [
    6,
    168
], [
    168,
    122
], [
    123,
    147
], [
    147,
    187
], [
    187,
    123
], [
    96,
    77
], [
    77,
    90
], [
    90,
    96
], [
    65,
    55
], [
    55,
    107
], [
    107,
    65
], [
    89,
    90
], [
    90,
    180
], [
    180,
    89
], [
    101,
    100
], [
    100,
    120
], [
    120,
    101
], [
    63,
    105
], [
    105,
    104
], [
    104,
    63
], [
    93,
    137
], [
    137,
    227
], [
    227,
    93
], [
    15,
    86
], [
    86,
    85
], [
    85,
    15
], [
    129,
    102
], [
    102,
    49
], [
    49,
    129
], [
    14,
    87
], [
    87,
    86
], [
    86,
    14
], [
    55,
    8
], [
    8,
    9
], [
    9,
    55
], [
    100,
    47
], [
    47,
    121
], [
    121,
    100
], [
    145,
    23
], [
    23,
    22
], [
    22,
    145
], [
    88,
    89
], [
    89,
    179
], [
    179,
    88
], [
    6,
    122
], [
    122,
    196
], [
    196,
    6
], [
    88,
    95
], [
    95,
    96
], [
    96,
    88
], [
    138,
    172
], [
    172,
    136
], [
    136,
    138
], [
    215,
    58
], [
    58,
    172
], [
    172,
    215
], [
    115,
    48
], [
    48,
    219
], [
    219,
    115
], [
    42,
    80
], [
    80,
    81
], [
    81,
    42
], [
    195,
    3
], [
    3,
    51
], [
    51,
    195
], [
    43,
    146
], [
    146,
    61
], [
    61,
    43
], [
    171,
    175
], [
    175,
    199
], [
    199,
    171
], [
    81,
    82
], [
    82,
    38
], [
    38,
    81
], [
    53,
    46
], [
    46,
    225
], [
    225,
    53
], [
    144,
    163
], [
    163,
    110
], [
    110,
    144
], [
    52,
    65
], [
    65,
    66
], [
    66,
    52
], [
    229,
    228
], [
    228,
    117
], [
    117,
    229
], [
    34,
    127
], [
    127,
    234
], [
    234,
    34
], [
    107,
    108
], [
    108,
    69
], [
    69,
    107
], [
    109,
    108
], [
    108,
    151
], [
    151,
    109
], [
    48,
    64
], [
    64,
    235
], [
    235,
    48
], [
    62,
    78
], [
    78,
    191
], [
    191,
    62
], [
    129,
    209
], [
    209,
    126
], [
    126,
    129
], [
    111,
    35
], [
    35,
    143
], [
    143,
    111
], [
    117,
    123
], [
    123,
    50
], [
    50,
    117
], [
    222,
    65
], [
    65,
    52
], [
    52,
    222
], [
    19,
    125
], [
    125,
    141
], [
    141,
    19
], [
    221,
    55
], [
    55,
    65
], [
    65,
    221
], [
    3,
    195
], [
    195,
    197
], [
    197,
    3
], [
    25,
    7
], [
    7,
    33
], [
    33,
    25
], [
    220,
    237
], [
    237,
    44
], [
    44,
    220
], [
    70,
    71
], [
    71,
    139
], [
    139,
    70
], [
    122,
    193
], [
    193,
    245
], [
    245,
    122
], [
    247,
    130
], [
    130,
    33
], [
    33,
    247
], [
    71,
    21
], [
    21,
    162
], [
    162,
    71
], [
    170,
    169
], [
    169,
    150
], [
    150,
    170
], [
    188,
    174
], [
    174,
    196
], [
    196,
    188
], [
    216,
    186
], [
    186,
    92
], [
    92,
    216
], [
    2,
    97
], [
    97,
    167
], [
    167,
    2
], [
    141,
    125
], [
    125,
    241
], [
    241,
    141
], [
    164,
    167
], [
    167,
    37
], [
    37,
    164
], [
    72,
    38
], [
    38,
    12
], [
    12,
    72
], [
    38,
    82
], [
    82,
    13
], [
    13,
    38
], [
    63,
    68
], [
    68,
    71
], [
    71,
    63
], [
    226,
    35
], [
    35,
    111
], [
    111,
    226
], [
    101,
    50
], [
    50,
    205
], [
    205,
    101
], [
    206,
    92
], [
    92,
    165
], [
    165,
    206
], [
    209,
    198
], [
    198,
    217
], [
    217,
    209
], [
    165,
    167
], [
    167,
    97
], [
    97,
    165
], [
    220,
    115
], [
    115,
    218
], [
    218,
    220
], [
    133,
    112
], [
    112,
    243
], [
    243,
    133
], [
    239,
    238
], [
    238,
    241
], [
    241,
    239
], [
    214,
    135
], [
    135,
    169
], [
    169,
    214
], [
    190,
    173
], [
    173,
    133
], [
    133,
    190
], [
    171,
    208
], [
    208,
    32
], [
    32,
    171
], [
    125,
    44
], [
    44,
    237
], [
    237,
    125
], [
    86,
    87
], [
    87,
    178
], [
    178,
    86
], [
    85,
    86
], [
    86,
    179
], [
    179,
    85
], [
    84,
    85
], [
    85,
    180
], [
    180,
    84
], [
    83,
    84
], [
    84,
    181
], [
    181,
    83
], [
    201,
    83
], [
    83,
    182
], [
    182,
    201
], [
    137,
    93
], [
    93,
    132
], [
    132,
    137
], [
    76,
    62
], [
    62,
    183
], [
    183,
    76
], [
    61,
    76
], [
    76,
    184
], [
    184,
    61
], [
    57,
    61
], [
    61,
    185
], [
    185,
    57
], [
    212,
    57
], [
    57,
    186
], [
    186,
    212
], [
    214,
    207
], [
    207,
    187
], [
    187,
    214
], [
    34,
    143
], [
    143,
    156
], [
    156,
    34
], [
    79,
    239
], [
    239,
    237
], [
    237,
    79
], [
    123,
    137
], [
    137,
    177
], [
    177,
    123
], [
    44,
    1
], [
    1,
    4
], [
    4,
    44
], [
    201,
    194
], [
    194,
    32
], [
    32,
    201
], [
    64,
    102
], [
    102,
    129
], [
    129,
    64
], [
    213,
    215
], [
    215,
    138
], [
    138,
    213
], [
    59,
    166
], [
    166,
    219
], [
    219,
    59
], [
    242,
    99
], [
    99,
    97
], [
    97,
    242
], [
    2,
    94
], [
    94,
    141
], [
    141,
    2
], [
    75,
    59
], [
    59,
    235
], [
    235,
    75
], [
    24,
    110
], [
    110,
    228
], [
    228,
    24
], [
    25,
    130
], [
    130,
    226
], [
    226,
    25
], [
    23,
    24
], [
    24,
    229
], [
    229,
    23
], [
    22,
    23
], [
    23,
    230
], [
    230,
    22
], [
    26,
    22
], [
    22,
    231
], [
    231,
    26
], [
    112,
    26
], [
    26,
    232
], [
    232,
    112
], [
    189,
    190
], [
    190,
    243
], [
    243,
    189
], [
    221,
    56
], [
    56,
    190
], [
    190,
    221
], [
    28,
    56
], [
    56,
    221
], [
    221,
    28
], [
    27,
    28
], [
    28,
    222
], [
    222,
    27
], [
    29,
    27
], [
    27,
    223
], [
    223,
    29
], [
    30,
    29
], [
    29,
    224
], [
    224,
    30
], [
    247,
    30
], [
    30,
    225
], [
    225,
    247
], [
    238,
    79
], [
    79,
    20
], [
    20,
    238
], [
    166,
    59
], [
    59,
    75
], [
    75,
    166
], [
    60,
    75
], [
    75,
    240
], [
    240,
    60
], [
    147,
    177
], [
    177,
    215
], [
    215,
    147
], [
    20,
    79
], [
    79,
    166
], [
    166,
    20
], [
    187,
    147
], [
    147,
    213
], [
    213,
    187
], [
    112,
    233
], [
    233,
    244
], [
    244,
    112
], [
    233,
    128
], [
    128,
    245
], [
    245,
    233
], [
    128,
    114
], [
    114,
    188
], [
    188,
    128
], [
    114,
    217
], [
    217,
    174
], [
    174,
    114
], [
    131,
    115
], [
    115,
    220
], [
    220,
    131
], [
    217,
    198
], [
    198,
    236
], [
    236,
    217
], [
    198,
    131
], [
    131,
    134
], [
    134,
    198
], [
    177,
    132
], [
    132,
    58
], [
    58,
    177
], [
    143,
    35
], [
    35,
    124
], [
    124,
    143
], [
    110,
    163
], [
    163,
    7
], [
    7,
    110
], [
    228,
    110
], [
    110,
    25
], [
    25,
    228
], [
    356,
    389
], [
    389,
    368
], [
    368,
    356
], [
    11,
    302
], [
    302,
    267
], [
    267,
    11
], [
    452,
    350
], [
    350,
    349
], [
    349,
    452
], [
    302,
    303
], [
    303,
    269
], [
    269,
    302
], [
    357,
    343
], [
    343,
    277
], [
    277,
    357
], [
    452,
    453
], [
    453,
    357
], [
    357,
    452
], [
    333,
    332
], [
    332,
    297
], [
    297,
    333
], [
    175,
    152
], [
    152,
    377
], [
    377,
    175
], [
    347,
    348
], [
    348,
    330
], [
    330,
    347
], [
    303,
    304
], [
    304,
    270
], [
    270,
    303
], [
    9,
    336
], [
    336,
    337
], [
    337,
    9
], [
    278,
    279
], [
    279,
    360
], [
    360,
    278
], [
    418,
    262
], [
    262,
    431
], [
    431,
    418
], [
    304,
    408
], [
    408,
    409
], [
    409,
    304
], [
    310,
    415
], [
    415,
    407
], [
    407,
    310
], [
    270,
    409
], [
    409,
    410
], [
    410,
    270
], [
    450,
    348
], [
    348,
    347
], [
    347,
    450
], [
    422,
    430
], [
    430,
    434
], [
    434,
    422
], [
    313,
    314
], [
    314,
    17
], [
    17,
    313
], [
    306,
    307
], [
    307,
    375
], [
    375,
    306
], [
    387,
    388
], [
    388,
    260
], [
    260,
    387
], [
    286,
    414
], [
    414,
    398
], [
    398,
    286
], [
    335,
    406
], [
    406,
    418
], [
    418,
    335
], [
    364,
    367
], [
    367,
    416
], [
    416,
    364
], [
    423,
    358
], [
    358,
    327
], [
    327,
    423
], [
    251,
    284
], [
    284,
    298
], [
    298,
    251
], [
    281,
    5
], [
    5,
    4
], [
    4,
    281
], [
    373,
    374
], [
    374,
    253
], [
    253,
    373
], [
    307,
    320
], [
    320,
    321
], [
    321,
    307
], [
    425,
    427
], [
    427,
    411
], [
    411,
    425
], [
    421,
    313
], [
    313,
    18
], [
    18,
    421
], [
    321,
    405
], [
    405,
    406
], [
    406,
    321
], [
    320,
    404
], [
    404,
    405
], [
    405,
    320
], [
    315,
    16
], [
    16,
    17
], [
    17,
    315
], [
    426,
    425
], [
    425,
    266
], [
    266,
    426
], [
    377,
    400
], [
    400,
    369
], [
    369,
    377
], [
    322,
    391
], [
    391,
    269
], [
    269,
    322
], [
    417,
    465
], [
    465,
    464
], [
    464,
    417
], [
    386,
    257
], [
    257,
    258
], [
    258,
    386
], [
    466,
    260
], [
    260,
    388
], [
    388,
    466
], [
    456,
    399
], [
    399,
    419
], [
    419,
    456
], [
    284,
    332
], [
    332,
    333
], [
    333,
    284
], [
    417,
    285
], [
    285,
    8
], [
    8,
    417
], [
    346,
    340
], [
    340,
    261
], [
    261,
    346
], [
    413,
    441
], [
    441,
    285
], [
    285,
    413
], [
    327,
    460
], [
    460,
    328
], [
    328,
    327
], [
    355,
    371
], [
    371,
    329
], [
    329,
    355
], [
    392,
    439
], [
    439,
    438
], [
    438,
    392
], [
    382,
    341
], [
    341,
    256
], [
    256,
    382
], [
    429,
    420
], [
    420,
    360
], [
    360,
    429
], [
    364,
    394
], [
    394,
    379
], [
    379,
    364
], [
    277,
    343
], [
    343,
    437
], [
    437,
    277
], [
    443,
    444
], [
    444,
    283
], [
    283,
    443
], [
    275,
    440
], [
    440,
    363
], [
    363,
    275
], [
    431,
    262
], [
    262,
    369
], [
    369,
    431
], [
    297,
    338
], [
    338,
    337
], [
    337,
    297
], [
    273,
    375
], [
    375,
    321
], [
    321,
    273
], [
    450,
    451
], [
    451,
    349
], [
    349,
    450
], [
    446,
    342
], [
    342,
    467
], [
    467,
    446
], [
    293,
    334
], [
    334,
    282
], [
    282,
    293
], [
    458,
    461
], [
    461,
    462
], [
    462,
    458
], [
    276,
    353
], [
    353,
    383
], [
    383,
    276
], [
    308,
    324
], [
    324,
    325
], [
    325,
    308
], [
    276,
    300
], [
    300,
    293
], [
    293,
    276
], [
    372,
    345
], [
    345,
    447
], [
    447,
    372
], [
    352,
    345
], [
    345,
    340
], [
    340,
    352
], [
    274,
    1
], [
    1,
    19
], [
    19,
    274
], [
    456,
    248
], [
    248,
    281
], [
    281,
    456
], [
    436,
    427
], [
    427,
    425
], [
    425,
    436
], [
    381,
    256
], [
    256,
    252
], [
    252,
    381
], [
    269,
    391
], [
    391,
    393
], [
    393,
    269
], [
    200,
    199
], [
    199,
    428
], [
    428,
    200
], [
    266,
    330
], [
    330,
    329
], [
    329,
    266
], [
    287,
    273
], [
    273,
    422
], [
    422,
    287
], [
    250,
    462
], [
    462,
    328
], [
    328,
    250
], [
    258,
    286
], [
    286,
    384
], [
    384,
    258
], [
    265,
    353
], [
    353,
    342
], [
    342,
    265
], [
    387,
    259
], [
    259,
    257
], [
    257,
    387
], [
    424,
    431
], [
    431,
    430
], [
    430,
    424
], [
    342,
    353
], [
    353,
    276
], [
    276,
    342
], [
    273,
    335
], [
    335,
    424
], [
    424,
    273
], [
    292,
    325
], [
    325,
    307
], [
    307,
    292
], [
    366,
    447
], [
    447,
    345
], [
    345,
    366
], [
    271,
    303
], [
    303,
    302
], [
    302,
    271
], [
    423,
    266
], [
    266,
    371
], [
    371,
    423
], [
    294,
    455
], [
    455,
    460
], [
    460,
    294
], [
    279,
    278
], [
    278,
    294
], [
    294,
    279
], [
    271,
    272
], [
    272,
    304
], [
    304,
    271
], [
    432,
    434
], [
    434,
    427
], [
    427,
    432
], [
    272,
    407
], [
    407,
    408
], [
    408,
    272
], [
    394,
    430
], [
    430,
    431
], [
    431,
    394
], [
    395,
    369
], [
    369,
    400
], [
    400,
    395
], [
    334,
    333
], [
    333,
    299
], [
    299,
    334
], [
    351,
    417
], [
    417,
    168
], [
    168,
    351
], [
    352,
    280
], [
    280,
    411
], [
    411,
    352
], [
    325,
    319
], [
    319,
    320
], [
    320,
    325
], [
    295,
    296
], [
    296,
    336
], [
    336,
    295
], [
    319,
    403
], [
    403,
    404
], [
    404,
    319
], [
    330,
    348
], [
    348,
    349
], [
    349,
    330
], [
    293,
    298
], [
    298,
    333
], [
    333,
    293
], [
    323,
    454
], [
    454,
    447
], [
    447,
    323
], [
    15,
    16
], [
    16,
    315
], [
    315,
    15
], [
    358,
    429
], [
    429,
    279
], [
    279,
    358
], [
    14,
    15
], [
    15,
    316
], [
    316,
    14
], [
    285,
    336
], [
    336,
    9
], [
    9,
    285
], [
    329,
    349
], [
    349,
    350
], [
    350,
    329
], [
    374,
    380
], [
    380,
    252
], [
    252,
    374
], [
    318,
    402
], [
    402,
    403
], [
    403,
    318
], [
    6,
    197
], [
    197,
    419
], [
    419,
    6
], [
    318,
    319
], [
    319,
    325
], [
    325,
    318
], [
    367,
    364
], [
    364,
    365
], [
    365,
    367
], [
    435,
    367
], [
    367,
    397
], [
    397,
    435
], [
    344,
    438
], [
    438,
    439
], [
    439,
    344
], [
    272,
    271
], [
    271,
    311
], [
    311,
    272
], [
    195,
    5
], [
    5,
    281
], [
    281,
    195
], [
    273,
    287
], [
    287,
    291
], [
    291,
    273
], [
    396,
    428
], [
    428,
    199
], [
    199,
    396
], [
    311,
    271
], [
    271,
    268
], [
    268,
    311
], [
    283,
    444
], [
    444,
    445
], [
    445,
    283
], [
    373,
    254
], [
    254,
    339
], [
    339,
    373
], [
    282,
    334
], [
    334,
    296
], [
    296,
    282
], [
    449,
    347
], [
    347,
    346
], [
    346,
    449
], [
    264,
    447
], [
    447,
    454
], [
    454,
    264
], [
    336,
    296
], [
    296,
    299
], [
    299,
    336
], [
    338,
    10
], [
    10,
    151
], [
    151,
    338
], [
    278,
    439
], [
    439,
    455
], [
    455,
    278
], [
    292,
    407
], [
    407,
    415
], [
    415,
    292
], [
    358,
    371
], [
    371,
    355
], [
    355,
    358
], [
    340,
    345
], [
    345,
    372
], [
    372,
    340
], [
    346,
    347
], [
    347,
    280
], [
    280,
    346
], [
    442,
    443
], [
    443,
    282
], [
    282,
    442
], [
    19,
    94
], [
    94,
    370
], [
    370,
    19
], [
    441,
    442
], [
    442,
    295
], [
    295,
    441
], [
    248,
    419
], [
    419,
    197
], [
    197,
    248
], [
    263,
    255
], [
    255,
    359
], [
    359,
    263
], [
    440,
    275
], [
    275,
    274
], [
    274,
    440
], [
    300,
    383
], [
    383,
    368
], [
    368,
    300
], [
    351,
    412
], [
    412,
    465
], [
    465,
    351
], [
    263,
    467
], [
    467,
    466
], [
    466,
    263
], [
    301,
    368
], [
    368,
    389
], [
    389,
    301
], [
    395,
    378
], [
    378,
    379
], [
    379,
    395
], [
    412,
    351
], [
    351,
    419
], [
    419,
    412
], [
    436,
    426
], [
    426,
    322
], [
    322,
    436
], [
    2,
    164
], [
    164,
    393
], [
    393,
    2
], [
    370,
    462
], [
    462,
    461
], [
    461,
    370
], [
    164,
    0
], [
    0,
    267
], [
    267,
    164
], [
    302,
    11
], [
    11,
    12
], [
    12,
    302
], [
    268,
    12
], [
    12,
    13
], [
    13,
    268
], [
    293,
    300
], [
    300,
    301
], [
    301,
    293
], [
    446,
    261
], [
    261,
    340
], [
    340,
    446
], [
    330,
    266
], [
    266,
    425
], [
    425,
    330
], [
    426,
    423
], [
    423,
    391
], [
    391,
    426
], [
    429,
    355
], [
    355,
    437
], [
    437,
    429
], [
    391,
    327
], [
    327,
    326
], [
    326,
    391
], [
    440,
    457
], [
    457,
    438
], [
    438,
    440
], [
    341,
    382
], [
    382,
    362
], [
    362,
    341
], [
    459,
    457
], [
    457,
    461
], [
    461,
    459
], [
    434,
    430
], [
    430,
    394
], [
    394,
    434
], [
    414,
    463
], [
    463,
    362
], [
    362,
    414
], [
    396,
    369
], [
    369,
    262
], [
    262,
    396
], [
    354,
    461
], [
    461,
    457
], [
    457,
    354
], [
    316,
    403
], [
    403,
    402
], [
    402,
    316
], [
    315,
    404
], [
    404,
    403
], [
    403,
    315
], [
    314,
    405
], [
    405,
    404
], [
    404,
    314
], [
    313,
    406
], [
    406,
    405
], [
    405,
    313
], [
    421,
    418
], [
    418,
    406
], [
    406,
    421
], [
    366,
    401
], [
    401,
    361
], [
    361,
    366
], [
    306,
    408
], [
    408,
    407
], [
    407,
    306
], [
    291,
    409
], [
    409,
    408
], [
    408,
    291
], [
    287,
    410
], [
    410,
    409
], [
    409,
    287
], [
    432,
    436
], [
    436,
    410
], [
    410,
    432
], [
    434,
    416
], [
    416,
    411
], [
    411,
    434
], [
    264,
    368
], [
    368,
    383
], [
    383,
    264
], [
    309,
    438
], [
    438,
    457
], [
    457,
    309
], [
    352,
    376
], [
    376,
    401
], [
    401,
    352
], [
    274,
    275
], [
    275,
    4
], [
    4,
    274
], [
    421,
    428
], [
    428,
    262
], [
    262,
    421
], [
    294,
    327
], [
    327,
    358
], [
    358,
    294
], [
    433,
    416
], [
    416,
    367
], [
    367,
    433
], [
    289,
    455
], [
    455,
    439
], [
    439,
    289
], [
    462,
    370
], [
    370,
    326
], [
    326,
    462
], [
    2,
    326
], [
    326,
    370
], [
    370,
    2
], [
    305,
    460
], [
    460,
    455
], [
    455,
    305
], [
    254,
    449
], [
    449,
    448
], [
    448,
    254
], [
    255,
    261
], [
    261,
    446
], [
    446,
    255
], [
    253,
    450
], [
    450,
    449
], [
    449,
    253
], [
    252,
    451
], [
    451,
    450
], [
    450,
    252
], [
    256,
    452
], [
    452,
    451
], [
    451,
    256
], [
    341,
    453
], [
    453,
    452
], [
    452,
    341
], [
    413,
    464
], [
    464,
    463
], [
    463,
    413
], [
    441,
    413
], [
    413,
    414
], [
    414,
    441
], [
    258,
    442
], [
    442,
    441
], [
    441,
    258
], [
    257,
    443
], [
    443,
    442
], [
    442,
    257
], [
    259,
    444
], [
    444,
    443
], [
    443,
    259
], [
    260,
    445
], [
    445,
    444
], [
    444,
    260
], [
    467,
    342
], [
    342,
    445
], [
    445,
    467
], [
    459,
    458
], [
    458,
    250
], [
    250,
    459
], [
    289,
    392
], [
    392,
    290
], [
    290,
    289
], [
    290,
    328
], [
    328,
    460
], [
    460,
    290
], [
    376,
    433
], [
    433,
    435
], [
    435,
    376
], [
    250,
    290
], [
    290,
    392
], [
    392,
    250
], [
    411,
    416
], [
    416,
    433
], [
    433,
    411
], [
    341,
    463
], [
    463,
    464
], [
    464,
    341
], [
    453,
    464
], [
    464,
    465
], [
    465,
    453
], [
    357,
    465
], [
    465,
    412
], [
    412,
    357
], [
    343,
    412
], [
    412,
    399
], [
    399,
    343
], [
    360,
    363
], [
    363,
    440
], [
    440,
    360
], [
    437,
    399
], [
    399,
    456
], [
    456,
    437
], [
    420,
    456
], [
    456,
    363
], [
    363,
    420
], [
    401,
    435
], [
    435,
    288
], [
    288,
    401
], [
    372,
    383
], [
    383,
    353
], [
    353,
    372
], [
    339,
    255
], [
    255,
    249
], [
    249,
    339
], [
    448,
    261
], [
    261,
    255
], [
    255,
    448
], [
    133,
    243
], [
    243,
    190
], [
    190,
    133
], [
    133,
    155
], [
    155,
    112
], [
    112,
    133
], [
    33,
    246
], [
    246,
    247
], [
    247,
    33
], [
    33,
    130
], [
    130,
    25
], [
    25,
    33
], [
    398,
    384
], [
    384,
    286
], [
    286,
    398
], [
    362,
    398
], [
    398,
    414
], [
    414,
    362
], [
    362,
    463
], [
    463,
    341
], [
    341,
    362
], [
    263,
    359
], [
    359,
    467
], [
    467,
    263
], [
    263,
    249
], [
    249,
    255
], [
    255,
    263
], [
    466,
    467
], [
    467,
    260
], [
    260,
    466
], [
    75,
    60
], [
    60,
    166
], [
    166,
    75
], [
    238,
    239
], [
    239,
    79
], [
    79,
    238
], [
    162,
    127
], [
    127,
    139
], [
    139,
    162
], [
    72,
    11
], [
    11,
    37
], [
    37,
    72
], [
    121,
    232
], [
    232,
    120
], [
    120,
    121
], [
    73,
    72
], [
    72,
    39
], [
    39,
    73
], [
    114,
    128
], [
    128,
    47
], [
    47,
    114
], [
    233,
    232
], [
    232,
    128
], [
    128,
    233
], [
    103,
    104
], [
    104,
    67
], [
    67,
    103
], [
    152,
    175
], [
    175,
    148
], [
    148,
    152
], [
    119,
    118
], [
    118,
    101
], [
    101,
    119
], [
    74,
    73
], [
    73,
    40
], [
    40,
    74
], [
    107,
    9
], [
    9,
    108
], [
    108,
    107
], [
    49,
    48
], [
    48,
    131
], [
    131,
    49
], [
    32,
    194
], [
    194,
    211
], [
    211,
    32
], [
    184,
    74
], [
    74,
    185
], [
    185,
    184
], [
    191,
    80
], [
    80,
    183
], [
    183,
    191
], [
    185,
    40
], [
    40,
    186
], [
    186,
    185
], [
    119,
    230
], [
    230,
    118
], [
    118,
    119
], [
    210,
    202
], [
    202,
    214
], [
    214,
    210
], [
    84,
    83
], [
    83,
    17
], [
    17,
    84
], [
    77,
    76
], [
    76,
    146
], [
    146,
    77
], [
    161,
    160
], [
    160,
    30
], [
    30,
    161
], [
    190,
    56
], [
    56,
    173
], [
    173,
    190
], [
    182,
    106
], [
    106,
    194
], [
    194,
    182
], [
    138,
    135
], [
    135,
    192
], [
    192,
    138
], [
    129,
    203
], [
    203,
    98
], [
    98,
    129
], [
    54,
    21
], [
    21,
    68
], [
    68,
    54
], [
    5,
    51
], [
    51,
    4
], [
    4,
    5
], [
    145,
    144
], [
    144,
    23
], [
    23,
    145
], [
    90,
    77
], [
    77,
    91
], [
    91,
    90
], [
    207,
    205
], [
    205,
    187
], [
    187,
    207
], [
    83,
    201
], [
    201,
    18
], [
    18,
    83
], [
    181,
    91
], [
    91,
    182
], [
    182,
    181
], [
    180,
    90
], [
    90,
    181
], [
    181,
    180
], [
    16,
    85
], [
    85,
    17
], [
    17,
    16
], [
    205,
    206
], [
    206,
    36
], [
    36,
    205
], [
    176,
    148
], [
    148,
    140
], [
    140,
    176
], [
    165,
    92
], [
    92,
    39
], [
    39,
    165
], [
    245,
    193
], [
    193,
    244
], [
    244,
    245
], [
    27,
    159
], [
    159,
    28
], [
    28,
    27
], [
    30,
    247
], [
    247,
    161
], [
    161,
    30
], [
    174,
    236
], [
    236,
    196
], [
    196,
    174
], [
    103,
    54
], [
    54,
    104
], [
    104,
    103
], [
    55,
    193
], [
    193,
    8
], [
    8,
    55
], [
    111,
    117
], [
    117,
    31
], [
    31,
    111
], [
    221,
    189
], [
    189,
    55
], [
    55,
    221
], [
    240,
    98
], [
    98,
    99
], [
    99,
    240
], [
    142,
    126
], [
    126,
    100
], [
    100,
    142
], [
    219,
    166
], [
    166,
    218
], [
    218,
    219
], [
    112,
    155
], [
    155,
    26
], [
    26,
    112
], [
    198,
    209
], [
    209,
    131
], [
    131,
    198
], [
    169,
    135
], [
    135,
    150
], [
    150,
    169
], [
    114,
    47
], [
    47,
    217
], [
    217,
    114
], [
    224,
    223
], [
    223,
    53
], [
    53,
    224
], [
    220,
    45
], [
    45,
    134
], [
    134,
    220
], [
    32,
    211
], [
    211,
    140
], [
    140,
    32
], [
    109,
    67
], [
    67,
    108
], [
    108,
    109
], [
    146,
    43
], [
    43,
    91
], [
    91,
    146
], [
    231,
    230
], [
    230,
    120
], [
    120,
    231
], [
    113,
    226
], [
    226,
    247
], [
    247,
    113
], [
    105,
    63
], [
    63,
    52
], [
    52,
    105
], [
    241,
    238
], [
    238,
    242
], [
    242,
    241
], [
    124,
    46
], [
    46,
    156
], [
    156,
    124
], [
    95,
    78
], [
    78,
    96
], [
    96,
    95
], [
    70,
    46
], [
    46,
    63
], [
    63,
    70
], [
    116,
    143
], [
    143,
    227
], [
    227,
    116
], [
    116,
    123
], [
    123,
    111
], [
    111,
    116
], [
    1,
    44
], [
    44,
    19
], [
    19,
    1
], [
    3,
    236
], [
    236,
    51
], [
    51,
    3
], [
    207,
    216
], [
    216,
    205
], [
    205,
    207
], [
    26,
    154
], [
    154,
    22
], [
    22,
    26
], [
    165,
    39
], [
    39,
    167
], [
    167,
    165
], [
    199,
    200
], [
    200,
    208
], [
    208,
    199
], [
    101,
    36
], [
    36,
    100
], [
    100,
    101
], [
    43,
    57
], [
    57,
    202
], [
    202,
    43
], [
    242,
    20
], [
    20,
    99
], [
    99,
    242
], [
    56,
    28
], [
    28,
    157
], [
    157,
    56
], [
    124,
    35
], [
    35,
    113
], [
    113,
    124
], [
    29,
    160
], [
    160,
    27
], [
    27,
    29
], [
    211,
    204
], [
    204,
    210
], [
    210,
    211
], [
    124,
    113
], [
    113,
    46
], [
    46,
    124
], [
    106,
    43
], [
    43,
    204
], [
    204,
    106
], [
    96,
    62
], [
    62,
    77
], [
    77,
    96
], [
    227,
    137
], [
    137,
    116
], [
    116,
    227
], [
    73,
    41
], [
    41,
    72
], [
    72,
    73
], [
    36,
    203
], [
    203,
    142
], [
    142,
    36
], [
    235,
    64
], [
    64,
    240
], [
    240,
    235
], [
    48,
    49
], [
    49,
    64
], [
    64,
    48
], [
    42,
    41
], [
    41,
    74
], [
    74,
    42
], [
    214,
    212
], [
    212,
    207
], [
    207,
    214
], [
    183,
    42
], [
    42,
    184
], [
    184,
    183
], [
    210,
    169
], [
    169,
    211
], [
    211,
    210
], [
    140,
    170
], [
    170,
    176
], [
    176,
    140
], [
    104,
    105
], [
    105,
    69
], [
    69,
    104
], [
    193,
    122
], [
    122,
    168
], [
    168,
    193
], [
    50,
    123
], [
    123,
    187
], [
    187,
    50
], [
    89,
    96
], [
    96,
    90
], [
    90,
    89
], [
    66,
    65
], [
    65,
    107
], [
    107,
    66
], [
    179,
    89
], [
    89,
    180
], [
    180,
    179
], [
    119,
    101
], [
    101,
    120
], [
    120,
    119
], [
    68,
    63
], [
    63,
    104
], [
    104,
    68
], [
    234,
    93
], [
    93,
    227
], [
    227,
    234
], [
    16,
    15
], [
    15,
    85
], [
    85,
    16
], [
    209,
    129
], [
    129,
    49
], [
    49,
    209
], [
    15,
    14
], [
    14,
    86
], [
    86,
    15
], [
    107,
    55
], [
    55,
    9
], [
    9,
    107
], [
    120,
    100
], [
    100,
    121
], [
    121,
    120
], [
    153,
    145
], [
    145,
    22
], [
    22,
    153
], [
    178,
    88
], [
    88,
    179
], [
    179,
    178
], [
    197,
    6
], [
    6,
    196
], [
    196,
    197
], [
    89,
    88
], [
    88,
    96
], [
    96,
    89
], [
    135,
    138
], [
    138,
    136
], [
    136,
    135
], [
    138,
    215
], [
    215,
    172
], [
    172,
    138
], [
    218,
    115
], [
    115,
    219
], [
    219,
    218
], [
    41,
    42
], [
    42,
    81
], [
    81,
    41
], [
    5,
    195
], [
    195,
    51
], [
    51,
    5
], [
    57,
    43
], [
    43,
    61
], [
    61,
    57
], [
    208,
    171
], [
    171,
    199
], [
    199,
    208
], [
    41,
    81
], [
    81,
    38
], [
    38,
    41
], [
    224,
    53
], [
    53,
    225
], [
    225,
    224
], [
    24,
    144
], [
    144,
    110
], [
    110,
    24
], [
    105,
    52
], [
    52,
    66
], [
    66,
    105
], [
    118,
    229
], [
    229,
    117
], [
    117,
    118
], [
    227,
    34
], [
    34,
    234
], [
    234,
    227
], [
    66,
    107
], [
    107,
    69
], [
    69,
    66
], [
    10,
    109
], [
    109,
    151
], [
    151,
    10
], [
    219,
    48
], [
    48,
    235
], [
    235,
    219
], [
    183,
    62
], [
    62,
    191
], [
    191,
    183
], [
    142,
    129
], [
    129,
    126
], [
    126,
    142
], [
    116,
    111
], [
    111,
    143
], [
    143,
    116
], [
    118,
    117
], [
    117,
    50
], [
    50,
    118
], [
    223,
    222
], [
    222,
    52
], [
    52,
    223
], [
    94,
    19
], [
    19,
    141
], [
    141,
    94
], [
    222,
    221
], [
    221,
    65
], [
    65,
    222
], [
    196,
    3
], [
    3,
    197
], [
    197,
    196
], [
    45,
    220
], [
    220,
    44
], [
    44,
    45
], [
    156,
    70
], [
    70,
    139
], [
    139,
    156
], [
    188,
    122
], [
    122,
    245
], [
    245,
    188
], [
    139,
    71
], [
    71,
    162
], [
    162,
    139
], [
    149,
    170
], [
    170,
    150
], [
    150,
    149
], [
    122,
    188
], [
    188,
    196
], [
    196,
    122
], [
    206,
    216
], [
    216,
    92
], [
    92,
    206
], [
    164,
    2
], [
    2,
    167
], [
    167,
    164
], [
    242,
    141
], [
    141,
    241
], [
    241,
    242
], [
    0,
    164
], [
    164,
    37
], [
    37,
    0
], [
    11,
    72
], [
    72,
    12
], [
    12,
    11
], [
    12,
    38
], [
    38,
    13
], [
    13,
    12
], [
    70,
    63
], [
    63,
    71
], [
    71,
    70
], [
    31,
    226
], [
    226,
    111
], [
    111,
    31
], [
    36,
    101
], [
    101,
    205
], [
    205,
    36
], [
    203,
    206
], [
    206,
    165
], [
    165,
    203
], [
    126,
    209
], [
    209,
    217
], [
    217,
    126
], [
    98,
    165
], [
    165,
    97
], [
    97,
    98
], [
    237,
    220
], [
    220,
    218
], [
    218,
    237
], [
    237,
    239
], [
    239,
    241
], [
    241,
    237
], [
    210,
    214
], [
    214,
    169
], [
    169,
    210
], [
    140,
    171
], [
    171,
    32
], [
    32,
    140
], [
    241,
    125
], [
    125,
    237
], [
    237,
    241
], [
    179,
    86
], [
    86,
    178
], [
    178,
    179
], [
    180,
    85
], [
    85,
    179
], [
    179,
    180
], [
    181,
    84
], [
    84,
    180
], [
    180,
    181
], [
    182,
    83
], [
    83,
    181
], [
    181,
    182
], [
    194,
    201
], [
    201,
    182
], [
    182,
    194
], [
    177,
    137
], [
    137,
    132
], [
    132,
    177
], [
    184,
    76
], [
    76,
    183
], [
    183,
    184
], [
    185,
    61
], [
    61,
    184
], [
    184,
    185
], [
    186,
    57
], [
    57,
    185
], [
    185,
    186
], [
    216,
    212
], [
    212,
    186
], [
    186,
    216
], [
    192,
    214
], [
    214,
    187
], [
    187,
    192
], [
    139,
    34
], [
    34,
    156
], [
    156,
    139
], [
    218,
    79
], [
    79,
    237
], [
    237,
    218
], [
    147,
    123
], [
    123,
    177
], [
    177,
    147
], [
    45,
    44
], [
    44,
    4
], [
    4,
    45
], [
    208,
    201
], [
    201,
    32
], [
    32,
    208
], [
    98,
    64
], [
    64,
    129
], [
    129,
    98
], [
    192,
    213
], [
    213,
    138
], [
    138,
    192
], [
    235,
    59
], [
    59,
    219
], [
    219,
    235
], [
    141,
    242
], [
    242,
    97
], [
    97,
    141
], [
    97,
    2
], [
    2,
    141
], [
    141,
    97
], [
    240,
    75
], [
    75,
    235
], [
    235,
    240
], [
    229,
    24
], [
    24,
    228
], [
    228,
    229
], [
    31,
    25
], [
    25,
    226
], [
    226,
    31
], [
    230,
    23
], [
    23,
    229
], [
    229,
    230
], [
    231,
    22
], [
    22,
    230
], [
    230,
    231
], [
    232,
    26
], [
    26,
    231
], [
    231,
    232
], [
    233,
    112
], [
    112,
    232
], [
    232,
    233
], [
    244,
    189
], [
    189,
    243
], [
    243,
    244
], [
    189,
    221
], [
    221,
    190
], [
    190,
    189
], [
    222,
    28
], [
    28,
    221
], [
    221,
    222
], [
    223,
    27
], [
    27,
    222
], [
    222,
    223
], [
    224,
    29
], [
    29,
    223
], [
    223,
    224
], [
    225,
    30
], [
    30,
    224
], [
    224,
    225
], [
    113,
    247
], [
    247,
    225
], [
    225,
    113
], [
    99,
    60
], [
    60,
    240
], [
    240,
    99
], [
    213,
    147
], [
    147,
    215
], [
    215,
    213
], [
    60,
    20
], [
    20,
    166
], [
    166,
    60
], [
    192,
    187
], [
    187,
    213
], [
    213,
    192
], [
    243,
    112
], [
    112,
    244
], [
    244,
    243
], [
    244,
    233
], [
    233,
    245
], [
    245,
    244
], [
    245,
    128
], [
    128,
    188
], [
    188,
    245
], [
    188,
    114
], [
    114,
    174
], [
    174,
    188
], [
    134,
    131
], [
    131,
    220
], [
    220,
    134
], [
    174,
    217
], [
    217,
    236
], [
    236,
    174
], [
    236,
    198
], [
    198,
    134
], [
    134,
    236
], [
    215,
    177
], [
    177,
    58
], [
    58,
    215
], [
    156,
    143
], [
    143,
    124
], [
    124,
    156
], [
    25,
    110
], [
    110,
    7
], [
    7,
    25
], [
    31,
    228
], [
    228,
    25
], [
    25,
    31
], [
    264,
    356
], [
    356,
    368
], [
    368,
    264
], [
    0,
    11
], [
    11,
    267
], [
    267,
    0
], [
    451,
    452
], [
    452,
    349
], [
    349,
    451
], [
    267,
    302
], [
    302,
    269
], [
    269,
    267
], [
    350,
    357
], [
    357,
    277
], [
    277,
    350
], [
    350,
    452
], [
    452,
    357
], [
    357,
    350
], [
    299,
    333
], [
    333,
    297
], [
    297,
    299
], [
    396,
    175
], [
    175,
    377
], [
    377,
    396
], [
    280,
    347
], [
    347,
    330
], [
    330,
    280
], [
    269,
    303
], [
    303,
    270
], [
    270,
    269
], [
    151,
    9
], [
    9,
    337
], [
    337,
    151
], [
    344,
    278
], [
    278,
    360
], [
    360,
    344
], [
    424,
    418
], [
    418,
    431
], [
    431,
    424
], [
    270,
    304
], [
    304,
    409
], [
    409,
    270
], [
    272,
    310
], [
    310,
    407
], [
    407,
    272
], [
    322,
    270
], [
    270,
    410
], [
    410,
    322
], [
    449,
    450
], [
    450,
    347
], [
    347,
    449
], [
    432,
    422
], [
    422,
    434
], [
    434,
    432
], [
    18,
    313
], [
    313,
    17
], [
    17,
    18
], [
    291,
    306
], [
    306,
    375
], [
    375,
    291
], [
    259,
    387
], [
    387,
    260
], [
    260,
    259
], [
    424,
    335
], [
    335,
    418
], [
    418,
    424
], [
    434,
    364
], [
    364,
    416
], [
    416,
    434
], [
    391,
    423
], [
    423,
    327
], [
    327,
    391
], [
    301,
    251
], [
    251,
    298
], [
    298,
    301
], [
    275,
    281
], [
    281,
    4
], [
    4,
    275
], [
    254,
    373
], [
    373,
    253
], [
    253,
    254
], [
    375,
    307
], [
    307,
    321
], [
    321,
    375
], [
    280,
    425
], [
    425,
    411
], [
    411,
    280
], [
    200,
    421
], [
    421,
    18
], [
    18,
    200
], [
    335,
    321
], [
    321,
    406
], [
    406,
    335
], [
    321,
    320
], [
    320,
    405
], [
    405,
    321
], [
    314,
    315
], [
    315,
    17
], [
    17,
    314
], [
    423,
    426
], [
    426,
    266
], [
    266,
    423
], [
    396,
    377
], [
    377,
    369
], [
    369,
    396
], [
    270,
    322
], [
    322,
    269
], [
    269,
    270
], [
    413,
    417
], [
    417,
    464
], [
    464,
    413
], [
    385,
    386
], [
    386,
    258
], [
    258,
    385
], [
    248,
    456
], [
    456,
    419
], [
    419,
    248
], [
    298,
    284
], [
    284,
    333
], [
    333,
    298
], [
    168,
    417
], [
    417,
    8
], [
    8,
    168
], [
    448,
    346
], [
    346,
    261
], [
    261,
    448
], [
    417,
    413
], [
    413,
    285
], [
    285,
    417
], [
    326,
    327
], [
    327,
    328
], [
    328,
    326
], [
    277,
    355
], [
    355,
    329
], [
    329,
    277
], [
    309,
    392
], [
    392,
    438
], [
    438,
    309
], [
    381,
    382
], [
    382,
    256
], [
    256,
    381
], [
    279,
    429
], [
    429,
    360
], [
    360,
    279
], [
    365,
    364
], [
    364,
    379
], [
    379,
    365
], [
    355,
    277
], [
    277,
    437
], [
    437,
    355
], [
    282,
    443
], [
    443,
    283
], [
    283,
    282
], [
    281,
    275
], [
    275,
    363
], [
    363,
    281
], [
    395,
    431
], [
    431,
    369
], [
    369,
    395
], [
    299,
    297
], [
    297,
    337
], [
    337,
    299
], [
    335,
    273
], [
    273,
    321
], [
    321,
    335
], [
    348,
    450
], [
    450,
    349
], [
    349,
    348
], [
    359,
    446
], [
    446,
    467
], [
    467,
    359
], [
    283,
    293
], [
    293,
    282
], [
    282,
    283
], [
    250,
    458
], [
    458,
    462
], [
    462,
    250
], [
    300,
    276
], [
    276,
    383
], [
    383,
    300
], [
    292,
    308
], [
    308,
    325
], [
    325,
    292
], [
    283,
    276
], [
    276,
    293
], [
    293,
    283
], [
    264,
    372
], [
    372,
    447
], [
    447,
    264
], [
    346,
    352
], [
    352,
    340
], [
    340,
    346
], [
    354,
    274
], [
    274,
    19
], [
    19,
    354
], [
    363,
    456
], [
    456,
    281
], [
    281,
    363
], [
    426,
    436
], [
    436,
    425
], [
    425,
    426
], [
    380,
    381
], [
    381,
    252
], [
    252,
    380
], [
    267,
    269
], [
    269,
    393
], [
    393,
    267
], [
    421,
    200
], [
    200,
    428
], [
    428,
    421
], [
    371,
    266
], [
    266,
    329
], [
    329,
    371
], [
    432,
    287
], [
    287,
    422
], [
    422,
    432
], [
    290,
    250
], [
    250,
    328
], [
    328,
    290
], [
    385,
    258
], [
    258,
    384
], [
    384,
    385
], [
    446,
    265
], [
    265,
    342
], [
    342,
    446
], [
    386,
    387
], [
    387,
    257
], [
    257,
    386
], [
    422,
    424
], [
    424,
    430
], [
    430,
    422
], [
    445,
    342
], [
    342,
    276
], [
    276,
    445
], [
    422,
    273
], [
    273,
    424
], [
    424,
    422
], [
    306,
    292
], [
    292,
    307
], [
    307,
    306
], [
    352,
    366
], [
    366,
    345
], [
    345,
    352
], [
    268,
    271
], [
    271,
    302
], [
    302,
    268
], [
    358,
    423
], [
    423,
    371
], [
    371,
    358
], [
    327,
    294
], [
    294,
    460
], [
    460,
    327
], [
    331,
    279
], [
    279,
    294
], [
    294,
    331
], [
    303,
    271
], [
    271,
    304
], [
    304,
    303
], [
    436,
    432
], [
    432,
    427
], [
    427,
    436
], [
    304,
    272
], [
    272,
    408
], [
    408,
    304
], [
    395,
    394
], [
    394,
    431
], [
    431,
    395
], [
    378,
    395
], [
    395,
    400
], [
    400,
    378
], [
    296,
    334
], [
    334,
    299
], [
    299,
    296
], [
    6,
    351
], [
    351,
    168
], [
    168,
    6
], [
    376,
    352
], [
    352,
    411
], [
    411,
    376
], [
    307,
    325
], [
    325,
    320
], [
    320,
    307
], [
    285,
    295
], [
    295,
    336
], [
    336,
    285
], [
    320,
    319
], [
    319,
    404
], [
    404,
    320
], [
    329,
    330
], [
    330,
    349
], [
    349,
    329
], [
    334,
    293
], [
    293,
    333
], [
    333,
    334
], [
    366,
    323
], [
    323,
    447
], [
    447,
    366
], [
    316,
    15
], [
    15,
    315
], [
    315,
    316
], [
    331,
    358
], [
    358,
    279
], [
    279,
    331
], [
    317,
    14
], [
    14,
    316
], [
    316,
    317
], [
    8,
    285
], [
    285,
    9
], [
    9,
    8
], [
    277,
    329
], [
    329,
    350
], [
    350,
    277
], [
    253,
    374
], [
    374,
    252
], [
    252,
    253
], [
    319,
    318
], [
    318,
    403
], [
    403,
    319
], [
    351,
    6
], [
    6,
    419
], [
    419,
    351
], [
    324,
    318
], [
    318,
    325
], [
    325,
    324
], [
    397,
    367
], [
    367,
    365
], [
    365,
    397
], [
    288,
    435
], [
    435,
    397
], [
    397,
    288
], [
    278,
    344
], [
    344,
    439
], [
    439,
    278
], [
    310,
    272
], [
    272,
    311
], [
    311,
    310
], [
    248,
    195
], [
    195,
    281
], [
    281,
    248
], [
    375,
    273
], [
    273,
    291
], [
    291,
    375
], [
    175,
    396
], [
    396,
    199
], [
    199,
    175
], [
    312,
    311
], [
    311,
    268
], [
    268,
    312
], [
    276,
    283
], [
    283,
    445
], [
    445,
    276
], [
    390,
    373
], [
    373,
    339
], [
    339,
    390
], [
    295,
    282
], [
    282,
    296
], [
    296,
    295
], [
    448,
    449
], [
    449,
    346
], [
    346,
    448
], [
    356,
    264
], [
    264,
    454
], [
    454,
    356
], [
    337,
    336
], [
    336,
    299
], [
    299,
    337
], [
    337,
    338
], [
    338,
    151
], [
    151,
    337
], [
    294,
    278
], [
    278,
    455
], [
    455,
    294
], [
    308,
    292
], [
    292,
    415
], [
    415,
    308
], [
    429,
    358
], [
    358,
    355
], [
    355,
    429
], [
    265,
    340
], [
    340,
    372
], [
    372,
    265
], [
    352,
    346
], [
    346,
    280
], [
    280,
    352
], [
    295,
    442
], [
    442,
    282
], [
    282,
    295
], [
    354,
    19
], [
    19,
    370
], [
    370,
    354
], [
    285,
    441
], [
    441,
    295
], [
    295,
    285
], [
    195,
    248
], [
    248,
    197
], [
    197,
    195
], [
    457,
    440
], [
    440,
    274
], [
    274,
    457
], [
    301,
    300
], [
    300,
    368
], [
    368,
    301
], [
    417,
    351
], [
    351,
    465
], [
    465,
    417
], [
    251,
    301
], [
    301,
    389
], [
    389,
    251
], [
    394,
    395
], [
    395,
    379
], [
    379,
    394
], [
    399,
    412
], [
    412,
    419
], [
    419,
    399
], [
    410,
    436
], [
    436,
    322
], [
    322,
    410
], [
    326,
    2
], [
    2,
    393
], [
    393,
    326
], [
    354,
    370
], [
    370,
    461
], [
    461,
    354
], [
    393,
    164
], [
    164,
    267
], [
    267,
    393
], [
    268,
    302
], [
    302,
    12
], [
    12,
    268
], [
    312,
    268
], [
    268,
    13
], [
    13,
    312
], [
    298,
    293
], [
    293,
    301
], [
    301,
    298
], [
    265,
    446
], [
    446,
    340
], [
    340,
    265
], [
    280,
    330
], [
    330,
    425
], [
    425,
    280
], [
    322,
    426
], [
    426,
    391
], [
    391,
    322
], [
    420,
    429
], [
    429,
    437
], [
    437,
    420
], [
    393,
    391
], [
    391,
    326
], [
    326,
    393
], [
    344,
    440
], [
    440,
    438
], [
    438,
    344
], [
    458,
    459
], [
    459,
    461
], [
    461,
    458
], [
    364,
    434
], [
    434,
    394
], [
    394,
    364
], [
    428,
    396
], [
    396,
    262
], [
    262,
    428
], [
    274,
    354
], [
    354,
    457
], [
    457,
    274
], [
    317,
    316
], [
    316,
    402
], [
    402,
    317
], [
    316,
    315
], [
    315,
    403
], [
    403,
    316
], [
    315,
    314
], [
    314,
    404
], [
    404,
    315
], [
    314,
    313
], [
    313,
    405
], [
    405,
    314
], [
    313,
    421
], [
    421,
    406
], [
    406,
    313
], [
    323,
    366
], [
    366,
    361
], [
    361,
    323
], [
    292,
    306
], [
    306,
    407
], [
    407,
    292
], [
    306,
    291
], [
    291,
    408
], [
    408,
    306
], [
    291,
    287
], [
    287,
    409
], [
    409,
    291
], [
    287,
    432
], [
    432,
    410
], [
    410,
    287
], [
    427,
    434
], [
    434,
    411
], [
    411,
    427
], [
    372,
    264
], [
    264,
    383
], [
    383,
    372
], [
    459,
    309
], [
    309,
    457
], [
    457,
    459
], [
    366,
    352
], [
    352,
    401
], [
    401,
    366
], [
    1,
    274
], [
    274,
    4
], [
    4,
    1
], [
    418,
    421
], [
    421,
    262
], [
    262,
    418
], [
    331,
    294
], [
    294,
    358
], [
    358,
    331
], [
    435,
    433
], [
    433,
    367
], [
    367,
    435
], [
    392,
    289
], [
    289,
    439
], [
    439,
    392
], [
    328,
    462
], [
    462,
    326
], [
    326,
    328
], [
    94,
    2
], [
    2,
    370
], [
    370,
    94
], [
    289,
    305
], [
    305,
    455
], [
    455,
    289
], [
    339,
    254
], [
    254,
    448
], [
    448,
    339
], [
    359,
    255
], [
    255,
    446
], [
    446,
    359
], [
    254,
    253
], [
    253,
    449
], [
    449,
    254
], [
    253,
    252
], [
    252,
    450
], [
    450,
    253
], [
    252,
    256
], [
    256,
    451
], [
    451,
    252
], [
    256,
    341
], [
    341,
    452
], [
    452,
    256
], [
    414,
    413
], [
    413,
    463
], [
    463,
    414
], [
    286,
    441
], [
    441,
    414
], [
    414,
    286
], [
    286,
    258
], [
    258,
    441
], [
    441,
    286
], [
    258,
    257
], [
    257,
    442
], [
    442,
    258
], [
    257,
    259
], [
    259,
    443
], [
    443,
    257
], [
    259,
    260
], [
    260,
    444
], [
    444,
    259
], [
    260,
    467
], [
    467,
    445
], [
    445,
    260
], [
    309,
    459
], [
    459,
    250
], [
    250,
    309
], [
    305,
    289
], [
    289,
    290
], [
    290,
    305
], [
    305,
    290
], [
    290,
    460
], [
    460,
    305
], [
    401,
    376
], [
    376,
    435
], [
    435,
    401
], [
    309,
    250
], [
    250,
    392
], [
    392,
    309
], [
    376,
    411
], [
    411,
    433
], [
    433,
    376
], [
    453,
    341
], [
    341,
    464
], [
    464,
    453
], [
    357,
    453
], [
    453,
    465
], [
    465,
    357
], [
    343,
    357
], [
    357,
    412
], [
    412,
    343
], [
    437,
    343
], [
    343,
    399
], [
    399,
    437
], [
    344,
    360
], [
    360,
    440
], [
    440,
    344
], [
    420,
    437
], [
    437,
    456
], [
    456,
    420
], [
    360,
    420
], [
    420,
    363
], [
    363,
    360
], [
    361,
    401
], [
    401,
    288
], [
    288,
    361
], [
    265,
    372
], [
    372,
    353
], [
    353,
    265
], [
    390,
    339
], [
    339,
    249
], [
    249,
    390
], [
    339,
    448
], [
    448,
    255
], [
    255,
    339
]);
function mh(t) {
    t.u = {
        faceLandmarks: [],
        faceBlendshapes: [],
        facialTransformationMatrixes: []
    };
}
var yh = class extends ih {
    constructor(t, e){
        super(new Za(t, e), "image_in", "norm_rect", !1), this.u = {
            faceLandmarks: [],
            faceBlendshapes: [],
            facialTransformationMatrixes: []
        }, this.outputFacialTransformationMatrixes = this.outputFaceBlendshapes = !1, Cn(t = this.h = new Hs, 0, 1, e = new Cs), this.H = new Vs, Cn(this.h, 0, 3, this.H), this.j = new Is, Cn(this.h, 0, 2, this.j), Xn(this.j, 4, 1), Hn(this.j, 2, .5), Hn(this.H, 2, .5), Hn(this.h, 4, .5);
    }
    get baseOptions() {
        return Rn(this.h, Cs, 1);
    }
    set baseOptions(t) {
        Cn(this.h, 0, 1, t);
    }
    o(t) {
        return "numFaces" in t && Xn(this.j, 4, t.numFaces ?? 1), "minFaceDetectionConfidence" in t && Hn(this.j, 2, t.minFaceDetectionConfidence ?? .5), "minTrackingConfidence" in t && Hn(this.h, 4, t.minTrackingConfidence ?? .5), "minFacePresenceConfidence" in t && Hn(this.H, 2, t.minFacePresenceConfidence ?? .5), "outputFaceBlendshapes" in t && (this.outputFaceBlendshapes = !!t.outputFaceBlendshapes), "outputFacialTransformationMatrixes" in t && (this.outputFacialTransformationMatrixes = !!t.outputFacialTransformationMatrixes), this.l(t);
    }
    F(t, e) {
        return mh(this), eh(this, t, e), this.u;
    }
    G(t, e, n) {
        return mh(this), nh(this, t, n, e), this.u;
    }
    m() {
        var t = new Di;
        Ii(t, "image_in"), Ii(t, "norm_rect"), Ui(t, "face_landmarks");
        const e = new yi;
        Wn(e, zs, this.h);
        const n = new Li;
        ki(n, "mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"), xi(n, "IMAGE:image_in"), xi(n, "NORM_RECT:norm_rect"), Si(n, "NORM_LANDMARKS:face_landmarks"), n.o(e), Oi(t, n), this.g.attachProtoVectorListener("face_landmarks", (t, e)=>{
            for (const e of t)t = us(e), this.u.faceLandmarks.push(Io(t));
            ea(this, e);
        }), this.g.attachEmptyPacketListener("face_landmarks", (t)=>{
            ea(this, t);
        }), this.outputFaceBlendshapes && (Ui(t, "blendshapes"), Si(n, "BLENDSHAPES:blendshapes"), this.g.attachProtoVectorListener("blendshapes", (t, e)=>{
            if (this.outputFaceBlendshapes) for (const e of t)t = Wi(e), this.u.faceBlendshapes.push(Co(t.g() ?? []));
            ea(this, e);
        }), this.g.attachEmptyPacketListener("blendshapes", (t)=>{
            ea(this, t);
        })), this.outputFacialTransformationMatrixes && (Ui(t, "face_geometry"), Si(n, "FACE_GEOMETRY:face_geometry"), this.g.attachProtoVectorListener("face_geometry", (t, e)=>{
            if (this.outputFacialTransformationMatrixes) for (const e of t)(t = Rn(Gs(e), ls, 2)) && this.u.facialTransformationMatrixes.push({
                rows: Bn(Nn(t, 1), 0) ?? 0,
                columns: Bn(Nn(t, 2), 0) ?? 0,
                data: yn(t, 3, ve).slice() ?? []
            });
            ea(this, e);
        }), this.g.attachEmptyPacketListener("face_geometry", (t)=>{
            ea(this, t);
        })), t = t.g(), this.setGraph(new Uint8Array(t), !0);
    }
};
yh.prototype.detectForVideo = yh.prototype.G, yh.prototype.detect = yh.prototype.F, yh.prototype.setOptions = yh.prototype.o, yh.createFromModelPath = function(t, e) {
    return Qa(yh, t, {
        baseOptions: {
            modelAssetPath: e
        }
    });
}, yh.createFromModelBuffer = function(t, e) {
    return Qa(yh, t, {
        baseOptions: {
            modelAssetBuffer: e
        }
    });
}, yh.createFromOptions = function(t, e) {
    return Qa(yh, t, e);
}, yh.FACE_LANDMARKS_LIPS = oh, yh.FACE_LANDMARKS_LEFT_EYE = ah, yh.FACE_LANDMARKS_LEFT_EYEBROW = hh, yh.FACE_LANDMARKS_LEFT_IRIS = ch, yh.FACE_LANDMARKS_RIGHT_EYE = uh, yh.FACE_LANDMARKS_RIGHT_EYEBROW = lh, yh.FACE_LANDMARKS_RIGHT_IRIS = dh, yh.FACE_LANDMARKS_FACE_OVAL = fh, yh.FACE_LANDMARKS_CONTOURS = ph, yh.FACE_LANDMARKS_TESSELATION = gh;
var _h = class extends ih {
    constructor(t, e){
        super(new Za(t, e), "image_in", "norm_rect", !0), Cn(t = this.j = new Ks, 0, 1, e = new Cs);
    }
    get baseOptions() {
        return Rn(this.j, Cs, 1);
    }
    set baseOptions(t) {
        Cn(this.j, 0, 1, t);
    }
    o(t) {
        return super.l(t);
    }
    Pa(t, e, n) {
        const r = "function" != typeof e ? e : {};
        if (this.h = "function" == typeof e ? e : n, eh(this, t, r ?? {}), !this.h) return this.u;
    }
    m() {
        var t = new Di;
        Ii(t, "image_in"), Ii(t, "norm_rect"), Ui(t, "stylized_image");
        const e = new yi;
        Wn(e, Ys, this.j);
        const n = new Li;
        ki(n, "mediapipe.tasks.vision.face_stylizer.FaceStylizerGraph"), xi(n, "IMAGE:image_in"), xi(n, "NORM_RECT:norm_rect"), Si(n, "STYLIZED_IMAGE:stylized_image"), n.o(e), Oi(t, n), this.g.W("stylized_image", (t, e)=>{
            var n = !this.h, r = t.data, i = t.width;
            const s = i * (t = t.height);
            if (r instanceof Uint8Array) {
                if (r.length === 3 * s) {
                    const e = new Uint8ClampedArray(4 * s);
                    for(let t = 0; t < s; ++t)e[4 * t] = r[3 * t], e[4 * t + 1] = r[3 * t + 1], e[4 * t + 2] = r[3 * t + 2], e[4 * t + 3] = 255;
                    r = new ImageData(e, i, t);
                } else {
                    if (r.length !== 4 * s) throw Error("Unsupported channel count: " + r.length / s);
                    r = new ImageData(new Uint8ClampedArray(r.buffer, r.byteOffset, r.length), i, t);
                }
            } else if (!(r instanceof WebGLTexture)) throw Error(`Unsupported format: ${r.constructor.name}`);
            i = new Ka([
                r
            ], !1, !1, this.g.i.canvas, this.M, i, t), this.u = n = n ? i.clone() : i, this.h && this.h(n), ea(this, e);
        }), this.g.attachEmptyPacketListener("stylized_image", (t)=>{
            this.u = null, this.h && this.h(null), ea(this, t);
        }), t = t.g(), this.setGraph(new Uint8Array(t), !0);
    }
};
_h.prototype.stylize = _h.prototype.Pa, _h.prototype.setOptions = _h.prototype.o, _h.createFromModelPath = function(t, e) {
    return Qa(_h, t, {
        baseOptions: {
            modelAssetPath: e
        }
    });
}, _h.createFromModelBuffer = function(t, e) {
    return Qa(_h, t, {
        baseOptions: {
            modelAssetBuffer: e
        }
    });
}, _h.createFromOptions = function(t, e) {
    return Qa(_h, t, e);
};
var vh = $a([
    0,
    1
], [
    1,
    2
], [
    2,
    3
], [
    3,
    4
], [
    0,
    5
], [
    5,
    6
], [
    6,
    7
], [
    7,
    8
], [
    5,
    9
], [
    9,
    10
], [
    10,
    11
], [
    11,
    12
], [
    9,
    13
], [
    13,
    14
], [
    14,
    15
], [
    15,
    16
], [
    13,
    17
], [
    0,
    17
], [
    17,
    18
], [
    18,
    19
], [
    19,
    20
]);
function Eh(t) {
    t.gestures = [], t.landmarks = [], t.worldLandmarks = [], t.handedness = [];
}
function wh(t) {
    return 0 === t.gestures.length ? {
        gestures: [],
        landmarks: [],
        worldLandmarks: [],
        handedness: [],
        handednesses: []
    } : {
        gestures: t.gestures,
        landmarks: t.landmarks,
        worldLandmarks: t.worldLandmarks,
        handedness: t.handedness,
        handednesses: t.handedness
    };
}
function Th(t, e = !0) {
    const n = [];
    for (const i of t){
        var r = Wi(i);
        t = [];
        for (const n of r.g())r = e && null != Nn(n, 1) ? Bn(Nn(n, 1), 0) : -1, t.push({
            score: Gn(n, 2) ?? 0,
            index: r,
            categoryName: jn(n, 3) ?? "",
            displayName: jn(n, 4) ?? ""
        });
        n.push(t);
    }
    return n;
}
var Ah = class extends ih {
    constructor(t, e){
        super(new Za(t, e), "image_in", "norm_rect", !1), this.gestures = [], this.landmarks = [], this.worldLandmarks = [], this.handedness = [], Cn(t = this.v = new oo, 0, 1, e = new Cs), this.A = new io, Cn(this.v, 0, 2, this.A), this.u = new no, Cn(this.A, 0, 3, this.u), this.h = new to, Cn(this.A, 0, 2, this.h), this.j = new Zs, Cn(this.v, 0, 3, this.j), Hn(this.h, 2, .5), Hn(this.A, 4, .5), Hn(this.u, 2, .5);
    }
    get baseOptions() {
        return Rn(this.v, Cs, 1);
    }
    set baseOptions(t) {
        Cn(this.v, 0, 1, t);
    }
    o(t) {
        if (Xn(this.h, 3, t.numHands ?? 1), "minHandDetectionConfidence" in t && Hn(this.h, 2, t.minHandDetectionConfidence ?? .5), "minTrackingConfidence" in t && Hn(this.A, 4, t.minTrackingConfidence ?? .5), "minHandPresenceConfidence" in t && Hn(this.u, 2, t.minHandPresenceConfidence ?? .5), t.cannedGesturesClassifierOptions) {
            var e = new $s, n = e, r = Po(t.cannedGesturesClassifierOptions, Rn(this.j, $s, 3)?.h());
            Cn(n, 0, 2, r), Cn(this.j, 0, 3, e);
        } else void 0 === t.cannedGesturesClassifierOptions && Rn(this.j, $s, 3)?.g();
        return t.customGesturesClassifierOptions ? (Cn(n = e = new $s, 0, 2, r = Po(t.customGesturesClassifierOptions, Rn(this.j, $s, 4)?.h())), Cn(this.j, 0, 4, e)) : void 0 === t.customGesturesClassifierOptions && Rn(this.j, $s, 4)?.g(), this.l(t);
    }
    Ka(t, e) {
        return Eh(this), eh(this, t, e), wh(this);
    }
    La(t, e, n) {
        return Eh(this), nh(this, t, n, e), wh(this);
    }
    m() {
        var t = new Di;
        Ii(t, "image_in"), Ii(t, "norm_rect"), Ui(t, "hand_gestures"), Ui(t, "hand_landmarks"), Ui(t, "world_hand_landmarks"), Ui(t, "handedness");
        const e = new yi;
        Wn(e, co, this.v);
        const n = new Li;
        ki(n, "mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"), xi(n, "IMAGE:image_in"), xi(n, "NORM_RECT:norm_rect"), Si(n, "HAND_GESTURES:hand_gestures"), Si(n, "LANDMARKS:hand_landmarks"), Si(n, "WORLD_LANDMARKS:world_hand_landmarks"), Si(n, "HANDEDNESS:handedness"), n.o(e), Oi(t, n), this.g.attachProtoVectorListener("hand_landmarks", (t, e)=>{
            for (const e of t){
                t = us(e);
                const n = [];
                for (const e of Pn(t, as, 1))n.push({
                    x: Gn(e, 1) ?? 0,
                    y: Gn(e, 2) ?? 0,
                    z: Gn(e, 3) ?? 0,
                    visibility: Gn(e, 4) ?? 0
                });
                this.landmarks.push(n);
            }
            ea(this, e);
        }), this.g.attachEmptyPacketListener("hand_landmarks", (t)=>{
            ea(this, t);
        }), this.g.attachProtoVectorListener("world_hand_landmarks", (t, e)=>{
            for (const e of t){
                t = os(e);
                const n = [];
                for (const e of Pn(t, rs, 1))n.push({
                    x: Gn(e, 1) ?? 0,
                    y: Gn(e, 2) ?? 0,
                    z: Gn(e, 3) ?? 0,
                    visibility: Gn(e, 4) ?? 0
                });
                this.worldLandmarks.push(n);
            }
            ea(this, e);
        }), this.g.attachEmptyPacketListener("world_hand_landmarks", (t)=>{
            ea(this, t);
        }), this.g.attachProtoVectorListener("hand_gestures", (t, e)=>{
            this.gestures.push(...Th(t, !1)), ea(this, e);
        }), this.g.attachEmptyPacketListener("hand_gestures", (t)=>{
            ea(this, t);
        }), this.g.attachProtoVectorListener("handedness", (t, e)=>{
            this.handedness.push(...Th(t)), ea(this, e);
        }), this.g.attachEmptyPacketListener("handedness", (t)=>{
            ea(this, t);
        }), t = t.g(), this.setGraph(new Uint8Array(t), !0);
    }
};
function bh(t) {
    return {
        landmarks: t.landmarks,
        worldLandmarks: t.worldLandmarks,
        handednesses: t.handedness,
        handedness: t.handedness
    };
}
Ah.prototype.recognizeForVideo = Ah.prototype.La, Ah.prototype.recognize = Ah.prototype.Ka, Ah.prototype.setOptions = Ah.prototype.o, Ah.createFromModelPath = function(t, e) {
    return Qa(Ah, t, {
        baseOptions: {
            modelAssetPath: e
        }
    });
}, Ah.createFromModelBuffer = function(t, e) {
    return Qa(Ah, t, {
        baseOptions: {
            modelAssetBuffer: e
        }
    });
}, Ah.createFromOptions = function(t, e) {
    return Qa(Ah, t, e);
}, Ah.HAND_CONNECTIONS = vh;
var kh = class extends ih {
    constructor(t, e){
        super(new Za(t, e), "image_in", "norm_rect", !1), this.landmarks = [], this.worldLandmarks = [], this.handedness = [], Cn(t = this.j = new io, 0, 1, e = new Cs), this.u = new no, Cn(this.j, 0, 3, this.u), this.h = new to, Cn(this.j, 0, 2, this.h), Xn(this.h, 3, 1), Hn(this.h, 2, .5), Hn(this.u, 2, .5), Hn(this.j, 4, .5);
    }
    get baseOptions() {
        return Rn(this.j, Cs, 1);
    }
    set baseOptions(t) {
        Cn(this.j, 0, 1, t);
    }
    o(t) {
        return "numHands" in t && Xn(this.h, 3, t.numHands ?? 1), "minHandDetectionConfidence" in t && Hn(this.h, 2, t.minHandDetectionConfidence ?? .5), "minTrackingConfidence" in t && Hn(this.j, 4, t.minTrackingConfidence ?? .5), "minHandPresenceConfidence" in t && Hn(this.u, 2, t.minHandPresenceConfidence ?? .5), this.l(t);
    }
    F(t, e) {
        return this.landmarks = [], this.worldLandmarks = [], this.handedness = [], eh(this, t, e), bh(this);
    }
    G(t, e, n) {
        return this.landmarks = [], this.worldLandmarks = [], this.handedness = [], nh(this, t, n, e), bh(this);
    }
    m() {
        var t = new Di;
        Ii(t, "image_in"), Ii(t, "norm_rect"), Ui(t, "hand_landmarks"), Ui(t, "world_hand_landmarks"), Ui(t, "handedness");
        const e = new yi;
        Wn(e, ho, this.j);
        const n = new Li;
        ki(n, "mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"), xi(n, "IMAGE:image_in"), xi(n, "NORM_RECT:norm_rect"), Si(n, "LANDMARKS:hand_landmarks"), Si(n, "WORLD_LANDMARKS:world_hand_landmarks"), Si(n, "HANDEDNESS:handedness"), n.o(e), Oi(t, n), this.g.attachProtoVectorListener("hand_landmarks", (t, e)=>{
            for (const e of t)t = us(e), this.landmarks.push(Io(t));
            ea(this, e);
        }), this.g.attachEmptyPacketListener("hand_landmarks", (t)=>{
            ea(this, t);
        }), this.g.attachProtoVectorListener("world_hand_landmarks", (t, e)=>{
            for (const e of t)t = os(e), this.worldLandmarks.push(Uo(t));
            ea(this, e);
        }), this.g.attachEmptyPacketListener("world_hand_landmarks", (t)=>{
            ea(this, t);
        }), this.g.attachProtoVectorListener("handedness", (t, e)=>{
            var n = this.handedness, r = n.push;
            const i = [];
            for (const e of t){
                t = Wi(e);
                const n = [];
                for (const e of t.g())n.push({
                    score: Gn(e, 2) ?? 0,
                    index: Bn(Nn(e, 1), 0) ?? -1,
                    categoryName: jn(e, 3) ?? "",
                    displayName: jn(e, 4) ?? ""
                });
                i.push(n);
            }
            r.call(n, ...i), ea(this, e);
        }), this.g.attachEmptyPacketListener("handedness", (t)=>{
            ea(this, t);
        }), t = t.g(), this.setGraph(new Uint8Array(t), !0);
    }
};
kh.prototype.detectForVideo = kh.prototype.G, kh.prototype.detect = kh.prototype.F, kh.prototype.setOptions = kh.prototype.o, kh.createFromModelPath = function(t, e) {
    return Qa(kh, t, {
        baseOptions: {
            modelAssetPath: e
        }
    });
}, kh.createFromModelBuffer = function(t, e) {
    return Qa(kh, t, {
        baseOptions: {
            modelAssetBuffer: e
        }
    });
}, kh.createFromOptions = function(t, e) {
    return Qa(kh, t, e);
}, kh.HAND_CONNECTIONS = vh;
var xh = $a([
    0,
    1
], [
    1,
    2
], [
    2,
    3
], [
    3,
    7
], [
    0,
    4
], [
    4,
    5
], [
    5,
    6
], [
    6,
    8
], [
    9,
    10
], [
    11,
    12
], [
    11,
    13
], [
    13,
    15
], [
    15,
    17
], [
    15,
    19
], [
    15,
    21
], [
    17,
    19
], [
    12,
    14
], [
    14,
    16
], [
    16,
    18
], [
    16,
    20
], [
    16,
    22
], [
    18,
    20
], [
    11,
    23
], [
    12,
    24
], [
    23,
    24
], [
    23,
    25
], [
    24,
    26
], [
    25,
    27
], [
    26,
    28
], [
    27,
    29
], [
    28,
    30
], [
    29,
    31
], [
    30,
    32
], [
    27,
    31
], [
    28,
    32
]);
function Sh(t) {
    t.h = {
        faceLandmarks: [],
        faceBlendshapes: [],
        poseLandmarks: [],
        poseWorldLandmarks: [],
        poseSegmentationMasks: [],
        leftHandLandmarks: [],
        leftHandWorldLandmarks: [],
        rightHandLandmarks: [],
        rightHandWorldLandmarks: []
    };
}
function Lh(t) {
    try {
        if (!t.I) return t.h;
        t.I(t.h);
    } finally{
        ia(t);
    }
}
function Fh(t, e) {
    t = us(t), e.push(Io(t));
}
var Rh = class extends ih {
    constructor(t, e){
        super(new Za(t, e), "input_frames_image", null, !1), this.h = {
            faceLandmarks: [],
            faceBlendshapes: [],
            poseLandmarks: [],
            poseWorldLandmarks: [],
            poseSegmentationMasks: [],
            leftHandLandmarks: [],
            leftHandWorldLandmarks: [],
            rightHandLandmarks: [],
            rightHandWorldLandmarks: []
        }, this.outputPoseSegmentationMasks = this.outputFaceBlendshapes = !1, Cn(t = this.A = new yo, 0, 1, e = new Cs), this.u = new no, Cn(this.A, 0, 2, this.u), this.aa = new uo, Cn(this.A, 0, 3, this.aa), this.j = new Is, Cn(this.A, 0, 4, this.j), this.H = new Vs, Cn(this.A, 0, 5, this.H), this.v = new fo, Cn(this.A, 0, 6, this.v), this.D = new go, Cn(this.A, 0, 7, this.D), Hn(this.j, 2, .5), Hn(this.j, 3, .3), Hn(this.H, 2, .5), Hn(this.v, 2, .5), Hn(this.v, 3, .3), Hn(this.D, 2, .5), Hn(this.u, 2, .5);
    }
    get baseOptions() {
        return Rn(this.A, Cs, 1);
    }
    set baseOptions(t) {
        Cn(this.A, 0, 1, t);
    }
    o(t) {
        return "minFaceDetectionConfidence" in t && Hn(this.j, 2, t.minFaceDetectionConfidence ?? .5), "minFaceSuppressionThreshold" in t && Hn(this.j, 3, t.minFaceSuppressionThreshold ?? .3), "minFacePresenceConfidence" in t && Hn(this.H, 2, t.minFacePresenceConfidence ?? .5), "outputFaceBlendshapes" in t && (this.outputFaceBlendshapes = !!t.outputFaceBlendshapes), "minPoseDetectionConfidence" in t && Hn(this.v, 2, t.minPoseDetectionConfidence ?? .5), "minPoseSuppressionThreshold" in t && Hn(this.v, 3, t.minPoseSuppressionThreshold ?? .3), "minPosePresenceConfidence" in t && Hn(this.D, 2, t.minPosePresenceConfidence ?? .5), "outputPoseSegmentationMasks" in t && (this.outputPoseSegmentationMasks = !!t.outputPoseSegmentationMasks), "minHandLandmarksConfidence" in t && Hn(this.u, 2, t.minHandLandmarksConfidence ?? .5), this.l(t);
    }
    F(t, e, n) {
        const r = "function" != typeof e ? e : {};
        return this.I = "function" == typeof e ? e : n, Sh(this), eh(this, t, r), Lh(this);
    }
    G(t, e, n, r) {
        const i = "function" != typeof n ? n : {};
        return this.I = "function" == typeof n ? n : r, Sh(this), nh(this, t, i, e), Lh(this);
    }
    m() {
        var t = new Di;
        Ii(t, "input_frames_image"), Ui(t, "pose_landmarks"), Ui(t, "pose_world_landmarks"), Ui(t, "face_landmarks"), Ui(t, "left_hand_landmarks"), Ui(t, "left_hand_world_landmarks"), Ui(t, "right_hand_landmarks"), Ui(t, "right_hand_world_landmarks");
        const e = new yi, n = new oi;
        An(n, 1, Me("type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"), ""), function(t, e) {
            if (null != e) {
                if (Array.isArray(e)) dn(t, 2, tn(e, nn, void 0, void 0, !1));
                else {
                    if (!("string" == typeof e || e instanceof B || M(e))) throw Error("invalid value in Any.value field: " + e + " expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");
                    An(t, 2, ae(e, !1, !1), D());
                }
            }
        }(n, this.A.g());
        const r = new Li;
        ki(r, "mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"), Dn(r, 8, oi, n), xi(r, "IMAGE:input_frames_image"), Si(r, "POSE_LANDMARKS:pose_landmarks"), Si(r, "POSE_WORLD_LANDMARKS:pose_world_landmarks"), Si(r, "FACE_LANDMARKS:face_landmarks"), Si(r, "LEFT_HAND_LANDMARKS:left_hand_landmarks"), Si(r, "LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"), Si(r, "RIGHT_HAND_LANDMARKS:right_hand_landmarks"), Si(r, "RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"), r.o(e), Oi(t, r), na(this, t), this.g.attachProtoListener("pose_landmarks", (t, e)=>{
            Fh(t, this.h.poseLandmarks), ea(this, e);
        }), this.g.attachEmptyPacketListener("pose_landmarks", (t)=>{
            ea(this, t);
        }), this.g.attachProtoListener("pose_world_landmarks", (t, e)=>{
            var n = this.h.poseWorldLandmarks;
            t = os(t), n.push(Uo(t)), ea(this, e);
        }), this.g.attachEmptyPacketListener("pose_world_landmarks", (t)=>{
            ea(this, t);
        }), this.outputPoseSegmentationMasks && (Si(r, "POSE_SEGMENTATION_MASK:pose_segmentation_mask"), ra(this, "pose_segmentation_mask"), this.g.W("pose_segmentation_mask", (t, e)=>{
            this.h.poseSegmentationMasks = [
                rh(this, t, !0, !this.I)
            ], ea(this, e);
        }), this.g.attachEmptyPacketListener("pose_segmentation_mask", (t)=>{
            this.h.poseSegmentationMasks = [], ea(this, t);
        })), this.g.attachProtoListener("face_landmarks", (t, e)=>{
            Fh(t, this.h.faceLandmarks), ea(this, e);
        }), this.g.attachEmptyPacketListener("face_landmarks", (t)=>{
            ea(this, t);
        }), this.outputFaceBlendshapes && (Ui(t, "extra_blendshapes"), Si(r, "FACE_BLENDSHAPES:extra_blendshapes"), this.g.attachProtoListener("extra_blendshapes", (t, e)=>{
            var n = this.h.faceBlendshapes;
            this.outputFaceBlendshapes && (t = Wi(t), n.push(Co(t.g() ?? []))), ea(this, e);
        }), this.g.attachEmptyPacketListener("extra_blendshapes", (t)=>{
            ea(this, t);
        })), this.g.attachProtoListener("left_hand_landmarks", (t, e)=>{
            Fh(t, this.h.leftHandLandmarks), ea(this, e);
        }), this.g.attachEmptyPacketListener("left_hand_landmarks", (t)=>{
            ea(this, t);
        }), this.g.attachProtoListener("left_hand_world_landmarks", (t, e)=>{
            var n = this.h.leftHandWorldLandmarks;
            t = os(t), n.push(Uo(t)), ea(this, e);
        }), this.g.attachEmptyPacketListener("left_hand_world_landmarks", (t)=>{
            ea(this, t);
        }), this.g.attachProtoListener("right_hand_landmarks", (t, e)=>{
            Fh(t, this.h.rightHandLandmarks), ea(this, e);
        }), this.g.attachEmptyPacketListener("right_hand_landmarks", (t)=>{
            ea(this, t);
        }), this.g.attachProtoListener("right_hand_world_landmarks", (t, e)=>{
            var n = this.h.rightHandWorldLandmarks;
            t = os(t), n.push(Uo(t)), ea(this, e);
        }), this.g.attachEmptyPacketListener("right_hand_world_landmarks", (t)=>{
            ea(this, t);
        }), t = t.g(), this.setGraph(new Uint8Array(t), !0);
    }
};
Rh.prototype.detectForVideo = Rh.prototype.G, Rh.prototype.detect = Rh.prototype.F, Rh.prototype.setOptions = Rh.prototype.o, Rh.createFromModelPath = function(t, e) {
    return Qa(Rh, t, {
        baseOptions: {
            modelAssetPath: e
        }
    });
}, Rh.createFromModelBuffer = function(t, e) {
    return Qa(Rh, t, {
        baseOptions: {
            modelAssetBuffer: e
        }
    });
}, Rh.createFromOptions = function(t, e) {
    return Qa(Rh, t, e);
}, Rh.HAND_CONNECTIONS = vh, Rh.POSE_CONNECTIONS = xh, Rh.FACE_LANDMARKS_LIPS = oh, Rh.FACE_LANDMARKS_LEFT_EYE = ah, Rh.FACE_LANDMARKS_LEFT_EYEBROW = hh, Rh.FACE_LANDMARKS_LEFT_IRIS = ch, Rh.FACE_LANDMARKS_RIGHT_EYE = uh, Rh.FACE_LANDMARKS_RIGHT_EYEBROW = lh, Rh.FACE_LANDMARKS_RIGHT_IRIS = dh, Rh.FACE_LANDMARKS_FACE_OVAL = fh, Rh.FACE_LANDMARKS_CONTOURS = ph, Rh.FACE_LANDMARKS_TESSELATION = gh;
var Mh = class extends ih {
    constructor(t, e){
        super(new Za(t, e), "input_image", "norm_rect", !0), this.j = {
            classifications: []
        }, Cn(t = this.h = new _o, 0, 1, e = new Cs);
    }
    get baseOptions() {
        return Rn(this.h, Cs, 1);
    }
    set baseOptions(t) {
        Cn(this.h, 0, 1, t);
    }
    o(t) {
        return Cn(this.h, 0, 2, Po(t, Rn(this.h, ks, 2))), this.l(t);
    }
    ua(t, e) {
        return this.j = {
            classifications: []
        }, eh(this, t, e), this.j;
    }
    va(t, e, n) {
        return this.j = {
            classifications: []
        }, nh(this, t, n, e), this.j;
    }
    m() {
        var t = new Di;
        Ii(t, "input_image"), Ii(t, "norm_rect"), Ui(t, "classifications");
        const e = new yi;
        Wn(e, vo, this.h);
        const n = new Li;
        ki(n, "mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"), xi(n, "IMAGE:input_image"), xi(n, "NORM_RECT:norm_rect"), Si(n, "CLASSIFICATIONS:classifications"), n.o(e), Oi(t, n), this.g.attachProtoListener("classifications", (t, e)=>{
            this.j = function(t) {
                const e = {
                    classifications: Pn(t, ps, 1).map((t)=>Co(Rn(t, Xi, 4)?.g() ?? [], Bn(Nn(t, 2), 0), jn(t, 3)))
                };
                return null != Fe(cn(t, 2)) && (e.timestampMs = Bn(Fe(cn(t, 2)), 0)), e;
            }(ys(t)), ea(this, e);
        }), this.g.attachEmptyPacketListener("classifications", (t)=>{
            ea(this, t);
        }), t = t.g(), this.setGraph(new Uint8Array(t), !0);
    }
};
Mh.prototype.classifyForVideo = Mh.prototype.va, Mh.prototype.classify = Mh.prototype.ua, Mh.prototype.setOptions = Mh.prototype.o, Mh.createFromModelPath = function(t, e) {
    return Qa(Mh, t, {
        baseOptions: {
            modelAssetPath: e
        }
    });
}, Mh.createFromModelBuffer = function(t, e) {
    return Qa(Mh, t, {
        baseOptions: {
            modelAssetBuffer: e
        }
    });
}, Mh.createFromOptions = function(t, e) {
    return Qa(Mh, t, e);
};
var Ph = class extends ih {
    constructor(t, e){
        super(new Za(t, e), "image_in", "norm_rect", !0), this.h = new Eo, this.embeddings = {
            embeddings: []
        }, Cn(t = this.h, 0, 1, e = new Cs);
    }
    get baseOptions() {
        return Rn(this.h, Cs, 1);
    }
    set baseOptions(t) {
        Cn(this.h, 0, 1, t);
    }
    o(t) {
        var e = this.h, n = Rn(this.h, Ss, 2);
        return n = n ? n.clone() : new Ss, void 0 !== t.l2Normalize ? Vn(n, 1, t.l2Normalize) : "l2Normalize" in t && dn(n, 1), void 0 !== t.quantize ? Vn(n, 2, t.quantize) : "quantize" in t && dn(n, 2), Cn(e, 0, 2, n), this.l(t);
    }
    Ba(t, e) {
        return eh(this, t, e), this.embeddings;
    }
    Ca(t, e, n) {
        return nh(this, t, n, e), this.embeddings;
    }
    m() {
        var t = new Di;
        Ii(t, "image_in"), Ii(t, "norm_rect"), Ui(t, "embeddings_out");
        const e = new yi;
        Wn(e, wo, this.h);
        const n = new Li;
        ki(n, "mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"), xi(n, "IMAGE:image_in"), xi(n, "NORM_RECT:norm_rect"), Si(n, "EMBEDDINGS:embeddings_out"), n.o(e), Oi(t, n), this.g.attachProtoListener("embeddings_out", (t, e)=>{
            t = bs(t), this.embeddings = function(t) {
                return {
                    embeddings: Pn(t, Es, 1).map((t)=>{
                        const e = {
                            headIndex: Bn(Nn(t, 3), 0) ?? -1,
                            headName: jn(t, 4) ?? ""
                        };
                        if (void 0 !== Fn(t, _s, xn(t, 1))) t = yn(t = Rn(t, _s, xn(t, 1)), 1, ve), e.floatEmbedding = t.slice();
                        else {
                            const n = new Uint8Array(0);
                            e.quantizedEmbedding = Rn(t, vs, xn(t, 2))?.qa()?.h() ?? n;
                        }
                        return e;
                    }),
                    timestampMs: Bn(Fe(cn(t, 2)), 0)
                };
            }(t), ea(this, e);
        }), this.g.attachEmptyPacketListener("embeddings_out", (t)=>{
            ea(this, t);
        }), t = t.g(), this.setGraph(new Uint8Array(t), !0);
    }
};
Ph.cosineSimilarity = function(t, e) {
    if (t.floatEmbedding && e.floatEmbedding) t = No(t.floatEmbedding, e.floatEmbedding);
    else {
        if (!t.quantizedEmbedding || !e.quantizedEmbedding) throw Error("Cannot compute cosine similarity between quantized and float embeddings.");
        t = No(Do(t.quantizedEmbedding), Do(e.quantizedEmbedding));
    }
    return t;
}, Ph.prototype.embedForVideo = Ph.prototype.Ca, Ph.prototype.embed = Ph.prototype.Ba, Ph.prototype.setOptions = Ph.prototype.o, Ph.createFromModelPath = function(t, e) {
    return Qa(Ph, t, {
        baseOptions: {
            modelAssetPath: e
        }
    });
}, Ph.createFromModelBuffer = function(t, e) {
    return Qa(Ph, t, {
        baseOptions: {
            modelAssetBuffer: e
        }
    });
}, Ph.createFromOptions = function(t, e) {
    return Qa(Ph, t, e);
};
var Ch = class {
    constructor(t, e, n){
        this.confidenceMasks = t, this.categoryMask = e, this.qualityScores = n;
    }
    close() {
        this.confidenceMasks?.forEach((t)=>{
            t.close();
        }), this.categoryMask?.close();
    }
};
function Oh(t) {
    t.categoryMask = void 0, t.confidenceMasks = void 0, t.qualityScores = void 0;
}
function Ih(t) {
    try {
        const e = new Ch(t.confidenceMasks, t.categoryMask, t.qualityScores);
        if (!t.j) return e;
        t.j(e);
    } finally{
        ia(t);
    }
}
Ch.prototype.close = Ch.prototype.close;
var Uh = class extends ih {
    constructor(t, e){
        super(new Za(t, e), "image_in", "norm_rect", !1), this.u = [], this.outputCategoryMask = !1, this.outputConfidenceMasks = !0, this.h = new xo, this.v = new To, Cn(this.h, 0, 3, this.v), Cn(t = this.h, 0, 1, e = new Cs);
    }
    get baseOptions() {
        return Rn(this.h, Cs, 1);
    }
    set baseOptions(t) {
        Cn(this.h, 0, 1, t);
    }
    o(t) {
        return void 0 !== t.displayNamesLocale ? dn(this.h, 2, Me(t.displayNamesLocale)) : "displayNamesLocale" in t && dn(this.h, 2), "outputCategoryMask" in t && (this.outputCategoryMask = t.outputCategoryMask ?? !1), "outputConfidenceMasks" in t && (this.outputConfidenceMasks = t.outputConfidenceMasks ?? !0), super.l(t);
    }
    L() {
        !function(t) {
            const e = Pn(t.fa(), Li, 1).filter((t)=>jn(t, 1).includes("mediapipe.tasks.TensorsToSegmentationCalculator"));
            if (t.u = [], 1 < e.length) throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");
            1 === e.length && (Rn(e[0], yi, 7)?.l()?.g() ?? new Map).forEach((e, n)=>{
                t.u[Number(n)] = jn(e, 1);
            });
        }(this);
    }
    ga(t, e, n) {
        const r = "function" != typeof e ? e : {};
        return this.j = "function" == typeof e ? e : n, Oh(this), eh(this, t, r), Ih(this);
    }
    Na(t, e, n, r) {
        const i = "function" != typeof n ? n : {};
        return this.j = "function" == typeof n ? n : r, Oh(this), nh(this, t, i, e), Ih(this);
    }
    Fa() {
        return this.u;
    }
    m() {
        var t = new Di;
        Ii(t, "image_in"), Ii(t, "norm_rect");
        const e = new yi;
        Wn(e, So, this.h);
        const n = new Li;
        ki(n, "mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"), xi(n, "IMAGE:image_in"), xi(n, "NORM_RECT:norm_rect"), n.o(e), Oi(t, n), na(this, t), this.outputConfidenceMasks && (Ui(t, "confidence_masks"), Si(n, "CONFIDENCE_MASKS:confidence_masks"), ra(this, "confidence_masks"), this.g.da("confidence_masks", (t, e)=>{
            this.confidenceMasks = t.map((t)=>rh(this, t, !0, !this.j)), ea(this, e);
        }), this.g.attachEmptyPacketListener("confidence_masks", (t)=>{
            this.confidenceMasks = [], ea(this, t);
        })), this.outputCategoryMask && (Ui(t, "category_mask"), Si(n, "CATEGORY_MASK:category_mask"), ra(this, "category_mask"), this.g.W("category_mask", (t, e)=>{
            this.categoryMask = rh(this, t, !1, !this.j), ea(this, e);
        }), this.g.attachEmptyPacketListener("category_mask", (t)=>{
            this.categoryMask = void 0, ea(this, t);
        })), Ui(t, "quality_scores"), Si(n, "QUALITY_SCORES:quality_scores"), this.g.attachFloatVectorListener("quality_scores", (t, e)=>{
            this.qualityScores = t, ea(this, e);
        }), this.g.attachEmptyPacketListener("quality_scores", (t)=>{
            this.categoryMask = void 0, ea(this, t);
        }), t = t.g(), this.setGraph(new Uint8Array(t), !0);
    }
};
Uh.prototype.getLabels = Uh.prototype.Fa, Uh.prototype.segmentForVideo = Uh.prototype.Na, Uh.prototype.segment = Uh.prototype.ga, Uh.prototype.setOptions = Uh.prototype.o, Uh.createFromModelPath = function(t, e) {
    return Qa(Uh, t, {
        baseOptions: {
            modelAssetPath: e
        }
    });
}, Uh.createFromModelBuffer = function(t, e) {
    return Qa(Uh, t, {
        baseOptions: {
            modelAssetBuffer: e
        }
    });
}, Uh.createFromOptions = function(t, e) {
    return Qa(Uh, t, e);
};
var Dh = class {
    constructor(t, e, n){
        this.confidenceMasks = t, this.categoryMask = e, this.qualityScores = n;
    }
    close() {
        this.confidenceMasks?.forEach((t)=>{
            t.close();
        }), this.categoryMask?.close();
    }
};
Dh.prototype.close = Dh.prototype.close;
var Nh = class extends zn {
    constructor(t){
        super(t);
    }
}, Bh = [
    0,
    jr,
    -2
], Gh = [
    0,
    Or,
    -3,
    Hr
], jh = [
    0,
    Or,
    -3,
    Hr,
    Or,
    -1
], Vh = [
    0,
    jh
], Xh = [
    0,
    Vh,
    Bh
], Hh = [
    0,
    jh,
    Bh
], Wh = [
    0,
    jh,
    jr,
    -1
], zh = [
    0,
    Wh,
    Bh
], Kh = [
    0,
    Or,
    -3,
    Hr,
    Bh,
    -1
], Yh = [
    0,
    Or,
    -3,
    Hr,
    ti
], $h = class extends zn {
    constructor(t){
        super(t);
    }
}, qh = [
    0,
    Or,
    -1,
    Hr
], Jh = class extends zn {
    constructor(){
        super();
    }
};
Jh.B = [
    1
];
var Zh = class extends zn {
    constructor(t){
        super(t);
    }
}, Qh = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    14,
    15
], tc = [
    0,
    Qh,
    Jr,
    jh,
    Jr,
    Hh,
    Jr,
    Vh,
    Jr,
    Xh,
    Jr,
    qh,
    Jr,
    Yh,
    Jr,
    Gh,
    Jr,
    [
        0,
        Yr,
        Or,
        -2,
        Hr,
        jr,
        Hr,
        -1,
        2,
        Or,
        Bh
    ],
    Jr,
    Wh,
    Jr,
    zh,
    Or,
    Bh,
    Yr,
    Jr,
    Kh,
    Jr,
    [
        0,
        Cr,
        qh
    ]
], ec = [
    0,
    Yr,
    jr,
    -1,
    Hr
], nc = class extends zn {
    constructor(){
        super();
    }
};
nc.B = [
    1
], nc.prototype.g = si([
    0,
    Cr,
    tc,
    Yr,
    ec
]);
var rc = class extends ih {
    constructor(t, e){
        super(new Za(t, e), "image_in", "norm_rect_in", !1), this.outputCategoryMask = !1, this.outputConfidenceMasks = !0, this.h = new xo, this.v = new To, Cn(this.h, 0, 3, this.v), Cn(t = this.h, 0, 1, e = new Cs);
    }
    get baseOptions() {
        return Rn(this.h, Cs, 1);
    }
    set baseOptions(t) {
        Cn(this.h, 0, 1, t);
    }
    o(t) {
        return "outputCategoryMask" in t && (this.outputCategoryMask = t.outputCategoryMask ?? !1), "outputConfidenceMasks" in t && (this.outputConfidenceMasks = t.outputConfidenceMasks ?? !0), super.l(t);
    }
    ga(t, e, n, r) {
        const i = "function" != typeof n ? n : {};
        this.j = "function" == typeof n ? n : r, this.qualityScores = this.categoryMask = this.confidenceMasks = void 0, n = this.J + 1, r = new nc;
        const s = new Zh;
        var o = new Nh;
        if (Xn(o, 1, 255), Cn(s, 0, 12, o), e.keypoint && e.scribble) throw Error("Cannot provide both keypoint and scribble.");
        if (e.keypoint) {
            var a = new $h;
            Vn(a, 3, !0), Hn(a, 1, e.keypoint.x), Hn(a, 2, e.keypoint.y), On(s, 5, Qh, a);
        } else {
            if (!e.scribble) throw Error("Must provide either a keypoint or a scribble.");
            for (a of (o = new Jh, e.scribble))Vn(e = new $h, 3, !0), Hn(e, 1, a.x), Hn(e, 2, a.y), Dn(o, 1, $h, e);
            On(s, 15, Qh, o);
        }
        Dn(r, 1, Zh, s), this.g.addProtoToStream(r.g(), "drishti.RenderData", "roi_in", n), eh(this, t, i);
        t: {
            try {
                const t = new Dh(this.confidenceMasks, this.categoryMask, this.qualityScores);
                if (!this.j) {
                    var h = t;
                    break t;
                }
                this.j(t);
            } finally{
                ia(this);
            }
            h = void 0;
        }
        return h;
    }
    m() {
        var t = new Di;
        Ii(t, "image_in"), Ii(t, "roi_in"), Ii(t, "norm_rect_in");
        const e = new yi;
        Wn(e, So, this.h);
        const n = new Li;
        ki(n, "mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraph"), xi(n, "IMAGE:image_in"), xi(n, "ROI:roi_in"), xi(n, "NORM_RECT:norm_rect_in"), n.o(e), Oi(t, n), na(this, t), this.outputConfidenceMasks && (Ui(t, "confidence_masks"), Si(n, "CONFIDENCE_MASKS:confidence_masks"), ra(this, "confidence_masks"), this.g.da("confidence_masks", (t, e)=>{
            this.confidenceMasks = t.map((t)=>rh(this, t, !0, !this.j)), ea(this, e);
        }), this.g.attachEmptyPacketListener("confidence_masks", (t)=>{
            this.confidenceMasks = [], ea(this, t);
        })), this.outputCategoryMask && (Ui(t, "category_mask"), Si(n, "CATEGORY_MASK:category_mask"), ra(this, "category_mask"), this.g.W("category_mask", (t, e)=>{
            this.categoryMask = rh(this, t, !1, !this.j), ea(this, e);
        }), this.g.attachEmptyPacketListener("category_mask", (t)=>{
            this.categoryMask = void 0, ea(this, t);
        })), Ui(t, "quality_scores"), Si(n, "QUALITY_SCORES:quality_scores"), this.g.attachFloatVectorListener("quality_scores", (t, e)=>{
            this.qualityScores = t, ea(this, e);
        }), this.g.attachEmptyPacketListener("quality_scores", (t)=>{
            this.categoryMask = void 0, ea(this, t);
        }), t = t.g(), this.setGraph(new Uint8Array(t), !0);
    }
};
rc.prototype.segment = rc.prototype.ga, rc.prototype.setOptions = rc.prototype.o, rc.createFromModelPath = function(t, e) {
    return Qa(rc, t, {
        baseOptions: {
            modelAssetPath: e
        }
    });
}, rc.createFromModelBuffer = function(t, e) {
    return Qa(rc, t, {
        baseOptions: {
            modelAssetBuffer: e
        }
    });
}, rc.createFromOptions = function(t, e) {
    return Qa(rc, t, e);
};
var ic = class extends ih {
    constructor(t, e){
        super(new Za(t, e), "input_frame_gpu", "norm_rect", !1), this.j = {
            detections: []
        }, Cn(t = this.h = new Lo, 0, 1, e = new Cs);
    }
    get baseOptions() {
        return Rn(this.h, Cs, 1);
    }
    set baseOptions(t) {
        Cn(this.h, 0, 1, t);
    }
    o(t) {
        return void 0 !== t.displayNamesLocale ? dn(this.h, 2, Me(t.displayNamesLocale)) : "displayNamesLocale" in t && dn(this.h, 2), void 0 !== t.maxResults ? Xn(this.h, 3, t.maxResults) : "maxResults" in t && dn(this.h, 3), void 0 !== t.scoreThreshold ? Hn(this.h, 4, t.scoreThreshold) : "scoreThreshold" in t && dn(this.h, 4), void 0 !== t.categoryAllowlist ? Tn(this.h, 5, t.categoryAllowlist) : "categoryAllowlist" in t && dn(this.h, 5), void 0 !== t.categoryDenylist ? Tn(this.h, 6, t.categoryDenylist) : "categoryDenylist" in t && dn(this.h, 6), this.l(t);
    }
    F(t, e) {
        return this.j = {
            detections: []
        }, eh(this, t, e), this.j;
    }
    G(t, e, n) {
        return this.j = {
            detections: []
        }, nh(this, t, n, e), this.j;
    }
    m() {
        var t = new Di;
        Ii(t, "input_frame_gpu"), Ii(t, "norm_rect"), Ui(t, "detections");
        const e = new yi;
        Wn(e, Fo, this.h);
        const n = new Li;
        ki(n, "mediapipe.tasks.vision.ObjectDetectorGraph"), xi(n, "IMAGE:input_frame_gpu"), xi(n, "NORM_RECT:norm_rect"), Si(n, "DETECTIONS:detections"), n.o(e), Oi(t, n), this.g.attachProtoVectorListener("detections", (t, e)=>{
            for (const e of t)t = ns(e), this.j.detections.push(Oo(t));
            ea(this, e);
        }), this.g.attachEmptyPacketListener("detections", (t)=>{
            ea(this, t);
        }), t = t.g(), this.setGraph(new Uint8Array(t), !0);
    }
};
ic.prototype.detectForVideo = ic.prototype.G, ic.prototype.detect = ic.prototype.F, ic.prototype.setOptions = ic.prototype.o, ic.createFromModelPath = async function(t, e) {
    return Qa(ic, t, {
        baseOptions: {
            modelAssetPath: e
        }
    });
}, ic.createFromModelBuffer = function(t, e) {
    return Qa(ic, t, {
        baseOptions: {
            modelAssetBuffer: e
        }
    });
}, ic.createFromOptions = function(t, e) {
    return Qa(ic, t, e);
};
var sc = class {
    constructor(t, e, n){
        this.landmarks = t, this.worldLandmarks = e, this.segmentationMasks = n;
    }
    close() {
        this.segmentationMasks?.forEach((t)=>{
            t.close();
        });
    }
};
function oc(t) {
    t.landmarks = [], t.worldLandmarks = [], t.segmentationMasks = void 0;
}
function ac(t) {
    try {
        const e = new sc(t.landmarks, t.worldLandmarks, t.segmentationMasks);
        if (!t.j) return e;
        t.j(e);
    } finally{
        ia(t);
    }
}
sc.prototype.close = sc.prototype.close;
var hc = class extends ih {
    constructor(t, e){
        super(new Za(t, e), "image_in", "norm_rect", !1), this.landmarks = [], this.worldLandmarks = [], this.outputSegmentationMasks = !1, Cn(t = this.h = new Ro, 0, 1, e = new Cs), this.D = new go, Cn(this.h, 0, 3, this.D), this.v = new fo, Cn(this.h, 0, 2, this.v), Xn(this.v, 4, 1), Hn(this.v, 2, .5), Hn(this.D, 2, .5), Hn(this.h, 4, .5);
    }
    get baseOptions() {
        return Rn(this.h, Cs, 1);
    }
    set baseOptions(t) {
        Cn(this.h, 0, 1, t);
    }
    o(t) {
        return "numPoses" in t && Xn(this.v, 4, t.numPoses ?? 1), "minPoseDetectionConfidence" in t && Hn(this.v, 2, t.minPoseDetectionConfidence ?? .5), "minTrackingConfidence" in t && Hn(this.h, 4, t.minTrackingConfidence ?? .5), "minPosePresenceConfidence" in t && Hn(this.D, 2, t.minPosePresenceConfidence ?? .5), "outputSegmentationMasks" in t && (this.outputSegmentationMasks = t.outputSegmentationMasks ?? !1), this.l(t);
    }
    F(t, e, n) {
        const r = "function" != typeof e ? e : {};
        return this.j = "function" == typeof e ? e : n, oc(this), eh(this, t, r), ac(this);
    }
    G(t, e, n, r) {
        const i = "function" != typeof n ? n : {};
        return this.j = "function" == typeof n ? n : r, oc(this), nh(this, t, i, e), ac(this);
    }
    m() {
        var t = new Di;
        Ii(t, "image_in"), Ii(t, "norm_rect"), Ui(t, "normalized_landmarks"), Ui(t, "world_landmarks"), Ui(t, "segmentation_masks");
        const e = new yi;
        Wn(e, Mo, this.h);
        const n = new Li;
        ki(n, "mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"), xi(n, "IMAGE:image_in"), xi(n, "NORM_RECT:norm_rect"), Si(n, "NORM_LANDMARKS:normalized_landmarks"), Si(n, "WORLD_LANDMARKS:world_landmarks"), n.o(e), Oi(t, n), na(this, t), this.g.attachProtoVectorListener("normalized_landmarks", (t, e)=>{
            this.landmarks = [];
            for (const e of t)t = us(e), this.landmarks.push(Io(t));
            ea(this, e);
        }), this.g.attachEmptyPacketListener("normalized_landmarks", (t)=>{
            this.landmarks = [], ea(this, t);
        }), this.g.attachProtoVectorListener("world_landmarks", (t, e)=>{
            this.worldLandmarks = [];
            for (const e of t)t = os(e), this.worldLandmarks.push(Uo(t));
            ea(this, e);
        }), this.g.attachEmptyPacketListener("world_landmarks", (t)=>{
            this.worldLandmarks = [], ea(this, t);
        }), this.outputSegmentationMasks && (Si(n, "SEGMENTATION_MASK:segmentation_masks"), ra(this, "segmentation_masks"), this.g.da("segmentation_masks", (t, e)=>{
            this.segmentationMasks = t.map((t)=>rh(this, t, !0, !this.j)), ea(this, e);
        }), this.g.attachEmptyPacketListener("segmentation_masks", (t)=>{
            this.segmentationMasks = [], ea(this, t);
        })), t = t.g(), this.setGraph(new Uint8Array(t), !0);
    }
};
hc.prototype.detectForVideo = hc.prototype.G, hc.prototype.detect = hc.prototype.F, hc.prototype.setOptions = hc.prototype.o, hc.createFromModelPath = function(t, e) {
    return Qa(hc, t, {
        baseOptions: {
            modelAssetPath: e
        }
    });
}, hc.createFromModelBuffer = function(t, e) {
    return Qa(hc, t, {
        baseOptions: {
            modelAssetBuffer: e
        }
    });
}, hc.createFromOptions = function(t, e) {
    return Qa(hc, t, e);
}, hc.POSE_CONNECTIONS = xh;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"81w4t":[function(require,module,exports) {
/* eslint-disable no-undefined,no-param-reassign,no-shadow */ /**
 * Throttle execution of a function. Especially useful for rate limiting
 * execution of handlers on events like resize and scroll.
 *
 * @param {number} delay -                  A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher)
 *                                            are most useful.
 * @param {Function} callback -               A function to be executed after delay milliseconds. The `this` context and all arguments are passed through,
 *                                            as-is, to `callback` when the throttled-function is executed.
 * @param {object} [options] -              An object to configure options.
 * @param {boolean} [options.noTrailing] -   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds
 *                                            while the throttled-function is being called. If noTrailing is false or unspecified, callback will be executed
 *                                            one final time after the last throttled-function call. (After the throttled-function has not been called for
 *                                            `delay` milliseconds, the internal counter is reset).
 * @param {boolean} [options.noLeading] -   Optional, defaults to false. If noLeading is false, the first throttled-function call will execute callback
 *                                            immediately. If noLeading is true, the first the callback execution will be skipped. It should be noted that
 *                                            callback will never executed if both noLeading = true and noTrailing = true.
 * @param {boolean} [options.debounceMode] - If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is
 *                                            false (at end), schedule `callback` to execute after `delay` ms.
 *
 * @returns {Function} A new, throttled, function.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "debounce", ()=>debounce);
parcelHelpers.export(exports, "throttle", ()=>throttle);
function throttle(delay, callback, options) {
    var _ref = options || {}, _ref$noTrailing = _ref.noTrailing, noTrailing = _ref$noTrailing === void 0 ? false : _ref$noTrailing, _ref$noLeading = _ref.noLeading, noLeading = _ref$noLeading === void 0 ? false : _ref$noLeading, _ref$debounceMode = _ref.debounceMode, debounceMode = _ref$debounceMode === void 0 ? undefined : _ref$debounceMode;
    /*
   * After wrapper has stopped being called, this timeout ensures that
   * `callback` is executed at the proper times in `throttle` and `end`
   * debounce modes.
   */ var timeoutID;
    var cancelled = false;
    // Keep track of the last time `callback` was executed.
    var lastExec = 0;
    // Function to clear existing timeout
    function clearExistingTimeout() {
        if (timeoutID) clearTimeout(timeoutID);
    }
    // Function to cancel next exec
    function cancel(options) {
        var _ref2 = options || {}, _ref2$upcomingOnly = _ref2.upcomingOnly, upcomingOnly = _ref2$upcomingOnly === void 0 ? false : _ref2$upcomingOnly;
        clearExistingTimeout();
        cancelled = !upcomingOnly;
    }
    /*
   * The `wrapper` function encapsulates all of the throttling / debouncing
   * functionality and when executed will limit the rate at which `callback`
   * is executed.
   */ function wrapper() {
        for(var _len = arguments.length, arguments_ = new Array(_len), _key = 0; _key < _len; _key++)arguments_[_key] = arguments[_key];
        var self = this;
        var elapsed = Date.now() - lastExec;
        if (cancelled) return;
        // Execute `callback` and update the `lastExec` timestamp.
        function exec() {
            lastExec = Date.now();
            callback.apply(self, arguments_);
        }
        /*
     * If `debounceMode` is true (at begin) this is used to clear the flag
     * to allow future `callback` executions.
     */ function clear() {
            timeoutID = undefined;
        }
        if (!noLeading && debounceMode && !timeoutID) /*
       * Since `wrapper` is being called for the first time and
       * `debounceMode` is true (at begin), execute `callback`
       * and noLeading != true.
       */ exec();
        clearExistingTimeout();
        if (debounceMode === undefined && elapsed > delay) {
            if (noLeading) {
                /*
         * In throttle mode with noLeading, if `delay` time has
         * been exceeded, update `lastExec` and schedule `callback`
         * to execute after `delay` ms.
         */ lastExec = Date.now();
                if (!noTrailing) timeoutID = setTimeout(debounceMode ? clear : exec, delay);
            } else /*
         * In throttle mode without noLeading, if `delay` time has been exceeded, execute
         * `callback`.
         */ exec();
        } else if (noTrailing !== true) /*
       * In trailing throttle mode, since `delay` time has not been
       * exceeded, schedule `callback` to execute `delay` ms after most
       * recent execution.
       *
       * If `debounceMode` is true (at begin), schedule `clear` to execute
       * after `delay` ms.
       *
       * If `debounceMode` is false (at end), schedule `callback` to
       * execute after `delay` ms.
       */ timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
    }
    wrapper.cancel = cancel;
    // Return the wrapper function.
    return wrapper;
}
/* eslint-disable no-undefined */ /**
 * Debounce execution of a function. Debouncing, unlike throttling,
 * guarantees that a function is only executed a single time, either at the
 * very beginning of a series of calls, or at the very end.
 *
 * @param {number} delay -               A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param {Function} callback -          A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                        to `callback` when the debounced-function is executed.
 * @param {object} [options] -           An object to configure options.
 * @param {boolean} [options.atBegin] -  Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
 *                                        after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
 *                                        (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).
 *
 * @returns {Function} A new, debounced function.
 */ function debounce(delay, callback, options) {
    var _ref = options || {}, _ref$atBegin = _ref.atBegin, atBegin = _ref$atBegin === void 0 ? false : _ref$atBegin;
    return throttle(delay, callback, {
        debounceMode: atBegin !== false
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fPSuC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "gsap", ()=>gsapWithCSS);
parcelHelpers.export(exports, "default", ()=>gsapWithCSS);
parcelHelpers.export(exports, "CSSPlugin", ()=>(0, _csspluginJs.CSSPlugin));
parcelHelpers.export(exports, "TweenMax", ()=>TweenMaxWithCSS);
parcelHelpers.export(exports, "TweenLite", ()=>(0, _gsapCoreJs.TweenLite));
parcelHelpers.export(exports, "TimelineMax", ()=>(0, _gsapCoreJs.TimelineMax));
parcelHelpers.export(exports, "TimelineLite", ()=>(0, _gsapCoreJs.TimelineLite));
parcelHelpers.export(exports, "Power0", ()=>(0, _gsapCoreJs.Power0));
parcelHelpers.export(exports, "Power1", ()=>(0, _gsapCoreJs.Power1));
parcelHelpers.export(exports, "Power2", ()=>(0, _gsapCoreJs.Power2));
parcelHelpers.export(exports, "Power3", ()=>(0, _gsapCoreJs.Power3));
parcelHelpers.export(exports, "Power4", ()=>(0, _gsapCoreJs.Power4));
parcelHelpers.export(exports, "Linear", ()=>(0, _gsapCoreJs.Linear));
parcelHelpers.export(exports, "Quad", ()=>(0, _gsapCoreJs.Quad));
parcelHelpers.export(exports, "Cubic", ()=>(0, _gsapCoreJs.Cubic));
parcelHelpers.export(exports, "Quart", ()=>(0, _gsapCoreJs.Quart));
parcelHelpers.export(exports, "Quint", ()=>(0, _gsapCoreJs.Quint));
parcelHelpers.export(exports, "Strong", ()=>(0, _gsapCoreJs.Strong));
parcelHelpers.export(exports, "Elastic", ()=>(0, _gsapCoreJs.Elastic));
parcelHelpers.export(exports, "Back", ()=>(0, _gsapCoreJs.Back));
parcelHelpers.export(exports, "SteppedEase", ()=>(0, _gsapCoreJs.SteppedEase));
parcelHelpers.export(exports, "Bounce", ()=>(0, _gsapCoreJs.Bounce));
parcelHelpers.export(exports, "Sine", ()=>(0, _gsapCoreJs.Sine));
parcelHelpers.export(exports, "Expo", ()=>(0, _gsapCoreJs.Expo));
parcelHelpers.export(exports, "Circ", ()=>(0, _gsapCoreJs.Circ));
var _gsapCoreJs = require("./gsap-core.js");
var _csspluginJs = require("./CSSPlugin.js");
var gsapWithCSS = (0, _gsapCoreJs.gsap).registerPlugin((0, _csspluginJs.CSSPlugin)) || (0, _gsapCoreJs.gsap), // to protect from tree shaking
TweenMaxWithCSS = gsapWithCSS.core.Tween;

},{"./gsap-core.js":"05eeC","./CSSPlugin.js":"l02JQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"05eeC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GSCache", ()=>GSCache);
parcelHelpers.export(exports, "Animation", ()=>Animation);
parcelHelpers.export(exports, "Timeline", ()=>Timeline);
parcelHelpers.export(exports, "Tween", ()=>Tween);
parcelHelpers.export(exports, "PropTween", ()=>PropTween);
parcelHelpers.export(exports, "gsap", ()=>gsap);
parcelHelpers.export(exports, "Power0", ()=>Power0);
parcelHelpers.export(exports, "Power1", ()=>Power1);
parcelHelpers.export(exports, "Power2", ()=>Power2);
parcelHelpers.export(exports, "Power3", ()=>Power3);
parcelHelpers.export(exports, "Power4", ()=>Power4);
parcelHelpers.export(exports, "Linear", ()=>Linear);
parcelHelpers.export(exports, "Quad", ()=>Quad);
parcelHelpers.export(exports, "Cubic", ()=>Cubic);
parcelHelpers.export(exports, "Quart", ()=>Quart);
parcelHelpers.export(exports, "Quint", ()=>Quint);
parcelHelpers.export(exports, "Strong", ()=>Strong);
parcelHelpers.export(exports, "Elastic", ()=>Elastic);
parcelHelpers.export(exports, "Back", ()=>Back);
parcelHelpers.export(exports, "SteppedEase", ()=>SteppedEase);
parcelHelpers.export(exports, "Bounce", ()=>Bounce);
parcelHelpers.export(exports, "Sine", ()=>Sine);
parcelHelpers.export(exports, "Expo", ()=>Expo);
parcelHelpers.export(exports, "Circ", ()=>Circ);
parcelHelpers.export(exports, "TweenMax", ()=>Tween) //export some internal methods/orojects for use in CSSPlugin so that we can externalize that file and allow custom builds that exclude it.
;
parcelHelpers.export(exports, "TweenLite", ()=>Tween);
parcelHelpers.export(exports, "TimelineMax", ()=>Timeline);
parcelHelpers.export(exports, "TimelineLite", ()=>Timeline);
parcelHelpers.export(exports, "default", ()=>gsap);
parcelHelpers.export(exports, "wrap", ()=>wrap);
parcelHelpers.export(exports, "wrapYoyo", ()=>wrapYoyo);
parcelHelpers.export(exports, "distribute", ()=>distribute);
parcelHelpers.export(exports, "random", ()=>random);
parcelHelpers.export(exports, "snap", ()=>snap);
parcelHelpers.export(exports, "normalize", ()=>normalize);
parcelHelpers.export(exports, "getUnit", ()=>getUnit);
parcelHelpers.export(exports, "clamp", ()=>clamp);
parcelHelpers.export(exports, "splitColor", ()=>splitColor);
parcelHelpers.export(exports, "toArray", ()=>toArray);
parcelHelpers.export(exports, "selector", ()=>selector);
parcelHelpers.export(exports, "mapRange", ()=>mapRange);
parcelHelpers.export(exports, "pipe", ()=>pipe);
parcelHelpers.export(exports, "unitize", ()=>unitize);
parcelHelpers.export(exports, "interpolate", ()=>interpolate);
parcelHelpers.export(exports, "shuffle", ()=>shuffle);
parcelHelpers.export(exports, "_getProperty", ()=>_getProperty);
parcelHelpers.export(exports, "_numExp", ()=>_numExp);
parcelHelpers.export(exports, "_numWithUnitExp", ()=>_numWithUnitExp);
parcelHelpers.export(exports, "_isString", ()=>_isString);
parcelHelpers.export(exports, "_isUndefined", ()=>_isUndefined);
parcelHelpers.export(exports, "_renderComplexString", ()=>_renderComplexString);
parcelHelpers.export(exports, "_relExp", ()=>_relExp);
parcelHelpers.export(exports, "_setDefaults", ()=>_setDefaults);
parcelHelpers.export(exports, "_removeLinkedListItem", ()=>_removeLinkedListItem);
parcelHelpers.export(exports, "_forEachName", ()=>_forEachName);
parcelHelpers.export(exports, "_sortPropTweensByPriority", ()=>_sortPropTweensByPriority);
parcelHelpers.export(exports, "_colorStringFilter", ()=>_colorStringFilter);
parcelHelpers.export(exports, "_replaceRandom", ()=>_replaceRandom);
parcelHelpers.export(exports, "_checkPlugin", ()=>_checkPlugin);
parcelHelpers.export(exports, "_plugins", ()=>_plugins);
parcelHelpers.export(exports, "_ticker", ()=>_ticker);
parcelHelpers.export(exports, "_config", ()=>_config);
parcelHelpers.export(exports, "_roundModifier", ()=>_roundModifier);
parcelHelpers.export(exports, "_round", ()=>_round);
parcelHelpers.export(exports, "_missingPlugin", ()=>_missingPlugin);
parcelHelpers.export(exports, "_getSetter", ()=>_getSetter);
parcelHelpers.export(exports, "_getCache", ()=>_getCache);
parcelHelpers.export(exports, "_colorExp", ()=>_colorExp);
parcelHelpers.export(exports, "_parseRelative", ()=>_parseRelative);
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
}
/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/ /* eslint-disable */ var _config = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
        lineHeight: ""
    }
}, _defaults = {
    duration: .5,
    overwrite: false,
    delay: 0
}, _suppressOverwrites, _reverting, _context, _bigNum = 1e8, _tinyNum = 1 / _bigNum, _2PI = Math.PI * 2, _HALF_PI = _2PI / 4, _gsID = 0, _sqrt = Math.sqrt, _cos = Math.cos, _sin = Math.sin, _isString = function _isString(value) {
    return typeof value === "string";
}, _isFunction = function _isFunction(value) {
    return typeof value === "function";
}, _isNumber = function _isNumber(value) {
    return typeof value === "number";
}, _isUndefined = function _isUndefined(value) {
    return typeof value === "undefined";
}, _isObject = function _isObject(value) {
    return typeof value === "object";
}, _isNotFalse = function _isNotFalse(value) {
    return value !== false;
}, _windowExists = function _windowExists() {
    return typeof window !== "undefined";
}, _isFuncOrString = function _isFuncOrString(value) {
    return _isFunction(value) || _isString(value);
}, _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function() {}, // note: IE10 has ArrayBuffer, but NOT ArrayBuffer.isView().
_isArray = Array.isArray, _strictNumExp = /(?:-?\.?\d|\.)+/gi, //only numbers (including negatives and decimals) but NOT relative values.
_numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, //finds any numbers, including ones that start with += or -=, negative numbers, and ones in scientific notation like 1e-8.
_numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, //duplicate so that while we're looping through matches from exec(), it doesn't contaminate the lastIndex of _numExp which we use to search for colors too.
_relExp = /[+-]=-?[.\d]+/, _delimitedValueExp = /[^,'"\[\]\s]+/gi, // previously /[#\-+.]*\b[a-z\d\-=+%.]+/gi but didn't catch special characters.
_unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, _globalTimeline, _win, _coreInitted, _doc, _globals = {}, _installScope = {}, _coreReady, _install = function _install(scope) {
    return (_installScope = _merge(scope, _globals)) && gsap;
}, _missingPlugin = function _missingPlugin(property, value) {
    return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
}, _warn = function _warn(message, suppress) {
    return !suppress && console.warn(message);
}, _addGlobal = function _addGlobal(name, obj) {
    return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
}, _emptyFunc = function _emptyFunc() {
    return 0;
}, _startAtRevertConfig = {
    suppressEvents: true,
    isStart: true,
    kill: false
}, _revertConfigNoKill = {
    suppressEvents: true,
    kill: false
}, _revertConfig = {
    suppressEvents: true
}, _reservedProps = {}, _lazyTweens = [], _lazyLookup = {}, _lastRenderedFrame, _plugins = {}, _effects = {}, _nextGCFrame = 30, _harnessPlugins = [], _callbackNames = "", _harness = function _harness(targets) {
    var target = targets[0], harnessPlugin, i;
    _isObject(target) || _isFunction(target) || (targets = [
        targets
    ]);
    if (!(harnessPlugin = (target._gsap || {}).harness)) {
        // find the first target with a harness. We assume targets passed into an animation will be of similar type, meaning the same kind of harness can be used for them all (performance optimization)
        i = _harnessPlugins.length;
        while(i-- && !_harnessPlugins[i].targetTest(target));
        harnessPlugin = _harnessPlugins[i];
    }
    i = targets.length;
    while(i--)targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
    return targets;
}, _getCache = function _getCache(target) {
    return target._gsap || _harness(toArray(target))[0]._gsap;
}, _getProperty = function _getProperty(target, property, v) {
    return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
}, _forEachName = function _forEachName(names, func) {
    return (names = names.split(",")).forEach(func) || names;
}, //split a comma-delimited list of names into an array, then run a forEach() function and return the split array (this is just a way to consolidate/shorten some code).
_round = function _round(value) {
    return Math.round(value * 100000) / 100000 || 0;
}, _roundPrecise = function _roundPrecise(value) {
    return Math.round(value * 10000000) / 10000000 || 0;
}, // increased precision mostly for timing values.
_parseRelative = function _parseRelative(start, value) {
    var operator = value.charAt(0), end = parseFloat(value.substr(2));
    start = parseFloat(start);
    return operator === "+" ? start + end : operator === "-" ? start - end : operator === "*" ? start * end : start / end;
}, _arrayContainsAny = function _arrayContainsAny(toSearch, toFind) {
    //searches one array to find matches for any of the items in the toFind array. As soon as one is found, it returns true. It does NOT return all the matches; it's simply a boolean search.
    var l = toFind.length, i = 0;
    for(; toSearch.indexOf(toFind[i]) < 0 && ++i < l;);
    return i < l;
}, _lazyRender = function _lazyRender() {
    var l = _lazyTweens.length, a = _lazyTweens.slice(0), i, tween;
    _lazyLookup = {};
    _lazyTweens.length = 0;
    for(i = 0; i < l; i++){
        tween = a[i];
        tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
    }
}, _lazySafeRender = function _lazySafeRender(animation, time, suppressEvents, force) {
    _lazyTweens.length && !_reverting && _lazyRender();
    animation.render(time, suppressEvents, force || _reverting && time < 0 && (animation._initted || animation._startAt));
    _lazyTweens.length && !_reverting && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when someone calls seek() or time() or progress(), they expect an immediate render.
}, _numericIfPossible = function _numericIfPossible(value) {
    var n = parseFloat(value);
    return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
}, _passThrough = function _passThrough(p) {
    return p;
}, _setDefaults = function _setDefaults(obj, defaults) {
    for(var p in defaults)p in obj || (obj[p] = defaults[p]);
    return obj;
}, _setKeyframeDefaults = function _setKeyframeDefaults(excludeDuration) {
    return function(obj, defaults) {
        for(var p in defaults)p in obj || p === "duration" && excludeDuration || p === "ease" || (obj[p] = defaults[p]);
    };
}, _merge = function _merge(base, toMerge) {
    for(var p in toMerge)base[p] = toMerge[p];
    return base;
}, _mergeDeep = function _mergeDeep(base, toMerge) {
    for(var p in toMerge)p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
    return base;
}, _copyExcluding = function _copyExcluding(obj, excluding) {
    var copy = {}, p;
    for(p in obj)p in excluding || (copy[p] = obj[p]);
    return copy;
}, _inheritDefaults = function _inheritDefaults(vars) {
    var parent = vars.parent || _globalTimeline, func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults;
    if (_isNotFalse(vars.inherit)) while(parent){
        func(vars, parent.vars.defaults);
        parent = parent.parent || parent._dp;
    }
    return vars;
}, _arraysMatch = function _arraysMatch(a1, a2) {
    var i = a1.length, match = i === a2.length;
    while(match && i-- && a1[i] === a2[i]);
    return i < 0;
}, _addLinkedListItem = function _addLinkedListItem(parent, child, firstProp, lastProp, sortBy) {
    if (firstProp === void 0) firstProp = "_first";
    if (lastProp === void 0) lastProp = "_last";
    var prev = parent[lastProp], t;
    if (sortBy) {
        t = child[sortBy];
        while(prev && prev[sortBy] > t)prev = prev._prev;
    }
    if (prev) {
        child._next = prev._next;
        prev._next = child;
    } else {
        child._next = parent[firstProp];
        parent[firstProp] = child;
    }
    if (child._next) child._next._prev = child;
    else parent[lastProp] = child;
    child._prev = prev;
    child.parent = child._dp = parent;
    return child;
}, _removeLinkedListItem = function _removeLinkedListItem(parent, child, firstProp, lastProp) {
    if (firstProp === void 0) firstProp = "_first";
    if (lastProp === void 0) lastProp = "_last";
    var prev = child._prev, next = child._next;
    if (prev) prev._next = next;
    else if (parent[firstProp] === child) parent[firstProp] = next;
    if (next) next._prev = prev;
    else if (parent[lastProp] === child) parent[lastProp] = prev;
    child._next = child._prev = child.parent = null; // don't delete the _dp just so we can revert if necessary. But parent should be null to indicate the item isn't in a linked list.
}, _removeFromParent = function _removeFromParent(child, onlyIfParentHasAutoRemove) {
    child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove && child.parent.remove(child);
    child._act = 0;
}, _uncache = function _uncache(animation, child) {
    if (animation && (!child || child._end > animation._dur || child._start < 0)) {
        // performance optimization: if a child animation is passed in we should only uncache if that child EXTENDS the animation (its end time is beyond the end)
        var a = animation;
        while(a){
            a._dirty = 1;
            a = a.parent;
        }
    }
    return animation;
}, _recacheAncestors = function _recacheAncestors(animation) {
    var parent = animation.parent;
    while(parent && parent.parent){
        //sometimes we must force a re-sort of all children and update the duration/totalDuration of all ancestor timelines immediately in case, for example, in the middle of a render loop, one tween alters another tween's timeScale which shoves its startTime before 0, forcing the parent timeline to shift around and shiftChildren() which could affect that next tween's render (startTime). Doesn't matter for the root timeline though.
        parent._dirty = 1;
        parent.totalDuration();
        parent = parent.parent;
    }
    return animation;
}, _rewindStartAt = function _rewindStartAt(tween, totalTime, suppressEvents, force) {
    return tween._startAt && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween.vars.immediateRender && !tween.vars.autoRevert || tween._startAt.render(totalTime, true, force));
}, _hasNoPausedAncestors = function _hasNoPausedAncestors(animation) {
    return !animation || animation._ts && _hasNoPausedAncestors(animation.parent);
}, _elapsedCycleDuration = function _elapsedCycleDuration(animation) {
    return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
}, // feed in the totalTime and cycleDuration and it'll return the cycle (iteration minus 1) and if the playhead is exactly at the very END, it will NOT bump up to the next cycle.
_animationCycle = function _animationCycle(tTime, cycleDuration) {
    var whole = Math.floor(tTime /= cycleDuration);
    return tTime && whole === tTime ? whole - 1 : whole;
}, _parentToChildTotalTime = function _parentToChildTotalTime(parentTime, child) {
    return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
}, _setEnd = function _setEnd(animation) {
    return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
}, _alignPlayhead = function _alignPlayhead(animation, totalTime) {
    // adjusts the animation's _start and _end according to the provided totalTime (only if the parent's smoothChildTiming is true and the animation isn't paused). It doesn't do any rendering or forcing things back into parent timelines, etc. - that's what totalTime() is for.
    var parent = animation._dp;
    if (parent && parent.smoothChildTiming && animation._ts) {
        animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));
        _setEnd(animation);
        parent._dirty || _uncache(parent, animation); //for performance improvement. If the parent's cache is already dirty, it already took care of marking the ancestors as dirty too, so skip the function call here.
    }
    return animation;
}, /*
_totalTimeToTime = (clampedTotalTime, duration, repeat, repeatDelay, yoyo) => {
	let cycleDuration = duration + repeatDelay,
		time = _round(clampedTotalTime % cycleDuration);
	if (time > duration) {
		time = duration;
	}
	return (yoyo && (~~(clampedTotalTime / cycleDuration) & 1)) ? duration - time : time;
},
*/ _postAddChecks = function _postAddChecks(timeline, child) {
    var t;
    if (child._time || !child._dur && child._initted || child._start < timeline._time && (child._dur || !child.add)) {
        // in case, for example, the _start is moved on a tween that has already rendered, or if it's being inserted into a timeline BEFORE where the playhead is currently. Imagine it's at its end state, then the startTime is moved WAY later (after the end of this timeline), it should render at its beginning. Special case: if it's a timeline (has .add() method) and no duration, we can skip rendering because the user may be populating it AFTER adding it to a parent timeline (unconventional, but possible, and we wouldn't want it to get removed if the parent's autoRemoveChildren is true).
        t = _parentToChildTotalTime(timeline.rawTime(), child);
        if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) child.render(t, true);
    } //if the timeline has already ended but the inserted tween/timeline extends the duration, we should enable this timeline again so that it renders properly. We should also align the playhead with the parent timeline's when appropriate.
    if (_uncache(timeline, child)._dp && timeline._initted && timeline._time >= timeline._dur && timeline._ts) {
        //in case any of the ancestors had completed but should now be enabled...
        if (timeline._dur < timeline.duration()) {
            t = timeline;
            while(t._dp){
                t.rawTime() >= 0 && t.totalTime(t._tTime); //moves the timeline (shifts its startTime) if necessary, and also enables it. If it's currently zero, though, it may not be scheduled to render until later so there's no need to force it to align with the current playhead position. Only move to catch up with the playhead.
                t = t._dp;
            }
        }
        timeline._zTime = -_tinyNum; // helps ensure that the next render() will be forced (crossingStart = true in render()), even if the duration hasn't changed (we're adding a child which would need to get rendered). Definitely an edge case. Note: we MUST do this AFTER the loop above where the totalTime() might trigger a render() because this _addToTimeline() method gets called from the Animation constructor, BEFORE tweens even record their targets, etc. so we wouldn't want things to get triggered in the wrong order.
    }
}, _addToTimeline = function _addToTimeline(timeline, child, position, skipChecks) {
    child.parent && _removeFromParent(child);
    child._start = _roundPrecise((_isNumber(position) ? position : position || timeline !== _globalTimeline ? _parsePosition(timeline, position, child) : timeline._time) + child._delay);
    child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));
    _addLinkedListItem(timeline, child, "_first", "_last", timeline._sort ? "_start" : 0);
    _isFromOrFromStart(child) || (timeline._recent = child);
    skipChecks || _postAddChecks(timeline, child);
    timeline._ts < 0 && _alignPlayhead(timeline, timeline._tTime); // if the timeline is reversed and the new child makes it longer, we may need to adjust the parent's _start (push it back)
    return timeline;
}, _scrollTrigger = function _scrollTrigger(animation, trigger) {
    return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
}, _attemptInitTween = function _attemptInitTween(tween, time, force, suppressEvents, tTime) {
    _initTween(tween, time, tTime);
    if (!tween._initted) return 1;
    if (!force && tween._pt && !_reverting && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
        _lazyTweens.push(tween);
        tween._lazy = [
            tTime,
            suppressEvents
        ];
        return 1;
    }
}, _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart(_ref) {
    var parent = _ref.parent;
    return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart(parent));
}, // check parent's _lock because when a timeline repeats/yoyos and does its artificial wrapping, we shouldn't force the ratio back to 0
_isFromOrFromStart = function _isFromOrFromStart(_ref2) {
    var data = _ref2.data;
    return data === "isFromStart" || data === "isStart";
}, _renderZeroDurationTween = function _renderZeroDurationTween(tween, totalTime, suppressEvents, force) {
    var prevRatio = tween.ratio, ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1, // if the tween or its parent is reversed and the totalTime is 0, we should go to a ratio of 0. Edge case: if a from() or fromTo() stagger tween is placed later in a timeline, the "startAt" zero-duration tween could initially render at a time when the parent timeline's playhead is technically BEFORE where this tween is, so make sure that any "from" and "fromTo" startAt tweens are rendered the first time at a ratio of 1.
    repeatDelay = tween._rDelay, tTime = 0, pt, iteration, prevIteration;
    if (repeatDelay && tween._repeat) {
        // in case there's a zero-duration tween that has a repeat with a repeatDelay
        tTime = _clamp(0, tween._tDur, totalTime);
        iteration = _animationCycle(tTime, repeatDelay);
        tween._yoyo && iteration & 1 && (ratio = 1 - ratio);
        if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
            // if iteration changed
            prevRatio = 1 - ratio;
            tween.vars.repeatRefresh && tween._initted && tween.invalidate();
        }
    }
    if (ratio !== prevRatio || _reverting || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
        if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents, tTime)) // if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately.
        return;
        prevIteration = tween._zTime;
        tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0); // when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.
        suppressEvents || (suppressEvents = totalTime && !prevIteration); // if it was rendered previously at exactly 0 (_zTime) and now the playhead is moving away, DON'T fire callbacks otherwise they'll seem like duplicates.
        tween.ratio = ratio;
        tween._from && (ratio = 1 - ratio);
        tween._time = 0;
        tween._tTime = tTime;
        pt = tween._pt;
        while(pt){
            pt.r(ratio, pt.d);
            pt = pt._next;
        }
        totalTime < 0 && _rewindStartAt(tween, totalTime, suppressEvents, true);
        tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
        tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");
        if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
            ratio && _removeFromParent(tween, 1);
            if (!suppressEvents && !_reverting) {
                _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);
                tween._prom && tween._prom();
            }
        }
    } else if (!tween._zTime) tween._zTime = totalTime;
}, _findNextPauseTween = function _findNextPauseTween(animation, prevTime, time) {
    var child;
    if (time > prevTime) {
        child = animation._first;
        while(child && child._start <= time){
            if (child.data === "isPause" && child._start > prevTime) return child;
            child = child._next;
        }
    } else {
        child = animation._last;
        while(child && child._start >= time){
            if (child.data === "isPause" && child._start < prevTime) return child;
            child = child._prev;
        }
    }
}, _setDuration = function _setDuration(animation, duration, skipUncache, leavePlayhead) {
    var repeat = animation._repeat, dur = _roundPrecise(duration) || 0, totalProgress = animation._tTime / animation._tDur;
    totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
    animation._dur = dur;
    animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
    totalProgress > 0 && !leavePlayhead && _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress);
    animation.parent && _setEnd(animation);
    skipUncache || _uncache(animation.parent, animation);
    return animation;
}, _onUpdateTotalDuration = function _onUpdateTotalDuration(animation) {
    return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
}, _zeroPosition = {
    _start: 0,
    endTime: _emptyFunc,
    totalDuration: _emptyFunc
}, _parsePosition = function _parsePosition(animation, position, percentAnimation) {
    var labels = animation.labels, recent = animation._recent || _zeroPosition, clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur, //in case there's a child that infinitely repeats, users almost never intend for the insertion point of a new child to be based on a SUPER long value like that so we clip it and assume the most recently-added child's endTime should be used instead.
    i, offset, isPercent;
    if (_isString(position) && (isNaN(position) || position in labels)) {
        //if the string is a number like "1", check to see if there's a label with that name, otherwise interpret it as a number (absolute value).
        offset = position.charAt(0);
        isPercent = position.substr(-1) === "%";
        i = position.indexOf("=");
        if (offset === "<" || offset === ">") {
            i >= 0 && (position = position.replace(/=/, ""));
            return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
        }
        if (i < 0) {
            position in labels || (labels[position] = clippedDuration);
            return labels[position];
        }
        offset = parseFloat(position.charAt(i - 1) + position.substr(i + 1));
        if (isPercent && percentAnimation) offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
        return i > 1 ? _parsePosition(animation, position.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
    }
    return position == null ? clippedDuration : +position;
}, _createTweenType = function _createTweenType(type, params, timeline) {
    var isLegacy = _isNumber(params[1]), varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1), vars = params[varsIndex], irVars, parent;
    isLegacy && (vars.duration = params[1]);
    vars.parent = timeline;
    if (type) {
        irVars = vars;
        parent = timeline;
        while(parent && !("immediateRender" in irVars)){
            // inheritance hasn't happened yet, but someone may have set a default in an ancestor timeline. We could do vars.immediateRender = _isNotFalse(_inheritDefaults(vars).immediateRender) but that'd exact a slight performance penalty because _inheritDefaults() also runs in the Tween constructor. We're paying a small kb price here to gain speed.
            irVars = parent.vars.defaults || {};
            parent = _isNotFalse(parent.vars.inherit) && parent.parent;
        }
        vars.immediateRender = _isNotFalse(irVars.immediateRender);
        type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1]; // "from" vars
    }
    return new Tween(params[0], vars, params[varsIndex + 1]);
}, _conditionalReturn = function _conditionalReturn(value, func) {
    return value || value === 0 ? func(value) : func;
}, _clamp = function _clamp(min, max, value) {
    return value < min ? min : value > max ? max : value;
}, getUnit = function getUnit(value, v) {
    return !_isString(value) || !(v = _unitExp.exec(value)) ? "" : v[1];
}, // note: protect against padded numbers as strings, like "100.100". That shouldn't return "00" as the unit. If it's numeric, return no unit.
clamp = function clamp(min, max, value) {
    return _conditionalReturn(value, function(v) {
        return _clamp(min, max, v);
    });
}, _slice = [].slice, _isArrayLike = function _isArrayLike(value, nonEmpty) {
    return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
}, _flatten = function _flatten(ar, leaveStrings, accumulator) {
    if (accumulator === void 0) accumulator = [];
    return ar.forEach(function(value) {
        var _accumulator;
        return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
    }) || accumulator;
}, //takes any value and returns an array. If it's a string (and leaveStrings isn't true), it'll use document.querySelectorAll() and convert that to an array. It'll also accept iterables like jQuery objects.
toArray = function toArray(value, scope, leaveStrings) {
    return _context && !scope && _context.selector ? _context.selector(value) : _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call((scope || _doc).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [
        value
    ] : [];
}, selector = function selector(value) {
    value = toArray(value)[0] || _warn("Invalid scope") || {};
    return function(v) {
        var el = value.current || value.nativeElement || value;
        return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc.createElement("div") : value);
    };
}, shuffle = function shuffle(a) {
    return a.sort(function() {
        return .5 - Math.random();
    });
}, // alternative that's a bit faster and more reliably diverse but bigger:   for (let j, v, i = a.length; i; j = Math.floor(Math.random() * i), v = a[--i], a[i] = a[j], a[j] = v); return a;
//for distributing values across an array. Can accept a number, a function or (most commonly) a function which can contain the following properties: {base, amount, from, ease, grid, axis, length, each}. Returns a function that expects the following parameters: index, target, array. Recognizes the following
distribute = function distribute(v) {
    if (_isFunction(v)) return v;
    var vars = _isObject(v) ? v : {
        each: v
    }, //n:1 is just to indicate v was a number; we leverage that later to set v according to the length we get. If a number is passed in, we treat it like the old stagger value where 0.1, for example, would mean that things would be distributed with 0.1 between each element in the array rather than a total "amount" that's chunked out among them all.
    ease = _parseEase(vars.ease), from = vars.from || 0, base = parseFloat(vars.base) || 0, cache = {}, isDecimal = from > 0 && from < 1, ratios = isNaN(from) || isDecimal, axis = vars.axis, ratioX = from, ratioY = from;
    if (_isString(from)) ratioX = ratioY = ({
        center: .5,
        edges: .5,
        end: 1
    })[from] || 0;
    else if (!isDecimal && ratios) {
        ratioX = from[0];
        ratioY = from[1];
    }
    return function(i, target, a) {
        var l = (a || vars).length, distances = cache[l], originX, originY, x, y, d, j, max, min, wrapAt;
        if (!distances) {
            wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [
                1,
                _bigNum
            ])[1];
            if (!wrapAt) {
                max = -_bigNum;
                while(max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l);
                wrapAt < l && wrapAt--;
            }
            distances = cache[l] = [];
            originX = ratios ? Math.min(wrapAt, l) * ratioX - .5 : from % wrapAt;
            originY = wrapAt === _bigNum ? 0 : ratios ? l * ratioY / wrapAt - .5 : from / wrapAt | 0;
            max = 0;
            min = _bigNum;
            for(j = 0; j < l; j++){
                x = j % wrapAt - originX;
                y = originY - (j / wrapAt | 0);
                distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
                d > max && (max = d);
                d < min && (min = d);
            }
            from === "random" && shuffle(distances);
            distances.max = max - min;
            distances.min = min;
            distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
            distances.b = l < 0 ? base - l : base;
            distances.u = getUnit(vars.amount || vars.each) || 0; //unit
            ease = ease && l < 0 ? _invertEase(ease) : ease;
        }
        l = (distances[i] - distances.min) / distances.max || 0;
        return _roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u; //round in order to work around floating point errors
    };
}, _roundModifier = function _roundModifier(v) {
    //pass in 0.1 get a function that'll round to the nearest tenth, or 5 to round to the closest 5, or 0.001 to the closest 1000th, etc.
    var p = Math.pow(10, ((v + "").split(".")[1] || "").length); //to avoid floating point math errors (like 24 * 0.1 == 2.4000000000000004), we chop off at a specific number of decimal places (much faster than toFixed())
    return function(raw) {
        var n = _roundPrecise(Math.round(parseFloat(raw) / v) * v * p);
        return (n - n % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw)); // n - n % 1 replaces Math.floor() in order to handle negative values properly. For example, Math.floor(-150.00000000000003) is 151!
    };
}, snap = function snap(snapTo, value) {
    var isArray = _isArray(snapTo), radius, is2D;
    if (!isArray && _isObject(snapTo)) {
        radius = isArray = snapTo.radius || _bigNum;
        if (snapTo.values) {
            snapTo = toArray(snapTo.values);
            if (is2D = !_isNumber(snapTo[0])) radius *= radius; //performance optimization so we don't have to Math.sqrt() in the loop.
        } else snapTo = _roundModifier(snapTo.increment);
    }
    return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function(raw) {
        is2D = snapTo(raw);
        return Math.abs(is2D - raw) <= radius ? is2D : raw;
    } : function(raw) {
        var x = parseFloat(is2D ? raw.x : raw), y = parseFloat(is2D ? raw.y : 0), min = _bigNum, closest = 0, i = snapTo.length, dx, dy;
        while(i--){
            if (is2D) {
                dx = snapTo[i].x - x;
                dy = snapTo[i].y - y;
                dx = dx * dx + dy * dy;
            } else dx = Math.abs(snapTo[i] - x);
            if (dx < min) {
                min = dx;
                closest = i;
            }
        }
        closest = !radius || min <= radius ? snapTo[closest] : raw;
        return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
    });
}, random = function random(min, max, roundingIncrement, returnFunction) {
    return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? (roundingIncrement = 0, false) : !returnFunction, function() {
        return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5, returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * .99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
    });
}, pipe = function pipe() {
    for(var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++)functions[_key] = arguments[_key];
    return function(value) {
        return functions.reduce(function(v, f) {
            return f(v);
        }, value);
    };
}, unitize = function unitize(func, unit) {
    return function(value) {
        return func(parseFloat(value)) + (unit || getUnit(value));
    };
}, normalize = function normalize(min, max, value) {
    return mapRange(min, max, 0, 1, value);
}, _wrapArray = function _wrapArray(a, wrapper, value) {
    return _conditionalReturn(value, function(index) {
        return a[~~wrapper(index)];
    });
}, wrap = function wrap(min, max, value) {
    // NOTE: wrap() CANNOT be an arrow function! A very odd compiling bug causes problems (unrelated to GSAP).
    var range = max - min;
    return _isArray(min) ? _wrapArray(min, wrap(0, min.length), max) : _conditionalReturn(value, function(value) {
        return (range + (value - min) % range) % range + min;
    });
}, wrapYoyo = function wrapYoyo(min, max, value) {
    var range = max - min, total = range * 2;
    return _isArray(min) ? _wrapArray(min, wrapYoyo(0, min.length - 1), max) : _conditionalReturn(value, function(value) {
        value = (total + (value - min) % total) % total || 0;
        return min + (value > range ? total - value : value);
    });
}, _replaceRandom = function _replaceRandom(value) {
    //replaces all occurrences of random(...) in a string with the calculated random value. can be a range like random(-100, 100, 5) or an array like random([0, 100, 500])
    var prev = 0, s = "", i, nums, end, isArray;
    while(~(i = value.indexOf("random(", prev))){
        end = value.indexOf(")", i);
        isArray = value.charAt(i + 7) === "[";
        nums = value.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
        s += value.substr(prev, i - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
        prev = end + 1;
    }
    return s + value.substr(prev, value.length - prev);
}, mapRange = function mapRange(inMin, inMax, outMin, outMax, value) {
    var inRange = inMax - inMin, outRange = outMax - outMin;
    return _conditionalReturn(value, function(value) {
        return outMin + ((value - inMin) / inRange * outRange || 0);
    });
}, interpolate = function interpolate(start, end, progress, mutate) {
    var func = isNaN(start + end) ? 0 : function(p) {
        return (1 - p) * start + p * end;
    };
    if (!func) {
        var isString = _isString(start), master = {}, p, i, interpolators, l, il;
        progress === true && (mutate = 1) && (progress = null);
        if (isString) {
            start = {
                p: start
            };
            end = {
                p: end
            };
        } else if (_isArray(start) && !_isArray(end)) {
            interpolators = [];
            l = start.length;
            il = l - 2;
            for(i = 1; i < l; i++)interpolators.push(interpolate(start[i - 1], start[i])); //build the interpolators up front as a performance optimization so that when the function is called many times, it can just reuse them.
            l--;
            func = function func(p) {
                p *= l;
                var i = Math.min(il, ~~p);
                return interpolators[i](p - i);
            };
            progress = end;
        } else if (!mutate) start = _merge(_isArray(start) ? [] : {}, start);
        if (!interpolators) {
            for(p in end)_addPropTween.call(master, start, p, "get", end[p]);
            func = function func(p) {
                return _renderPropTweens(p, master) || (isString ? start.p : start);
            };
        }
    }
    return _conditionalReturn(progress, func);
}, _getLabelInDirection = function _getLabelInDirection(timeline, fromTime, backward) {
    //used for nextLabel() and previousLabel()
    var labels = timeline.labels, min = _bigNum, p, distance, label;
    for(p in labels){
        distance = labels[p] - fromTime;
        if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
            label = p;
            min = distance;
        }
    }
    return label;
}, _callback = function _callback(animation, type, executeLazyFirst) {
    var v = animation.vars, callback = v[type], prevContext = _context, context = animation._ctx, params, scope, result;
    if (!callback) return;
    params = v[type + "Params"];
    scope = v.callbackScope || animation;
    executeLazyFirst && _lazyTweens.length && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.
    context && (_context = context);
    result = params ? callback.apply(scope, params) : callback.call(scope);
    _context = prevContext;
    return result;
}, _interrupt = function _interrupt(animation) {
    _removeFromParent(animation);
    animation.scrollTrigger && animation.scrollTrigger.kill(!!_reverting);
    animation.progress() < 1 && _callback(animation, "onInterrupt");
    return animation;
}, _quickTween, _registerPluginQueue = [], _createPlugin = function _createPlugin(config) {
    if (!config) return;
    config = !config.name && config["default"] || config; // UMD packaging wraps things oddly, so for example MotionPathHelper becomes {MotionPathHelper:MotionPathHelper, default:MotionPathHelper}.
    if (_windowExists() || config.headless) {
        // edge case: some build tools may pass in a null/undefined value
        var name = config.name, isFunc = _isFunction(config), Plugin = name && !isFunc && config.init ? function() {
            this._props = [];
        } : config, //in case someone passes in an object that's not a plugin, like CustomEase
        instanceDefaults = {
            init: _emptyFunc,
            render: _renderPropTweens,
            add: _addPropTween,
            kill: _killPropTweensOf,
            modifier: _addPluginModifier,
            rawVars: 0
        }, statics = {
            targetTest: 0,
            get: 0,
            getSetter: _getSetter,
            aliases: {},
            register: 0
        };
        _wake();
        if (config !== Plugin) {
            if (_plugins[name]) return;
            _setDefaults(Plugin, _setDefaults(_copyExcluding(config, instanceDefaults), statics)); //static methods
            _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config, statics))); //instance methods
            _plugins[Plugin.prop = name] = Plugin;
            if (config.targetTest) {
                _harnessPlugins.push(Plugin);
                _reservedProps[name] = 1;
            }
            name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin"; //for the global name. "motionPath" should become MotionPathPlugin
        }
        _addGlobal(name, Plugin);
        config.register && config.register(gsap, Plugin, PropTween);
    } else _registerPluginQueue.push(config);
}, /*
 * --------------------------------------------------------------------------------------
 * COLORS
 * --------------------------------------------------------------------------------------
 */ _255 = 255, _colorLookup = {
    aqua: [
        0,
        _255,
        _255
    ],
    lime: [
        0,
        _255,
        0
    ],
    silver: [
        192,
        192,
        192
    ],
    black: [
        0,
        0,
        0
    ],
    maroon: [
        128,
        0,
        0
    ],
    teal: [
        0,
        128,
        128
    ],
    blue: [
        0,
        0,
        _255
    ],
    navy: [
        0,
        0,
        128
    ],
    white: [
        _255,
        _255,
        _255
    ],
    olive: [
        128,
        128,
        0
    ],
    yellow: [
        _255,
        _255,
        0
    ],
    orange: [
        _255,
        165,
        0
    ],
    gray: [
        128,
        128,
        128
    ],
    purple: [
        128,
        0,
        128
    ],
    green: [
        0,
        128,
        0
    ],
    red: [
        _255,
        0,
        0
    ],
    pink: [
        _255,
        192,
        203
    ],
    cyan: [
        0,
        _255,
        _255
    ],
    transparent: [
        _255,
        _255,
        _255,
        0
    ]
}, // possible future idea to replace the hard-coded color name values - put this in the ticker.wake() where we set the _doc:
// let ctx = _doc.createElement("canvas").getContext("2d");
// _forEachName("aqua,lime,silver,black,maroon,teal,blue,navy,white,olive,yellow,orange,gray,purple,green,red,pink,cyan", color => {ctx.fillStyle = color; _colorLookup[color] = splitColor(ctx.fillStyle)});
_hue = function _hue(h, m1, m2) {
    h += h < 0 ? 1 : h > 1 ? -1 : 0;
    return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < .5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + .5 | 0;
}, splitColor = function splitColor(v, toHSL, forceAlpha) {
    var a = !v ? _colorLookup.black : _isNumber(v) ? [
        v >> 16,
        v >> 8 & _255,
        v & _255
    ] : 0, r, g, b, h, s, l, max, min, d, wasHSL;
    if (!a) {
        if (v.substr(-1) === ",") //sometimes a trailing comma is included and we should chop it off (typically from a comma-delimited list of values like a textShadow:"2px 2px 2px blue, 5px 5px 5px rgb(255,0,0)" - in this example "blue," has a trailing comma. We could strip it out inside parseComplex() but we'd need to do it to the beginning and ending values plus it wouldn't provide protection from other potential scenarios like if the user passes in a similar value.
        v = v.substr(0, v.length - 1);
        if (_colorLookup[v]) a = _colorLookup[v];
        else if (v.charAt(0) === "#") {
            if (v.length < 6) {
                //for shorthand like #9F0 or #9F0F (could have alpha)
                r = v.charAt(1);
                g = v.charAt(2);
                b = v.charAt(3);
                v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
            }
            if (v.length === 9) {
                // hex with alpha, like #fd5e53ff
                a = parseInt(v.substr(1, 6), 16);
                return [
                    a >> 16,
                    a >> 8 & _255,
                    a & _255,
                    parseInt(v.substr(7), 16) / 255
                ];
            }
            v = parseInt(v.substr(1), 16);
            a = [
                v >> 16,
                v >> 8 & _255,
                v & _255
            ];
        } else if (v.substr(0, 3) === "hsl") {
            a = wasHSL = v.match(_strictNumExp);
            if (!toHSL) {
                h = +a[0] % 360 / 360;
                s = +a[1] / 100;
                l = +a[2] / 100;
                g = l <= .5 ? l * (s + 1) : l + s - l * s;
                r = l * 2 - g;
                a.length > 3 && (a[3] *= 1); //cast as number
                a[0] = _hue(h + 1 / 3, r, g);
                a[1] = _hue(h, r, g);
                a[2] = _hue(h - 1 / 3, r, g);
            } else if (~v.indexOf("=")) {
                //if relative values are found, just return the raw strings with the relative prefixes in place.
                a = v.match(_numExp);
                forceAlpha && a.length < 4 && (a[3] = 1);
                return a;
            }
        } else a = v.match(_strictNumExp) || _colorLookup.transparent;
        a = a.map(Number);
    }
    if (toHSL && !wasHSL) {
        r = a[0] / _255;
        g = a[1] / _255;
        b = a[2] / _255;
        max = Math.max(r, g, b);
        min = Math.min(r, g, b);
        l = (max + min) / 2;
        if (max === min) h = s = 0;
        else {
            d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
            h *= 60;
        }
        a[0] = ~~(h + .5);
        a[1] = ~~(s * 100 + .5);
        a[2] = ~~(l * 100 + .5);
    }
    forceAlpha && a.length < 4 && (a[3] = 1);
    return a;
}, _colorOrderData = function _colorOrderData(v) {
    // strips out the colors from the string, finds all the numeric slots (with units) and returns an array of those. The Array also has a "c" property which is an Array of the index values where the colors belong. This is to help work around issues where there's a mis-matched order of color/numeric data like drop-shadow(#f00 0px 1px 2px) and drop-shadow(0x 1px 2px #f00). This is basically a helper function used in _formatColors()
    var values = [], c = [], i = -1;
    v.split(_colorExp).forEach(function(v) {
        var a = v.match(_numWithUnitExp) || [];
        values.push.apply(values, a);
        c.push(i += a.length + 1);
    });
    values.c = c;
    return values;
}, _formatColors = function _formatColors(s, toHSL, orderMatchData) {
    var result = "", colors = (s + result).match(_colorExp), type = toHSL ? "hsla(" : "rgba(", i = 0, c, shell, d, l;
    if (!colors) return s;
    colors = colors.map(function(color) {
        return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
    });
    if (orderMatchData) {
        d = _colorOrderData(s);
        c = orderMatchData.c;
        if (c.join(result) !== d.c.join(result)) {
            shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
            l = shell.length - 1;
            for(; i < l; i++)result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
        }
    }
    if (!shell) {
        shell = s.split(_colorExp);
        l = shell.length - 1;
        for(; i < l; i++)result += shell[i] + colors[i];
    }
    return result + shell[l];
}, _colorExp = function() {
    var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", //we'll dynamically build this Regular Expression to conserve file size. After building it, it will be able to find rgb(), rgba(), # (hexadecimal), and named color values like red, blue, purple, etc.,
    p;
    for(p in _colorLookup)s += "|" + p + "\\b";
    return new RegExp(s + ")", "gi");
}(), _hslExp = /hsl[a]?\(/, _colorStringFilter = function _colorStringFilter(a) {
    var combined = a.join(" "), toHSL;
    _colorExp.lastIndex = 0;
    if (_colorExp.test(combined)) {
        toHSL = _hslExp.test(combined);
        a[1] = _formatColors(a[1], toHSL);
        a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1])); // make sure the order of numbers/colors match with the END value.
        return true;
    }
}, /*
 * --------------------------------------------------------------------------------------
 * TICKER
 * --------------------------------------------------------------------------------------
 */ _tickerActive, _ticker = function() {
    var _getTime = Date.now, _lagThreshold = 500, _adjustedLag = 33, _startTime = _getTime(), _lastUpdate = _startTime, _gap = 1000 / 240, _nextTime = _gap, _listeners = [], _id, _req, _raf, _self, _delta, _i, _tick = function _tick(v) {
        var elapsed = _getTime() - _lastUpdate, manual = v === true, overlap, dispatch, time, frame;
        (elapsed > _lagThreshold || elapsed < 0) && (_startTime += elapsed - _adjustedLag);
        _lastUpdate += elapsed;
        time = _lastUpdate - _startTime;
        overlap = time - _nextTime;
        if (overlap > 0 || manual) {
            frame = ++_self.frame;
            _delta = time - _self.time * 1000;
            _self.time = time = time / 1000;
            _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
            dispatch = 1;
        }
        manual || (_id = _req(_tick)); //make sure the request is made before we dispatch the "tick" event so that timing is maintained. Otherwise, if processing the "tick" requires a bunch of time (like 15ms) and we're using a setTimeout() that's based on 16.7ms, it'd technically take 31.7ms between frames otherwise.
        if (dispatch) for(_i = 0; _i < _listeners.length; _i++)// use _i and check _listeners.length instead of a variable because a listener could get removed during the loop, and if that happens to an element less than the current index, it'd throw things off in the loop.
        _listeners[_i](time, _delta, frame, v);
    };
    _self = {
        time: 0,
        frame: 0,
        tick: function tick() {
            _tick(true);
        },
        deltaRatio: function deltaRatio(fps) {
            return _delta / (1000 / (fps || 60));
        },
        wake: function wake() {
            if (_coreReady) {
                if (!_coreInitted && _windowExists()) {
                    _win = _coreInitted = window;
                    _doc = _win.document || {};
                    _globals.gsap = gsap;
                    (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);
                    _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {});
                    _registerPluginQueue.forEach(_createPlugin);
                }
                _raf = typeof requestAnimationFrame !== "undefined" && requestAnimationFrame;
                _id && _self.sleep();
                _req = _raf || function(f) {
                    return setTimeout(f, _nextTime - _self.time * 1000 + 1 | 0);
                };
                _tickerActive = 1;
                _tick(2);
            }
        },
        sleep: function sleep() {
            (_raf ? cancelAnimationFrame : clearTimeout)(_id);
            _tickerActive = 0;
            _req = _emptyFunc;
        },
        lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
            _lagThreshold = threshold || Infinity; // zero should be interpreted as basically unlimited
            _adjustedLag = Math.min(adjustedLag || 33, _lagThreshold);
        },
        fps: function fps(_fps) {
            _gap = 1000 / (_fps || 240);
            _nextTime = _self.time * 1000 + _gap;
        },
        add: function add(callback, once, prioritize) {
            var func = once ? function(t, d, f, v) {
                callback(t, d, f, v);
                _self.remove(func);
            } : callback;
            _self.remove(callback);
            _listeners[prioritize ? "unshift" : "push"](func);
            _wake();
            return func;
        },
        remove: function remove(callback, i) {
            ~(i = _listeners.indexOf(callback)) && _listeners.splice(i, 1) && _i >= i && _i--;
        },
        _listeners: _listeners
    };
    return _self;
}(), _wake = function _wake() {
    return !_tickerActive && _ticker.wake();
}, //also ensures the core classes are initialized.
/*
* -------------------------------------------------
* EASING
* -------------------------------------------------
*/ _easeMap = {}, _customEaseExp = /^[\d.\-M][\d.\-,\s]/, _quotesExp = /["']/g, _parseObjectInString = function _parseObjectInString(value) {
    //takes a string like "{wiggles:10, type:anticipate})" and turns it into a real object. Notice it ends in ")" and includes the {} wrappers. This is because we only use this function for parsing ease configs and prioritized optimization rather than reusability.
    var obj = {}, split = value.substr(1, value.length - 3).split(":"), key = split[0], i = 1, l = split.length, index, val, parsedVal;
    for(; i < l; i++){
        val = split[i];
        index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
        parsedVal = val.substr(0, index);
        obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
        key = val.substr(index + 1).trim();
    }
    return obj;
}, _valueInParentheses = function _valueInParentheses(value) {
    var open = value.indexOf("(") + 1, close = value.indexOf(")"), nested = value.indexOf("(", open);
    return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
}, _configEaseFromString = function _configEaseFromString(name) {
    //name can be a string like "elastic.out(1,0.5)", and pass in _easeMap as obj and it'll parse it out and call the actual function like _easeMap.Elastic.easeOut.config(1,0.5). It will also parse custom ease strings as long as CustomEase is loaded and registered (internally as _easeMap._CE).
    var split = (name + "").split("("), ease = _easeMap[split[0]];
    return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [
        _parseObjectInString(split[1])
    ] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
}, _invertEase = function _invertEase(ease) {
    return function(p) {
        return 1 - ease(1 - p);
    };
}, // allow yoyoEase to be set in children and have those affected when the parent/ancestor timeline yoyos.
_propagateYoyoEase = function _propagateYoyoEase(timeline, isYoyo) {
    var child = timeline._first, ease;
    while(child){
        if (child instanceof Timeline) _propagateYoyoEase(child, isYoyo);
        else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
            if (child.timeline) _propagateYoyoEase(child.timeline, isYoyo);
            else {
                ease = child._ease;
                child._ease = child._yEase;
                child._yEase = ease;
                child._yoyo = isYoyo;
            }
        }
        child = child._next;
    }
}, _parseEase = function _parseEase(ease, defaultEase) {
    return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
}, _insertEase = function _insertEase(names, easeIn, easeOut, easeInOut) {
    if (easeOut === void 0) easeOut = function easeOut(p) {
        return 1 - easeIn(1 - p);
    };
    if (easeInOut === void 0) easeInOut = function easeInOut(p) {
        return p < .5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
    };
    var ease = {
        easeIn: easeIn,
        easeOut: easeOut,
        easeInOut: easeInOut
    }, lowercaseName;
    _forEachName(names, function(name) {
        _easeMap[name] = _globals[name] = ease;
        _easeMap[lowercaseName = name.toLowerCase()] = easeOut;
        for(var p in ease)_easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
    });
    return ease;
}, _easeInOutFromOut = function _easeInOutFromOut(easeOut) {
    return function(p) {
        return p < .5 ? (1 - easeOut(1 - p * 2)) / 2 : .5 + easeOut((p - .5) * 2) / 2;
    };
}, _configElastic = function _configElastic(type, amplitude, period) {
    var p1 = amplitude >= 1 ? amplitude : 1, //note: if amplitude is < 1, we simply adjust the period for a more natural feel. Otherwise the math doesn't work right and the curve starts at 1.
    p2 = (period || (type ? .3 : .45)) / (amplitude < 1 ? amplitude : 1), p3 = p2 / _2PI * (Math.asin(1 / p1) || 0), easeOut = function easeOut(p) {
        return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
    }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
        return 1 - easeOut(1 - p);
    } : _easeInOutFromOut(easeOut);
    p2 = _2PI / p2; //precalculate to optimize
    ease.config = function(amplitude, period) {
        return _configElastic(type, amplitude, period);
    };
    return ease;
}, _configBack = function _configBack(type, overshoot) {
    if (overshoot === void 0) overshoot = 1.70158;
    var easeOut = function easeOut(p) {
        return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
    }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
        return 1 - easeOut(1 - p);
    } : _easeInOutFromOut(easeOut);
    ease.config = function(overshoot) {
        return _configBack(type, overshoot);
    };
    return ease;
}; // a cheaper (kb and cpu) but more mild way to get a parameterized weighted ease by feeding in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEase = ratio => {
// 	let y = 0.5 + ratio / 2;
// 	return p => (2 * (1 - p) * p * y + p * p);
// },
// a stronger (but more expensive kb/cpu) parameterized weighted ease that lets you feed in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEaseStrong = ratio => {
// 	ratio = .5 + ratio / 2;
// 	let o = 1 / 3 * (ratio < .5 ? ratio : 1 - ratio),
// 		b = ratio - o,
// 		c = ratio + o;
// 	return p => p === 1 ? p : 3 * b * (1 - p) * (1 - p) * p + 3 * c * (1 - p) * p * p + p * p * p;
// };
_forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function(name, i) {
    var power = i < 5 ? i + 1 : i;
    _insertEase(name + ",Power" + (power - 1), i ? function(p) {
        return Math.pow(p, power);
    } : function(p) {
        return p;
    }, function(p) {
        return 1 - Math.pow(1 - p, power);
    }, function(p) {
        return p < .5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
    });
});
_easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;
_insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());
(function(n, c) {
    var n1 = 1 / c, n2 = 2 * n1, n3 = 2.5 * n1, easeOut = function easeOut(p) {
        return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + .75 : p < n3 ? n * (p -= 2.25 / c) * p + .9375 : n * Math.pow(p - 2.625 / c, 2) + .984375;
    };
    _insertEase("Bounce", function(p) {
        return 1 - easeOut(1 - p);
    }, easeOut);
})(7.5625, 2.75);
_insertEase("Expo", function(p) {
    return p ? Math.pow(2, 10 * (p - 1)) : 0;
});
_insertEase("Circ", function(p) {
    return -(_sqrt(1 - p * p) - 1);
});
_insertEase("Sine", function(p) {
    return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
});
_insertEase("Back", _configBack("in"), _configBack("out"), _configBack());
_easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
    config: function config(steps, immediateStart) {
        if (steps === void 0) steps = 1;
        var p1 = 1 / steps, p2 = steps + (immediateStart ? 0 : 1), p3 = immediateStart ? 1 : 0, max = 1 - _tinyNum;
        return function(p) {
            return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
        };
    }
};
_defaults.ease = _easeMap["quad.out"];
_forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(name) {
    return _callbackNames += name + "," + name + "Params,";
});
var GSCache = function GSCache(target, harness) {
    this.id = _gsID++;
    target._gsap = this;
    this.target = target;
    this.harness = harness;
    this.get = harness ? harness.get : _getProperty;
    this.set = harness ? harness.getSetter : _getSetter;
};
var Animation = /*#__PURE__*/ function() {
    function Animation(vars) {
        this.vars = vars;
        this._delay = +vars.delay || 0;
        if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
            // TODO: repeat: Infinity on a timeline's children must flag that timeline internally and affect its totalDuration, otherwise it'll stop in the negative direction when reaching the start.
            this._rDelay = vars.repeatDelay || 0;
            this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
        }
        this._ts = 1;
        _setDuration(this, +vars.duration, 1, 1);
        this.data = vars.data;
        if (_context) {
            this._ctx = _context;
            _context.data.push(this);
        }
        _tickerActive || _ticker.wake();
    }
    var _proto = Animation.prototype;
    _proto.delay = function delay(value) {
        if (value || value === 0) {
            this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
            this._delay = value;
            return this;
        }
        return this._delay;
    };
    _proto.duration = function duration(value) {
        return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
    };
    _proto.totalDuration = function totalDuration(value) {
        if (!arguments.length) return this._tDur;
        this._dirty = 0;
        return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
    };
    _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
        _wake();
        if (!arguments.length) return this._tTime;
        var parent = this._dp;
        if (parent && parent.smoothChildTiming && this._ts) {
            _alignPlayhead(this, _totalTime);
            !parent._dp || parent.parent || _postAddChecks(parent, this); // edge case: if this is a child of a timeline that already completed, for example, we must re-activate the parent.
            //in case any of the ancestor timelines had completed but should now be enabled, we should reset their totalTime() which will also ensure that they're lined up properly and enabled. Skip for animations that are on the root (wasteful). Example: a TimelineLite.exportRoot() is performed when there's a paused tween on the root, the export will not complete until that tween is unpaused, but imagine a child gets restarted later, after all [unpaused] tweens have completed. The start of that child would get pushed out, but one of the ancestors may have completed.
            while(parent && parent.parent){
                if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) parent.totalTime(parent._tTime, true);
                parent = parent.parent;
            }
            if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) //if the animation doesn't have a parent, put it back into its last parent (recorded as _dp for exactly cases like this). Limit to parents with autoRemoveChildren (like globalTimeline) so that if the user manually removes an animation from a timeline and then alters its playhead, it doesn't get added back in.
            _addToTimeline(this._dp, this, this._start - this._delay);
        }
        if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
            // check for _ptLookup on a Tween instance to ensure it has actually finished being instantiated, otherwise if this.reverse() gets called in the Animation constructor, it could trigger a render() here even though the _targets weren't populated, thus when _init() is called there won't be any PropTweens (it'll act like the tween is non-functional)
            this._ts || (this._pTime = _totalTime); // otherwise, if an animation is paused, then the playhead is moved back to zero, then resumed, it'd revert back to the original time at the pause
            //if (!this._lock) { // avoid endless recursion (not sure we need this yet or if it's worth the performance hit)
            //   this._lock = 1;
            _lazySafeRender(this, _totalTime, suppressEvents); //   this._lock = 0;
        //}
        }
        return this;
    };
    _proto.time = function time(value, suppressEvents) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time; // note: if the modulus results in 0, the playhead could be exactly at the end or the beginning, and we always defer to the END with a non-zero value, otherwise if you set the time() to the very end (duration()), it would render at the START!
    };
    _proto.totalProgress = function totalProgress(value, suppressEvents) {
        return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() > 0 ? 1 : 0;
    };
    _proto.progress = function progress(value, suppressEvents) {
        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
    };
    _proto.iteration = function iteration(value, suppressEvents) {
        var cycleDuration = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
    } // potential future addition:
    ;
    _proto.timeScale = function timeScale(value, suppressEvents) {
        if (!arguments.length) return this._rts === -_tinyNum ? 0 : this._rts; // recorded timeScale. Special case: if someone calls reverse() on an animation with timeScale of 0, we assign it -_tinyNum to remember it's reversed.
        if (this._rts === value) return this;
        var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime; // make sure to do the parentToChildTotalTime() BEFORE setting the new _ts because the old one must be used in that calculation.
        // future addition? Up side: fast and minimal file size. Down side: only works on this animation; if a timeline is reversed, for example, its childrens' onReverse wouldn't get called.
        //(+value < 0 && this._rts >= 0) && _callback(this, "onReverse", true);
        // prioritize rendering where the parent's playhead lines up instead of this._tTime because there could be a tween that's animating another tween's timeScale in the same rendering loop (same parent), thus if the timeScale tween renders first, it would alter _start BEFORE _tTime was set on that tick (in the rendering loop), effectively freezing it until the timeScale tween finishes.
        this._rts = +value || 0;
        this._ts = this._ps || value === -_tinyNum ? 0 : this._rts; // _ts is the functional timeScale which would be 0 if the animation is paused.
        this.totalTime(_clamp(-Math.abs(this._delay), this._tDur, tTime), suppressEvents !== false);
        _setEnd(this); // if parent.smoothChildTiming was false, the end time didn't get updated in the _alignPlayhead() method, so do it here.
        return _recacheAncestors(this);
    };
    _proto.paused = function paused(value) {
        if (!arguments.length) return this._ps;
        if (this._ps !== value) {
            this._ps = value;
            if (value) {
                this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()); // if the pause occurs during the delay phase, make sure that's factored in when resuming.
                this._ts = this._act = 0; // _ts is the functional timeScale, so a paused tween would effectively have a timeScale of 0. We record the "real" timeScale as _rts (recorded time scale)
            } else {
                _wake();
                this._ts = this._rts; //only defer to _pTime (pauseTime) if tTime is zero. Remember, someone could pause() an animation, then scrub the playhead and resume(). If the parent doesn't have smoothChildTiming, we render at the rawTime() because the startTime won't get updated.
                this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum)); // edge case: animation.progress(1).pause().play() wouldn't render again because the playhead is already at the end, but the call to totalTime() below will add it back to its parent...and not remove it again (since removing only happens upon rendering at a new time). Offsetting the _tTime slightly is done simply to cause the final render in totalTime() that'll pop it off its timeline (if autoRemoveChildren is true, of course). Check to make sure _zTime isn't -_tinyNum to avoid an edge case where the playhead is pushed to the end but INSIDE a tween/callback, the timeline itself is paused thus halting rendering and leaving a few unrendered. When resuming, it wouldn't render those otherwise.
            }
        }
        return this;
    };
    _proto.startTime = function startTime(value) {
        if (arguments.length) {
            this._start = value;
            var parent = this.parent || this._dp;
            parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
            return this;
        }
        return this._start;
    };
    _proto.endTime = function endTime(includeRepeats) {
        return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
    };
    _proto.rawTime = function rawTime(wrapRepeats) {
        var parent = this.parent || this._dp; // _dp = detached parent
        return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
    };
    _proto.revert = function revert(config) {
        if (config === void 0) config = _revertConfig;
        var prevIsReverting = _reverting;
        _reverting = config;
        if (this._initted || this._startAt) {
            this.timeline && this.timeline.revert(config);
            this.totalTime(-0.01, config.suppressEvents);
        }
        this.data !== "nested" && config.kill !== false && this.kill();
        _reverting = prevIsReverting;
        return this;
    };
    _proto.globalTime = function globalTime(rawTime) {
        var animation = this, time = arguments.length ? rawTime : animation.rawTime();
        while(animation){
            time = animation._start + time / (Math.abs(animation._ts) || 1);
            animation = animation._dp;
        }
        return !this.parent && this._sat ? this._sat.globalTime(rawTime) : time; // the _startAt tweens for .fromTo() and .from() that have immediateRender should always be FIRST in the timeline (important for context.revert()). "_sat" stands for _startAtTween, referring to the parent tween that created the _startAt. We must discern if that tween had immediateRender so that we can know whether or not to prioritize it in revert().
    };
    _proto.repeat = function repeat(value) {
        if (arguments.length) {
            this._repeat = value === Infinity ? -2 : value;
            return _onUpdateTotalDuration(this);
        }
        return this._repeat === -2 ? Infinity : this._repeat;
    };
    _proto.repeatDelay = function repeatDelay(value) {
        if (arguments.length) {
            var time = this._time;
            this._rDelay = value;
            _onUpdateTotalDuration(this);
            return time ? this.time(time) : this;
        }
        return this._rDelay;
    };
    _proto.yoyo = function yoyo(value) {
        if (arguments.length) {
            this._yoyo = value;
            return this;
        }
        return this._yoyo;
    };
    _proto.seek = function seek(position, suppressEvents) {
        return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
    };
    _proto.restart = function restart(includeDelay, suppressEvents) {
        return this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
    };
    _proto.play = function play(from, suppressEvents) {
        from != null && this.seek(from, suppressEvents);
        return this.reversed(false).paused(false);
    };
    _proto.reverse = function reverse(from, suppressEvents) {
        from != null && this.seek(from || this.totalDuration(), suppressEvents);
        return this.reversed(true).paused(false);
    };
    _proto.pause = function pause(atTime, suppressEvents) {
        atTime != null && this.seek(atTime, suppressEvents);
        return this.paused(true);
    };
    _proto.resume = function resume() {
        return this.paused(false);
    };
    _proto.reversed = function reversed(value) {
        if (arguments.length) {
            !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0)); // in case timeScale is zero, reversing would have no effect so we use _tinyNum.
            return this;
        }
        return this._rts < 0;
    };
    _proto.invalidate = function invalidate() {
        this._initted = this._act = 0;
        this._zTime = -_tinyNum;
        return this;
    };
    _proto.isActive = function isActive() {
        var parent = this.parent || this._dp, start = this._start, rawTime;
        return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
    };
    _proto.eventCallback = function eventCallback(type, callback, params) {
        var vars = this.vars;
        if (arguments.length > 1) {
            if (!callback) delete vars[type];
            else {
                vars[type] = callback;
                params && (vars[type + "Params"] = params);
                type === "onUpdate" && (this._onUpdate = callback);
            }
            return this;
        }
        return vars[type];
    };
    _proto.then = function then(onFulfilled) {
        var self = this;
        return new Promise(function(resolve) {
            var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough, _resolve = function _resolve() {
                var _then = self.then;
                self.then = null; // temporarily null the then() method to avoid an infinite loop (see https://github.com/greensock/GSAP/issues/322)
                _isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
                resolve(f);
                self.then = _then;
            };
            if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) _resolve();
            else self._prom = _resolve;
        });
    };
    _proto.kill = function kill() {
        _interrupt(this);
    };
    return Animation;
}();
_setDefaults(Animation.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: false,
    parent: null,
    _initted: false,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -_tinyNum,
    _prom: 0,
    _ps: false,
    _rts: 1
});
var Timeline = /*#__PURE__*/ function(_Animation) {
    _inheritsLoose(Timeline, _Animation);
    function Timeline(vars, position) {
        var _this;
        if (vars === void 0) vars = {};
        _this = _Animation.call(this, vars) || this;
        _this.labels = {};
        _this.smoothChildTiming = !!vars.smoothChildTiming;
        _this.autoRemoveChildren = !!vars.autoRemoveChildren;
        _this._sort = _isNotFalse(vars.sortChildren);
        _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
        vars.reversed && _this.reverse();
        vars.paused && _this.paused(true);
        vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
        return _this;
    }
    var _proto2 = Timeline.prototype;
    _proto2.to = function to(targets, vars, position) {
        _createTweenType(0, arguments, this);
        return this;
    };
    _proto2.from = function from(targets, vars, position) {
        _createTweenType(1, arguments, this);
        return this;
    };
    _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
        _createTweenType(2, arguments, this);
        return this;
    };
    _proto2.set = function set(targets, vars, position) {
        vars.duration = 0;
        vars.parent = this;
        _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
        vars.immediateRender = !!vars.immediateRender;
        new Tween(targets, vars, _parsePosition(this, position), 1);
        return this;
    };
    _proto2.call = function call(callback, params, position) {
        return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
    } //ONLY for backward compatibility! Maybe delete?
    ;
    _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
        vars.duration = duration;
        vars.stagger = vars.stagger || stagger;
        vars.onComplete = onCompleteAll;
        vars.onCompleteParams = onCompleteAllParams;
        vars.parent = this;
        new Tween(targets, vars, _parsePosition(this, position));
        return this;
    };
    _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
        vars.runBackwards = 1;
        _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
        return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
    };
    _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
        toVars.startAt = fromVars;
        _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
        return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
    };
    _proto2.render = function render(totalTime, suppressEvents, force) {
        var prevTime = this._time, tDur = this._dirty ? this.totalDuration() : this._tDur, dur = this._dur, tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime), // if a paused timeline is resumed (or its _start is updated for another reason...which rounds it), that could result in the playhead shifting a **tiny** amount and a zero-duration child at that spot may get rendered at a different ratio, like its totalTime in render() may be 1e-17 instead of 0, for example.
        crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur), time, child, next, iteration, cycleDuration, prevPaused, pauseTween, timeScale, prevStart, prevIteration, yoyo, isYoyo;
        this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);
        if (tTime !== this._tTime || force || crossingStart) {
            if (prevTime !== this._time && dur) {
                //if totalDuration() finds a child with a negative startTime and smoothChildTiming is true, things get shifted around internally so we need to adjust the time accordingly. For example, if a tween starts at -30 we must shift EVERYTHING forward 30 seconds and move this timeline's startTime backward by 30 seconds so that things align with the playhead (no jump).
                tTime += this._time - prevTime;
                totalTime += this._time - prevTime;
            }
            time = tTime;
            prevStart = this._start;
            timeScale = this._ts;
            prevPaused = !timeScale;
            if (crossingStart) {
                dur || (prevTime = this._zTime); //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.
                (totalTime || !suppressEvents) && (this._zTime = totalTime);
            }
            if (this._repeat) {
                //adjust the time for repeats and yoyos
                yoyo = this._yoyo;
                cycleDuration = dur + this._rDelay;
                if (this._repeat < -1 && totalTime < 0) return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
                time = _roundPrecise(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)
                if (tTime === tDur) {
                    // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
                    iteration = this._repeat;
                    time = dur;
                } else {
                    iteration = ~~(tTime / cycleDuration);
                    if (iteration && iteration === tTime / cycleDuration) {
                        time = dur;
                        iteration--;
                    }
                    time > dur && (time = dur);
                }
                prevIteration = _animationCycle(this._tTime, cycleDuration);
                !prevTime && this._tTime && prevIteration !== iteration && this._tTime - prevIteration * cycleDuration - this._dur <= 0 && (prevIteration = iteration); // edge case - if someone does addPause() at the very beginning of a repeating timeline, that pause is technically at the same spot as the end which causes this._time to get set to 0 when the totalTime would normally place the playhead at the end. See https://gsap.com/forums/topic/23823-closing-nav-animation-not-working-on-ie-and-iphone-6-maybe-other-older-browser/?tab=comments#comment-113005 also, this._tTime - prevIteration * cycleDuration - this._dur <= 0 just checks to make sure it wasn't previously in the "repeatDelay" portion
                if (yoyo && iteration & 1) {
                    time = dur - time;
                    isYoyo = 1;
                }
                /*
        make sure children at the end/beginning of the timeline are rendered properly. If, for example,
        a 3-second long timeline rendered at 2.9 seconds previously, and now renders at 3.2 seconds (which
        would get translated to 2.8 seconds if the timeline yoyos or 0.2 seconds if it just repeats), there
        could be a callback or a short tween that's at 2.95 or 3 seconds in which wouldn't render. So
        we need to push the timeline to the end (and/or beginning depending on its yoyo value). Also we must
        ensure that zero-duration tweens at the very beginning or end of the Timeline work.
        */ if (iteration !== prevIteration && !this._lock) {
                    var rewinding = yoyo && prevIteration & 1, doesWrap = rewinding === (yoyo && iteration & 1);
                    iteration < prevIteration && (rewinding = !rewinding);
                    prevTime = rewinding ? 0 : tTime % dur ? dur : tTime; // if the playhead is landing exactly at the end of an iteration, use that totalTime rather than only the duration, otherwise it'll skip the 2nd render since it's effectively at the same time.
                    this._lock = 1;
                    this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
                    this._tTime = tTime; // if a user gets the iteration() inside the onRepeat, for example, it should be accurate.
                    !suppressEvents && this.parent && _callback(this, "onRepeat");
                    this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);
                    if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) // if prevTime is 0 and we render at the very end, _time will be the end, thus won't match. So in this edge case, prevTime won't match _time but that's okay. If it gets killed in the onRepeat, eject as well.
                    return this;
                    dur = this._dur; // in case the duration changed in the onRepeat
                    tDur = this._tDur;
                    if (doesWrap) {
                        this._lock = 2;
                        prevTime = rewinding ? dur : -0.0001;
                        this.render(prevTime, true);
                        this.vars.repeatRefresh && !isYoyo && this.invalidate();
                    }
                    this._lock = 0;
                    if (!this._ts && !prevPaused) return this;
                     //in order for yoyoEase to work properly when there's a stagger, we must swap out the ease in each sub-tween.
                    _propagateYoyoEase(this, isYoyo);
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2) {
                pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));
                if (pauseTween) tTime -= time - (time = pauseTween._start);
            }
            this._tTime = tTime;
            this._time = time;
            this._act = !timeScale; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.
            if (!this._initted) {
                this._onUpdate = this.vars.onUpdate;
                this._initted = 1;
                this._zTime = totalTime;
                prevTime = 0; // upon init, the playhead should always go forward; someone could invalidate() a completed timeline and then if they restart(), that would make child tweens render in reverse order which could lock in the wrong starting values if they build on each other, like tl.to(obj, {x: 100}).to(obj, {x: 0}).
            }
            if (!prevTime && time && !suppressEvents && !iteration) {
                _callback(this, "onStart");
                if (this._tTime !== tTime) // in case the onStart triggered a render at a different spot, eject. Like if someone did animation.pause(0.5) or something inside the onStart.
                return this;
            }
            if (time >= prevTime && totalTime >= 0) {
                child = this._first;
                while(child){
                    next = child._next;
                    if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
                        if (child.parent !== this) // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
                        return this.render(totalTime, suppressEvents, force);
                        child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);
                        if (time !== this._time || !this._ts && !prevPaused) {
                            //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
                            pauseTween = 0;
                            next && (tTime += this._zTime = -_tinyNum); // it didn't finish rendering, so flag zTime as negative so that so that the next time render() is called it'll be forced (to render any remaining children)
                            break;
                        }
                    }
                    child = next;
                }
            } else {
                child = this._last;
                var adjustedTime = totalTime < 0 ? totalTime : time; //when the playhead goes backward beyond the start of this timeline, we must pass that information down to the child animations so that zero-duration tweens know whether to render their starting or ending values.
                while(child){
                    next = child._prev;
                    if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
                        if (child.parent !== this) // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
                        return this.render(totalTime, suppressEvents, force);
                        child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force || _reverting && (child._initted || child._startAt)); // if reverting, we should always force renders of initted tweens (but remember that .fromTo() or .from() may have a _startAt but not _initted yet). If, for example, a .fromTo() tween with a stagger (which creates an internal timeline) gets reverted BEFORE some of its child tweens render for the first time, it may not properly trigger them to revert.
                        if (time !== this._time || !this._ts && !prevPaused) {
                            //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
                            pauseTween = 0;
                            next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum); // it didn't finish rendering, so adjust zTime so that so that the next time render() is called it'll be forced (to render any remaining children)
                            break;
                        }
                    }
                    child = next;
                }
            }
            if (pauseTween && !suppressEvents) {
                this.pause();
                pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;
                if (this._ts) {
                    //the callback resumed playback! So since we may have held back the playhead due to where the pause is positioned, go ahead and jump to where it's SUPPOSED to be (if no pause happened).
                    this._start = prevStart; //if the pause was at an earlier time and the user resumed in the callback, it could reposition the timeline (changing its startTime), throwing things off slightly, so we make sure the _start doesn't shift.
                    _setEnd(this);
                    return this.render(totalTime, suppressEvents, force);
                }
            }
            this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
            if (tTime === tDur && this._tTime >= this.totalDuration() || !tTime && prevTime) {
                if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) {
                    if (!this._lock) {
                        // remember, a child's callback may alter this timeline's playhead or timeScale which is why we need to add some of these checks.
                        (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.
                        if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
                            _callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);
                            this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
                        }
                    }
                }
            }
        }
        return this;
    };
    _proto2.add = function add(child, position) {
        var _this2 = this;
        _isNumber(position) || (position = _parsePosition(this, position, child));
        if (!(child instanceof Animation)) {
            if (_isArray(child)) {
                child.forEach(function(obj) {
                    return _this2.add(obj, position);
                });
                return this;
            }
            if (_isString(child)) return this.addLabel(child, position);
            if (_isFunction(child)) child = Tween.delayedCall(0, child);
            else return this;
        }
        return this !== child ? _addToTimeline(this, child, position) : this; //don't allow a timeline to be added to itself as a child!
    };
    _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
        if (nested === void 0) nested = true;
        if (tweens === void 0) tweens = true;
        if (timelines === void 0) timelines = true;
        if (ignoreBeforeTime === void 0) ignoreBeforeTime = -_bigNum;
        var a = [], child = this._first;
        while(child){
            if (child._start >= ignoreBeforeTime) {
                if (child instanceof Tween) tweens && a.push(child);
                else {
                    timelines && a.push(child);
                    nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
                }
            }
            child = child._next;
        }
        return a;
    };
    _proto2.getById = function getById(id) {
        var animations = this.getChildren(1, 1, 1), i = animations.length;
        while(i--){
            if (animations[i].vars.id === id) return animations[i];
        }
    };
    _proto2.remove = function remove(child) {
        if (_isString(child)) return this.removeLabel(child);
        if (_isFunction(child)) return this.killTweensOf(child);
        _removeLinkedListItem(this, child);
        if (child === this._recent) this._recent = this._last;
        return _uncache(this);
    };
    _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
        if (!arguments.length) return this._tTime;
        this._forcing = 1;
        if (!this._dp && this._ts) //special case for the global timeline (or any other that has no parent or detached parent).
        this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
        _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);
        this._forcing = 0;
        return this;
    };
    _proto2.addLabel = function addLabel(label, position) {
        this.labels[label] = _parsePosition(this, position);
        return this;
    };
    _proto2.removeLabel = function removeLabel(label) {
        delete this.labels[label];
        return this;
    };
    _proto2.addPause = function addPause(position, callback, params) {
        var t = Tween.delayedCall(0, callback || _emptyFunc, params);
        t.data = "isPause";
        this._hasPause = 1;
        return _addToTimeline(this, t, _parsePosition(this, position));
    };
    _proto2.removePause = function removePause(position) {
        var child = this._first;
        position = _parsePosition(this, position);
        while(child){
            if (child._start === position && child.data === "isPause") _removeFromParent(child);
            child = child._next;
        }
    };
    _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
        var tweens = this.getTweensOf(targets, onlyActive), i = tweens.length;
        while(i--)_overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
        return this;
    };
    _proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
        var a = [], parsedTargets = toArray(targets), child = this._first, isGlobalTime = _isNumber(onlyActive), // a number is interpreted as a global time. If the animation spans
        children;
        while(child){
            if (child instanceof Tween) {
                if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) // note: if this is for overwriting, it should only be for tweens that aren't paused and are initted.
                a.push(child);
            } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) a.push.apply(a, children);
            child = child._next;
        }
        return a;
    } // potential future feature - targets() on timelines
    ;
    _proto2.tweenTo = function tweenTo(position, vars) {
        vars = vars || {};
        var tl = this, endTime = _parsePosition(tl, position), _vars = vars, startAt = _vars.startAt, _onStart = _vars.onStart, onStartParams = _vars.onStartParams, immediateRender = _vars.immediateRender, initted, tween = Tween.to(tl, _setDefaults({
            ease: vars.ease || "none",
            lazy: false,
            immediateRender: false,
            time: endTime,
            overwrite: "auto",
            duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
            onStart: function onStart() {
                tl.pause();
                if (!initted) {
                    var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
                    tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
                    initted = 1;
                }
                _onStart && _onStart.apply(tween, onStartParams || []); //in case the user had an onStart in the vars - we don't want to overwrite it.
            }
        }, vars));
        return immediateRender ? tween.render(0) : tween;
    };
    _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
        return this.tweenTo(toPosition, _setDefaults({
            startAt: {
                time: _parsePosition(this, fromPosition)
            }
        }, vars));
    };
    _proto2.recent = function recent() {
        return this._recent;
    };
    _proto2.nextLabel = function nextLabel(afterTime) {
        if (afterTime === void 0) afterTime = this._time;
        return _getLabelInDirection(this, _parsePosition(this, afterTime));
    };
    _proto2.previousLabel = function previousLabel(beforeTime) {
        if (beforeTime === void 0) beforeTime = this._time;
        return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
    };
    _proto2.currentLabel = function currentLabel(value) {
        return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
    };
    _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
        if (ignoreBeforeTime === void 0) ignoreBeforeTime = 0;
        var child = this._first, labels = this.labels, p;
        while(child){
            if (child._start >= ignoreBeforeTime) {
                child._start += amount;
                child._end += amount;
            }
            child = child._next;
        }
        if (adjustLabels) {
            for(p in labels)if (labels[p] >= ignoreBeforeTime) labels[p] += amount;
        }
        return _uncache(this);
    };
    _proto2.invalidate = function invalidate(soft) {
        var child = this._first;
        this._lock = 0;
        while(child){
            child.invalidate(soft);
            child = child._next;
        }
        return _Animation.prototype.invalidate.call(this, soft);
    };
    _proto2.clear = function clear(includeLabels) {
        if (includeLabels === void 0) includeLabels = true;
        var child = this._first, next;
        while(child){
            next = child._next;
            this.remove(child);
            child = next;
        }
        this._dp && (this._time = this._tTime = this._pTime = 0);
        includeLabels && (this.labels = {});
        return _uncache(this);
    };
    _proto2.totalDuration = function totalDuration(value) {
        var max = 0, self = this, child = self._last, prevStart = _bigNum, prev, start, parent;
        if (arguments.length) return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
        if (self._dirty) {
            parent = self.parent;
            while(child){
                prev = child._prev; //record it here in case the tween changes position in the sequence...
                child._dirty && child.totalDuration(); //could change the tween._startTime, so make sure the animation's cache is clean before analyzing it.
                start = child._start;
                if (start > prevStart && self._sort && child._ts && !self._lock) {
                    //in case one of the tweens shifted out of order, it needs to be re-inserted into the correct position in the sequence
                    self._lock = 1; //prevent endless recursive calls - there are methods that get triggered that check duration/totalDuration when we add().
                    _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
                } else prevStart = start;
                if (start < 0 && child._ts) {
                    //children aren't allowed to have negative startTimes unless smoothChildTiming is true, so adjust here if one is found.
                    max -= start;
                    if (!parent && !self._dp || parent && parent.smoothChildTiming) {
                        self._start += start / self._ts;
                        self._time -= start;
                        self._tTime -= start;
                    }
                    self.shiftChildren(-start, false, -Infinity);
                    prevStart = 0;
                }
                child._end > max && child._ts && (max = child._end);
                child = prev;
            }
            _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);
            self._dirty = 0;
        }
        return self._tDur;
    };
    Timeline.updateRoot = function updateRoot(time) {
        if (_globalTimeline._ts) {
            _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));
            _lastRenderedFrame = _ticker.frame;
        }
        if (_ticker.frame >= _nextGCFrame) {
            _nextGCFrame += _config.autoSleep || 120;
            var child = _globalTimeline._first;
            if (!child || !child._ts) {
                if (_config.autoSleep && _ticker._listeners.length < 2) {
                    while(child && !child._ts)child = child._next;
                    child || _ticker.sleep();
                }
            }
        }
    };
    return Timeline;
}(Animation);
_setDefaults(Timeline.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
});
var _addComplexStringPropTween = function _addComplexStringPropTween(target, prop, start, end, setter, stringFilter, funcParam) {
    //note: we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
    var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter), index = 0, matchIndex = 0, result, startNums, color, endNum, chunk, startNum, hasRandom, a;
    pt.b = start;
    pt.e = end;
    start += ""; //ensure values are strings
    end += "";
    if (hasRandom = ~end.indexOf("random(")) end = _replaceRandom(end);
    if (stringFilter) {
        a = [
            start,
            end
        ];
        stringFilter(a, target, prop); //pass an array with the starting and ending values and let the filter do whatever it needs to the values.
        start = a[0];
        end = a[1];
    }
    startNums = start.match(_complexStringNumExp) || [];
    while(result = _complexStringNumExp.exec(end)){
        endNum = result[0];
        chunk = end.substring(index, result.index);
        if (color) color = (color + 1) % 5;
        else if (chunk.substr(-5) === "rgba(") color = 1;
        if (endNum !== startNums[matchIndex++]) {
            startNum = parseFloat(startNums[matchIndex - 1]) || 0; //these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.
            pt._pt = {
                _next: pt._pt,
                p: chunk || matchIndex === 1 ? chunk : ",",
                //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
                s: startNum,
                c: endNum.charAt(1) === "=" ? _parseRelative(startNum, endNum) - startNum : parseFloat(endNum) - startNum,
                m: color && color < 4 ? Math.round : 0
            };
            index = _complexStringNumExp.lastIndex;
        }
    }
    pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)
    pt.fp = funcParam;
    if (_relExp.test(end) || hasRandom) pt.e = 0; //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).
    this._pt = pt; //start the linked list with this new PropTween. Remember, we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
    return pt;
}, _addPropTween = function _addPropTween(target, prop, start, end, index, targets, modifier, stringFilter, funcParam, optional) {
    _isFunction(end) && (end = end(index || 0, target, targets));
    var currentValue = target[prop], parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](), setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc, pt;
    if (_isString(end)) {
        if (~end.indexOf("random(")) end = _replaceRandom(end);
        if (end.charAt(1) === "=") {
            pt = _parseRelative(parsedStart, end) + (getUnit(parsedStart) || 0);
            if (pt || pt === 0) // to avoid isNaN, like if someone passes in a value like "!= whatever"
            end = pt;
        }
    }
    if (!optional || parsedStart !== end || _forceAllPropTweens) {
        if (!isNaN(parsedStart * end) && end !== "") {
            // fun fact: any number multiplied by "" is evaluated as the number 0!
            pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
            funcParam && (pt.fp = funcParam);
            modifier && pt.modifier(modifier, this, target);
            return this._pt = pt;
        }
        !currentValue && !(prop in target) && _missingPlugin(prop, end);
        return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
    }
}, //creates a copy of the vars object and processes any function-based values (putting the resulting values directly into the copy) as well as strings with "random()" in them. It does NOT process relative values.
_processVars = function _processVars(vars, index, target, targets, tween) {
    _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));
    if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
    var copy = {}, p;
    for(p in vars)copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
    return copy;
}, _checkPlugin = function _checkPlugin(property, vars, tween, index, target, targets) {
    var plugin, pt, ptLookup, i;
    if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
        tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);
        if (tween !== _quickTween) {
            ptLookup = tween._ptLookup[tween._targets.indexOf(target)]; //note: we can't use tween._ptLookup[index] because for staggered tweens, the index from the fullTargets array won't match what it is in each individual tween that spawns from the stagger.
            i = plugin._props.length;
            while(i--)ptLookup[plugin._props[i]] = pt;
        }
    }
    return plugin;
}, _overwritingTween, //store a reference temporarily so we can avoid overwriting itself.
_forceAllPropTweens, _initTween = function _initTween(tween, time, tTime) {
    var vars = tween.vars, ease = vars.ease, startAt = vars.startAt, immediateRender = vars.immediateRender, lazy = vars.lazy, onUpdate = vars.onUpdate, runBackwards = vars.runBackwards, yoyoEase = vars.yoyoEase, keyframes = vars.keyframes, autoRevert = vars.autoRevert, dur = tween._dur, prevStartAt = tween._startAt, targets = tween._targets, parent = tween.parent, fullTargets = parent && parent.data === "nested" ? parent.vars.targets : targets, autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites, tl = tween.timeline, cleanVars, i, p, pt, target, hasPriority, gsData, harness, plugin, ptLookup, index, harnessVars, overwritten;
    tl && (!keyframes || !ease) && (ease = "none");
    tween._ease = _parseEase(ease, _defaults.ease);
    tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;
    if (yoyoEase && tween._yoyo && !tween._repeat) {
        //there must have been a parent timeline with yoyo:true that is currently in its yoyo phase, so flip the eases.
        yoyoEase = tween._yEase;
        tween._yEase = tween._ease;
        tween._ease = yoyoEase;
    }
    tween._from = !tl && !!vars.runBackwards; //nested timelines should never run backwards - the backwards-ness is in the child tweens.
    if (!tl || keyframes && !vars.stagger) {
        //if there's an internal timeline, skip all the parsing because we passed that task down the chain.
        harness = targets[0] ? _getCache(targets[0]).harness : 0;
        harnessVars = harness && vars[harness.prop]; //someone may need to specify CSS-specific values AND non-CSS values, like if the element has an "x" property plus it's a standard DOM element. We allow people to distinguish by wrapping plugin-specific stuff in a css:{} object for example.
        cleanVars = _copyExcluding(vars, _reservedProps);
        if (prevStartAt) {
            prevStartAt._zTime < 0 && prevStartAt.progress(1); // in case it's a lazy startAt that hasn't rendered yet.
            time < 0 && runBackwards && immediateRender && !autoRevert ? prevStartAt.render(-1, true) : prevStartAt.revert(runBackwards && dur ? _revertConfigNoKill : _startAtRevertConfig); // if it's a "startAt" (not "from()" or runBackwards: true), we only need to do a shallow revert (keep transforms cached in CSSPlugin)
            // don't just _removeFromParent(prevStartAt.render(-1, true)) because that'll leave inline styles. We're creating a new _startAt for "startAt" tweens that re-capture things to ensure that if the pre-tween values changed since the tween was created, they're recorded.
            prevStartAt._lazy = 0;
        }
        if (startAt) {
            _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
                data: "isStart",
                overwrite: false,
                parent: parent,
                immediateRender: true,
                lazy: !prevStartAt && _isNotFalse(lazy),
                startAt: null,
                delay: 0,
                onUpdate: onUpdate && function() {
                    return _callback(tween, "onUpdate");
                },
                stagger: 0
            }, startAt))); //copy the properties/values into a new object to avoid collisions, like var to = {x:0}, from = {x:500}; timeline.fromTo(e, from, to).fromTo(e, to, from);
            tween._startAt._dp = 0; // don't allow it to get put back into root timeline! Like when revert() is called and totalTime() gets set.
            tween._startAt._sat = tween; // used in globalTime(). _sat stands for _startAtTween
            time < 0 && (_reverting || !immediateRender && !autoRevert) && tween._startAt.revert(_revertConfigNoKill); // rare edge case, like if a render is forced in the negative direction of a non-initted tween.
            if (immediateRender) {
                if (dur && time <= 0 && tTime <= 0) {
                    // check tTime here because in the case of a yoyo tween whose playhead gets pushed to the end like tween.progress(1), we should allow it through so that the onComplete gets fired properly.
                    time && (tween._zTime = time);
                    return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a Timeline, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
                }
            }
        } else if (runBackwards && dur) //from() tweens must be handled uniquely: their beginning values must be rendered but we don't want overwriting to occur yet (when time is still 0). Wait until the tween actually begins before doing all the routines like overwriting. At that time, we should render at the END of the tween to ensure that things initialize correctly (remember, from() tweens go backwards)
        {
            if (!prevStartAt) {
                time && (immediateRender = false); //in rare cases (like if a from() tween runs and then is invalidate()-ed), immediateRender could be true but the initial forced-render gets skipped, so there's no need to force the render in this context when the _time is greater than 0
                p = _setDefaults({
                    overwrite: false,
                    data: "isFromStart",
                    //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
                    lazy: immediateRender && !prevStartAt && _isNotFalse(lazy),
                    immediateRender: immediateRender,
                    //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
                    stagger: 0,
                    parent: parent //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
                }, cleanVars);
                harnessVars && (p[harness.prop] = harnessVars); // in case someone does something like .from(..., {css:{}})
                _removeFromParent(tween._startAt = Tween.set(targets, p));
                tween._startAt._dp = 0; // don't allow it to get put back into root timeline!
                tween._startAt._sat = tween; // used in globalTime()
                time < 0 && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween._startAt.render(-1, true));
                tween._zTime = time;
                if (!immediateRender) _initTween(tween._startAt, _tinyNum, _tinyNum); //ensures that the initial values are recorded
                else if (!time) return;
            }
        }
        tween._pt = tween._ptCache = 0;
        lazy = dur && _isNotFalse(lazy) || lazy && !dur;
        for(i = 0; i < targets.length; i++){
            target = targets[i];
            gsData = target._gsap || _harness(targets)[i]._gsap;
            tween._ptLookup[i] = ptLookup = {};
            _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender(); //if other tweens of the same target have recently initted but haven't rendered yet, we've got to force the render so that the starting values are correct (imagine populating a timeline with a bunch of sequential tweens and then jumping to the end)
            index = fullTargets === targets ? i : fullTargets.indexOf(target);
            if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
                tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);
                plugin._props.forEach(function(name) {
                    ptLookup[name] = pt;
                });
                plugin.priority && (hasPriority = 1);
            }
            if (!harness || harnessVars) {
                for(p in cleanVars)if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) plugin.priority && (hasPriority = 1);
                else ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
            }
            tween._op && tween._op[i] && tween.kill(target, tween._op[i]);
            if (autoOverwrite && tween._pt) {
                _overwritingTween = tween;
                _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time)); // make sure the overwriting doesn't overwrite THIS tween!!!
                overwritten = !tween.parent;
                _overwritingTween = 0;
            }
            tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
        }
        hasPriority && _sortPropTweensByPriority(tween);
        tween._onInit && tween._onInit(tween); //plugins like RoundProps must wait until ALL of the PropTweens are instantiated. In the plugin's init() function, it sets the _onInit on the tween instance. May not be pretty/intuitive, but it's fast and keeps file size down.
    }
    tween._onUpdate = onUpdate;
    tween._initted = (!tween._op || tween._pt) && !overwritten; // if overwrittenProps resulted in the entire tween being killed, do NOT flag it as initted or else it may render for one tick.
    keyframes && time <= 0 && tl.render(_bigNum, true, true); // if there's a 0% keyframe, it'll render in the "before" state for any staggered/delayed animations thus when the following tween initializes, it'll use the "before" state instead of the "after" state as the initial values.
}, _updatePropTweens = function _updatePropTweens(tween, property, value, start, startIsRelative, ratio, time, skipRecursion) {
    var ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property], pt, rootPT, lookup, i;
    if (!ptCache) {
        ptCache = tween._ptCache[property] = [];
        lookup = tween._ptLookup;
        i = tween._targets.length;
        while(i--){
            pt = lookup[i][property];
            if (pt && pt.d && pt.d._pt) {
                // it's a plugin, so find the nested PropTween
                pt = pt.d._pt;
                while(pt && pt.p !== property && pt.fp !== property)// "fp" is functionParam for things like setting CSS variables which require .setProperty("--var-name", value)
                pt = pt._next;
            }
            if (!pt) {
                // there is no PropTween associated with that property, so we must FORCE one to be created and ditch out of this
                // if the tween has other properties that already rendered at new positions, we'd normally have to rewind to put them back like tween.render(0, true) before forcing an _initTween(), but that can create another edge case like tweening a timeline's progress would trigger onUpdates to fire which could move other things around. It's better to just inform users that .resetTo() should ONLY be used for tweens that already have that property. For example, you can't gsap.to(...{ y: 0 }) and then tween.restTo("x", 200) for example.
                _forceAllPropTweens = 1; // otherwise, when we _addPropTween() and it finds no change between the start and end values, it skips creating a PropTween (for efficiency...why tween when there's no difference?) but in this case we NEED that PropTween created so we can edit it.
                tween.vars[property] = "+=0";
                _initTween(tween, time);
                _forceAllPropTweens = 0;
                return skipRecursion ? _warn(property + " not eligible for reset") : 1; // if someone tries to do a quickTo() on a special property like borderRadius which must get split into 4 different properties, that's not eligible for .resetTo().
            }
            ptCache.push(pt);
        }
    }
    i = ptCache.length;
    while(i--){
        rootPT = ptCache[i];
        pt = rootPT._pt || rootPT; // complex values may have nested PropTweens. We only accommodate the FIRST value.
        pt.s = (start || start === 0) && !startIsRelative ? start : pt.s + (start || 0) + ratio * pt.c;
        pt.c = value - pt.s;
        rootPT.e && (rootPT.e = _round(value) + getUnit(rootPT.e)); // mainly for CSSPlugin (end value)
        rootPT.b && (rootPT.b = pt.s + getUnit(rootPT.b)); // (beginning value)
    }
}, _addAliasesToVars = function _addAliasesToVars(targets, vars) {
    var harness = targets[0] ? _getCache(targets[0]).harness : 0, propertyAliases = harness && harness.aliases, copy, p, i, aliases;
    if (!propertyAliases) return vars;
    copy = _merge({}, vars);
    for(p in propertyAliases)if (p in copy) {
        aliases = propertyAliases[p].split(",");
        i = aliases.length;
        while(i--)copy[aliases[i]] = copy[p];
    }
    return copy;
}, // parses multiple formats, like {"0%": {x: 100}, {"50%": {x: -20}} and { x: {"0%": 100, "50%": -20} }, and an "ease" can be set on any object. We populate an "allProps" object with an Array for each property, like {x: [{}, {}], y:[{}, {}]} with data for each property tween. The objects have a "t" (time), "v", (value), and "e" (ease) property. This allows us to piece together a timeline later.
_parseKeyframe = function _parseKeyframe(prop, obj, allProps, easeEach) {
    var ease = obj.ease || easeEach || "power1.inOut", p, a;
    if (_isArray(obj)) {
        a = allProps[prop] || (allProps[prop] = []); // t = time (out of 100), v = value, e = ease
        obj.forEach(function(value, i) {
            return a.push({
                t: i / (obj.length - 1) * 100,
                v: value,
                e: ease
            });
        });
    } else for(p in obj){
        a = allProps[p] || (allProps[p] = []);
        p === "ease" || a.push({
            t: parseFloat(prop),
            v: obj[p],
            e: ease
        });
    }
}, _parseFuncOrString = function _parseFuncOrString(value, tween, i, target, targets) {
    return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
}, _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", _staggerPropsToSkip = {};
_forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function(name) {
    return _staggerPropsToSkip[name] = 1;
});
var Tween = /*#__PURE__*/ function(_Animation2) {
    _inheritsLoose(Tween, _Animation2);
    function Tween(targets, vars, position, skipInherit) {
        var _this3;
        if (typeof vars === "number") {
            position.duration = vars;
            vars = position;
            position = null;
        }
        _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
        var _this3$vars = _this3.vars, duration = _this3$vars.duration, delay = _this3$vars.delay, immediateRender = _this3$vars.immediateRender, stagger = _this3$vars.stagger, overwrite = _this3$vars.overwrite, keyframes = _this3$vars.keyframes, defaults = _this3$vars.defaults, scrollTrigger = _this3$vars.scrollTrigger, yoyoEase = _this3$vars.yoyoEase, parent = vars.parent || _globalTimeline, parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [
            targets
        ] : toArray(targets), tl, i, copy, l, p, curTarget, staggerFunc, staggerVarsToMerge;
        _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://gsap.com", !_config.nullTargetWarn) || [];
        _this3._ptLookup = []; //PropTween lookup. An array containing an object for each target, having keys for each tweening property
        _this3._overwrite = overwrite;
        if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
            vars = _this3.vars;
            tl = _this3.timeline = new Timeline({
                data: "nested",
                defaults: defaults || {},
                targets: parent && parent.data === "nested" ? parent.vars.targets : parsedTargets
            }); // we need to store the targets because for staggers and keyframes, we end up creating an individual tween for each but function-based values need to know the index and the whole Array of targets.
            tl.kill();
            tl.parent = tl._dp = _assertThisInitialized(_this3);
            tl._start = 0;
            if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
                l = parsedTargets.length;
                staggerFunc = stagger && distribute(stagger);
                if (_isObject(stagger)) {
                    //users can pass in callbacks like onStart/onComplete in the stagger object. These should fire with each individual tween.
                    for(p in stagger)if (~_staggerTweenProps.indexOf(p)) {
                        staggerVarsToMerge || (staggerVarsToMerge = {});
                        staggerVarsToMerge[p] = stagger[p];
                    }
                }
                for(i = 0; i < l; i++){
                    copy = _copyExcluding(vars, _staggerPropsToSkip);
                    copy.stagger = 0;
                    yoyoEase && (copy.yoyoEase = yoyoEase);
                    staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
                    curTarget = parsedTargets[i]; //don't just copy duration or delay because if they're a string or function, we'd end up in an infinite loop because _isFuncOrString() would evaluate as true in the child tweens, entering this loop, etc. So we parse the value straight from vars and default to 0.
                    copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
                    copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;
                    if (!stagger && l === 1 && copy.delay) {
                        // if someone does delay:"random(1, 5)", repeat:-1, for example, the delay shouldn't be inside the repeat.
                        _this3._delay = delay = copy.delay;
                        _this3._start += delay;
                        copy.delay = 0;
                    }
                    tl.to(curTarget, copy, staggerFunc ? staggerFunc(i, curTarget, parsedTargets) : 0);
                    tl._ease = _easeMap.none;
                }
                tl.duration() ? duration = delay = 0 : _this3.timeline = 0; // if the timeline's duration is 0, we don't need a timeline internally!
            } else if (keyframes) {
                _inheritDefaults(_setDefaults(tl.vars.defaults, {
                    ease: "none"
                }));
                tl._ease = _parseEase(keyframes.ease || vars.ease || "none");
                var time = 0, a, kf, v;
                if (_isArray(keyframes)) {
                    keyframes.forEach(function(frame) {
                        return tl.to(parsedTargets, frame, ">");
                    });
                    tl.duration(); // to ensure tl._dur is cached because we tap into it for performance purposes in the render() method.
                } else {
                    copy = {};
                    for(p in keyframes)p === "ease" || p === "easeEach" || _parseKeyframe(p, keyframes[p], copy, keyframes.easeEach);
                    for(p in copy){
                        a = copy[p].sort(function(a, b) {
                            return a.t - b.t;
                        });
                        time = 0;
                        for(i = 0; i < a.length; i++){
                            kf = a[i];
                            v = {
                                ease: kf.e,
                                duration: (kf.t - (i ? a[i - 1].t : 0)) / 100 * duration
                            };
                            v[p] = kf.v;
                            tl.to(parsedTargets, v, time);
                            time += v.duration;
                        }
                    }
                    tl.duration() < duration && tl.to({}, {
                        duration: duration - tl.duration()
                    }); // in case keyframes didn't go to 100%
                }
            }
            duration || _this3.duration(duration = tl.duration());
        } else _this3.timeline = 0; //speed optimization, faster lookups (no going up the prototype chain)
        if (overwrite === true && !_suppressOverwrites) {
            _overwritingTween = _assertThisInitialized(_this3);
            _globalTimeline.killTweensOf(parsedTargets);
            _overwritingTween = 0;
        }
        _addToTimeline(parent, _assertThisInitialized(_this3), position);
        vars.reversed && _this3.reverse();
        vars.paused && _this3.paused(true);
        if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
            _this3._tTime = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)
            _this3.render(Math.max(0, -delay) || 0); //in case delay is negative
        }
        scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
        return _this3;
    }
    var _proto3 = Tween.prototype;
    _proto3.render = function render(totalTime, suppressEvents, force) {
        var prevTime = this._time, tDur = this._tDur, dur = this._dur, isNegative = totalTime < 0, tTime = totalTime > tDur - _tinyNum && !isNegative ? tDur : totalTime < _tinyNum ? 0 : totalTime, time, pt, iteration, cycleDuration, prevIteration, isYoyo, ratio, timeline, yoyoEase;
        if (!dur) _renderZeroDurationTween(this, totalTime, suppressEvents, force);
        else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== isNegative) {
            //this senses if we're crossing over the start time, in which case we must record _zTime and force the render, but we do it in this lengthy conditional way for performance reasons (usually we can skip the calculations): this._initted && (this._zTime < 0) !== (totalTime < 0)
            time = tTime;
            timeline = this.timeline;
            if (this._repeat) {
                //adjust the time for repeats and yoyos
                cycleDuration = dur + this._rDelay;
                if (this._repeat < -1 && isNegative) return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
                time = _roundPrecise(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)
                if (tTime === tDur) {
                    // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
                    iteration = this._repeat;
                    time = dur;
                } else {
                    iteration = ~~(tTime / cycleDuration);
                    if (iteration && iteration === _roundPrecise(tTime / cycleDuration)) {
                        time = dur;
                        iteration--;
                    }
                    time > dur && (time = dur);
                }
                isYoyo = this._yoyo && iteration & 1;
                if (isYoyo) {
                    yoyoEase = this._yEase;
                    time = dur - time;
                }
                prevIteration = _animationCycle(this._tTime, cycleDuration);
                if (time === prevTime && !force && this._initted && iteration === prevIteration) {
                    //could be during the repeatDelay part. No need to render and fire callbacks.
                    this._tTime = tTime;
                    return this;
                }
                if (iteration !== prevIteration) {
                    timeline && this._yEase && _propagateYoyoEase(timeline, isYoyo); //repeatRefresh functionality
                    if (this.vars.repeatRefresh && !isYoyo && !this._lock && this._time !== cycleDuration && this._initted) {
                        // this._time will === cycleDuration when we render at EXACTLY the end of an iteration. Without this condition, it'd often do the repeatRefresh render TWICE (again on the very next tick).
                        this._lock = force = 1; //force, otherwise if lazy is true, the _attemptInitTween() will return and we'll jump out and get caught bouncing on each tick.
                        this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
                    }
                }
            }
            if (!this._initted) {
                if (_attemptInitTween(this, isNegative ? totalTime : time, force, suppressEvents, tTime)) {
                    this._tTime = 0; // in constructor if immediateRender is true, we set _tTime to -_tinyNum to have the playhead cross the starting point but we can't leave _tTime as a negative number.
                    return this;
                }
                if (prevTime !== this._time && !(force && this.vars.repeatRefresh && iteration !== prevIteration)) // rare edge case - during initialization, an onUpdate in the _startAt (.fromTo()) might force this tween to render at a different spot in which case we should ditch this render() call so that it doesn't revert the values. But we also don't want to dump if we're doing a repeatRefresh render!
                return this;
                if (dur !== this._dur) // while initting, a plugin like InertiaPlugin might alter the duration, so rerun from the start to ensure everything renders as it should.
                return this.render(totalTime, suppressEvents, force);
            }
            this._tTime = tTime;
            this._time = time;
            if (!this._act && this._ts) {
                this._act = 1; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.
                this._lazy = 0;
            }
            this.ratio = ratio = (yoyoEase || this._ease)(time / dur);
            if (this._from) this.ratio = ratio = 1 - ratio;
            if (time && !prevTime && !suppressEvents && !iteration) {
                _callback(this, "onStart");
                if (this._tTime !== tTime) // in case the onStart triggered a render at a different spot, eject. Like if someone did animation.pause(0.5) or something inside the onStart.
                return this;
            }
            pt = this._pt;
            while(pt){
                pt.r(ratio, pt.d);
                pt = pt._next;
            }
            timeline && timeline.render(totalTime < 0 ? totalTime : timeline._dur * timeline._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);
            if (this._onUpdate && !suppressEvents) {
                isNegative && _rewindStartAt(this, totalTime, suppressEvents, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.
                _callback(this, "onUpdate");
            }
            this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");
            if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
                isNegative && !this._onUpdate && _rewindStartAt(this, totalTime, true, true);
                (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if we're rendering at exactly a time of 0, as there could be autoRevert values that should get set on the next tick (if the playhead goes backward beyond the startTime, negative totalTime). Don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.
                if (!suppressEvents && !(isNegative && !prevTime) && (tTime || prevTime || isYoyo)) {
                    // if prevTime and tTime are zero, we shouldn't fire the onReverseComplete. This could happen if you gsap.to(... {paused:true}).play();
                    _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);
                    this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
                }
            }
        }
        return this;
    };
    _proto3.targets = function targets() {
        return this._targets;
    };
    _proto3.invalidate = function invalidate(soft) {
        // "soft" gives us a way to clear out everything EXCEPT the recorded pre-"from" portion of from() tweens. Otherwise, for example, if you tween.progress(1).render(0, true true).invalidate(), the "from" values would persist and then on the next render, the from() tweens would initialize and the current value would match the "from" values, thus animate from the same value to the same value (no animation). We tap into this in ScrollTrigger's refresh() where we must push a tween to completion and then back again but honor its init state in case the tween is dependent on another tween further up on the page.
        (!soft || !this.vars.runBackwards) && (this._startAt = 0);
        this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0;
        this._ptLookup = [];
        this.timeline && this.timeline.invalidate(soft);
        return _Animation2.prototype.invalidate.call(this, soft);
    };
    _proto3.resetTo = function resetTo(property, value, start, startIsRelative, skipRecursion) {
        _tickerActive || _ticker.wake();
        this._ts || this.play();
        var time = Math.min(this._dur, (this._dp._time - this._start) * this._ts), ratio;
        this._initted || _initTween(this, time);
        ratio = this._ease(time / this._dur); // don't just get tween.ratio because it may not have rendered yet.
        // possible future addition to allow an object with multiple values to update, like tween.resetTo({x: 100, y: 200}); At this point, it doesn't seem worth the added kb given the fact that most users will likely opt for the convenient gsap.quickTo() way of interacting with this method.
        // if (_isObject(property)) { // performance optimization
        // 	for (p in property) {
        // 		if (_updatePropTweens(this, p, property[p], value ? value[p] : null, start, ratio, time)) {
        // 			return this.resetTo(property, value, start, startIsRelative); // if a PropTween wasn't found for the property, it'll get forced with a re-initialization so we need to jump out and start over again.
        // 		}
        // 	}
        // } else {
        if (_updatePropTweens(this, property, value, start, startIsRelative, ratio, time, skipRecursion)) return this.resetTo(property, value, start, startIsRelative, 1); // if a PropTween wasn't found for the property, it'll get forced with a re-initialization so we need to jump out and start over again.
         //}
        _alignPlayhead(this, 0);
        this.parent || _addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0);
        return this.render(0);
    };
    _proto3.kill = function kill(targets, vars) {
        if (vars === void 0) vars = "all";
        if (!targets && (!vars || vars === "all")) {
            this._lazy = this._pt = 0;
            return this.parent ? _interrupt(this) : this;
        }
        if (this.timeline) {
            var tDur = this.timeline.totalDuration();
            this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this); // if nothing is left tweening, interrupt.
            this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1); // if a nested tween is killed that changes the duration, it should affect this tween's duration. We must use the ratio, though, because sometimes the internal timeline is stretched like for keyframes where they don't all add up to whatever the parent tween's duration was set to.
            return this;
        }
        var parsedTargets = this._targets, killingTargets = targets ? toArray(targets) : parsedTargets, propTweenLookup = this._ptLookup, firstPT = this._pt, overwrittenProps, curLookup, curOverwriteProps, props, p, pt, i;
        if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
            vars === "all" && (this._pt = 0);
            return _interrupt(this);
        }
        overwrittenProps = this._op = this._op || [];
        if (vars !== "all") {
            //so people can pass in a comma-delimited list of property names
            if (_isString(vars)) {
                p = {};
                _forEachName(vars, function(name) {
                    return p[name] = 1;
                });
                vars = p;
            }
            vars = _addAliasesToVars(parsedTargets, vars);
        }
        i = parsedTargets.length;
        while(i--)if (~killingTargets.indexOf(parsedTargets[i])) {
            curLookup = propTweenLookup[i];
            if (vars === "all") {
                overwrittenProps[i] = vars;
                props = curLookup;
                curOverwriteProps = {};
            } else {
                curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
                props = vars;
            }
            for(p in props){
                pt = curLookup && curLookup[p];
                if (pt) {
                    if (!("kill" in pt.d) || pt.d.kill(p) === true) _removeLinkedListItem(this, pt, "_pt");
                    delete curLookup[p];
                }
                if (curOverwriteProps !== "all") curOverwriteProps[p] = 1;
            }
        }
        this._initted && !this._pt && firstPT && _interrupt(this); //if all tweening properties are killed, kill the tween. Without this line, if there's a tween with multiple targets and then you killTweensOf() each target individually, the tween would technically still remain active and fire its onComplete even though there aren't any more properties tweening.
        return this;
    };
    Tween.to = function to(targets, vars) {
        return new Tween(targets, vars, arguments[2]);
    };
    Tween.from = function from(targets, vars) {
        return _createTweenType(1, arguments);
    };
    Tween.delayedCall = function delayedCall(delay, callback, params, scope) {
        return new Tween(callback, 0, {
            immediateRender: false,
            lazy: false,
            overwrite: false,
            delay: delay,
            onComplete: callback,
            onReverseComplete: callback,
            onCompleteParams: params,
            onReverseCompleteParams: params,
            callbackScope: scope
        }); // we must use onReverseComplete too for things like timeline.add(() => {...}) which should be triggered in BOTH directions (forward and reverse)
    };
    Tween.fromTo = function fromTo(targets, fromVars, toVars) {
        return _createTweenType(2, arguments);
    };
    Tween.set = function set(targets, vars) {
        vars.duration = 0;
        vars.repeatDelay || (vars.repeat = 0);
        return new Tween(targets, vars);
    };
    Tween.killTweensOf = function killTweensOf(targets, props, onlyActive) {
        return _globalTimeline.killTweensOf(targets, props, onlyActive);
    };
    return Tween;
}(Animation);
_setDefaults(Tween.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
}); //add the pertinent timeline methods to Tween instances so that users can chain conveniently and create a timeline automatically. (removed due to concerns that it'd ultimately add to more confusion especially for beginners)
// _forEachName("to,from,fromTo,set,call,add,addLabel,addPause", name => {
// 	Tween.prototype[name] = function() {
// 		let tl = new Timeline();
// 		return _addToTimeline(tl, this)[name].apply(tl, toArray(arguments));
// 	}
// });
//for backward compatibility. Leverage the timeline calls.
_forEachName("staggerTo,staggerFrom,staggerFromTo", function(name) {
    Tween[name] = function() {
        var tl = new Timeline(), params = _slice.call(arguments, 0);
        params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
        return tl[name].apply(tl, params);
    };
});
/*
 * --------------------------------------------------------------------------------------
 * PROPTWEEN
 * --------------------------------------------------------------------------------------
 */ var _setterPlain = function _setterPlain(target, property, value) {
    return target[property] = value;
}, _setterFunc = function _setterFunc(target, property, value) {
    return target[property](value);
}, _setterFuncWithParam = function _setterFuncWithParam(target, property, value, data) {
    return target[property](data.fp, value);
}, _setterAttribute = function _setterAttribute(target, property, value) {
    return target.setAttribute(property, value);
}, _getSetter = function _getSetter(target, property) {
    return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
}, _renderPlain = function _renderPlain(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1000000) / 1000000, data);
}, _renderBoolean = function _renderBoolean(ratio, data) {
    return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
}, _renderComplexString = function _renderComplexString(ratio, data) {
    var pt = data._pt, s = "";
    if (!ratio && data.b) //b = beginning string
    s = data.b;
    else if (ratio === 1 && data.e) //e = ending string
    s = data.e;
    else {
        while(pt){
            s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 10000) / 10000) + s; //we use the "p" property for the text inbetween (like a suffix). And in the context of a complex string, the modifier (m) is typically just Math.round(), like for RGB colors.
            pt = pt._next;
        }
        s += data.c; //we use the "c" of the PropTween to store the final chunk of non-numeric text.
    }
    data.set(data.t, data.p, s, data);
}, _renderPropTweens = function _renderPropTweens(ratio, data) {
    var pt = data._pt;
    while(pt){
        pt.r(ratio, pt.d);
        pt = pt._next;
    }
}, _addPluginModifier = function _addPluginModifier(modifier, tween, target, property) {
    var pt = this._pt, next;
    while(pt){
        next = pt._next;
        pt.p === property && pt.modifier(modifier, tween, target);
        pt = next;
    }
}, _killPropTweensOf = function _killPropTweensOf(property) {
    var pt = this._pt, hasNonDependentRemaining, next;
    while(pt){
        next = pt._next;
        if (pt.p === property && !pt.op || pt.op === property) _removeLinkedListItem(this, pt, "_pt");
        else if (!pt.dep) hasNonDependentRemaining = 1;
        pt = next;
    }
    return !hasNonDependentRemaining;
}, _setterWithModifier = function _setterWithModifier(target, property, value, data) {
    data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
}, _sortPropTweensByPriority = function _sortPropTweensByPriority(parent) {
    var pt = parent._pt, next, pt2, first, last; //sorts the PropTween linked list in order of priority because some plugins need to do their work after ALL of the PropTweens were created (like RoundPropsPlugin and ModifiersPlugin)
    while(pt){
        next = pt._next;
        pt2 = first;
        while(pt2 && pt2.pr > pt.pr)pt2 = pt2._next;
        if (pt._prev = pt2 ? pt2._prev : last) pt._prev._next = pt;
        else first = pt;
        if (pt._next = pt2) pt2._prev = pt;
        else last = pt;
        pt = next;
    }
    parent._pt = first;
}; //PropTween key: t = target, p = prop, r = renderer, d = data, s = start, c = change, op = overwriteProperty (ONLY populated when it's different than p), pr = priority, _next/_prev for the linked list siblings, set = setter, m = modifier, mSet = modifierSetter (the original setter, before a modifier was added)
var PropTween = /*#__PURE__*/ function() {
    function PropTween(next, target, prop, start, change, renderer, data, setter, priority) {
        this.t = target;
        this.s = start;
        this.c = change;
        this.p = prop;
        this.r = renderer || _renderPlain;
        this.d = data || this;
        this.set = setter || _setterPlain;
        this.pr = priority || 0;
        this._next = next;
        if (next) next._prev = this;
    }
    var _proto4 = PropTween.prototype;
    _proto4.modifier = function modifier(func, tween, target) {
        this.mSet = this.mSet || this.set; //in case it was already set (a PropTween can only have one modifier)
        this.set = _setterWithModifier;
        this.m = func;
        this.mt = target; //modifier target
        this.tween = tween;
    };
    return PropTween;
}(); //Initialization tasks
_forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(name) {
    return _reservedProps[name] = 1;
});
_globals.TweenMax = _globals.TweenLite = Tween;
_globals.TimelineLite = _globals.TimelineMax = Timeline;
_globalTimeline = new Timeline({
    sortChildren: false,
    defaults: _defaults,
    autoRemoveChildren: true,
    id: "root",
    smoothChildTiming: true
});
_config.stringFilter = _colorStringFilter;
var _media = [], _listeners = {}, _emptyArray = [], _lastMediaTime = 0, _contextID = 0, _dispatch = function _dispatch(type) {
    return (_listeners[type] || _emptyArray).map(function(f) {
        return f();
    });
}, _onMediaChange = function _onMediaChange() {
    var time = Date.now(), matches = [];
    if (time - _lastMediaTime > 2) {
        _dispatch("matchMediaInit");
        _media.forEach(function(c) {
            var queries = c.queries, conditions = c.conditions, match, p, anyMatch, toggled;
            for(p in queries){
                match = _win.matchMedia(queries[p]).matches; // Firefox doesn't update the "matches" property of the MediaQueryList object correctly - it only does so as it calls its change handler - so we must re-create a media query here to ensure it's accurate.
                match && (anyMatch = 1);
                if (match !== conditions[p]) {
                    conditions[p] = match;
                    toggled = 1;
                }
            }
            if (toggled) {
                c.revert();
                anyMatch && matches.push(c);
            }
        });
        _dispatch("matchMediaRevert");
        matches.forEach(function(c) {
            return c.onMatch(c, function(func) {
                return c.add(null, func);
            });
        });
        _lastMediaTime = time;
        _dispatch("matchMedia");
    }
};
var Context = /*#__PURE__*/ function() {
    function Context(func, scope) {
        this.selector = scope && selector(scope);
        this.data = [];
        this._r = []; // returned/cleanup functions
        this.isReverted = false;
        this.id = _contextID++; // to work around issues that frameworks like Vue cause by making things into Proxies which make it impossible to do something like _media.indexOf(this) because "this" would no longer refer to the Context instance itself - it'd refer to a Proxy! We needed a way to identify the context uniquely
        func && this.add(func);
    }
    var _proto5 = Context.prototype;
    _proto5.add = function add(name, func, scope) {
        // possible future addition if we need the ability to add() an animation to a context and for whatever reason cannot create that animation inside of a context.add(() => {...}) function.
        // if (name && _isFunction(name.revert)) {
        // 	this.data.push(name);
        // 	return (name._ctx = this);
        // }
        if (_isFunction(name)) {
            scope = func;
            func = name;
            name = _isFunction;
        }
        var self = this, f = function f() {
            var prev = _context, prevSelector = self.selector, result;
            prev && prev !== self && prev.data.push(self);
            scope && (self.selector = selector(scope));
            _context = self;
            result = func.apply(self, arguments);
            _isFunction(result) && self._r.push(result);
            _context = prev;
            self.selector = prevSelector;
            self.isReverted = false;
            return result;
        };
        self.last = f;
        return name === _isFunction ? f(self, function(func) {
            return self.add(null, func);
        }) : name ? self[name] = f : f;
    };
    _proto5.ignore = function ignore(func) {
        var prev = _context;
        _context = null;
        func(this);
        _context = prev;
    };
    _proto5.getTweens = function getTweens() {
        var a = [];
        this.data.forEach(function(e) {
            return e instanceof Context ? a.push.apply(a, e.getTweens()) : e instanceof Tween && !(e.parent && e.parent.data === "nested") && a.push(e);
        });
        return a;
    };
    _proto5.clear = function clear() {
        this._r.length = this.data.length = 0;
    };
    _proto5.kill = function kill(revert, matchMedia) {
        var _this4 = this;
        if (revert) (function() {
            var tweens = _this4.getTweens(), i = _this4.data.length, t;
            while(i--){
                // Flip plugin tweens are very different in that they should actually be pushed to their end. The plugin replaces the timeline's .revert() method to do exactly that. But we also need to remove any of those nested tweens inside the flip timeline so that they don't get individually reverted.
                t = _this4.data[i];
                if (t.data === "isFlip") {
                    t.revert();
                    t.getChildren(true, true, false).forEach(function(tween) {
                        return tweens.splice(tweens.indexOf(tween), 1);
                    });
                }
            } // save as an object so that we can cache the globalTime for each tween to optimize performance during the sort
            tweens.map(function(t) {
                return {
                    g: t._dur || t._delay || t._sat && !t._sat.vars.immediateRender ? t.globalTime(0) : -Infinity,
                    t: t
                };
            }).sort(function(a, b) {
                return b.g - a.g || -Infinity;
            }).forEach(function(o) {
                return o.t.revert(revert);
            }); // note: all of the _startAt tweens should be reverted in reverse order that they were created, and they'll all have the same globalTime (-1) so the " || -1" in the sort keeps the order properly.
            i = _this4.data.length;
            while(i--){
                // make sure we loop backwards so that, for example, SplitTexts that were created later on the same element get reverted first
                t = _this4.data[i];
                if (t instanceof Timeline) {
                    if (t.data !== "nested") {
                        t.scrollTrigger && t.scrollTrigger.revert();
                        t.kill(); // don't revert() the timeline because that's duplicating efforts since we already reverted all the tweens
                    }
                } else !(t instanceof Tween) && t.revert && t.revert(revert);
            }
            _this4._r.forEach(function(f) {
                return f(revert, _this4);
            });
            _this4.isReverted = true;
        })();
        else this.data.forEach(function(e) {
            return e.kill && e.kill();
        });
        this.clear();
        if (matchMedia) {
            var i = _media.length;
            while(i--)// previously, we checked _media.indexOf(this), but some frameworks like Vue enforce Proxy objects that make it impossible to get the proper result that way, so we must use a unique ID number instead.
            _media[i].id === this.id && _media.splice(i, 1);
        }
    };
    _proto5.revert = function revert(config) {
        this.kill(config || {});
    };
    return Context;
}();
var MatchMedia = /*#__PURE__*/ function() {
    function MatchMedia(scope) {
        this.contexts = [];
        this.scope = scope;
        _context && _context.data.push(this);
    }
    var _proto6 = MatchMedia.prototype;
    _proto6.add = function add(conditions, func, scope) {
        _isObject(conditions) || (conditions = {
            matches: conditions
        });
        var context = new Context(0, scope || this.scope), cond = context.conditions = {}, mq, p, active;
        _context && !context.selector && (context.selector = _context.selector); // in case a context is created inside a context. Like a gsap.matchMedia() that's inside a scoped gsap.context()
        this.contexts.push(context);
        func = context.add("onMatch", func);
        context.queries = conditions;
        for(p in conditions)if (p === "all") active = 1;
        else {
            mq = _win.matchMedia(conditions[p]);
            if (mq) {
                _media.indexOf(context) < 0 && _media.push(context);
                (cond[p] = mq.matches) && (active = 1);
                mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
            }
        }
        active && func(context, function(f) {
            return context.add(null, f);
        });
        return this;
    } // refresh() {
    ;
    _proto6.revert = function revert(config) {
        this.kill(config || {});
    };
    _proto6.kill = function kill(revert) {
        this.contexts.forEach(function(c) {
            return c.kill(revert, true);
        });
    };
    return MatchMedia;
}();
/*
 * --------------------------------------------------------------------------------------
 * GSAP
 * --------------------------------------------------------------------------------------
 */ var _gsap = {
    registerPlugin: function registerPlugin() {
        for(var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)args[_key2] = arguments[_key2];
        args.forEach(function(config) {
            return _createPlugin(config);
        });
    },
    timeline: function timeline(vars) {
        return new Timeline(vars);
    },
    getTweensOf: function getTweensOf(targets, onlyActive) {
        return _globalTimeline.getTweensOf(targets, onlyActive);
    },
    getProperty: function getProperty(target, property, unit, uncache) {
        _isString(target) && (target = toArray(target)[0]); //in case selector text or an array is passed in
        var getter = _getCache(target || {}).get, format = unit ? _passThrough : _numericIfPossible;
        unit === "native" && (unit = "");
        return !target ? target : !property ? function(property, unit, uncache) {
            return format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
        } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
    },
    quickSetter: function quickSetter(target, property, unit) {
        target = toArray(target);
        if (target.length > 1) {
            var setters = target.map(function(t) {
                return gsap.quickSetter(t, property, unit);
            }), l = setters.length;
            return function(value) {
                var i = l;
                while(i--)setters[i](value);
            };
        }
        target = target[0] || {};
        var Plugin = _plugins[property], cache = _getCache(target), p = cache.harness && (cache.harness.aliases || {})[property] || property, // in case it's an alias, like "rotate" for "rotation".
        setter = Plugin ? function(value) {
            var p = new Plugin();
            _quickTween._pt = 0;
            p.init(target, unit ? value + unit : value, _quickTween, 0, [
                target
            ]);
            p.render(1, p);
            _quickTween._pt && _renderPropTweens(1, _quickTween);
        } : cache.set(target, p);
        return Plugin ? setter : function(value) {
            return setter(target, p, unit ? value + unit : value, cache, 1);
        };
    },
    quickTo: function quickTo(target, property, vars) {
        var _merge2;
        var tween = gsap.to(target, _merge((_merge2 = {}, _merge2[property] = "+=0.1", _merge2.paused = true, _merge2), vars || {})), func = function func(value, start, startIsRelative) {
            return tween.resetTo(property, value, start, startIsRelative);
        };
        func.tween = tween;
        return func;
    },
    isTweening: function isTweening(targets) {
        return _globalTimeline.getTweensOf(targets, true).length > 0;
    },
    defaults: function defaults(value) {
        value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
        return _mergeDeep(_defaults, value || {});
    },
    config: function config(value) {
        return _mergeDeep(_config, value || {});
    },
    registerEffect: function registerEffect(_ref3) {
        var name = _ref3.name, effect = _ref3.effect, plugins = _ref3.plugins, defaults = _ref3.defaults, extendTimeline = _ref3.extendTimeline;
        (plugins || "").split(",").forEach(function(pluginName) {
            return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
        });
        _effects[name] = function(targets, vars, tl) {
            return effect(toArray(targets), _setDefaults(vars || {}, defaults), tl);
        };
        if (extendTimeline) Timeline.prototype[name] = function(targets, vars, position) {
            return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
        };
    },
    registerEase: function registerEase(name, ease) {
        _easeMap[name] = _parseEase(ease);
    },
    parseEase: function parseEase(ease, defaultEase) {
        return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
    },
    getById: function getById(id) {
        return _globalTimeline.getById(id);
    },
    exportRoot: function exportRoot(vars, includeDelayedCalls) {
        if (vars === void 0) vars = {};
        var tl = new Timeline(vars), child, next;
        tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);
        _globalTimeline.remove(tl);
        tl._dp = 0; //otherwise it'll get re-activated when adding children and be re-introduced into _globalTimeline's linked list (then added to itself).
        tl._time = tl._tTime = _globalTimeline._time;
        child = _globalTimeline._first;
        while(child){
            next = child._next;
            if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) _addToTimeline(tl, child, child._start - child._delay);
            child = next;
        }
        _addToTimeline(_globalTimeline, tl, 0);
        return tl;
    },
    context: function context(func, scope) {
        return func ? new Context(func, scope) : _context;
    },
    matchMedia: function matchMedia(scope) {
        return new MatchMedia(scope);
    },
    matchMediaRefresh: function matchMediaRefresh() {
        return _media.forEach(function(c) {
            var cond = c.conditions, found, p;
            for(p in cond)if (cond[p]) {
                cond[p] = false;
                found = 1;
            }
            found && c.revert();
        }) || _onMediaChange();
    },
    addEventListener: function addEventListener(type, callback) {
        var a = _listeners[type] || (_listeners[type] = []);
        ~a.indexOf(callback) || a.push(callback);
    },
    removeEventListener: function removeEventListener(type, callback) {
        var a = _listeners[type], i = a && a.indexOf(callback);
        i >= 0 && a.splice(i, 1);
    },
    utils: {
        wrap: wrap,
        wrapYoyo: wrapYoyo,
        distribute: distribute,
        random: random,
        snap: snap,
        normalize: normalize,
        getUnit: getUnit,
        clamp: clamp,
        splitColor: splitColor,
        toArray: toArray,
        selector: selector,
        mapRange: mapRange,
        pipe: pipe,
        unitize: unitize,
        interpolate: interpolate,
        shuffle: shuffle
    },
    install: _install,
    effects: _effects,
    ticker: _ticker,
    updateRoot: Timeline.updateRoot,
    plugins: _plugins,
    globalTimeline: _globalTimeline,
    core: {
        PropTween: PropTween,
        globals: _addGlobal,
        Tween: Tween,
        Timeline: Timeline,
        Animation: Animation,
        getCache: _getCache,
        _removeLinkedListItem: _removeLinkedListItem,
        reverting: function reverting() {
            return _reverting;
        },
        context: function context(toAdd) {
            if (toAdd && _context) {
                _context.data.push(toAdd);
                toAdd._ctx = _context;
            }
            return _context;
        },
        suppressOverwrites: function suppressOverwrites(value) {
            return _suppressOverwrites = value;
        }
    }
};
_forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function(name) {
    return _gsap[name] = Tween[name];
});
_ticker.add(Timeline.updateRoot);
_quickTween = _gsap.to({}, {
    duration: 0
}); // ---- EXTRA PLUGINS --------------------------------------------------------
var _getPluginPropTween = function _getPluginPropTween(plugin, prop) {
    var pt = plugin._pt;
    while(pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop)pt = pt._next;
    return pt;
}, _addModifiers = function _addModifiers(tween, modifiers) {
    var targets = tween._targets, p, i, pt;
    for(p in modifiers){
        i = targets.length;
        while(i--){
            pt = tween._ptLookup[i][p];
            if (pt && (pt = pt.d)) {
                if (pt._pt) // is a plugin
                pt = _getPluginPropTween(pt, p);
                pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
            }
        }
    }
}, _buildModifierPlugin = function _buildModifierPlugin(name, modifier) {
    return {
        name: name,
        rawVars: 1,
        //don't pre-process function-based values or "random()" strings.
        init: function init(target, vars, tween) {
            tween._onInit = function(tween) {
                var temp, p;
                if (_isString(vars)) {
                    temp = {};
                    _forEachName(vars, function(name) {
                        return temp[name] = 1;
                    }); //if the user passes in a comma-delimited list of property names to roundProps, like "x,y", we round to whole numbers.
                    vars = temp;
                }
                if (modifier) {
                    temp = {};
                    for(p in vars)temp[p] = modifier(vars[p]);
                    vars = temp;
                }
                _addModifiers(tween, vars);
            };
        }
    };
}; //register core plugins
var gsap = _gsap.registerPlugin({
    name: "attr",
    init: function init(target, vars, tween, index, targets) {
        var p, pt, v;
        this.tween = tween;
        for(p in vars){
            v = target.getAttribute(p) || "";
            pt = this.add(target, "setAttribute", (v || 0) + "", vars[p], index, targets, 0, 0, p);
            pt.op = p;
            pt.b = v; // record the beginning value so we can revert()
            this._props.push(p);
        }
    },
    render: function render(ratio, data) {
        var pt = data._pt;
        while(pt){
            _reverting ? pt.set(pt.t, pt.p, pt.b, pt) : pt.r(ratio, pt.d); // if reverting, go back to the original (pt.b)
            pt = pt._next;
        }
    }
}, {
    name: "endArray",
    init: function init(target, value) {
        var i = value.length;
        while(i--)this.add(target, i, target[i] || 0, value[i], 0, 0, 0, 0, 0, 1);
    }
}, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap; //to prevent the core plugins from being dropped via aggressive tree shaking, we must include them in the variable declaration in this way.
Tween.version = Timeline.version = gsap.version = "3.12.5";
_coreReady = 1;
_windowExists() && _wake();
var Power0 = _easeMap.Power0, Power1 = _easeMap.Power1, Power2 = _easeMap.Power2, Power3 = _easeMap.Power3, Power4 = _easeMap.Power4, Linear = _easeMap.Linear, Quad = _easeMap.Quad, Cubic = _easeMap.Cubic, Quart = _easeMap.Quart, Quint = _easeMap.Quint, Strong = _easeMap.Strong, Elastic = _easeMap.Elastic, Back = _easeMap.Back, SteppedEase = _easeMap.SteppedEase, Bounce = _easeMap.Bounce, Sine = _easeMap.Sine, Expo = _easeMap.Expo, Circ = _easeMap.Circ;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l02JQ":[function(require,module,exports) {
/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/ /* eslint-disable */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CSSPlugin", ()=>CSSPlugin);
parcelHelpers.export(exports, "default", ()=>CSSPlugin);
parcelHelpers.export(exports, "_getBBox", ()=>_getBBox);
parcelHelpers.export(exports, "_createElement", ()=>_createElement);
parcelHelpers.export(exports, "checkPrefix", ()=>_checkPropPrefix);
var _gsapCoreJs = require("./gsap-core.js");
var _win, _doc, _docElement, _pluginInitted, _tempDiv, _tempDivStyler, _recentSetterPlugin, _reverting, _windowExists = function _windowExists() {
    return typeof window !== "undefined";
}, _transformProps = {}, _RAD2DEG = 180 / Math.PI, _DEG2RAD = Math.PI / 180, _atan2 = Math.atan2, _bigNum = 1e8, _capsExp = /([A-Z])/g, _horizontalExp = /(left|right|width|margin|padding|x)/i, _complexExp = /[\s,\(]\S/, _propertyAliases = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
}, _renderCSSProp = function _renderCSSProp(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
}, _renderPropWithEnd = function _renderPropWithEnd(ratio, data) {
    return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
}, _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning(ratio, data) {
    return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u : data.b, data);
}, //if units change, we need a way to render the original unit/value when the tween goes all the way back to the beginning (ratio:0)
_renderRoundedCSSProp = function _renderRoundedCSSProp(ratio, data) {
    var value = data.s + data.c * ratio;
    data.set(data.t, data.p, ~~(value + (value < 0 ? -0.5 : .5)) + data.u, data);
}, _renderNonTweeningValue = function _renderNonTweeningValue(ratio, data) {
    return data.set(data.t, data.p, ratio ? data.e : data.b, data);
}, _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd(ratio, data) {
    return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
}, _setterCSSStyle = function _setterCSSStyle(target, property, value) {
    return target.style[property] = value;
}, _setterCSSProp = function _setterCSSProp(target, property, value) {
    return target.style.setProperty(property, value);
}, _setterTransform = function _setterTransform(target, property, value) {
    return target._gsap[property] = value;
}, _setterScale = function _setterScale(target, property, value) {
    return target._gsap.scaleX = target._gsap.scaleY = value;
}, _setterScaleWithRender = function _setterScaleWithRender(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache.scaleX = cache.scaleY = value;
    cache.renderTransform(ratio, cache);
}, _setterTransformWithRender = function _setterTransformWithRender(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache[property] = value;
    cache.renderTransform(ratio, cache);
}, _transformProp = "transform", _transformOriginProp = _transformProp + "Origin", _saveStyle = function _saveStyle(property, isNotCSS) {
    var _this = this;
    var target = this.target, style = target.style, cache = target._gsap;
    if (property in _transformProps && style) {
        this.tfm = this.tfm || {};
        if (property !== "transform") {
            property = _propertyAliases[property] || property;
            ~property.indexOf(",") ? property.split(",").forEach(function(a) {
                return _this.tfm[a] = _get(target, a);
            }) : this.tfm[property] = cache.x ? cache[property] : _get(target, property); // note: scale would map to "scaleX,scaleY", thus we loop and apply them both.
            property === _transformOriginProp && (this.tfm.zOrigin = cache.zOrigin);
        } else return _propertyAliases.transform.split(",").forEach(function(p) {
            return _saveStyle.call(_this, p, isNotCSS);
        });
        if (this.props.indexOf(_transformProp) >= 0) return;
        if (cache.svg) {
            this.svgo = target.getAttribute("data-svg-origin");
            this.props.push(_transformOriginProp, isNotCSS, "");
        }
        property = _transformProp;
    }
    (style || isNotCSS) && this.props.push(property, isNotCSS, style[property]);
}, _removeIndependentTransforms = function _removeIndependentTransforms(style) {
    if (style.translate) {
        style.removeProperty("translate");
        style.removeProperty("scale");
        style.removeProperty("rotate");
    }
}, _revertStyle = function _revertStyle() {
    var props = this.props, target = this.target, style = target.style, cache = target._gsap, i, p;
    for(i = 0; i < props.length; i += 3)// stored like this: property, isNotCSS, value
    props[i + 1] ? target[props[i]] = props[i + 2] : props[i + 2] ? style[props[i]] = props[i + 2] : style.removeProperty(props[i].substr(0, 2) === "--" ? props[i] : props[i].replace(_capsExp, "-$1").toLowerCase());
    if (this.tfm) {
        for(p in this.tfm)cache[p] = this.tfm[p];
        if (cache.svg) {
            cache.renderTransform();
            target.setAttribute("data-svg-origin", this.svgo || "");
        }
        i = _reverting();
        if ((!i || !i.isStart) && !style[_transformProp]) {
            _removeIndependentTransforms(style);
            if (cache.zOrigin && style[_transformOriginProp]) {
                style[_transformOriginProp] += " " + cache.zOrigin + "px"; // since we're uncaching, we must put the zOrigin back into the transformOrigin so that we can pull it out accurately when we parse again. Otherwise, we'd lose the z portion of the origin since we extract it to protect from Safari bugs.
                cache.zOrigin = 0;
                cache.renderTransform();
            }
            cache.uncache = 1; // if it's a startAt that's being reverted in the _initTween() of the core, we don't need to uncache transforms. This is purely a performance optimization.
        }
    }
}, _getStyleSaver = function _getStyleSaver(target, properties) {
    var saver = {
        target: target,
        props: [],
        revert: _revertStyle,
        save: _saveStyle
    };
    target._gsap || (0, _gsapCoreJs.gsap).core.getCache(target); // just make sure there's a _gsap cache defined because we read from it in _saveStyle() and it's more efficient to just check it here once.
    properties && properties.split(",").forEach(function(p) {
        return saver.save(p);
    });
    return saver;
}, _supports3D, _createElement = function _createElement(type, ns) {
    var e = _doc.createElementNS ? _doc.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc.createElement(type); //some servers swap in https for http in the namespace which can break things, making "style" inaccessible.
    return e && e.style ? e : _doc.createElement(type); //some environments won't allow access to the element's style when created with a namespace in which case we default to the standard createElement() to work around the issue. Also note that when GSAP is embedded directly inside an SVG file, createElement() won't allow access to the style object in Firefox (see https://gsap.com/forums/topic/20215-problem-using-tweenmax-in-standalone-self-containing-svg-file-err-cannot-set-property-csstext-of-undefined/).
}, _getComputedProperty = function _getComputedProperty(target, property, skipPrefixFallback) {
    var cs = getComputedStyle(target);
    return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty(target, _checkPropPrefix(property) || property, 1) || ""; //css variables may not need caps swapped out for dashes and lowercase.
}, _prefixes = "O,Moz,ms,Ms,Webkit".split(","), _checkPropPrefix = function _checkPropPrefix(property, element, preferPrefix) {
    var e = element || _tempDiv, s = e.style, i = 5;
    if (property in s && !preferPrefix) return property;
    property = property.charAt(0).toUpperCase() + property.substr(1);
    while(i-- && !(_prefixes[i] + property in s));
    return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
}, _initCore = function _initCore() {
    if (_windowExists() && window.document) {
        _win = window;
        _doc = _win.document;
        _docElement = _doc.documentElement;
        _tempDiv = _createElement("div") || {
            style: {}
        };
        _tempDivStyler = _createElement("div");
        _transformProp = _checkPropPrefix(_transformProp);
        _transformOriginProp = _transformProp + "Origin";
        _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0"; //make sure to override certain properties that may contaminate measurements, in case the user has overreaching style sheets.
        _supports3D = !!_checkPropPrefix("perspective");
        _reverting = (0, _gsapCoreJs.gsap).core.reverting;
        _pluginInitted = 1;
    }
}, _getBBoxHack = function _getBBoxHack(swapIfPossible) {
    //works around issues in some browsers (like Firefox) that don't correctly report getBBox() on SVG elements inside a <defs> element and/or <mask>. We try creating an SVG, adding it to the documentElement and toss the element in there so that it's definitely part of the rendering tree, then grab the bbox and if it works, we actually swap out the original getBBox() method for our own that does these extra steps whenever getBBox is needed. This helps ensure that performance is optimal (only do all these extra steps when absolutely necessary...most elements don't need it).
    var svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), oldParent = this.parentNode, oldSibling = this.nextSibling, oldCSS = this.style.cssText, bbox;
    _docElement.appendChild(svg);
    svg.appendChild(this);
    this.style.display = "block";
    if (swapIfPossible) try {
        bbox = this.getBBox();
        this._gsapBBox = this.getBBox; //store the original
        this.getBBox = _getBBoxHack;
    } catch (e) {}
    else if (this._gsapBBox) bbox = this._gsapBBox();
    if (oldParent) {
        if (oldSibling) oldParent.insertBefore(this, oldSibling);
        else oldParent.appendChild(this);
    }
    _docElement.removeChild(svg);
    this.style.cssText = oldCSS;
    return bbox;
}, _getAttributeFallbacks = function _getAttributeFallbacks(target, attributesArray) {
    var i = attributesArray.length;
    while(i--){
        if (target.hasAttribute(attributesArray[i])) return target.getAttribute(attributesArray[i]);
    }
}, _getBBox = function _getBBox(target) {
    var bounds;
    try {
        bounds = target.getBBox(); //Firefox throws errors if you try calling getBBox() on an SVG element that's not rendered (like in a <symbol> or <defs>). https://bugzilla.mozilla.org/show_bug.cgi?id=612118
    } catch (error) {
        bounds = _getBBoxHack.call(target, true);
    }
    bounds && (bounds.width || bounds.height) || target.getBBox === _getBBoxHack || (bounds = _getBBoxHack.call(target, true)); //some browsers (like Firefox) misreport the bounds if the element has zero width and height (it just assumes it's at x:0, y:0), thus we need to manually grab the position in that case.
    return bounds && !bounds.width && !bounds.x && !bounds.y ? {
        x: +_getAttributeFallbacks(target, [
            "x",
            "cx",
            "x1"
        ]) || 0,
        y: +_getAttributeFallbacks(target, [
            "y",
            "cy",
            "y1"
        ]) || 0,
        width: 0,
        height: 0
    } : bounds;
}, _isSVG = function _isSVG(e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
}, //reports if the element is an SVG on which getBBox() actually works
_removeProperty = function _removeProperty(target, property) {
    if (property) {
        var style = target.style, first2Chars;
        if (property in _transformProps && property !== _transformOriginProp) property = _transformProp;
        if (style.removeProperty) {
            first2Chars = property.substr(0, 2);
            if (first2Chars === "ms" || property.substr(0, 6) === "webkit") //Microsoft and some Webkit browsers don't conform to the standard of capitalizing the first prefix character, so we adjust so that when we prefix the caps with a dash, it's correct (otherwise it'd be "ms-transform" instead of "-ms-transform" for IE9, for example)
            property = "-" + property;
            style.removeProperty(first2Chars === "--" ? property : property.replace(_capsExp, "-$1").toLowerCase());
        } else //note: old versions of IE use "removeAttribute()" instead of "removeProperty()"
        style.removeAttribute(property);
    }
}, _addNonTweeningPT = function _addNonTweeningPT(plugin, target, property, beginning, end, onlySetAtEnd) {
    var pt = new (0, _gsapCoreJs.PropTween)(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
    plugin._pt = pt;
    pt.b = beginning;
    pt.e = end;
    plugin._props.push(property);
    return pt;
}, _nonConvertibleUnits = {
    deg: 1,
    rad: 1,
    turn: 1
}, _nonStandardLayouts = {
    grid: 1,
    flex: 1
}, //takes a single value like 20px and converts it to the unit specified, like "%", returning only the numeric amount.
_convertToUnit = function _convertToUnit(target, property, value, unit) {
    var curValue = parseFloat(value) || 0, curUnit = (value + "").trim().substr((curValue + "").length) || "px", // some browsers leave extra whitespace at the beginning of CSS variables, hence the need to trim()
    style = _tempDiv.style, horizontal = _horizontalExp.test(property), isRootSVG = target.tagName.toLowerCase() === "svg", measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"), amount = 100, toPixels = unit === "px", toPercent = unit === "%", px, parent, cache, isSVG;
    if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) return curValue;
    curUnit !== "px" && !toPixels && (curValue = _convertToUnit(target, property, value, "px"));
    isSVG = target.getCTM && _isSVG(target);
    if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
        px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
        return (0, _gsapCoreJs._round)(toPercent ? curValue / px * amount : curValue / 100 * px);
    }
    style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
    parent = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;
    if (isSVG) parent = (target.ownerSVGElement || {}).parentNode;
    if (!parent || parent === _doc || !parent.appendChild) parent = _doc.body;
    cache = parent._gsap;
    if (cache && toPercent && cache.width && horizontal && cache.time === (0, _gsapCoreJs._ticker).time && !cache.uncache) return (0, _gsapCoreJs._round)(curValue / cache.width * amount);
    else {
        if (toPercent && (property === "height" || property === "width")) {
            // if we're dealing with width/height that's inside a container with padding and/or it's a flexbox/grid container, we must apply it to the target itself rather than the _tempDiv in order to ensure complete accuracy, factoring in the parent's padding.
            var v = target.style[property];
            target.style[property] = amount + unit;
            px = target[measureProperty];
            v ? target.style[property] = v : _removeProperty(target, property);
        } else {
            (toPercent || curUnit === "%") && !_nonStandardLayouts[_getComputedProperty(parent, "display")] && (style.position = _getComputedProperty(target, "position"));
            parent === target && (style.position = "static"); // like for borderRadius, if it's a % we must have it relative to the target itself but that may not have position: relative or position: absolute in which case it'd go up the chain until it finds its offsetParent (bad). position: static protects against that.
            parent.appendChild(_tempDiv);
            px = _tempDiv[measureProperty];
            parent.removeChild(_tempDiv);
            style.position = "absolute";
        }
        if (horizontal && toPercent) {
            cache = (0, _gsapCoreJs._getCache)(parent);
            cache.time = (0, _gsapCoreJs._ticker).time;
            cache.width = parent[measureProperty];
        }
    }
    return (0, _gsapCoreJs._round)(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
}, _get = function _get(target, property, unit, uncache) {
    var value;
    _pluginInitted || _initCore();
    if (property in _propertyAliases && property !== "transform") {
        property = _propertyAliases[property];
        if (~property.indexOf(",")) property = property.split(",")[0];
    }
    if (_transformProps[property] && property !== "transform") {
        value = _parseTransform(target, uncache);
        value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
    } else {
        value = target.style[property];
        if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || (0, _gsapCoreJs._getProperty)(target, property) || (property === "opacity" ? 1 : 0); // note: some browsers, like Firefox, don't report borderRadius correctly! Instead, it only reports every corner like  borderTopLeftRadius
    }
    return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
}, _tweenComplexCSSString = function _tweenComplexCSSString(target, prop, start, end) {
    // note: we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
    if (!start || start === "none") {
        // some browsers like Safari actually PREFER the prefixed property and mis-report the unprefixed value like clipPath (BUG). In other words, even though clipPath exists in the style ("clipPath" in target.style) and it's set in the CSS properly (along with -webkit-clip-path), Safari reports clipPath as "none" whereas WebkitClipPath reports accurately like "ellipse(100% 0% at 50% 0%)", so in this case we must SWITCH to using the prefixed property instead. See https://gsap.com/forums/topic/18310-clippath-doesnt-work-on-ios/
        var p = _checkPropPrefix(prop, target, 1), s = p && _getComputedProperty(target, p, 1);
        if (s && s !== start) {
            prop = p;
            start = s;
        } else if (prop === "borderColor") start = _getComputedProperty(target, "borderTopColor"); // Firefox bug: always reports "borderColor" as "", so we must fall back to borderTopColor. See https://gsap.com/forums/topic/24583-how-to-return-colors-that-i-had-after-reverse/
    }
    var pt = new (0, _gsapCoreJs.PropTween)(this._pt, target.style, prop, 0, 1, (0, _gsapCoreJs._renderComplexString)), index = 0, matchIndex = 0, a, result, startValues, startNum, color, startValue, endValue, endNum, chunk, endUnit, startUnit, endValues;
    pt.b = start;
    pt.e = end;
    start += ""; // ensure values are strings
    end += "";
    if (end === "auto") {
        startValue = target.style[prop];
        target.style[prop] = end;
        end = _getComputedProperty(target, prop) || end;
        startValue ? target.style[prop] = startValue : _removeProperty(target, prop);
    }
    a = [
        start,
        end
    ];
    (0, _gsapCoreJs._colorStringFilter)(a); // pass an array with the starting and ending values and let the filter do whatever it needs to the values. If colors are found, it returns true and then we must match where the color shows up order-wise because for things like boxShadow, sometimes the browser provides the computed values with the color FIRST, but the user provides it with the color LAST, so flip them if necessary. Same for drop-shadow().
    start = a[0];
    end = a[1];
    startValues = start.match((0, _gsapCoreJs._numWithUnitExp)) || [];
    endValues = end.match((0, _gsapCoreJs._numWithUnitExp)) || [];
    if (endValues.length) {
        while(result = (0, _gsapCoreJs._numWithUnitExp).exec(end)){
            endValue = result[0];
            chunk = end.substring(index, result.index);
            if (color) color = (color + 1) % 5;
            else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") color = 1;
            if (endValue !== (startValue = startValues[matchIndex++] || "")) {
                startNum = parseFloat(startValue) || 0;
                startUnit = startValue.substr((startNum + "").length);
                endValue.charAt(1) === "=" && (endValue = (0, _gsapCoreJs._parseRelative)(startNum, endValue) + startUnit);
                endNum = parseFloat(endValue);
                endUnit = endValue.substr((endNum + "").length);
                index = (0, _gsapCoreJs._numWithUnitExp).lastIndex - endUnit.length;
                if (!endUnit) {
                    //if something like "perspective:300" is passed in and we must add a unit to the end
                    endUnit = endUnit || (0, _gsapCoreJs._config).units[prop] || startUnit;
                    if (index === end.length) {
                        end += endUnit;
                        pt.e += endUnit;
                    }
                }
                if (startUnit !== endUnit) startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
                 // these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.
                pt._pt = {
                    _next: pt._pt,
                    p: chunk || matchIndex === 1 ? chunk : ",",
                    //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
                    s: startNum,
                    c: endNum - startNum,
                    m: color && color < 4 || prop === "zIndex" ? Math.round : 0
                };
            }
        }
        pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)
    } else pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
    (0, _gsapCoreJs._relExp).test(end) && (pt.e = 0); //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).
    this._pt = pt; //start the linked list with this new PropTween. Remember, we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within another plugin too, thus "this" would refer to the plugin.
    return pt;
}, _keywordToPercent = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
}, _convertKeywordsToPercentages = function _convertKeywordsToPercentages(value) {
    var split = value.split(" "), x = split[0], y = split[1] || "50%";
    if (x === "top" || x === "bottom" || y === "left" || y === "right") {
        //the user provided them in the wrong order, so flip them
        value = x;
        x = y;
        y = value;
    }
    split[0] = _keywordToPercent[x] || x;
    split[1] = _keywordToPercent[y] || y;
    return split.join(" ");
}, _renderClearProps = function _renderClearProps(ratio, data) {
    if (data.tween && data.tween._time === data.tween._dur) {
        var target = data.t, style = target.style, props = data.u, cache = target._gsap, prop, clearTransforms, i;
        if (props === "all" || props === true) {
            style.cssText = "";
            clearTransforms = 1;
        } else {
            props = props.split(",");
            i = props.length;
            while(--i > -1){
                prop = props[i];
                if (_transformProps[prop]) {
                    clearTransforms = 1;
                    prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
                }
                _removeProperty(target, prop);
            }
        }
        if (clearTransforms) {
            _removeProperty(target, _transformProp);
            if (cache) {
                cache.svg && target.removeAttribute("transform");
                _parseTransform(target, 1); // force all the cached values back to "normal"/identity, otherwise if there's another tween that's already set to render transforms on this element, it could display the wrong values.
                cache.uncache = 1;
                _removeIndependentTransforms(style);
            }
        }
    }
}, // note: specialProps should return 1 if (and only if) they have a non-zero priority. It indicates we need to sort the linked list.
_specialProps = {
    clearProps: function clearProps(plugin, target, property, endValue, tween) {
        if (tween.data !== "isFromStart") {
            var pt = plugin._pt = new (0, _gsapCoreJs.PropTween)(plugin._pt, target, property, 0, 0, _renderClearProps);
            pt.u = endValue;
            pt.pr = -10;
            pt.tween = tween;
            plugin._props.push(property);
            return 1;
        }
    }
}, /*
 * --------------------------------------------------------------------------------------
 * TRANSFORMS
 * --------------------------------------------------------------------------------------
 */ _identity2DMatrix = [
    1,
    0,
    0,
    1,
    0,
    0
], _rotationalProperties = {}, _isNullTransform = function _isNullTransform(value) {
    return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
}, _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray(target) {
    var matrixString = _getComputedProperty(target, _transformProp);
    return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match((0, _gsapCoreJs._numExp)).map((0, _gsapCoreJs._round));
}, _getMatrix = function _getMatrix(target, force2D) {
    var cache = target._gsap || (0, _gsapCoreJs._getCache)(target), style = target.style, matrix = _getComputedTransformMatrixAsArray(target), parent, nextSibling, temp, addedToDOM;
    if (cache.svg && target.getAttribute("transform")) {
        temp = target.transform.baseVal.consolidate().matrix; //ensures that even complex values like "translate(50,60) rotate(135,0,0)" are parsed because it mashes it into a matrix.
        matrix = [
            temp.a,
            temp.b,
            temp.c,
            temp.d,
            temp.e,
            temp.f
        ];
        return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
    } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
        //note: if offsetParent is null, that means the element isn't in the normal document flow, like if it has display:none or one of its ancestors has display:none). Firefox returns null for getComputedStyle() if the element is in an iframe that has display:none. https://bugzilla.mozilla.org/show_bug.cgi?id=548397
        //browsers don't report transforms accurately unless the element is in the DOM and has a display value that's not "none". Firefox and Microsoft browsers have a partial bug where they'll report transforms even if display:none BUT not any percentage-based values like translate(-50%, 8px) will be reported as if it's translate(0, 8px).
        temp = style.display;
        style.display = "block";
        parent = target.parentNode;
        if (!parent || !target.offsetParent) {
            // note: in 3.3.0 we switched target.offsetParent to _doc.body.contains(target) to avoid [sometimes unnecessary] MutationObserver calls but that wasn't adequate because there are edge cases where nested position: fixed elements need to get reparented to accurately sense transforms. See https://github.com/greensock/GSAP/issues/388 and https://github.com/greensock/GSAP/issues/375
            addedToDOM = 1; //flag
            nextSibling = target.nextElementSibling;
            _docElement.appendChild(target); //we must add it to the DOM in order to get values properly
        }
        matrix = _getComputedTransformMatrixAsArray(target);
        temp ? style.display = temp : _removeProperty(target, "display");
        if (addedToDOM) nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
    }
    return force2D && matrix.length > 6 ? [
        matrix[0],
        matrix[1],
        matrix[4],
        matrix[5],
        matrix[12],
        matrix[13]
    ] : matrix;
}, _applySVGOrigin = function _applySVGOrigin(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
    var cache = target._gsap, matrix = matrixArray || _getMatrix(target, true), xOriginOld = cache.xOrigin || 0, yOriginOld = cache.yOrigin || 0, xOffsetOld = cache.xOffset || 0, yOffsetOld = cache.yOffset || 0, a = matrix[0], b = matrix[1], c = matrix[2], d = matrix[3], tx = matrix[4], ty = matrix[5], originSplit = origin.split(" "), xOrigin = parseFloat(originSplit[0]) || 0, yOrigin = parseFloat(originSplit[1]) || 0, bounds, determinant, x, y;
    if (!originIsAbsolute) {
        bounds = _getBBox(target);
        xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
        yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin); // if (!("xOrigin" in cache) && (xOrigin || yOrigin)) { // added in 3.12.3, reverted in 3.12.4; requires more exploration
    // 	xOrigin -= bounds.x;
    // 	yOrigin -= bounds.y;
    // }
    } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
        //if it's zero (like if scaleX and scaleY are zero), skip it to avoid errors with dividing by zero.
        x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
        y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
        xOrigin = x;
        yOrigin = y; // theory: we only had to do this for smoothing and it assumes that the previous one was not originIsAbsolute.
    }
    if (smooth || smooth !== false && cache.smooth) {
        tx = xOrigin - xOriginOld;
        ty = yOrigin - yOriginOld;
        cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
        cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
    } else cache.xOffset = cache.yOffset = 0;
    cache.xOrigin = xOrigin;
    cache.yOrigin = yOrigin;
    cache.smooth = !!smooth;
    cache.origin = origin;
    cache.originIsAbsolute = !!originIsAbsolute;
    target.style[_transformOriginProp] = "0px 0px"; //otherwise, if someone sets  an origin via CSS, it will likely interfere with the SVG transform attribute ones (because remember, we're baking the origin into the matrix() value).
    if (pluginToAddPropTweensTo) {
        _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);
        _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);
        _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);
        _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
    }
    target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
}, _parseTransform = function _parseTransform(target, uncache) {
    var cache = target._gsap || new (0, _gsapCoreJs.GSCache)(target);
    if ("x" in cache && !uncache && !cache.uncache) return cache;
    var style = target.style, invertedScaleX = cache.scaleX < 0, px = "px", deg = "deg", cs = getComputedStyle(target), origin = _getComputedProperty(target, _transformOriginProp) || "0", x, y, z, scaleX, scaleY, rotation, rotationX, rotationY, skewX, skewY, perspective, xOrigin, yOrigin, matrix, angle, cos, sin, a, b, c, d, a12, a22, t1, t2, t3, a13, a23, a33, a42, a43, a32;
    x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
    scaleX = scaleY = 1;
    cache.svg = !!(target.getCTM && _isSVG(target));
    if (cs.translate) {
        // accommodate independent transforms by combining them into normal ones.
        if (cs.translate !== "none" || cs.scale !== "none" || cs.rotate !== "none") style[_transformProp] = (cs.translate !== "none" ? "translate3d(" + (cs.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (cs.rotate !== "none" ? "rotate(" + cs.rotate + ") " : "") + (cs.scale !== "none" ? "scale(" + cs.scale.split(" ").join(",") + ") " : "") + (cs[_transformProp] !== "none" ? cs[_transformProp] : "");
        style.scale = style.rotate = style.translate = "none";
    }
    matrix = _getMatrix(target, cache.svg);
    if (cache.svg) {
        if (cache.uncache) {
            // if cache.uncache is true (and maybe if origin is 0,0), we need to set element.style.transformOrigin = (cache.xOrigin - bbox.x) + "px " + (cache.yOrigin - bbox.y) + "px". Previously we let the data-svg-origin stay instead, but when introducing revert(), it complicated things.
            t2 = target.getBBox();
            origin = cache.xOrigin - t2.x + "px " + (cache.yOrigin - t2.y) + "px";
            t1 = "";
        } else t1 = !uncache && target.getAttribute("data-svg-origin"); //  Remember, to work around browser inconsistencies we always force SVG elements' transformOrigin to 0,0 and offset the translation accordingly.
        _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
    }
    xOrigin = cache.xOrigin || 0;
    yOrigin = cache.yOrigin || 0;
    if (matrix !== _identity2DMatrix) {
        a = matrix[0]; //a11
        b = matrix[1]; //a21
        c = matrix[2]; //a31
        d = matrix[3]; //a41
        x = a12 = matrix[4];
        y = a22 = matrix[5]; //2D matrix
        if (matrix.length === 6) {
            scaleX = Math.sqrt(a * a + b * b);
            scaleY = Math.sqrt(d * d + c * c);
            rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0; //note: if scaleX is 0, we cannot accurately measure rotation. Same for skewX with a scaleY of 0. Therefore, we default to the previously recorded value (or zero if that doesn't exist).
            skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
            skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));
            if (cache.svg) {
                x -= xOrigin - (xOrigin * a + yOrigin * c);
                y -= yOrigin - (xOrigin * b + yOrigin * d);
            } //3D matrix
        } else {
            a32 = matrix[6];
            a42 = matrix[7];
            a13 = matrix[8];
            a23 = matrix[9];
            a33 = matrix[10];
            a43 = matrix[11];
            x = matrix[12];
            y = matrix[13];
            z = matrix[14];
            angle = _atan2(a32, a33);
            rotationX = angle * _RAD2DEG; //rotationX
            if (angle) {
                cos = Math.cos(-angle);
                sin = Math.sin(-angle);
                t1 = a12 * cos + a13 * sin;
                t2 = a22 * cos + a23 * sin;
                t3 = a32 * cos + a33 * sin;
                a13 = a12 * -sin + a13 * cos;
                a23 = a22 * -sin + a23 * cos;
                a33 = a32 * -sin + a33 * cos;
                a43 = a42 * -sin + a43 * cos;
                a12 = t1;
                a22 = t2;
                a32 = t3;
            } //rotationY
            angle = _atan2(-c, a33);
            rotationY = angle * _RAD2DEG;
            if (angle) {
                cos = Math.cos(-angle);
                sin = Math.sin(-angle);
                t1 = a * cos - a13 * sin;
                t2 = b * cos - a23 * sin;
                t3 = c * cos - a33 * sin;
                a43 = d * sin + a43 * cos;
                a = t1;
                b = t2;
                c = t3;
            } //rotationZ
            angle = _atan2(b, a);
            rotation = angle * _RAD2DEG;
            if (angle) {
                cos = Math.cos(angle);
                sin = Math.sin(angle);
                t1 = a * cos + b * sin;
                t2 = a12 * cos + a22 * sin;
                b = b * cos - a * sin;
                a22 = a22 * cos - a12 * sin;
                a = t1;
                a12 = t2;
            }
            if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
                //when rotationY is set, it will often be parsed as 180 degrees different than it should be, and rotationX and rotation both being 180 (it looks the same), so we adjust for that here.
                rotationX = rotation = 0;
                rotationY = 180 - rotationY;
            }
            scaleX = (0, _gsapCoreJs._round)(Math.sqrt(a * a + b * b + c * c));
            scaleY = (0, _gsapCoreJs._round)(Math.sqrt(a22 * a22 + a32 * a32));
            angle = _atan2(a12, a22);
            skewX = Math.abs(angle) > 0.0002 ? angle * _RAD2DEG : 0;
            perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
        }
        if (cache.svg) {
            //sense if there are CSS transforms applied on an SVG element in which case we must overwrite them when rendering. The transform attribute is more reliable cross-browser, but we can't just remove the CSS ones because they may be applied in a CSS rule somewhere (not just inline).
            t1 = target.getAttribute("transform");
            cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
            t1 && target.setAttribute("transform", t1);
        }
    }
    if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
        if (invertedScaleX) {
            scaleX *= -1;
            skewX += rotation <= 0 ? 180 : -180;
            rotation += rotation <= 0 ? 180 : -180;
        } else {
            scaleY *= -1;
            skewX += skewX <= 0 ? 180 : -180;
        }
    }
    uncache = uncache || cache.uncache;
    cache.x = x - ((cache.xPercent = x && (!uncache && cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
    cache.y = y - ((cache.yPercent = y && (!uncache && cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
    cache.z = z + px;
    cache.scaleX = (0, _gsapCoreJs._round)(scaleX);
    cache.scaleY = (0, _gsapCoreJs._round)(scaleY);
    cache.rotation = (0, _gsapCoreJs._round)(rotation) + deg;
    cache.rotationX = (0, _gsapCoreJs._round)(rotationX) + deg;
    cache.rotationY = (0, _gsapCoreJs._round)(rotationY) + deg;
    cache.skewX = skewX + deg;
    cache.skewY = skewY + deg;
    cache.transformPerspective = perspective + px;
    if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || !uncache && cache.zOrigin || 0) style[_transformOriginProp] = _firstTwoOnly(origin);
    cache.xOffset = cache.yOffset = 0;
    cache.force3D = (0, _gsapCoreJs._config).force3D;
    cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
    cache.uncache = 0;
    return cache;
}, _firstTwoOnly = function _firstTwoOnly(value) {
    return (value = value.split(" "))[0] + " " + value[1];
}, //for handling transformOrigin values, stripping out the 3rd dimension
_addPxTranslate = function _addPxTranslate(target, start, value) {
    var unit = (0, _gsapCoreJs.getUnit)(start);
    return (0, _gsapCoreJs._round)(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
}, _renderNon3DTransforms = function _renderNon3DTransforms(ratio, cache) {
    cache.z = "0px";
    cache.rotationY = cache.rotationX = "0deg";
    cache.force3D = 0;
    _renderCSSTransforms(ratio, cache);
}, _zeroDeg = "0deg", _zeroPx = "0px", _endParenthesis = ") ", _renderCSSTransforms = function _renderCSSTransforms(ratio, cache) {
    var _ref = cache || this, xPercent = _ref.xPercent, yPercent = _ref.yPercent, x = _ref.x, y = _ref.y, z = _ref.z, rotation = _ref.rotation, rotationY = _ref.rotationY, rotationX = _ref.rotationX, skewX = _ref.skewX, skewY = _ref.skewY, scaleX = _ref.scaleX, scaleY = _ref.scaleY, transformPerspective = _ref.transformPerspective, force3D = _ref.force3D, target = _ref.target, zOrigin = _ref.zOrigin, transforms = "", use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true; // Safari has a bug that causes it not to render 3D transform-origin values properly, so we force the z origin to 0, record it in the cache, and then do the math here to offset the translate values accordingly (basically do the 3D transform-origin part manually)
    if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
        var angle = parseFloat(rotationY) * _DEG2RAD, a13 = Math.sin(angle), a33 = Math.cos(angle), cos;
        angle = parseFloat(rotationX) * _DEG2RAD;
        cos = Math.cos(angle);
        x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
        y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
        z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
    }
    if (transformPerspective !== _zeroPx) transforms += "perspective(" + transformPerspective + _endParenthesis;
    if (xPercent || yPercent) transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
    if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
    if (rotation !== _zeroDeg) transforms += "rotate(" + rotation + _endParenthesis;
    if (rotationY !== _zeroDeg) transforms += "rotateY(" + rotationY + _endParenthesis;
    if (rotationX !== _zeroDeg) transforms += "rotateX(" + rotationX + _endParenthesis;
    if (skewX !== _zeroDeg || skewY !== _zeroDeg) transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
    if (scaleX !== 1 || scaleY !== 1) transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
    target.style[_transformProp] = transforms || "translate(0, 0)";
}, _renderSVGTransforms = function _renderSVGTransforms(ratio, cache) {
    var _ref2 = cache || this, xPercent = _ref2.xPercent, yPercent = _ref2.yPercent, x = _ref2.x, y = _ref2.y, rotation = _ref2.rotation, skewX = _ref2.skewX, skewY = _ref2.skewY, scaleX = _ref2.scaleX, scaleY = _ref2.scaleY, target = _ref2.target, xOrigin = _ref2.xOrigin, yOrigin = _ref2.yOrigin, xOffset = _ref2.xOffset, yOffset = _ref2.yOffset, forceCSS = _ref2.forceCSS, tx = parseFloat(x), ty = parseFloat(y), a11, a21, a12, a22, temp;
    rotation = parseFloat(rotation);
    skewX = parseFloat(skewX);
    skewY = parseFloat(skewY);
    if (skewY) {
        //for performance reasons, we combine all skewing into the skewX and rotation values. Remember, a skewY of 10 degrees looks the same as a rotation of 10 degrees plus a skewX of 10 degrees.
        skewY = parseFloat(skewY);
        skewX += skewY;
        rotation += skewY;
    }
    if (rotation || skewX) {
        rotation *= _DEG2RAD;
        skewX *= _DEG2RAD;
        a11 = Math.cos(rotation) * scaleX;
        a21 = Math.sin(rotation) * scaleX;
        a12 = Math.sin(rotation - skewX) * -scaleY;
        a22 = Math.cos(rotation - skewX) * scaleY;
        if (skewX) {
            skewY *= _DEG2RAD;
            temp = Math.tan(skewX - skewY);
            temp = Math.sqrt(1 + temp * temp);
            a12 *= temp;
            a22 *= temp;
            if (skewY) {
                temp = Math.tan(skewY);
                temp = Math.sqrt(1 + temp * temp);
                a11 *= temp;
                a21 *= temp;
            }
        }
        a11 = (0, _gsapCoreJs._round)(a11);
        a21 = (0, _gsapCoreJs._round)(a21);
        a12 = (0, _gsapCoreJs._round)(a12);
        a22 = (0, _gsapCoreJs._round)(a22);
    } else {
        a11 = scaleX;
        a22 = scaleY;
        a21 = a12 = 0;
    }
    if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
        tx = _convertToUnit(target, "x", x, "px");
        ty = _convertToUnit(target, "y", y, "px");
    }
    if (xOrigin || yOrigin || xOffset || yOffset) {
        tx = (0, _gsapCoreJs._round)(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
        ty = (0, _gsapCoreJs._round)(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
    }
    if (xPercent || yPercent) {
        //The SVG spec doesn't support percentage-based translation in the "transform" attribute, so we merge it into the translation to simulate it.
        temp = target.getBBox();
        tx = (0, _gsapCoreJs._round)(tx + xPercent / 100 * temp.width);
        ty = (0, _gsapCoreJs._round)(ty + yPercent / 100 * temp.height);
    }
    temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
    target.setAttribute("transform", temp);
    forceCSS && (target.style[_transformProp] = temp); //some browsers prioritize CSS transforms over the transform attribute. When we sense that the user has CSS transforms applied, we must overwrite them this way (otherwise some browser simply won't render the transform attribute changes!)
}, _addRotationalPropTween = function _addRotationalPropTween(plugin, target, property, startNum, endValue) {
    var cap = 360, isString = (0, _gsapCoreJs._isString)(endValue), endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1), change = endNum - startNum, finalValue = startNum + change + "deg", direction, pt;
    if (isString) {
        direction = endValue.split("_")[1];
        if (direction === "short") {
            change %= cap;
            if (change !== change % (cap / 2)) change += change < 0 ? cap : -cap;
        }
        if (direction === "cw" && change < 0) change = (change + cap * _bigNum) % cap - ~~(change / cap) * cap;
        else if (direction === "ccw" && change > 0) change = (change - cap * _bigNum) % cap - ~~(change / cap) * cap;
    }
    plugin._pt = pt = new (0, _gsapCoreJs.PropTween)(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
    pt.e = finalValue;
    pt.u = "deg";
    plugin._props.push(property);
    return pt;
}, _assign = function _assign(target, source) {
    // Internet Explorer doesn't have Object.assign(), so we recreate it here.
    for(var p in source)target[p] = source[p];
    return target;
}, _addRawTransformPTs = function _addRawTransformPTs(plugin, transforms, target) {
    //for handling cases where someone passes in a whole transform string, like transform: "scale(2, 3) rotate(20deg) translateY(30em)"
    var startCache = _assign({}, target._gsap), exclude = "perspective,force3D,transformOrigin,svgOrigin", style = target.style, endCache, p, startValue, endValue, startNum, endNum, startUnit, endUnit;
    if (startCache.svg) {
        startValue = target.getAttribute("transform");
        target.setAttribute("transform", "");
        style[_transformProp] = transforms;
        endCache = _parseTransform(target, 1);
        _removeProperty(target, _transformProp);
        target.setAttribute("transform", startValue);
    } else {
        startValue = getComputedStyle(target)[_transformProp];
        style[_transformProp] = transforms;
        endCache = _parseTransform(target, 1);
        style[_transformProp] = startValue;
    }
    for(p in _transformProps){
        startValue = startCache[p];
        endValue = endCache[p];
        if (startValue !== endValue && exclude.indexOf(p) < 0) {
            //tweening to no perspective gives very unintuitive results - just keep the same perspective in that case.
            startUnit = (0, _gsapCoreJs.getUnit)(startValue);
            endUnit = (0, _gsapCoreJs.getUnit)(endValue);
            startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
            endNum = parseFloat(endValue);
            plugin._pt = new (0, _gsapCoreJs.PropTween)(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
            plugin._pt.u = endUnit || 0;
            plugin._props.push(p);
        }
    }
    _assign(endCache, startCache);
}; // handle splitting apart padding, margin, borderWidth, and borderRadius into their 4 components. Firefox, for example, won't report borderRadius correctly - it will only do borderTopLeftRadius and the other corners. We also want to handle paddingTop, marginLeft, borderRightWidth, etc.
(0, _gsapCoreJs._forEachName)("padding,margin,Width,Radius", function(name, index) {
    var t = "Top", r = "Right", b = "Bottom", l = "Left", props = (index < 3 ? [
        t,
        r,
        b,
        l
    ] : [
        t + l,
        t + r,
        b + r,
        b + l
    ]).map(function(side) {
        return index < 2 ? name + side : "border" + side + name;
    });
    _specialProps[index > 1 ? "border" + name : name] = function(plugin, target, property, endValue, tween) {
        var a, vars;
        if (arguments.length < 4) {
            // getter, passed target, property, and unit (from _get())
            a = props.map(function(prop) {
                return _get(plugin, prop, property);
            });
            vars = a.join(" ");
            return vars.split(a[0]).length === 5 ? a[0] : vars;
        }
        a = (endValue + "").split(" ");
        vars = {};
        props.forEach(function(prop, i) {
            return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
        });
        plugin.init(target, vars, tween);
    };
});
var CSSPlugin = {
    name: "css",
    register: _initCore,
    targetTest: function targetTest(target) {
        return target.style && target.nodeType;
    },
    init: function init(target, vars, tween, index, targets) {
        var props = this._props, style = target.style, startAt = tween.vars.startAt, startValue, endValue, endNum, startNum, type, specialProp, p, startUnit, endUnit, relative, isTransformRelated, transformPropTween, cache, smooth, hasPriority, inlineProps;
        _pluginInitted || _initCore(); // we may call init() multiple times on the same plugin instance, like when adding special properties, so make sure we don't overwrite the revert data or inlineProps
        this.styles = this.styles || _getStyleSaver(target);
        inlineProps = this.styles.props;
        this.tween = tween;
        for(p in vars){
            if (p === "autoRound") continue;
            endValue = vars[p];
            if ((0, _gsapCoreJs._plugins)[p] && (0, _gsapCoreJs._checkPlugin)(p, vars, tween, index, target, targets)) continue;
            type = typeof endValue;
            specialProp = _specialProps[p];
            if (type === "function") {
                endValue = endValue.call(tween, index, target, targets);
                type = typeof endValue;
            }
            if (type === "string" && ~endValue.indexOf("random(")) endValue = (0, _gsapCoreJs._replaceRandom)(endValue);
            if (specialProp) specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
            else if (p.substr(0, 2) === "--") {
                //CSS variable
                startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
                endValue += "";
                (0, _gsapCoreJs._colorExp).lastIndex = 0;
                if (!(0, _gsapCoreJs._colorExp).test(startValue)) {
                    // colors don't have units
                    startUnit = (0, _gsapCoreJs.getUnit)(startValue);
                    endUnit = (0, _gsapCoreJs.getUnit)(endValue);
                }
                endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
                this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
                props.push(p);
                inlineProps.push(p, 0, style[p]);
            } else if (type !== "undefined") {
                if (startAt && p in startAt) {
                    // in case someone hard-codes a complex value as the start, like top: "calc(2vh / 2)". Without this, it'd use the computed value (always in px)
                    startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
                    (0, _gsapCoreJs._isString)(startValue) && ~startValue.indexOf("random(") && (startValue = (0, _gsapCoreJs._replaceRandom)(startValue));
                    (0, _gsapCoreJs.getUnit)(startValue + "") || startValue === "auto" || (startValue += (0, _gsapCoreJs._config).units[p] || (0, _gsapCoreJs.getUnit)(_get(target, p)) || ""); // for cases when someone passes in a unitless value like {x: 100}; if we try setting translate(100, 0px) it won't work.
                    (startValue + "").charAt(1) === "=" && (startValue = _get(target, p)); // can't work with relative values
                } else startValue = _get(target, p);
                startNum = parseFloat(startValue);
                relative = type === "string" && endValue.charAt(1) === "=" && endValue.substr(0, 2);
                relative && (endValue = endValue.substr(2));
                endNum = parseFloat(endValue);
                if (p in _propertyAliases) {
                    if (p === "autoAlpha") {
                        //special case where we control the visibility along with opacity. We still allow the opacity value to pass through and get tweened.
                        if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) //if visibility is initially set to "hidden", we should interpret that as intent to make opacity 0 (a convenience)
                        startNum = 0;
                        inlineProps.push("visibility", 0, style.visibility);
                        _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
                    }
                    if (p !== "scale" && p !== "transform") {
                        p = _propertyAliases[p];
                        ~p.indexOf(",") && (p = p.split(",")[0]);
                    }
                }
                isTransformRelated = p in _transformProps; //--- TRANSFORM-RELATED ---
                if (isTransformRelated) {
                    this.styles.save(p);
                    if (!transformPropTween) {
                        cache = target._gsap;
                        cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform); // if, for example, gsap.set(... {transform:"translateX(50vw)"}), the _get() call doesn't parse the transform, thus cache.renderTransform won't be set yet so force the parsing of the transform here.
                        smooth = vars.smoothOrigin !== false && cache.smooth;
                        transformPropTween = this._pt = new (0, _gsapCoreJs.PropTween)(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1); //the first time through, create the rendering PropTween so that it runs LAST (in the linked list, we keep adding to the beginning)
                        transformPropTween.dep = 1; //flag it as dependent so that if things get killed/overwritten and this is the only PropTween left, we can safely kill the whole tween.
                    }
                    if (p === "scale") {
                        this._pt = new (0, _gsapCoreJs.PropTween)(this._pt, cache, "scaleY", cache.scaleY, (relative ? (0, _gsapCoreJs._parseRelative)(cache.scaleY, relative + endNum) : endNum) - cache.scaleY || 0, _renderCSSProp);
                        this._pt.u = 0;
                        props.push("scaleY", p);
                        p += "X";
                    } else if (p === "transformOrigin") {
                        inlineProps.push(_transformOriginProp, 0, style[_transformOriginProp]);
                        endValue = _convertKeywordsToPercentages(endValue); //in case something like "left top" or "bottom right" is passed in. Convert to percentages.
                        if (cache.svg) _applySVGOrigin(target, endValue, 0, smooth, 0, this);
                        else {
                            endUnit = parseFloat(endValue.split(" ")[2]) || 0; //handle the zOrigin separately!
                            endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);
                            _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
                        }
                        continue;
                    } else if (p === "svgOrigin") {
                        _applySVGOrigin(target, endValue, 1, smooth, 0, this);
                        continue;
                    } else if (p in _rotationalProperties) {
                        _addRotationalPropTween(this, cache, p, startNum, relative ? (0, _gsapCoreJs._parseRelative)(startNum, relative + endValue) : endValue);
                        continue;
                    } else if (p === "smoothOrigin") {
                        _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);
                        continue;
                    } else if (p === "force3D") {
                        cache[p] = endValue;
                        continue;
                    } else if (p === "transform") {
                        _addRawTransformPTs(this, endValue, target);
                        continue;
                    }
                } else if (!(p in style)) p = _checkPropPrefix(p) || p;
                if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
                    startUnit = (startValue + "").substr((startNum + "").length);
                    endNum || (endNum = 0); // protect against NaN
                    endUnit = (0, _gsapCoreJs.getUnit)(endValue) || (p in (0, _gsapCoreJs._config).units ? (0, _gsapCoreJs._config).units[p] : startUnit);
                    startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
                    this._pt = new (0, _gsapCoreJs.PropTween)(this._pt, isTransformRelated ? cache : style, p, startNum, (relative ? (0, _gsapCoreJs._parseRelative)(startNum, relative + endNum) : endNum) - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
                    this._pt.u = endUnit || 0;
                    if (startUnit !== endUnit && endUnit !== "%") {
                        //when the tween goes all the way back to the beginning, we need to revert it to the OLD/ORIGINAL value (with those units). We record that as a "b" (beginning) property and point to a render method that handles that. (performance optimization)
                        this._pt.b = startValue;
                        this._pt.r = _renderCSSPropWithBeginning;
                    }
                } else if (!(p in style)) {
                    if (p in target) //maybe it's not a style - it could be a property added directly to an element in which case we'll try to animate that.
                    this.add(target, p, startValue || target[p], relative ? relative + endValue : endValue, index, targets);
                    else if (p !== "parseTransform") {
                        (0, _gsapCoreJs._missingPlugin)(p, endValue);
                        continue;
                    }
                } else _tweenComplexCSSString.call(this, target, p, startValue, relative ? relative + endValue : endValue);
                isTransformRelated || (p in style ? inlineProps.push(p, 0, style[p]) : inlineProps.push(p, 1, startValue || target[p]));
                props.push(p);
            }
        }
        hasPriority && (0, _gsapCoreJs._sortPropTweensByPriority)(this);
    },
    render: function render(ratio, data) {
        if (data.tween._time || !_reverting()) {
            var pt = data._pt;
            while(pt){
                pt.r(ratio, pt.d);
                pt = pt._next;
            }
        } else data.styles.revert();
    },
    get: _get,
    aliases: _propertyAliases,
    getSetter: function getSetter(target, property, plugin) {
        //returns a setter function that accepts target, property, value and applies it accordingly. Remember, properties like "x" aren't as simple as target.style.property = value because they've got to be applied to a proxy object and then merged into a transform string in a renderer.
        var p = _propertyAliases[property];
        p && p.indexOf(",") < 0 && (property = p);
        return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}, property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !(0, _gsapCoreJs._isUndefined)(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : (0, _gsapCoreJs._getSetter)(target, property);
    },
    core: {
        _removeProperty: _removeProperty,
        _getMatrix: _getMatrix
    }
};
(0, _gsapCoreJs.gsap).utils.checkPrefix = _checkPropPrefix;
(0, _gsapCoreJs.gsap).core.getStyleSaver = _getStyleSaver;
(function(positionAndScale, rotation, others, aliases) {
    var all = (0, _gsapCoreJs._forEachName)(positionAndScale + "," + rotation + "," + others, function(name) {
        _transformProps[name] = 1;
    });
    (0, _gsapCoreJs._forEachName)(rotation, function(name) {
        (0, _gsapCoreJs._config).units[name] = "deg";
        _rotationalProperties[name] = 1;
    });
    _propertyAliases[all[13]] = positionAndScale + "," + rotation;
    (0, _gsapCoreJs._forEachName)(aliases, function(name) {
        var split = name.split(":");
        _propertyAliases[split[1]] = all[split[0]];
    });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
(0, _gsapCoreJs._forEachName)("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(name) {
    (0, _gsapCoreJs._config).units[name] = "px";
});
(0, _gsapCoreJs.gsap).registerPlugin(CSSPlugin);

},{"./gsap-core.js":"05eeC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["3Ms8d","8lqZg"], "8lqZg", "parcelRequire716c")

//# sourceMappingURL=index.js.map
