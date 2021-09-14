import "./App.css";

import Map from "./components/Map";
import IpSearchArea from "./components/IpSearchArea";

import IpContextAProvider from "./context/IpContext";

function App() {
  return (
    <div className="App">
      <IpContextAProvider>
        <IpSearchArea />
        <Map />
      </IpContextAProvider>
    </div>
  );
}

export default App;
