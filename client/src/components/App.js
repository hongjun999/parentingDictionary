import Main from "./MainPage/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Notice from "./NoticePage/Notice";
// import AdLeft from "./MainPage/AdLeft";
import LogInBox from "./MainPage/LogInBox";
import Weather from "./Weather/Weather";


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navbar />
        <div style={{ position: 'relative' }} >
          {/* <AdLeft /> */}
          {/* <LogInBox /> */}
        </div>
        <div style={{ position: 'relative' }}>
          {/* <Weather /> */}
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
