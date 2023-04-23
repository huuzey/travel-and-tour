import axios from "axios";
import "./App.css";
import Layout from "./components/Layout/Layout";
import "./index.css";
export const BASE_URL = "http://localhost:8000/api/v1";
function App() {
  return (
    <>
      <Layout />
    </>
  );
}

export default App;
