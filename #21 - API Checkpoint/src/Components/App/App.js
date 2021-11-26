import './App.css';
import {useState,useEffect} from 'react';
import axios from 'axios';
import UserList from './../UserList/UserList.js';

function App() {

  const [listOfUSer,setListOfUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      axios(`https://jsonplaceholder.typicode.com/users`)
      .then(result => { setListOfUser(result.data); setIsLoading(false);})
    }
    fetchItems();
  },[]);




  return (
    <div className="App container">

      <div className="row">
      <UserList listOfUSer={listOfUSer} isLoading={isLoading} />
      </div>

    </div>
  );
}

export default App;



{
// Create a project using create-react-app.
// Create UserList.js file in src folder
// Install axios.
// You gone to use jsonplaceholder API to get list of user 
// Use axios to Get data from Link inside useEffect hooks
// Use UseState hooks to save data into listOfUSer state 
// Map listOfUser to display list of user into screen 
// Style your App as you wish
}
