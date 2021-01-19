import Home from "pages/Home";
import { baseStyles } from "styles/baseStyles";

function App() {
  return (
    <div style={main} className="App">
      <Home />
    </div>
  );
}

export default App;

const main = {
  color: baseStyles.textColor,
};
