import "./App.css";
import TrafficLights from "./components/TrafficLights";

function App() {
  return (
    <div className="App">
      <h1>Демонстрація світлофорів</h1>

      <div className="traffic-light-section">
        <h2>Вертикальний світлофор</h2>
        <div className="traffic-light-wrapper">
          <TrafficLights orientation="vertical" />
        </div>
      </div>

      <div className="traffic-light-section">
        <h2>Горизонтальний світлофор</h2>
        <div className="traffic-light-wrapper">
          <TrafficLights orientation="horizontal" />
        </div>
      </div>
    </div>
  );
}

export default App;