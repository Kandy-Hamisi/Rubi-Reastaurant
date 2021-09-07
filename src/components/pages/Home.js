import React from 'react';
import HeroSection from '../HeroSection';
import menu from '../../statics/menus';
import Header from '../Header';
import MealCardItems from '../MealCardItems';



function Home() {
    console.log(menu);
    return ( 
        <div>
            <HeroSection
                heading="Welcome To Rubi Restaurant"
                slogan="Have a taste of delicios meals"
            />
            <Header heading="Discover the Menus"/>
            <MealCardItems />
            
        </div>
     );
}

export default Home;