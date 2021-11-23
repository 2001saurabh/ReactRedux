import "./App.css";
import { Provider } from "react-redux";
import CakeContainer from "./components/CakeContainer";
import store from "./redux/store";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IcecreamContainer from "./components/IcecreamContainer";
import imageCover from "./assets/nas.jpg";
import NewcakeContainer from "./components/NewcakeContainer";

function App() {
  return (
    // only provider component is not enough to connect
    // we pass in a prop which specify what provider provide to react app?
    <Provider store={store}>
      <div
        className="App"
        style={{
          padding: 100,
          backgroundImage: `url(${imageCover})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <div
          className="ui center aligned container segment"
          style={{
            backgroundColor: "#A7EEF2",
            padding: 40,
            width: 600,
            borderRadius: 10,
          }}
        >
          <CakeContainer />
          <HooksCakeContainer />
          <IcecreamContainer />
          <NewcakeContainer />
        </div>
      </div>
    </Provider>
  );
}

export default App;
