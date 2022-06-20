import React, { useState } from 'react'
import Item from './Item'
import { observer, inject } from 'mobx-react'

function Market(props) {
    const [itemName, setItemName] = useState("")
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            props.Inventory.addItem(itemName)
            setItemName("")
        }
    }
    const handleChange = (event) => setItemName(event.target.value)
    return (
        <div>
            <div className="addItem">
                <input type="text" name="item" value={itemName} onKeyPress={handleKeyDown} onChange={handleChange} placeholder="Add an item"/>
            </div>
            <ul className="items">
                {props.Inventory.items.map((i, index) => <Item data={i} key={index} />)}
            </ul>
        </div>
    )
}

export default inject("Inventory")(observer(Market))