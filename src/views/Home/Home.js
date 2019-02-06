import React, { Component } from 'react';
import "../../assets/stylesheets/Main.css";
import "./Home.css";

const headerOptions = ["Interests", "Projects", "Contact Me"]

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="main fb col">
                <div className="header fb row">
                    
                    {headerOptions.map( (option, index) =>
                        <div className="fb center option-container"> 
                            <p className="option">{option}</p>
                        </div>
                    )}
                    
                </div>

                <div className="body fb col">

                </div>
            </div>
            );
    
    }
}
 
export default Home