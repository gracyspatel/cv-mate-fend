import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
          <div>
            <Navbar />
              <Route exact path="/" component={ Home } />
              <div className="container">
                <Route exact path="/register" component={ Register } />
                <Route exact path="/login" component={ Login } />
              </div>
          </div>
        </Router>
  );
}

export default App;
