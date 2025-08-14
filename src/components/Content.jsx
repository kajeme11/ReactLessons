import {useState} from 'react'


const Content = () => {

    const [count, setCount] = useState(0);
    const [fruit, setFruits] = useState("apple");
    const [groceries, setGroceries] = useState(["apples", "bannanas", "pears", "grapes"]);

    const handleGroceries = () => {
        const n = Math.floor(Math.random() * groceries.length);
        setFruits(groceries[n]);
        return fruit;
    }

    const handleClick = (name) => {
        console.log(`${name} was clicked`);
    }
    const handleClick2 = (name) => {
        setCount(count + 1);
        console.log(count);
    }

    const handleClick3 = (event) => {
        console.log(event.target);
        console.log(event.target.innerText)
        console.log(event);
    }
    
  return (
    <main>
        <p onDoubleClick={handleClick}>You need to get {fruit} !</p>
        <button onClick={handleGroceries}>Change fruit</button>
        <button onClick={() => handleClick2()}>Click</button>
         <button onClick={(e) => handleClick3(e)}>Click</button>
    </main>
  )
}

export default Content