import {Link, Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Asort from "./pages/Asort";
import PageNotFound from "./pages/PageNotFound";
import Layout from "./compontents/Layout";
import './assets/Style.scss'

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path={'/'} element={<Layout/>}>
            <Route index element={<Main/>} />
            <Route path='about' element={<About/>} />
            <Route path='contact' element={<Contact/>} />
            <Route path='sort' element={<Asort/>} />
            <Route path='*' element={<PageNotFound/>} />
          </Route>
      </Routes>
    </div>
  );
}

export default App;
