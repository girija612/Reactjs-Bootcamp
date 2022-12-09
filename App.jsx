import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Info from "./components/Info";
export default function App() {
  return (
    <div className="App">
     <Header/>
     {/* conternt */}
     <Info/>
     <Footer/>
    </div>
  );
}
