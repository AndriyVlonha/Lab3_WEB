import "./App.css";
import TrafficLights from "./components/TrafficLights";

function App() {
  return (
    <div className="App">
      <h1 className="app-title">Демонстрація світлофорів</h1>

      <div className="traffic-light-section">
        <h2 className="section-title">Вертикальний світлофор</h2>
        <div className="traffic-light-wrapper">
          <TrafficLights orientation="vertical" />
        </div>
      </div>

      <div className="traffic-light-section">
        <h2 className="section-title">Горизонтальний світлофор</h2>
        <div className="traffic-light-wrapper">
          <TrafficLights orientation="horizontal" />
        </div>
      </div>
    </div>
  );
}

export default App;