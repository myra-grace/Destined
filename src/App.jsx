import logo from './logo.svg';
import { Link, Route, Routes } from 'react-router-dom';
import { MainNav } from "./components/MainNav";
import { Home } from './pages/Home';
import { Details } from './pages/Details';
import { Admin } from './pages/Admin';
import { AdminList } from './pages/AdminList';
import { Footer } from "./components/Footer";
import { UiKit } from './pages/UiKit';

import './App.scss';
import './styles/layout.scss';
import './styles/helpers.scss';
import './styles/colors.scss'
import './styles/typography.scss'
import './styles/buttons.scss';

function App() {
  return (
    <>
      <MainNav />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/details" element={<Details />}/>
        <Route path="/admin" element={<AdminList />}/>
        <Route path="/admin/:id" element={<Admin />}/>
        <Route path="/ui-kit" element={<UiKit />}/>
      </Routes>

      <Footer />
    </>
  )
}

export default App;
