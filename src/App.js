
import './Reset.css';
import Logo from './components/Logo';
import Nav from './components/Nav';
import NavTwo from './components/NavTwo';
import Search from './components/Search';
import Header from './layouts/Header';

function App() {


  return (
    <div >
      <Header>
        <Logo />
        <Search />
        <Nav /> 
      </Header>
      <Header>
        <NavTwo /> 
      </Header>
    </div>
  );
}

export default App;
