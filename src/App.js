import css from "./App.module.css";
// import Content from "./components/Content";
import ContentAPI from "./components/ContentAPI";
// import Content from "./components/Content";
// import ContentHooks from "./components/ContentHooks";
import NavBarForm from "./components/NavBarForm";
import SideBar from "./components/Sidebar";

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      {/* <NavBarSimple /> */}
      <NavBarForm />
      <SideBar />
      {/* <Content /> */}
      {/* <ContentHooks /> */}
      <ContentAPI />
    </div>
  );
}

export default App;
