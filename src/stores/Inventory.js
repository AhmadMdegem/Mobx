import { observable, action,makeObservable } from 'mobx'
import {Item} from "./Item"

export class Inventory {
    constructor() {
        this.items = []
        makeObservable(this, {
            items: observable,
            addItem: action, 
            buyItem: action,
            changePrice: action,
        })
    }
    addItem = (name, price, quantity) => {
        const item = this.items.find(i => i.name === name)
        if(item){
            item.quantity += 1
        }else{
            this.items.push(new Item(name, price, quantity))
        }
    } 
    buyItem = (name) => {
        const itemIndex = this.items.findIndex(i => i.name === name)
        const item = this.items[itemIndex]
        if(item.quantity > 0){
            item.quantity -= 1
        }else{
            this.items.splice(itemIndex, 1)
        }
    }
    changePrice = (name, price) => this.items.find(i => i.name === name).price = price
    get numItems(){
        return this.items.length
    }
}