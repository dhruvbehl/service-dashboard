import NavBarSide from '../components/NavBarSide.js';
import Header from '../components/Header.js';

export default ({ children = 'Something went wrong :(' }) => (
    <div>
        <div className="app">
            <Header/>
            <div className="row">
                <NavBarSide/>
            <div className="col-md-10">
                {children}
            </div>
            </div>
        </div>
    </div>
)