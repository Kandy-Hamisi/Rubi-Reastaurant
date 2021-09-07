import React from 'react';
import MealNav from './MealNav';


class Header extends React.Component {
    render() { 
        return (
            <div className="discover-section">
                <div className="discover-intro">
                    <h1 className="dicover-title title">Discover The Menus</h1>
                    <MealNav />
                </div>
            </div>
        )
    }
}
 
export default Header;