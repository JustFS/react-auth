import React from "react";
import firebase from "firebase";

const isSignIn = () => {
  return (
    <span>
      <div>Signed In!</div>
      <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
      <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
      <img alt="user-pic" src={firebase.auth().currentUser.photoURL} />
    </span>
  );
};

export default isSignIn;
