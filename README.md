![hookscord.js](https://cdn.discordapp.com/attachments/839189307637497890/996372029420863488/Hookscord.js_ICON.png)

Hookscord.js is an [npm package](https://www.npmjs.com/) that allows you to send **webhooks** to Discord (same functions as hookscord app) is compatible with [**discord.js**](https://www.npmjs.com/package/discord.js)

## Installation



```bash
npm i hookscord.js
```

## Simple Example

```javascript
const Hookscord = require("hookscord.js")
const client = new Hookscord.Webhook();

client.login("WebhookURL") //login in the webhook

client.channel.send({ content: "Hello World!" })
```
## Other Examples
```javascript
const Hookscord = require("hookscord.js")
const client = new Hookscord.Webhook();
const file = new Hookscord.File();

client.login("WebhookURL") //login in the webhook

client.channel.send({ content: "Hello World!" })

file.create("Untitled", "PATH") //create a ".hok" file in the selected path
file.json.make("Untitled", "PATH")
file.env.make("Untitled", "PATH")
```
## Use with [Discord.js](https://www.npmjs.com/package/discord.js)
```javascript
const Hookscord = require("hookscord.js")
const client = new Hookscord.Webhook();
const Discord = require("discord.js")


client.login("WebhookURL") //login in the webhook

let embed = new Discord.MessageEmbed()
.setTitle("Hello World!")

client.channel.send({ content: "Hello World!", embeds: [embed] }) //cant send only embed, require content
```