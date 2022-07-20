import gato1 from '../../../img/gato1.jpg'
import gato2 from '../../../img/gato2.jfif'
import gato3 from '../../../img/gato3.png'


const Section1 = () => {
    return (
        <>
            <div className="container">
                <div className="titulo-imagem">
                    <div>
                        <h1>Estamos aprendendo HTML e CSS com o melhor professor de todos!</h1>
                        <div className="gatos">
                            <div>
                                <img width="150" src={gato1} alt="Gato 1" />
                                <p>Gato 1</p>
                            </div>
                            <div>
                                <img width="150" src={gato2} alt="Gato 2" />
                                <p>Gato 2</p>
                            </div>
                            <div>
                                <img width="150" src={gato3} alt="Gato 3" />
                                    <p>Gato 3</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section1;