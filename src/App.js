import logo from './logo.svg';
import './App.css';
import SideNav from './SideNav';



function App(props, state) {
  return (
    <div className='container'>
      <SideNav name='User' width={wid} closeNav={closeSidenav}/>
    </div>
  );
}

export default App;
