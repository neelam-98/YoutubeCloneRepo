import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import PlayVideo from "./Components/PlayVideo";



function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/:id" element={<PlayVideo/>} />
      {/* <Route path="/video/:id/:id" element={<PlayVideo/>} /> */}
     </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
