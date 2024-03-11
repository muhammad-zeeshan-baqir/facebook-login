import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});

  const responseFacebook = (response) => {
    console.log(response);
    if (response.accessToken) {
      setLoggedIn(true);
      setUserData(response);
    } else {
      setLoggedIn(false);
      setUserData({});
    }
  };
  return (

    <div>
      <h1>React Facebook Authentication</h1>
      {loggedIn ? (
        <div>
          <p>Welcome, {userData.name}!</p>
          <p>Email: {userData.email}</p>
          <img
            src={userData.picture ? userData.picture.data.url : ""}
            alt={userData.name}
          />
        </div>
      ) : (
        // <FacebookLogin
        //   appId="302157682617454"
        //   autoLoad={false}
        //   fields="name,email,picture"
        //   scope="pages_show_lsit,pages_read_engagement,pages_manage_posts,pages_manage_engagements"
        //   callback={responseFacebook}
        // />

        <FacebookLogin
          appId="302157682617454"
          autoLoad={true}
          fields="name,email,picture"
          callback={responseFacebook}
        />
      )}
    </div>
  );
};

export default App;
