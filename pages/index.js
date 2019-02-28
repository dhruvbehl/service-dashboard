import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarSide from '../components/NavBarSide.js';
import Header from '../components/Header.js';
export default () => (
    <div className="app">
            <Header/>
            <div className="row">
                <NavBarSide/>
            <div className="col-md-10">
                
            </div>
            </div>
    </div>
)