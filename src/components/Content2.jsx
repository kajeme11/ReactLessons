import ItemList from './ItemList'

const Content2 = ({items, handleCheck, handleDelete}) => {

  return (
    <main>
        {/* If length of list is 0, then it is falsy */}
        {items.length ? 
        <ItemList items={items} handleCheck={handleCheck} handleDelete={handleDelete} />
        : <p style={{marginTop: '2rem'}}>Your list is empty</p>
        }
    </main>
  )
}

export default Content2