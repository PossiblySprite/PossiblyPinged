const Discord = require('discord.js');
const bot = new Discord.Client();

const PREFIX = "~";

bot.on('ready', () =>{
    console.log('This bot is online!');
})

bot.on('message', message=>{
    
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'help':
            message.channel.send('Our current commands are ~help ~ping and ~info')
        break;

        case 'info':
            message.channel.send('This bot was made by PossiblySprite#1227 with the sole purpose of pinging Kai. Version is 1.0.0')
        break;

        case 'ping':
            var pinger = true
            let mention = message.mentions.members.first();
            setTimeout(function(){message.channel.send(mention.toString());}, 5000); 
            setTimeout(function(){message.channel.send(mention.toString());}, 5000); 
            setTimeout(function(){message.channel.send(mention.toString());}, 5000); 
            setTimeout(function(){message.channel.send(mention.toString());}, 5000); 
            setTimeout(function(){message.channel.send(mention.toString());}, 5000); 
            setTimeout(function(){message.channel.send(mention.toString());}, 5000); 
            setTimeout(function(){message.channel.send(mention.toString());}, 5000); 
            setTimeout(function(){message.channel.send(mention.toString());}, 5000); 
            setTimeout(function(){message.channel.send(mention.toString());}, 5000); 
            setTimeout(function(){message.channel.send(mention.toString());}, 5000); 
            setTimeout(function(){message.channel.send(mention.toString());}, 5000); 
            setTimeout(function(){message.channel.send(mention.toString());}, 5000); 
            setTimeout(function(){message.channel.send(mention.toString());}, 5000); 
            setTimeout(function(){message.channel.send(mention.toString());}, 5000); 
            setTimeout(function(){message.channel.send(mention.toString());}, 5000); 
            setTimeout(function(){message.channel.send(mention.toString());}, 5000); 
            setTimeout(function(){message.channel.send(mention.toString());}, 5000); 
            setTimeout(function(){message.channel.send(mention.toString());}, 5000); 
            setTimeout(function(){message.channel.send(mention.toString());}, 5000); 
            setTimeout(function(){message.channel.send(mention.toString());}, 5000);          
         }
})
        
bot.login(process.env.token);