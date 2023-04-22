import './App.css'
import React, {useState} from 'react'
import Form from './components/Form';
import List from './components/List';

// what can change?? whatever CAN change must be put in state. --such as the text in the input box & the to dos that are displayed (items can be added and deleted-an array)

function App() {
  const [content, setContent] = useState([]);

  return (
    <div className='container'>
      <Form content={content} setContent={setContent}/>
      <List content={content} setContent={setContent}/>
    </div>
  );
}

export default App;
