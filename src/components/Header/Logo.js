import logo from '../../img/cat.png'

const Logo = (props) => {
    return (
        <div className="logo">
            <a href="./home.html">
                <img width="100" src={logo} alt="logo" />
                {props.frase}
            </a>
        </div>
    )
}

export default Logo;