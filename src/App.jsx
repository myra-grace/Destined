import logo from './logo.svg';
import { Link, Route, Routes } from 'react-router-dom';
import { MainNav } from "./components/MainNav";
import { Home } from './pages/Home';
import { Sessions } from './pages/Sessions';
import { Facilitators } from './pages/Facilitators';
import { FacilitatorList } from './pages/FacilitatorList';
import { Footer } from "./components/Footer";
import { UiKit } from './pages/uiKit';

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

      <Routes basename={process.env.PUBLIC_URL}>
        <Route path="/" element={<Home />}/>
        <Route path="/sessions" element={<Sessions />}/>
        <Route path="/facilitators" element={<FacilitatorList />}/>
        <Route path="/facilitators/:id" element={<Facilitators />}/>
        <Route path="/ui-kit" element={<UiKit />}/>
      </Routes>

      <Footer />
    </>
  )
}

export default App;

// TODO:
// Footer styles
// Landing page - Poster, checklist, & contact to buy ticket.
// Homepage icons w/ text location cards. Church, Cottage, Gym, Hiking.
// Schedule titles links to session details. Accorion only opens when click day or empty gray space.
// Schedule item colors.
// Music page & theme song "Destined for greatness."
