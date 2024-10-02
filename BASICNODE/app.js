var finp=require('./greeting');
var os=require('os');
var eventemitter=require('events');
var event=new eventemitter();
var colors = require('colors');
finp.display('Abin Abraham');
console.log('hello'.red);
console.log('OMG Rainbows!'.rainbow);
console.log(os.hostname())
console.log(os.platform())
event.on('Danger',()=>{
    console.log("Beware, its a danger zone");
})
event.emit('Danger');