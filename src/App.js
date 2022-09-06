import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import History from "./Components/History";
import Home from "./Components/Home";
import PlayVideo from "./Components/PlayVideo";
import WatchLater from "./Components/WatchLater";
import store  from "./redux/store";

function App() {

  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/:id" element={<PlayVideo/>} />
          <Route path="/history" element={<History/>} />
          <Route path="/watchlater" element={<WatchLater/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
    </>
  );
}

export default App;
