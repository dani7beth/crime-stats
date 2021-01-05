import "./App.css";
import { CrimeChart } from "./CrimeChart";
import { UtahCrimeChart } from "./UtahCrimeChart";
function App() {
  return (
    <div className="flex-container">
      <div className="flex-child">
        <h1>Texas Crime Data</h1>
        <br />
        <CrimeChart />
      </div>
      <div className="flex-child">
        <h1>Utah Crime Data</h1>
        <br />
        <UtahCrimeChart />
      </div>
    </div>
  );
}

export default App;
