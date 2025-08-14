import { useState } from "react"
import {FaTrashAlt} from 'react-icons/fa'

const Content2 = () => {

    const [items, setItems] = useState([
        {
            id: 1,
            checked: false,
            item: "Apples"
        },
        {
            id: 2,
            checked: false,
            item: "Bannanas"
        },
        {
            id: 3,
            checked: true,
            item: "Pears"
        },
        {
            id: 4,
            checked: false,
            item: "Grapes"
        },
        {
            id: 5,
            checked: true,
            item: "Berries"
        },
    ]);

    const handleCheck = (id) => {
        const listItems = items.map((i) => i.id === id 
        ? {...i, checked: !i.checked} 
        : i);

        setItems(listItems);
    }

  return (
    <main>
        <ul>
            {items.map((i) => {
                return <li key={i.id} className="item" 
                            onChange={() => handleCheck(i.id)}>
                
                    <input type="checkbox" checked={i.checked}/>
                    <label>{i.item}</label>
                    <FaTrashAlt role="button" tabIndex="0" />
                </li>
            })}
        </ul>
    </main>
  )
}

export default Content2