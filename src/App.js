import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Ah from "./components/Ah";
import Eun from "./components/Eun";
import FaceBook from "./components/FaceBook";
import Front from "./components/Front";
import Home from "./components/Home";
import Hyun from "./components/Hyun";
import Insta from "./components/Insta";
import Intro from "./components/Intro";
import MainNav from "./components/MainNav";
import Promote from "./components/Promote";
import Sns from "./components/Sns";
import Story from "./components/Story";
import Track from "./components/Track";
import Vision from "./components/Vision";
import FrontEnd from "./components/FrontEnd";
import BackEnd from "./components/BackEnd";
import Design from "./components/Design";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainNav />}>
          <Route index element={<Home />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/track" element={<Track />} />
          <Route path="/promote" element={<Promote />} />
          <Route path="/sns" element={<Sns />} />
          <Route path="/sns/@likelion.knu" element={<Insta />} />
          <Route path="/sns/knulikelion" element={<FaceBook />} />
          <Route path="/story" element={<Story />} />
          <Route path="/about" element={<About />} />
          <Route path="/front" element={<Front />} />
          <Route path="/front/eun" element={<Eun />} />
          <Route path="/front/ah" element={<Ah />} />
          <Route path="/front/hyun" element={<Hyun />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/frontend" element={<FrontEnd/>}/>
          <Route path="/backend" element={<BackEnd/>}/>
          <Route path="/design" element={<Design/>}/>
        </Route>
      </Routes>
    </>
  );
};

export default App;
