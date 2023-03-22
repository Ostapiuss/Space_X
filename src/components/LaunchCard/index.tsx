import React, {useEffect} from "react";

import LaunchDetailsModal from "../../shared/modals/LaunchDetailsModal";

import AppModal from 'services/AppModalService'

import { StyledLaunchCard } from './StyledLaunchCard';
import {useLocation, useNavigate, useParams} from "react-router-dom";

interface LaunchCardInterface {
  launchCardData: any
}

const LaunchCard: React.FC<LaunchCardInterface> = ({ launchCardData }) => {
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();

  useEffect(() => {
    if (params.id) {
      onOpenModal(params.id);
    }
    // eslint-disable-next-line
  }, [params.id])

  const onOpenModal = (launchId) => {
    AppModal.open({
      component: <LaunchDetailsModal launchId={launchId} onClose={onCloseModal} />,
      rootClassname: 'launch-modal-root',
      onClose: onCloseModal,
    });
  }

  const onCloseModal = () => {
    AppModal.close();
    navigate(location.state ?? '/');
  }

  const handleLaunchCardClick = () => {
    navigate(`/${launchCardData.id}`);
    if (params.id) {
      onOpenModal(params.id);
    }
  }

  return (
    <StyledLaunchCard>
      <img src={launchCardData?.links?.patch?.small} alt="space-card-icon" onClick={handleLaunchCardClick} />
      <div className="launch-card-details">
        <h3>{ launchCardData?.name }</h3>
        { launchCardData?.details ? (
          <p>{ launchCardData?.details }</p>
        ): (
          <p>No details yet</p>
        )}
      </div>
    </StyledLaunchCard>
  )
}

export default LaunchCard;
