import React, { Component } from 'react';
import "../../assets/stylesheets/Main.css";
import "./Home.css";

const headerOptions = ["Interests", "Projects", "Contact Me"];
const introText = ["Hi,\n I'm Imad", "I like elegant design & modular code"];

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
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
                        <div className="fb col intro-profile-container">
                            <div className="gradient">
                                <img src={"https://avatars2.githubusercontent.com/u/25965881?s=460&v=4"} className="intro-image" alt="intro-image"/>
                            </div>
                            {introText.map( (text) => 
                            <div className="fb animated-intro-text-container">
                              <h1 className="animated-intro-text">{text}</h1>
                            </div>  
                            )}
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