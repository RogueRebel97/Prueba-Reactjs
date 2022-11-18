import './App.css';
import { useState, useEffect } from 'react'
import { UserTable } from './components/UserTable';
import { Link } from "react-router-dom";
import { User } from './components/User';


function App() {

  // users from API.
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  // async function
  const fetchData = async () => {
    await fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch((error) => {
        console.log("ERROR" + error);
      })
  }

  console.log(users);


  // Filters
  const [selectedFilter, setFilter] = useState("");

  const changeSelectedFilter = (e) => {
    // console.log("filtro actual: " + selectedFilter);
    setFilter(e.target.value)
  }

  //Query
  const [query, setQuery] = useState("");

  //Search name,email,username or phone depends on the filter
  const search = (data) => {
    const colum = selectedFilter;

    if (colum === "" || colum === "name") {
      return data.filter(
        item => item.name.toLowerCase().includes(query));
    }
    else if (colum === "username") {
      return data.filter(
        item => item.username.toLowerCase().includes(query));
    } else if (colum === "email") {
      return data.filter(
        item => item.email.toLowerCase().includes(query));
    } else {
      return data.filter(
        item => item.phone.toLowerCase().includes(query));
    }
  }


  return (
    <div className="App">
      <h1>PRUEBA DE NIVEL</h1>

      <select className='select' onChange={changeSelectedFilter}>
        <option value="">All</option>
        <option value="name">Name</option>
        <option value="username">Username</option>
        <option value="email">Email</option>
        <option value="phone">Phone</option>
      </select>

      <input type="text"
        placeholder='Search...'
        className='search'
        onChange={e => setQuery(e.target.value.toLowerCase())}
      />
      <User />
      {/* <UserTable data={search(users)} filter={selectedFilter} /> */}

    </div>
  );
}

export default App;
