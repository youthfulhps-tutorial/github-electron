type ProfileProps = {
  userName: string;
};

const Profile = ({ userName }: ProfileProps) => {
  return <div className="profile">{userName}</div>;
};

export default Profile;
