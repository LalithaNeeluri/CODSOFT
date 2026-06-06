import "./Profile.css";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="profile">
      <h2>👤 My Profile</h2>

      <p>
        <strong>Name:</strong> {user?.name}
      </p>

      <p>
        <strong>Email:</strong> {user?.email}
      </p>

      <p>
        <strong>Role:</strong> {user?.role}
      </p>
    </div>
  );
}

export default Profile;