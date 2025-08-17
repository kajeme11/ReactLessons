import './App.css';
import Header from "./components/Header";
import Content2 from './components/Content2';
import Footer from './components/Footer';
import { useState } from 'react';
import AddItem from './components/AddItem';
import SearchItem from './components/SearchItem';

function App() {

    //pull from local storage
    const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppingList')));
    //search
    const [search, setSearch] = useState('');
    //   const [items, setItems] = useState([
    //     {
    //         id: 1,
    //         checked: false,
    //         item: "Apples"
    //     },
    //     {
    //         id: 2,
    //         checked: false,
    //         item: "Bannanas"
    //     },
    //     {
    //         id: 3,
    //         checked: true,
    //         item: "Pears"
    //     },
    //     {
    //         id: 4,
    //         checked: false,
    //         item: "Grapes"
    //     },
    //     {
    //         id: 5,
    //         checked: true,
    //         item: "Berries"
    //     },
    // ]);

        const handleCheck = (id) => {
        const itemList = items.map((i) => 
            i.id === id 
            ? {...i, checked: !i.checked}
            : i
        );
        setAndSaveItems(itemList);
    }

    const handleDelete = (id) => {
        const listItems = items.filter((i) => i.id !== id);
        setAndSaveItems(listItems);
    }

    const [newItem, setNewItem] = useState('');

    const addItem = (item) => {
        const id = items.length ? items[items.length - 1].id + 1 : 0;
        const myNewItem = {id, checked: false, item};
        const listItems = [...items, myNewItem];
        setAndSaveItems(listItems);
    }

    const setAndSaveItems = (listItems) => {
        setItems(listItems);
        localStorage.setItem('shoppingList', JSON.stringify(listItems));
    }

    const handleSubmit = (e) =>{
    // Stop page from reloading after submitting form
        e.preventDefault();
        if(!newItem) return;
        addItem(newItem);
        console.log('submited');
        setNewItem('');
    }

  return (
    <div className="App">
      <Header />
      <AddItem newItem={newItem}
               setNewItem={setNewItem}
               handleSubmit={handleSubmit}/>
      <SearchItem 
                search={search}
                setSearch={setSearch}/>
      <Content2 items={items.filter(i => (i.item.toLowerCase()).includes(search.toLowerCase()))} 
                handleCheck={handleCheck} 
                handleDelete={handleDelete}/>
      <Footer listSize={items.length}/>
    </div>
  );
}

export default App;
