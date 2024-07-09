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
        print(33434)
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

    payload = json.loads(message)
    sensor = payload['sensor']



    function_nam = 'SetRelativeRotation'
    data = {"NewRotation": {
        "Pitch": float(payload['data']['x'])*360,
        "Yaw": float(payload['data']['y'])*360,
        "Roll": float(payload['data']['z'])*360
    }}


    url = 'http://localhost:30010/remote/object/call/'
    data = {
        "objectPath": "/Game/Levels/XV3DGS_SplatScene.XV3DGS_SplatScene:PersistentLevel.bikeshelter_actor_C_1.RootComponent",
        "functionName": function_nam,
        "parameters": data
        }


    headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}
    print('sending', data)

    try:
        x = requests.put(url, data=json.dumps(data), headers=headers, timeout=1)
        print(x,11111)
    except requests.exceptions.Timeout:
        print("Timed out")
    except Exception as e:
        print(11, e)

    print('sent', x)


def play(pitch: float = 0, yaw: float = 0, roll: float = 0):
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

    # url = 'http://localhost:30010/remote/object/call/'
    # data = {
    #     "objectPath": "/Game/Levels/XV3DGS_SplatScene.XV3DGS_SplatScene:PersistentLevel.bikeshelter_actor_C_1.RootComponent",
    #     "functionName": "SetRelativeRotation",
    #     "parameters": {
    #         "NewRotation": {
    #             "Pitch": 100,
    #             "Yaw": 0,
    #             "Roll": 100
    #         }
    #     }
    # }

    # data = {
    #     "objectPath": "/Game/Levels/XV3DGS_SplatScene.XV3DGS_SplatScene:PersistentLevel.bikeshelter_actor_C_1.RootComponent",
    #     "functionName": "SetRelativeRotation",
    #     "parameters": {
    #         "NewRotation": {
    #             "Pitch": 100,
    #             "Yaw": 0,
    #             "Roll": 100
    #         }
    #     }
    # }

    url = 'http://localhost:30010/remote/object/call/'

    data = {
        "objectPath": "/Game/Levels/XV3DGS_SplatScene.XV3DGS_SplatScene:PersistentLevel.bikeshelter_actor_C_1.RootComponent",
        "functionName": 'SetRelativeRotation',
        "parameters": {"NewRotation": {
                 "Pitch": 0,
                "Yaw": 100,
                "Roll": 100
            }}
    }

    headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}
    x = requests.put(url, data=json.dumps(data), headers=headers)
    print(x, x.text, 22)


#play()

if __name__ == '__main__':
    pass
    # app.run()
