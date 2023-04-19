import './App.css';

function App() {
  return (
    <div className="App container">
      <form className="d-flex m-2">
        <label htmlfor="todo" className="m-2">Add to your To-Do list</label>
        <input className="form-control" name="" type="text"/>
        <input type="submit" value="Add" className="btn btn-primary m-2" />
      </form>
      <div>
        <table className="table">
          <thead>
            <th scope="col">#</th>
            <th scope="col">To-Do</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </thead>
          <tbody>
            <td>ID</td>
            <td>To-Do</td>
            <td>
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            </td>
            <td>
              <button type="button" className="btn-sm btn btn-dark bg-dark">Delete</button>
            </td>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
