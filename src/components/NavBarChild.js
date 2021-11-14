const NavBarChild = (props) => (
    <form>
        <label for="username">Username</label>
        <input placeholder="username" id="username" />
        <label for="passeord">Password</label>
        <input placeholder="password" id="password" />
        <input type="submit" onClick={props.handleClick} value="Submit" />
    </form>
)

export default NavBarChild