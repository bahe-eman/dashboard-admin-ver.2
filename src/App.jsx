import { BrowserRouter } from "react-router-dom";
import Router from "./routers";
import { global } from "./context/context";
import { useState } from "react";

function App() {
  const [dataID, setDataID] = useState(null);
  const store = {
    dataId: dataID,
    updateDataID: (value) => {
      setDataID(value);
    },
  };

  return (
    <BrowserRouter>
      <global.Provider value={store}>
        <Router />
      </global.Provider>
    </BrowserRouter>
  );
}

export default App;
