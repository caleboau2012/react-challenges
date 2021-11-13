import React from 'react'
import css from './css/NavBarSimple.module.css'

class NavBarSimple extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "F. U.",
            loggedIn: false,
            action: "log in"
        };
    }

    handleClick = () => {
        this.setState((prevState, prevProps) => ({
            message: prevState.loggedIn ? "F. U." : "Welcome, user",
            action: prevState.loggedIn ? "log in": "log out",
            loggedIn: !prevState.loggedIn
        }));
    }

    render() {
        return (
            <div className = {css.NavBar}>
                <h1></h1>
                <span>{this.state.message}</span>
                <button onClick = {this.handleClick}>{this.state.action}</button>
            </div>
        )
    }
}

export default NavBarSimple