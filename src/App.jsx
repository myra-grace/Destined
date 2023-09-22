import { Route, Routes } from 'react-router-dom';
import { Header } from "./components/Header";
import { Home } from './pages/Home';
import { Music } from './pages/Music';
import { Sessions } from './pages/Sessions';
import { Facilitators } from './pages/Facilitators';
import { Portal } from './pages/Portal';
import { Landing } from './pages/Landing';
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
      <Header />

      <Routes basename={process.env.PUBLIC_URL}>
        <Route path="/" element={<Home />}/>
        <Route path="/music" element={<Music />}/>
        <Route path="/sessions" element={<Sessions />}/>
        <Route path="/portal" element={<Portal />}/>
        <Route path="/portal/:id" element={<Facilitators />}/>
        <Route path="/ui-kit" element={<UiKit />}/>
        <Route path="/landing" element={<Landing />}/>
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
