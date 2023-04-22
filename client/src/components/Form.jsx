import React,{useState} from 'react'

const Form = ({content, setContent}) => {

    const [toDo, setToDo] = useState({
        todo: "",
        complete: false
    })
    
    const changeHandler = (e) => {
        setToDo({...toDo,[e.target.name]: e.target.value})
    }
    const submitHandler = (e) => {
        e.preventDefault();
        setContent([...content, toDo]);
        setToDo({
            todo:""
        });
    }


    return (
    <div className='container'>
        <div className="row">
            <form action="" className='col-md-4' onSubmit={ submitHandler }>
                <div className="form-group">
                    <label htmlFor="todo" />
                    <input type="text" className="form-control m-2" id="todo" name="todo" onChange={changeHandler} value={toDo.todo}/>
                    <button className="btn btn-dark m-2">Add</button>
                </div>
            </form>
        </div>
    </div>
    )
}

export default Form