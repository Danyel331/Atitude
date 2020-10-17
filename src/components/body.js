import React from 'react'
import './body.css'

const Body = () => {
    return (
        <div>
            <div className="imgYoutube">

                <div className="live">
                    <h3>Lives:</h3>

                    <iframe src="https://www.youtube.com/embed/live_stream?channel=UCDwe0VAfgHWjc1QSCobDSew"></iframe>


                </div>
            </div>
            <body id="body">
                <div id="cultoseventos">
                    <h3>Cultos:</h3>
                    <div>
                        <p>Domingos às 10h e 19h</p>
                        <p>Terça às 20h</p>
                        <p>Sábado às 19h com o Arena Jovem!</p>
                    </div>
                </div>
                <div>
                    <h3>Eventos:</h3>
                    <p>Revisão de Vidas 20/06</p>
                    <p>TAL 11/06</p>
                    <p>Celebração Online 11 e 12/07</p>
                </div>
            </body>
            <div>
            </div>
        </div>
    )
}
export default Body;
