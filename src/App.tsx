import React from "react";
import { Routes, Route } from "react-router-dom";
import Mainlayout from "./components/mainlayout/Mainlayout";
import NotFoundBlock from "./components/notFoundBlock/NotFoundBlock";
import Home from "./page/home/Home";

const App = () => {

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="diarySimpel/" element={<Mainlayout />}>
          <Route path="" element={<Home />} />
        </Route>
        <Route path="*" element={<NotFoundBlock />} />
      </Routes>
    </React.Suspense>
  )
}

export default App
