import React, { useState, useEffect } from 'react';

import Dialog from "components/Dialog";

import { AppModalService } from 'services/AppModalService';

interface modalStateInterface {
  component: JSX.Element | null,
  onClose: () => void | null,
  className: string,
  rootClassName: string,
}

const AppModal = () => {
  const [open, onToggle] = useState<boolean>(false);
  const [modal, setModal] = useState<modalStateInterface>({
    component: null,
    onClose: null,
    className: '',
    rootClassName: '',
  });

  useEffect(() => {
    AppModalService.subscribe('app-modal', onUpdateModal);
    window.addEventListener('keydown', handleOutsideKeyClick);
    return () => {
      AppModalService.unsubscribe('app-modal');
      window.removeEventListener('keydown', handleOutsideKeyClick);
    }
    // eslint-disable-next-line
  }, [modal]);

  const handleOutsideKeyClick = (eventKey: KeyboardEvent):void => {
    if(eventKey.code === 'Escape'){
      modal?.onClose();
    }
  }

  const onUpdateModal = (data: modalStateInterface):void => {
    if (!data || !data.component) {
      onToggle(false);
      return;
    }
    setModal(data);
    onToggle(true);
  }

  return (
    <Dialog
      open={open}
      onClose={modal.onClose}
      className={modal.rootClassName}
    >
      { modal.component }
    </Dialog>
  );
}

export default AppModal;
