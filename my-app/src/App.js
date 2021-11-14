import css from './App.module.css';
import Content from './components/Content';
import NavBarForm from './components/NavBarForm';
import SideBar from './components/Sidebar';

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      {/* <NavBarSimple /> */}
      <NavBarForm />
      <SideBar />
      <Content />
    </div>
  );
}

export default App;