import React from 'react';
import menu from '../statics/menus';
import styled from 'styled-components';


const OutlineBtn  = styled.button `
    border: 1px solid #000;
    padding: 10px 5px;
    border-radius: 20px;
    position: relative;
    background: transparent;
`;

const mealTypes = menu.map((item) =>
    <li key={item.mealId}><OutlineBtn>{item.mealType}<span className="mealcount">{item.mealName.length}</span></OutlineBtn></li>
);
function MealNav() {
    return ( 
        <div>
            <ul className="mealtypes">
                {mealTypes}
            </ul>
        </div>
     );
}

export default MealNav;