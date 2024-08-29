import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HomeScreen } from "./screens/HomeScreen";

function App() {
  return (
    <>
      <Header />
      <main className="p-4 px-20">
        <HomeScreen />
      </main>
      <Footer />
    </>
  );
}

export default App;
