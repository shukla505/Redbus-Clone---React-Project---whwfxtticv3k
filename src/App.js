import { Routes, Route, useNavigate, createSearchParams } from 'react-router-dom';
import './App.css';

import { MainPage } from "./pages/main-page"
import { NavBar } from "./component/nav-bar"
import { BusCards } from './pages/bus-cards';
import { BusCard } from './pages/bus-card';
import { NotFound } from './pages/not-found-page';
import mainPageImage from "./images/mainPageimage.png";

function App() {

  const navigate = useNavigate();

  const dataSearch = (obj) => {
    navigate(
      `/bus?${createSearchParams({ source: obj.src, destination: obj.dest })}`
    );
  };


  return (
    <div className="App">
      
      <NavBar />
      <Routes>
        <Route path="/"  element={<MainPage changeHandler={dataSearch}></MainPage>}>
        <Route path="/"  element={<img src={mainPageImage} alt="image" className='image-1'/>}></Route>
        <Route path="/bus" element={<BusCards />} />
        </Route>
        <Route path="/busName" element={<BusCard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
