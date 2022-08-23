import { UserContext } from '@shared/contexts/UserContext';
import useUser from '@UserProfile/queries/useUser';
import { useContext } from 'react';
import '../styles/index.scss';
import Avatar from './Avatar';
import Profile from './Profile';

const UserProfile = () => {
  const { userId } = useContext(UserContext);
  const { user } = useUser(userId);

  if (!user) return null;

  return (
    <div className="user-profile">
      <Avatar sourceUrl={user.avatar_url} />
      <Profile userName={user.login} />
    </div>
  );
};

export default UserProfile;
