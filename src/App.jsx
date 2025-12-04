import "./App.css";
import PopUser from "./components/popups/popUser.jsx";
import PopNewCard from "./components/popups/popNewCard.jsx";
import PopBrowse from "./components/popups/popBrowse.jsx";
import Header from "./components/Header/header.jsx";
import Main from "./components/Main/main.jsx";

function App() {

  return (
    <>
      <div className="wrapper">
        {/* pop-up start */}
        <PopUser />
        <PopNewCard />
        <PopBrowse />
        {/* pop-up end */}
        <Header />
        <Main />
      </div>
    </>
  );
}
export default App;