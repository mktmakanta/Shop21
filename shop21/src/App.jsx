import { Outlet } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main className="p-4 px-20 bg-blue-100">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
