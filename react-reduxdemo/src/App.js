import "./App.css";
import { Provider } from "react-redux";
import CakeContainer from "./components/CakeContainer";
import store from "./redux/store";
import HooksCakeContainer from "./components/HooksCakeContainer";

function App() {
  return (
    // only provider component is not enough to connect
    // we pass in a prop which specify what provider provide to react app?
    <Provider store={store}>
      <div className="App">
        {/* <CakeContainer /> */}
        <HooksCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
