import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/Home";
import Layout from "./components/Layout/layout";
import { CovidProvider } from "./Context/context";
import IndonesiaPage from "./pages/Indonesia";
import GlobalStye from "./components/GlobalStyle/globalStyle";
import IndonesiaLocalPage from "./pages/Provinsi";
import About from "./pages/About";

function App() {
  return (
    <CovidProvider>
      <GlobalStye />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/covid/indonesia" element={<IndonesiaPage />} />
          <Route path="/covid/indonesia/local" element={<IndonesiaLocalPage />} />
          <Route path="/covid/about" element={<About />} />
        </Routes>
      </Layout>
    </CovidProvider>
  );
}

export default App;
