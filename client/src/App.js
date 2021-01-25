import Route from "routes";
import { baseStyles } from "styles/baseStyles";

function App() {
  return (
    <div style={main} className="App">
      <Route />
    </div>
  );
}

export default App;

const main = {
  color: baseStyles.textColor,
};
