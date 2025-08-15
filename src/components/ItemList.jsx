import LineItem from "./LineItem"
//rafce
const ItemList = ({items, handleCheck, handleDelete}) => {
  return (
     <ul>
            {items.map((i) => {
                return <LineItem key={i.id} i={i}
                                 handleCheck={handleCheck}
                                 handleDelete={handleDelete}/>
            })}
        </ul>
  )
}

export default ItemList