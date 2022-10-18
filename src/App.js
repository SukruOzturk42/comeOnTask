import Routers from "./app/routes/Routes";

import "./App.css";

function App() {
  const isAuthorized = localStorage.getItem("player") != null;

  return (
    <>
      <Routers />
    </>
  );
}

export default App;
