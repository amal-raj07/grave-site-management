import "./style.css";
function Profile({ name }) {
  return (
    <div className="Profile-circle ms-2">
      <p className="Profile-text">{name}</p>
    </div>
  );
}

export default Profile;