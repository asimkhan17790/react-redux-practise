import React from 'react';
import '../../App.css';
import axios from 'axios';
class MyForm extends React.Component {
// Handle Errors
// handle Invalid input
    constructor(props) {
        super(props);
        this.state = {
            userName : ''
        }
    }
    //userNameInput = React.createRef();
    handleSubmit = async (event) => {
        event.preventDefault();
        const response = await axios.get(`https://api.github.com/users/${this.state.userName}`);
        console.log(response.data);
        this.props.onSubmit(response.data);
        this.setState({userName:''});
    }
     render() {
     return (<div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={event=>this.setState({userName:event.target.value})} type="text" placeholder="Github username" /*ref={this.userNameInput}*/ value = {this.state.userName} required/>
                    <button>Add Card</button>
                </form>
            </div>);
     }
}
export default MyForm;
