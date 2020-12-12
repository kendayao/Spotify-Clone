import React from 'react';
import './Player.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Body from '../../components/body/Body'
import Footer from '../../components/footer/Footer';

function Player({spotify}) {
    return (
        <div className="player">
            <div className="player__body">
                <Sidebar />
                <Body />
            </div>
                <Footer />
        </div>
    )
}

export default Player
