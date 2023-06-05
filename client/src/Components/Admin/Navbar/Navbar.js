import './navbar.css';
import Header from '../../Header/Header';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <Header></Header><br></br>
            <div className="nav">
                <navigation>
                    <NavLink to="/admin" className="rev">
                        Reviews
                    </NavLink>
                    <NavLink to="/add-restaurant" className="add-res">
                        Add Restaurant
                    </NavLink>
                </navigation>
            </div>

        </div>

    );
};

export default Navbar;