import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Principal } from "./pages/Principal";
import Images from "./pages/Images";
import { NotFound } from "./pages/NotFound";

function App(props) {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Principal />} />
          <Route exact path="/images" element={<Images />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
