import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import Display from "./Display";
import Insert from "./Insert";
import Edit from "./Edit";
import Editrec from "./Editrec";
import Delete from "./Delete";
import Name from "./Name";
import Author from "./Author";
import Publisher from "./Publisher";
import Id from "./Id";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Display" element={<Display />} />
          <Route path="/Insert" element={<Insert />} />
          <Route path="/Edit" element={<Edit />} />
          <Route path="/Editreco/:id" element={<Editrec />} />
          <Route path="/Delete" element={<Delete />} />
          <Route path="/Name" element={<Name />} />
          <Route path="/Author" element={<Author />} />
          <Route path="/Publisher" element={<Publisher />} />
          <Route path="/Id" element={<Id />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
