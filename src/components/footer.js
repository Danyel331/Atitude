import React from 'react'
import './footer.css'
const Footer = () => {
    return (
        <div>
            <footer>
                <div className="borda2"></div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.496185473016!2d-43.192030185562686!3d-22.821125040556158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9978141c54916f%3A0xcfa49669b575b255!2sSara%20Nossa%20Terra%20-%20Ilha%20do%20Governador!5e0!3m2!1spt-BR!2sbr!4v1590365882290!5m2!1spt-BR!2sbr"></iframe>
                <div className="Info">
                    <ul className="Info1">
                        <li className="Info2">Rio de Janeiro, RJ</li>
                        <li className="Info2">Praia da Bica, 1151.</li>
                        <li className="Info2">Telefone: (21) 3439-6001</li>
                       
                    </ul>
                    <div className="copy">
                        <ul>
                            <li className="copy1"> © Desenvolvido por Rocketools </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Footer; 