import icon from '../../imgs/Common/UserIcon.png'
import Preloader from '../Common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';

function Profile(props) {
    if(!props.profile){
      return <Preloader/>
    }
    return (
      <div>
          <img src={!props.profile.photos.large ? icon : props.profile.photos.large} alt={icon}></img>
          <ProfileStatus
            status={props.status}
            updateStatus={props.updateStatus}
          />
          <p>{`${props.profile.fullName}`}</p>
      </div>
    );
}

export default Profile;