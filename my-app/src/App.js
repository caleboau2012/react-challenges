import css from './App.module.css';
import NavBarForm from './components/NavBarForm';
import NavBarSimple from './components/NavBarSimple';
import SideBar from './components/Sidebar';

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      {/* <NavBarSimple /> */}
      <NavBarForm />
      <SideBar />
    </div>
  );
}

export default App;