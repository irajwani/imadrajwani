import React, { Component } from 'react';
import "../../assets/stylesheets/Main.css";
import "./Home.css";

const headerOptions = ["Interests", "Projects", "Contact Me"];
const introOne = "Hi, I'm Imad";
const introTwo = "I like elegant design and modular code"

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
                    
                    <div className="fb row intro-container">
                        <div className="fb intro-text-container">
                            <div className="animated-intro-text-container">
                                <p className="intro-text">{introOne}</p>
                            </div>
                            
                        </div>
                        <div className="fb col intro-image-container">

                        </div>
                        <div className="fb col intro-links-container">

                        </div>
                    </div>

                    <div className="fb col rest-container">

                    </div>


                </div>
            </div>
            );
    
    }
}
 
export default Home