const EventEmitter= require("events");

const emitter=new EventEmitter();

emitter.on("order",(size,color)=>{
    console.log(`Ordered a ${size} size ${color} shirt`);
})

emitter.emit("order","large" , "Red");

const shop=require("./shop");

const Shop=new shop;

Shop.order();
Shop.displayOrder();
