import { useContext } from "react";

import { AuthContext }
from "../context/AuthContext";

function Profile() {

  const { user } =
    useContext(AuthContext);

  return (
    <div className="dashboard">

      <h1>Profile</h1>

      <div className="card">

        <h3>Name</h3>
        <p>{user?.name}</p>

        <h3>Email</h3>
        <p>{user?.email}</p>

      </div>

    </div>
  );
}

export default Profile;