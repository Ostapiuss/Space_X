import React from 'react';

import cn from 'classnames';

import './style.scss';

interface DialogInterface {
  children: JSX.Element,
  open: boolean,
  className?: string,
  onClose: () => void,
}


const Dialog: React.FC<DialogInterface> = ({ children, open, className }) => {
  if (open) {
    return (
      <div className="overlay">
        <div className={cn('modal', className)}>
          <div className="modalContent">
            { children }
          </div>
        </div>
      </div>
    )
  }
}
export default Dialog;
