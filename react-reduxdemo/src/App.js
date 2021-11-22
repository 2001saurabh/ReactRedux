import "./App.css";
import { Provider } from "react-redux";
import CakeContainer from "./components/CakeContainer";
import store from "./redux/store";

function App() {
  return (
    // only provider component is not enough to connect
    // we pass in a prop which specify what provider provide to react app?
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
