import React from 'react';
import './Player.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Body from '../../components/body/Body'

function Player({spotify}) {
    return (
        <div className="player">
            <div className="player__body">
                <Sidebar />
                <Body />
            </div>
        </div>
    )
}

export default Player
