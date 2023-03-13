class shop{
    constructor(){
        this.orderNumber=0;
    }
    order(){
        this.orderNumber++;
    }
    displayOrder(){
        console.log(`Current order number : ${this.orderNumber}`);
    }
}
module.exports=shop;