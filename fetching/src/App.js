import './App.css';
import UsersAxios from './components/axios-fetch';
import Users from './components/native-fetch';

function App() {
  return (
    <div className="App">
    {/* <Users /> */}
    <UsersAxios />
    </div>
  );
}

export default App;
