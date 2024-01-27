import Header from './components/Header.jsx'
import './App.css';
import SignUp from './components/SignUp.jsx';
import Login from './components/Login.jsx';
import LoginUseRef from './components/LoginUseRef.jsx';

function App() {
  return (   
    <>
    <Header/>
    <main>
      <h2 className='h2'>Ligin form using custom hook</h2>
      <Login/>
      <h2 className='h2'>Login form using ref</h2>
      <LoginUseRef/>
      <h2 className='h2'>SignUp form with validation</h2>
      <SignUp/>
    </main>
    </>
  );
}

export default App;
