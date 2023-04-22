import './App.css';
import React, {useState} from 'react'

// what can change?? whatever CAN change must be put in state. --such as the text in the input box & the to dos that are displayed (items can be added and deleted-an array)

function App() {
  const [newContent, setNewContent] = useState('');
  const [displayedContent, setDisplayedContent] = useState([]);

  const handleSubmit = (e) => {e.preventDefault();

    return( newContent.length === 0 ? <p>Can not submit empty field</p> : null )

    if (newContent.length === 0 ){
      return
    }

    setDisplayedContent([...displayedContent, newContent]) 
    // passing in a new data type(array) which will tell it to update the state. We want it contain all the old items plus the new
    setNewContent('');
  };

  const handleDelete = (idx) => {
    const filterContent = displayedContent.filter((displayedContent, i)=> {
      return i !== idx;
    });
    setDisplayedContent(filterContent);
  }

  const handleCheckBox = (idx) => {
    const updateContent = displayedContent.map((displayedContent, i) => {
      if (idx === i) { 
        displayedContent.complete = !displayedContent.complete;
      }
      return displayedContent;
    });
    setDisplayedContent(updateContent);
  }

  return (
    <div className="App container">
      <form onSubmit={handleSubmit} className="d-flex m-2">
        <label htmlfor="todo" className="m-2">Add to your To-Do list</label>
        <input onChange={(e) => setNewContent(e.target.value)} className="form-control" value={newContent} type="text"/>
        <input type="submit" value="Add" className="btn btn-primary m-2" />
      </form>

      {displayedContent.map((displayedContent, i)=> {
        const contentClasses = [];
        
        if (displayedContent.complete) {
          contentClasses.push('line-through');
        }
        return (
          <div className="m-2" key={i}>
            <input onChange={(e)=> {handleCheckBox(i)}} 
              checked={displayedContent.complete} 
              className="form-check-input m-2" 
              type="checkbox" 
              id="flexCheckDefault"/>
          <div className={contentClasses.join(' ')}> 
            {displayedContent}
          </div>
          <button onClick={(e) => {handleDelete(i)}} type="button" className="ml-2 btn-sm btn btn-dark bg-dark">
            Delete
          </button>
          </div>)} 
        )
  }
    </div>
  );
}

export default App;
