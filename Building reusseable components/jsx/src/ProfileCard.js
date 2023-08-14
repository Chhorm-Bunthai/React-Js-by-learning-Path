function ProfileCard({title, handle,image}) {
    // const title = props.title;
    // const handle = props.handle;

    // const {title, handle} = props;
  return (
    <div>
      <img src={image} alt="pda logo"/>
      <div>This is {title}</div>
      <div>Email is {handle}</div>

    </div>
  );
}
export default ProfileCard;
