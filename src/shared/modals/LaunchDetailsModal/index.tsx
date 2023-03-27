import React, { useEffect, useState } from 'react';

import Button from 'shared/components/Button';

import { getLaunch } from 'api/space-api';

import { LaunchInterface } from 'interfaces/launch-interface';
// @ts-ignore
import { ReactComponent as CloseIcon } from 'assets/images/close-icon.svg';

import './style.scss';

interface LaunchDetailsModalInterface {
  launchId: string
  onClose: () => void
}

const LaunchDetailsModal: React.FC<LaunchDetailsModalInterface> = ({ launchId, onClose}) => {
  const [currentLaunch, setCurrentLaunch] = useState<LaunchInterface | any>(null);

  useEffect(() => {
    if (launchId) {
      getLaunch(launchId).then((res) => {
        setCurrentLaunch(res);
      });
    }
  }, [launchId]);

  const onMovetoYouTube = () => {
    window.open(currentLaunch?.links?.webcast, '_blank');
  }

  return (
    <div className="launch-modal">
      <div className="launch-modal__image_container">
        <img src={currentLaunch?.links?.patch?.large} alt="large-launch-icon" className="launch-modal__image" />
      </div>
      <div className="launch-modal__container">
        <div className="launch-modal__description">
          <h2 className="launch-modal__title">{ currentLaunch?.name }</h2>
          <p className="launch-modal__date">Launch Date: { currentLaunch?.date_utc }</p>
        </div>

        <div className="launch-modal__statuses status">
          <span className="status__fairings">
            Fairings Recovered: { `${!currentLaunch?.fairings?.recovered && 'Not'} Recovered` }
          </span>
          <span className="status__fairings">
            Fairings Reused: { `${!currentLaunch?.fairings?.reused && 'Not'} Reused` }
          </span>
        </div>

        <div className="launch-modal__actions">
          <Button text="Watch launch on YouTube" onClick={onMovetoYouTube} />
        </div>
      </div>
      <CloseIcon className="launch-modal__close-icon" onClick={onClose} />
    </div>
  )
}

export default LaunchDetailsModal;
