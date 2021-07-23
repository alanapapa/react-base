import {useState} from "react"
import './App.css';

function App() {
  const [name, setName] = useState("Egemen")
  const [age, setAge] = useState(22)
  const [friends, addFriends] = useState(['Tommy', 'Jerry', 'Marry'])
  const [address, setAddress] = useState({
    title: "Antalya",
    zip: 754
  })

  return (
    <div className="App">
    <h1>Merhaba {name}! ({age})</h1>
    <button onClick={()=> setName("Bodan")}>Name Change</button>
    <button onClick={()=> setAge(44)}>Age Change</button>
    <hr />
    <h2>friends:</h2>
    {friends.map((friend, key) => (
        <div key={key}>{friend}</div>
    ))}
    <button onClick={()=> addFriends([...friends, "Harry"])}>Add friend</button>
    <hr />
    <h2>address:</h2>
    <div>{address.title} {address.zip}</div>
    <br />
    <button onClick={() => setAddress({ ...address, zip: 333 })}>click</button>

    </div>
  );
}

export default App;
