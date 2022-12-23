import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import{ BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Cards from './component/Cards';
import CardsDetails from './component/CardsDetails';
function App() {
  return (
   <div>
   <Router>
   <Routes>
   <Route exact path='/' element={<Header/>}></Route>
   <Route exact path='/card' element={<Cards/>}></Route>
   <Route exact path='/cardetails/:id' element={<CardsDetails/>}></Route>
   </Routes>
    </Router>
   </div>
  );
}

export default App;
