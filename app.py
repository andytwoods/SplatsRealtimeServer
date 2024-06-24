import asyncio

from quart import Quart, render_template, websocket

from broker import Broker

# https://quart.palletsprojects.com/en/latest/tutorials/chat_tutorial.html#chat-tutorial
broker = Broker()
app = Quart(__name__)
app.debug = True

app.jinja_env.auto_reload = True
app.config['TEMPLATES_AUTO_RELOAD'] = True

# quart --app app --debug run
# ./ngrok.exe http http://localhost:5000


@app.route("/")
async def home():
    return await render_template("index.html")


async def _receive() -> None:
    while True:
        message = await websocket.receive()
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


if __name__ == '__main__':
    app.run()
