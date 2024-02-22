
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Form/Login';
import TableStaff from './Components/Table/Staff';

function App() {
  return (
    <div className="App">
      <Login />
      <br />
      <TableStaff />
    </div>
  );
}

export default App;
