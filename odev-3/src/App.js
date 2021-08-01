import './App.css';
import {WeatherProvider} from "./context/WeatherContext";
import WeatherContainer from "./components/WeatherApp/WeatherContainer";

function App() {
  return (
      <WeatherProvider>
          <WeatherContainer />
      </WeatherProvider>
  );
}

export default App;
