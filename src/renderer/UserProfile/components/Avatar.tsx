type AvatarProps = {
  sourceUrl: string;
};

const Avatar = ({ sourceUrl }: AvatarProps) => {
  return <img src={sourceUrl} alt="github-avatar" className="avatar" />;
};

export default Avatar;
