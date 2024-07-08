import Main from "./MainPage/Main";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Notice from "./NoticePage/Notice";


function App() {
  return (
    <Router >
      <div className="App">
        <Navbar />
        <div style={{ position: 'relative' }} >
        </div>
        <div style={{ position: 'relative' }}>
        </div>
        <div style={{ minHeight: '75vh' }}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/notice" element={<Notice />} />
          </Routes>
        </div>
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}
export default App;
