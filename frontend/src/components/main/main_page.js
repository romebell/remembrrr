import React from 'react';
import logo from '../../images/memory.png';

class MainPage extends React.Component {
  render() {
    return (
      <div className="main-page">
        <div className="main-page-description">
            <div className="main-page-description-one">
              <p>
                Enhance your <span className="highlight">memory</span>
              </p>
            </div>  
            <img src={logo} className="home-logo" alt="Logo" />
            {/* <div className="picture"> */}
              {/* <p>hello</p> */}
            {/* <img src="../frontend/images/memory.png" /> */}
            {/* </div> */}
            <div className="main-page-description-two">
              <p>
                <span className="highlight">RememberX</span> is an application based on the spaced repetition learning technique. <br/><br/>Learners review information at gradually increasing intervals for enhanced memory
              </p>
            </div>  
          <button id="main-page-get-started" onClick={() => this.props.openModal('signup')}>Get Started</button>
        </div>
        <div className="main-page-image"></div>
      </div>
    );
  }
}

export default MainPage;