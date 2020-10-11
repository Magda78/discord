import React from 'react';
import './Chat.css';
import Message from './Message';
import ChatHeader from './ChatHeader';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';

function Chat() {
    return (
        <div className='chat'>
            <ChatHeader />
            <div className='chat__messages'>
                <Message />
                <Message />
                <Message />
            </div>
            <div className='chat__input'>
                <AddCircleOutlineIcon fontSize='large'/>
                <form>
                    <input placecholder='test' />
                    <button className='chat__inputButton' type='submit'>Send message</button>
                </form>
                <div className='chat__inputIcons'>
                    <CardGiftcardIcon />
                    <GifIcon />
                    <EmojiEmotionsIcon />
                </div>
            </div>
        </div>
    )
}

export default Chat
