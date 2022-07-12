const request = require("request")
const fs = require("fs");
const { DiscordAPIError, WebhookClient, MessageEmbed, Message } = require("discord.js");
const event = require("events")

let wurl = "";
let data = "";
let login = {
    token: "",
    id: "",
}

let sendend = false;
class Webhook {
textURL = function(content, url) {
    return "[" + content + "]" + "(" + url + ")"
}
login = function(urll) {
    if(!urll) throw new Error("Invalid token")
    wurl = urll
}


    channel = {
        send: function({
            content: msgContent,
            embeds: embedstoarray
        }) {
            request.get({
                url: wurl,
                json: true
            }, (err, req, body) => {
                const cl = new WebhookClient({
                    id: body.id,
                    token: body.token
                })
                

                if(!msgContent && !embedstoarray) {
                    throw new Error("Cannot send an empty message")
                }
                if(msgContent && !embedstoarray) {
                    cl.send(msgContent)
                }
                if(!msgContent && embedstoarray) {
                    cl.send(embedstoarray)
                }
                if(msgContent && embedstoarray) {
                    cl.send({
                        content: msgContent,
                        embeds: embedstoarray
                    }).then(() => {
                        sendend=true
                    })
                    
                }
            })
            
        }
}     
on = (webhookEvent, param) => {
    if(webhookEvent=="ready") {
        if(sendend) {
            console.log("Message Sendend")
        }
    }
}
sendendMessage = function() {
   
        if(sendend) {
          return true
        }
        if(!sendend) {
          return false
        }
     
}

   
 }
class File {
   create = function(filename ,path) {
    request.get({
        url: wurl,
        json: true
    }, (err, req, body) => {
      fs.writeFile(path +"/"+ filename + ".hok", `{
        import {
        ${wurl}
        ${body.name}
        
           }
        }`, (err) => {if(err){console.log(err)}})
    })
   }

   json= {
      make: function(filename, path) {
        
            request.get({
                url: wurl,
                json: true
            }, (err, req, body) => {
              fs.writeFile(path +"/"+ filename + ".json", `{"url": "${wurl}","name": "${body.name}"}           
`, (err) => {if(err){console.log(err)}})
            })
        
    
      }
   }
   env= {
    make: function(filename, path) {
        request.get({
            url: wurl,
            json: true
        }, (err, req, body) => {
          fs.writeFile(path +"/"+ filename + ".env", `URL=${wurl}
NAME=${body.name}
`, (err) => {if(err){console.log(err)}})
        })
    

    }
   }
}


module.exports = { Webhook, File }
/**
 * copyright (C) TSAZ SERVICES
 */