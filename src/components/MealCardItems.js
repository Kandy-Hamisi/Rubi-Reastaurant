import React from 'react';
import menu from '../statics/menus';
import styled from 'styled-components';

// const mealCards = menu.map((item) => {
//     <ul>
//         <li>
//             <div className="my-card">
//                 <div className="card-heading">
//                     <h6>{item.mealType}</h6>
//                 </div>
//             </div>
//         </li>
//     </ul>
// });

const OutlineBtn  = styled.button `
    border: 1px solid #000;
    padding: 10px 5px;
    border-radius: 20px;
    position: relative;
    background: transparent;
`;
// const mealTypes = menu.map((item) =>
//     <li key={item.mealId}>
        
//             {item.mealName.map((items) => {
//                 return <OutlineBtn>{items}</OutlineBtn>
//             })}
        
//     </li>
// );

const mealListing = menu.map((item) => {
   return <>{item.mealName.map((items) => {
        return <li>{items.itemName}</li>
    })}</>
});

function MealCardItems() {
    return ( 
        <div className="">
            <ul>
                {mealListing}
            </ul>
        </div>
     );
}

export default MealCardItems;