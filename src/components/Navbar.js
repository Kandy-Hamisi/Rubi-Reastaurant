import React from 'react';
import styled from 'styled-components';



const CardButton = styled.button`
  background-color: #fff;
  border-radius: 2px;
  padding: 10px 5px;
  border: none;
  outline: none;
  transition: 0.3s ease;
  
  &:hover{
    background-color: pink;
    color: #fff
  }
`;

const myDate = new Date();
const myHrs = myDate.getHours();
// const openHours = "8 AM";

class Navbar extends React.Component {

    

    constructor() {
        super();

        this.state = {
            openHrs: 8
        }
    }

    render() {
        return (
            <div className="navbar-section">
                <div className="navbar-brand">
                    <h4>{this.props.brandName}</h4>
                </div>
                    <div className="open-at">
                        <CardButton className="button-card">
                            {}
                            {(this.state.openHrs - myHrs === 1) ? "Opening in an hour":
                                (myHrs >= this.state.openHrs) ? "We are open now" : "We are closed now"
                        }
                        </CardButton>
                    </div>
                    <div className="order-online">
                        <CardButton className="button-card">
                            {this.props.btnInfo}
                        </CardButton>
                    </div>
            </div>
        );
    }
}


 
export default Navbar;