import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import './Loader.scss';

function Loader(props) {
  const [ open, setOpen ] = useState(!!props.open);

  useEffect(() => {
    setOpen(props.open);
  }, [props.open]);

  return (
    <CSSTransition in={open} timeout={0} classNames="popup-status">
      <div className="Loader">
        <div className="Loader__overlay"></div>
        <div className="Loader__window">
          <div className="Loader__window__spinner"></div>
        </div>
      </div>
    </CSSTransition>
  );
}

export default Loader;