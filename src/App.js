import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import DetailPage from './componentes/DetailPage';
import Home from './componentes/Home'
import Products from './componentes/Products';

function App() {
    return (
        <Router>
            <Switch>
                <Route strict exact path="/" component={Home}/>
                <Route strict path="/items/:id" component={DetailPage}/>
                <Route strict path="/items/search/:query" component={Products}/>



            </Switch>
        </Router>
    );
}

export default App;
