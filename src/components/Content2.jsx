import {FaTrashAlt} from 'react-icons/fa'

const Content2 = ({items, handleCheck, handleDelete}) => {


  return (
    <main>
        {/* If length of list is 0, then it is falsy */}
        {items.length ? 
        <ul>
            {items.map((i) => {
                return <li key={i.id} className="item" 
                            onChange={() => handleCheck(i.id)}>
                
                    <input type="checkbox" checked={i.checked}/>
                    <label htmlFor={`checkbox-${i.id}`}
                            style={(i.checked) ? {textDecoration: 'line-through'} : null}
                            onDoubleClicked={() => handleCheck(i.id)}
                    >{i.item}</label>
                    <FaTrashAlt role="button" tabIndex="0" onClick={() => handleDelete(i.id)}/>
                </li>
            })}
        </ul>
        : <p style={{marginTop: '2rem'}}>Your list is empty</p>
        }
    </main>
  )
}

export default Content2