import Logo from './Logo.js';
import Navbar from './Navbar.js';
import styles from './Header.modules.css'

const Header = () => {
    return (
        <>
            <div className={styles.header}>
                <div className="container">
                    <Logo frase="Melhores alunos do VemSer"/>
                    <Navbar/>
                </div>
            </div>
        </>
    )
};

export default Header;
