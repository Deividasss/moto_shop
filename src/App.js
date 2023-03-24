import './App.css';
import Navigation from './components/Navigation/Navigation';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MotoProductsList from './components/MotoShop/MotoProductsList';
import DetailsScreen from './screens/HomeScreen/DetailsScreen/DetailsScreen';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path='/' element={<HomeScreen />} />
        <Route exact path="/category/:category" element={<MotoProductsList />} />
        <Route exact path="details/:product" element={<DetailsScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
