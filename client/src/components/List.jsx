import React, {useState} from 'react'

const List = ({content, setContent}) => {
    const [checkedItem, setCheckedItem] = useState([]);


    const handleCheckbox = (e, index) => {
        e.target.checked
        ? setCheckedItem([...checkedItem, index]) :
        setCheckedItem(checkedItem.filter((i)=> i !== index))
    }

    const deleteItem = (index) => {
        const filterContent = content.filter((e, i)=> i !== index);
        setContent(filterContent);
    }

    return (
    <div>
        <h1>To-Do List</h1>
        {
        content.map((list, i) => {
            return(
                <div id="div" key={i} className='d-flex m-2'>
                    <h3 style={{textDecoration: checkedItem.includes(i) ? 'line-through' : 'none'}}>{list.todo}</h3>
                    <input type="checkbox" className="form-check-input" value="true" onChange={(e) => handleCheckbox(e, i)} checked={checkedItem.includes(i)} />
                    <button onClick={()=> deleteItem(i) } className='btn btn-dark btn-sm'>Delete</button>
                </div>
                )
            }
            )
        }

    </div>
    )
}

export default List