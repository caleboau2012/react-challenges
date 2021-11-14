import React from 'react'
import css from './css/NavBarForm.module.css'
import NavBarChild from './NavBarChild';

class NavBarForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            action: "log in"
        };
    }

    handleClick = () => {
        this.setState((prevState, prevProps) => ({
            isLoggedIn: !prevState.isLoggedIn,
            action: prevState.isLoggedIn ? "log in" : "log out",
        }));
    }

    render() {
        return (
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                {this.state.isLoggedIn ?
                    <NavBarChild handleClick={this.handleClick} /> : <button onClick={this.handleClick}>{this.state.action}</button>}
            </div>
        )
    }
}

export default NavBarForm