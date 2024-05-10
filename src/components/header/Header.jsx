import React from 'react';
import './Header.css';
import Button from '../button/Button';


const Header = () => {

    const tg = window.Telegram.WebApp;

    const onClose = () => {
      tg.close();
    }

  return (
    <div className={'header'}>
        <Button onClick={onClose}>Закрыть</Button>
        <span className={'username'}>
            {tg.initDataUnsafe?.user?.userneme}
        </span>
    </div>
  );
}

export default Header;
