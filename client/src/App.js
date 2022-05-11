import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/Home';
import NoMatch from './components/shared/NoMatch';
import MainNavbar from './components/shared/MainNavbar';
import Footer from './components/shared/Footer';
import Messages from './components/messages/Messages'

const App = () => (
  <>
    <MainNavbar />
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
    </>
    <Footer />
  </>
)

export default App;
