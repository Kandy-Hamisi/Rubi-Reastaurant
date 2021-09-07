import React from 'react';
import {Link} from 'react-router-dom';
class Sidebar extends React.Component {
    constructor(){
        super();
        this.state = {
            links: ["Home", "Order", "Reserve", "Admin"]
        }
    }
    render() { 
        return (
            <div className="sidebar-section">
                <div className="sidebar">
                    <div class="sidebar-brand">
                        <h6>THis is my sidebar</h6>
                    </div>
                    <ul className="menu-nav">
                        <li className="menu-nav-item"><Link to="/" className="menu-nav-link">Home</Link></li>
                        <li className="menu-nav-item"><Link to="/order" className="menu-nav-link">Order</Link></li>
                        <li className="menu-nav-item"><Link to="/reserve" className="menu-nav-link">Reserve</Link></li>
                        <li className="menu-nav-item"><Link to="/admin" className="menu-nav-link">Admin</Link></li>
                    </ul>
                </div>
            </div>
        );
         
    }
}
 
export default Sidebar;