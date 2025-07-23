function Header({onDarkModeClick}){
return(
    <div>
        <h1>  My App</h1>
            <button onClick={onDarkModeClick}>Toggle Dark Mode</button>
    </div>
)
}
export default Header;