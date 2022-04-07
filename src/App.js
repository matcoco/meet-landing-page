import Footer from "./components/footer/Footer";
import Gallery from "./components/gallerie/Gallery";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Separation from "./components/_shared/Separation";
import './scss/styles.scss';

function App() {
  return (
    <div className="main">
      <Nav />
      <Header />
      <Separation text="01"/>
      <Gallery />
      <div className="section2">
        <h3>BUILD FOR MODERN USE</h3>
        <p  className="title-text1">Smarter meetings, all in one place</p>
        <p className="text1">Send messages, share files, show your screen, and record your meetings — all in one workspace. Control who can join with invite-only team access, data encryption, and data export.</p>
      </div>
      <div className="s2">
        <Separation text="02"/>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
