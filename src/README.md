# live sensors server

## Installation 



#### Python Installation
- create a VE (i'm using 3.12)
- ```python.exe -m pip install --upgrade pip```
- ```pip install -r requirements.txt```

#### Modern javascript insanity installation
- install npm (and node). [Instructions](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- you will need to retart your IDE as npm has added stuff to you path
- ```npm install```

#### Install ngrok
- this project uses WebSockets. WebSockets are annoying and require https. Which requires ngrok. There are other ways of getting around this issue but...
- visit https://ngrok.com/

## Local dev
- start quart server ```quart --app app --debug run```
- start parcel (js) bundling insanity ```npm run dev```
- start ngrok ```ngrok http http://127.0.0.1:5000```
- visit the https server ngrok provides. Hey presto.