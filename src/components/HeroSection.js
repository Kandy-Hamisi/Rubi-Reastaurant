import React from 'react';



class HeroSection extends React.Component {
    render() { 
        return ( 
            <div className="hero-section">
                <div className="hero-content">
                    <div className="hero-title title">
                        <h1>{this.props.heading}</h1>
                    </div>
                    <div className="slogan">
                        <h4>{this.props.slogan}</h4>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default HeroSection;