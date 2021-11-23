import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux";

function UserDetails({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers();
  }, []);
  return userData.isLoading ? (
    <div className="ui active inverted dimmer">
      <div className="ui text loader">Loading</div>
    </div>
  ) : userData.error ? (
    <h3>{userData.error}</h3>
  ) : (
    <div>
      <h2 className="ui header">User List</h2>
      <div>
        {userData &&
          userData.users &&
          userData.users.map((user) => (
            <p>
              {user.id} : {user.name}
            </p>
          ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
