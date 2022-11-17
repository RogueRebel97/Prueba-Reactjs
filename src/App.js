import './App.css';
import { useState, useEffect } from 'react'
import { UserTable } from './components/UserTable';
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
        console.log("ERROR:" + error);
      })
  }

  console.log(users);


  // Filters
  const [filter, setFilter] = useState();

  function changeFilter(e) {
    setFilter(e.target.value);
    console.log(e.target.value);
    console.log(filter);
  }

  // function getList() {
  //   if (!filter) {
  //     return
  //   }
  // }
  //Filters
  // const filters = ["name", "username", "email", "phone"];

  //Query
  const [query, setQuery] = useState("");



  const search = (data) => {
    return data.filter(
      item => item.name.toLowerCase().includes(query));
  }


  return (
    <div className="App">
      <h1>PRUEBA DE NIVEL</h1>

      <select className='select' onChange={changeFilter}>
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
      <UserTable data={search(users)} />

      <User data={users} />

    </div>
  );
}

export default App;
