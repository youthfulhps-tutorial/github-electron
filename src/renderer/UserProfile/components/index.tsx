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
    <section className="user-profile">
      <Avatar sourceUrl={user.avatar_url} />
      <Profile
        userName={user.login}
        htmlUrl={user.html_url}
        blogUrl={user.blog}
      />
    </section>
  );
};

export default UserProfile;
