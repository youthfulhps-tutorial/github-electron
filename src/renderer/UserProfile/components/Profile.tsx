import { Blog, Home } from '@carbon/icons-react';
import Link from '@shared/components/Link';

type ProfileProps = {
  userName: string;
  htmlUrl: string;
  blogUrl: string;
};

const Profile = ({ userName, htmlUrl, blogUrl }: ProfileProps) => {
  return (
    <>
      <div className="profile__user-name">{userName}</div>
      <Link className="profile__link" href={htmlUrl}>
        <Home />
        {htmlUrl}
      </Link>
      <Link className="profile__link" href={blogUrl}>
        <Blog />
        {blogUrl}
      </Link>
    </>
  );
};

export default Profile;
