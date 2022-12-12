import React from 'react';
import Button from "../Button/Button";
import './Header.css'
import {useTelegram} from "../hooks/useTelegram";

const Header = (props) => {
    const {user, onClose} = useTelegram()
    return (
        <div className={'header'}>
            <Button onClick={onClose}>Закрыть</Button>
            <span className={'username'}>
                Приветствую тебя {user?.username}
            </span>
        </div>
    );
};

export default Header;
