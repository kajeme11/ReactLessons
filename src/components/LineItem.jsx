import {FaTrashAlt} from 'react-icons/fa'

const LineItem = ({i, handleCheck, handleDelete}) => {
  return (
    <li className="item">
        <input type="checkbox" checked={i.checked} onChange={() => handleCheck(i.id)}/>
        <label htmlFor={`checkbox-${i.id}`}
                style={(i.checked) ? {textDecoration: 'line-through'} : null}
                onDoubleClick={() => handleCheck(i.id)}
        >{i.item}</label>
        <FaTrashAlt 
            role="button" 
            tabIndex="0" 
            onClick={() => handleDelete(i.id)}
            aria-label={`Delete ${i.item}`}/>
    </li>
  )
}

export default LineItem