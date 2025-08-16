import './App.css';
import Header from "./components/Header";
import Content2 from './components/Content2';
import Footer from './components/Footer';
import { useState } from 'react';
import AddItem from './components/AddItem';

function App() {

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
        const itemList = items.map((i) => 
            i.id === id 
            ? {...i, checked: !i.checked}
            : i
        );
        setItems(itemList);
        localStorage.setItem('shoppingList', JSON.stringify(itemList));
    }

    const handleDelete = (id) => {
        const listItems = items.filter((i) => i.id !== id);
        setItems(listItems);
    }

  return (
    <div className="App">
      <Header />
      <AddItem />
      <Content2 items={items} 
                handleCheck={handleCheck} 
                handleDelete={handleDelete}/>
      <Footer listSize={items.length}/>
    </div>
  );
}

export default App;
