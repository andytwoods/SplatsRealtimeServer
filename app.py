import asyncio
import json
import os

import requests
from quart import Quart, render_template, websocket

from broker import Broker

# https://quart.palletsprojects.com/en/latest/tutorials/chat_tutorial.html#chat-tutorial
broker = Broker()
app = Quart(__name__, static_url_path='/static')
app.debug = True

app.jinja_env.auto_reload = True
app.config['TEMPLATES_AUTO_RELOAD'] = True


# quart --app app --debug run --cert=https.crt --key=https.key
# ./ngrok.exe http http://localhost:5000
# ngrok http http://127.0.0.1:5000
# npm run dev


@app.route("/")
async def home():
    return await render_template("index.html")


async def _receive() -> None:
    while True:
        message = await websocket.receive()
        contact_unreal(message)
        await broker.publish(message)


@app.websocket("/ws")
async def ws() -> None:
    try:
        task = asyncio.ensure_future(_receive())
        async for message in broker.subscribe():
            await websocket.send(message)
    finally:
        task.cancel()
        await task


def contact_unreal(message):

    sensor = message.sensor

    if sensor == 'OK':
        function = 'SetRelativeRotation'
        data = {"NewRotation": {
                "Pitch": pitch,
                "Yaw": yaw,
                "Roll": roll
            }}
    elif sensor == 'x':
        function = 'x'
        data = {

        }

    url = 'http://localhost:30010/remote/object/call/'
    data = {
        "objectPath": "/Game/Levels/XV3DGS_GaussianFabbrika.XV3DGS_GaussianFabbrika:PersistentLevel.fabbrika_actor_C_UAID_C01803BB37E14AFE01_1235782410.RootComponent",
        "functionName": function,
        "parameters": data
        }
    }

    headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}
    x = requests.put(url, data=json.dumps(data), headers=headers)
    print(x, x.text, 22)


def play(pitch: float, yaw: float, roll: float):
    # url = 'http://localhost:30010/remote/object/property/'
    # data = {
    #     "objectPath": "/Game/Levels/XV3DGS_GaussianFabbrika.XV3DGS_GaussianFabbrika:PersistentLevel.fabbrika_actor_C_UAID_C01803BB37E14AFE01_1235782410.NiagaraComponent",
    #     "access": "READ_ACCESS",
    #     "propertyName": "RelativeLocation"
    # }
    #
    # url = 'http://localhost:30010/remote/object/property/'
    # data = {
    #     "objectPath": "/Game/Levels/XV3DGS_GaussianFabbrika.XV3DGS_GaussianFabbrika:PersistentLevel.fabbrika_actor_C_UAID_C01803BB37E14AFE01_1235782410.NiagaraComponent",
    #     "access": "WRITE_ACCESS",
    #     "propertyName": "RelativeLocation",
    #     "propertyValue": {"X": 100, "Y": 0, "Z": 0}
    # }

    url = 'http://localhost:30010/remote/object/call/'
    data = {
        "objectPath": "/Game/Levels/XV3DGS_GaussianFabbrika.XV3DGS_GaussianFabbrika:PersistentLevel.fabbrika_actor_C_UAID_C01803BB37E14AFE01_1235782410.RootComponent",
        "functionName": "SetRelativeRotation",
        "parameters": {
            "NewRotation": {
                "Pitch": pitch,
                "Yaw": yaw,
                "Roll": roll
            }
        }
    }

    headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}
    x = requests.put(url, data=json.dumps(data), headers=headers)
    print(x, x.text, 22)


if __name__ == '__main__':
    app.run()
