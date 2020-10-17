import React from 'react'
import './header.css'
import atitude from '../assets/atitude.png'
import instagram from '../assets/instagram.png'
import facebook from '../assets/facebook.png'
import youtube from '../assets/youtube.png'

export default () => {

    return (
        <div>
            <header>
                <div>
                    <a href="#"><img className="logoSara" src={atitude} alt="logo da Sara Nossa Terra Ilha do Governador" /></a>
                </div>

                <div className='redesSociais'>
                    <div>
                        <a href="https://www.instagram.com/atitudeequipeoficial/?hl=pt-br" target="_blank"><img className="rede" src={instagram} alt="logo Instagram" /></a>
                    </div>
                    <div>
                        <a href="https://www.facebook.com/EquipeAtitudesntilha/?__tn__=%2Cd%2CP-R&eid=ARCuon7r-pqc4AgtiNIZegqTKGoRujMT69MlQ_YVrXcNdatddzURc7sT1eb2oVTSG8Afb0zzxa6oULFa" target="_blank"><img className="rede" src={facebook} alt="logo facebook" /></a>
                    </div>
                    <div>
                        <a href="https://www.youtube.com/channel/UCDwe0VAfgHWjc1QSCobDSew?view_as=subscriber" target="_blank"><img className="rede" src={youtube} alt="logo youtube" /></a>
                    </div>
                    <div className="opcoes">
                        <a href="#cultoseventos">Cultos e Eventos</a>
                        <a href="https://saranossaterra.com.br/" target="_blank">Sede</a>
                    </div>
                </div>
            </header>
            <div className="borda"></div>
        </div >
    )
}