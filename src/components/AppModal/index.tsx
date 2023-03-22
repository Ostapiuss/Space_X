import React, { useState, useEffect } from 'react';

import Dialog from "components/Dialog";

import { AppModalService } from 'services/AppModalService';

const AppModal = () => {
  useEffect(() => {
    AppModalService.subscribe('app-modal', onUpdateModal);

    return () => {
      AppModalService.unsubscribe('app-modal');
    }
  }, []);

  const [open, onToggle] = useState(false);
  const [modal, setModal] = useState({
    component: null,
    onClose: null,
    className: '',
    rootClassName: '',
  });

  const onUpdateModal = (data) => {
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
    >
      { modal.component }
    </Dialog>
  );
}

export default AppModal;
