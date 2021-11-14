import logo from './logo.svg';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import CheckoutScreen from './screens/CheckoutScreen';
import CheckinScreen from './screens/CheckinScreen';
import SignInScreen from './screens/SignInScreen';

function App() {
  return (
    // <HomeScreen />
    <Router>
      <Routes>
        <Route path="/" element={<SignInScreen />} />
        <Route exact path="/home" element={<HomeScreen />} />
        <Route path='/checkout/:id' element={<CheckoutScreen />} />
        <Route path='/checkin/:id' element={<CheckinScreen />} />
      </Routes>
    </Router >
  );
}

export default App;
