import React from 'react';
import './Sidebar.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import MicIcon from '@material-ui/icons/Mic';
import AddIcon from '@material-ui/icons/Add';
import InfoIcon from '@material-ui/icons/Info';
import CallIcon from '@material-ui/icons/Call';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';
import SidebarChannel from './SidebarChannel';
import {Avatar} from '@material-ui/core';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar__top'>
                <h3>Clever Programmer</h3>
                <ExpandMoreIcon />
            </div>
            <div className='sidebar__channels'>
                <div className='sidebar__channelsHeader'>
                    <div className='sidebar__header'>
                        <ExpandMoreIcon />
                         <h4>Text channels</h4>
                    </div>
                <AddIcon className='sidebar_addChannel' />
                </div>
                <div className='sidebar__channelsList'>
                <SidebarChannel />
            </div>
            </div>
            <div className='sidebar__voice'>
                <SignalCellularAltIcon className='sidebar__voiceIcon' fontSize='large'/>
                <div className='sidebar__voiceInfo'>
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>
                <div className='sidebar__voiceIcons'>
                    <InfoIcon />
                    <CallIcon />
                </div>
            </div>
            <div className='sidebar__profile'>
                <Avatar />
                <div className='sidebar__profileInfo'>
                    <h3>@magda</h3>
                    <p>This is my id</p>
                </div>
                <div className='sidebar__profileIcons'>
                    <MicIcon />
                    <HeadsetIcon />
                    <SettingsIcon />
                </div>
            </div>
        </div>
    )
}

export default Sidebar

