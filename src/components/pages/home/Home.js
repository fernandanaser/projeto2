import Footer from '../../Footer/Footer.js';
import Header from '../../Header/Header.js';
import Section1 from './Section1.js';
import Section2 from './Section2.js';
import Section3 from './Section3.js';

import '../../styles.css'

const Home = () => {
    return(
        <>
        <Header />
        <Section1 />
        <Section2 />
        <Section3 />
        <Footer />
        </>
    )
}

export default Home;