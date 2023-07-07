interface ProfilePictureProps {
  src: string;
}

const ProfilePicture = ({ src }: ProfilePictureProps) => {
  return (
    <div className="flex h-40 w-40 shrink-0 rounded-full bg-white outline outline-1 outline-black">
      <img className="h-full w-full rounded-full" src={src} alt="profile" />
    </div>
  );
};

export default ProfilePicture;
