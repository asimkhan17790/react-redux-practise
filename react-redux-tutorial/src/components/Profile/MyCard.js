import React from 'react';
//import { withRouter } from 'react-router-dom';
import '../../App.css';
class MyCard extends React.Component {
     render() {
     const profile = this.props;
     return (
            <div className= "github-profile">
                <img src={this.props.avatar_url}/>
                <div className="info">
                    <div className="name">{this.props.name}</div>
                    <div className="company">{this.props.company}</div>
                </div>
            </div>
          );
     }
}
export default MyCard;
