import styles from './Footer.module.css';

const Footer = () => {
    return (
        <>
        <footer>
            <div className={styles.footer}>
                <div>
                    <nav>
                        <ul>
                            <li><a href="home.html">Home</a></li>
                            <li><a href="home.html">Sobre</a></li>
                            <li><a href="home.html">Contato</a></li>
                        </ul>
                    </nav>
                    <address>
                        AV. Andarai 531 - Porto Alegre
                    </address>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer;