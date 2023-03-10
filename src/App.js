import "./App.css";
import React, { useState } from "react";
import initializeAuthorization from "./firebase-config/firebase.authorization";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  signOut,
} from "firebase/auth";

initializeAuthorization();

const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

function App() {
  const [user, setUser] = useState({});
  const auth = getAuth();

  // Handler for Google Login
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // const user = result.user;
        // console.log(user);
        const { displayName, email, photoURL } = result.user;
        const loggedInUser = {
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setUser(loggedInUser);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // Handler for GitHub Login
  const handleGithubLogIn = () => {
    signInWithPopup(auth, gitHubProvider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        const loggedInUser = {
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setUser(loggedInUser);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // Handler for Sign out
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser({});
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="App">
      {!user.name ? (
        <div>
          <button onClick={handleGoogleSignIn} className="signInButton">
            GoogleSignIn
          </button>
          <button onClick={handleGithubLogIn} className="signInButton">
            GitHubLogIn
          </button>
        </div>
      ) : (
        <div>
          <button className="signOutButton" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}

      {user.name && (
        <div>
          <h2>Name: {user.name}</h2>
          <p>Email: {user.email}</p>
          <img src={user.photo} alt="" />
        </div>
      )}
    </div>
  );
}

export default App;