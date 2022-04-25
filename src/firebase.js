import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAf7IKGbS3OVIbgcPq3y8pKkIdoTt3cY64",
  authDomain: "uplft-9ed97.firebaseapp.com",
  databaseURL: "https://uplft-9ed97-default-rtdb.firebaseio.com",
  projectId: "uplft-9ed97",
  storageBucket: "uplft-9ed97.appspot.com",
  messagingSenderId: "506789509537",
  appId: "1:506789509537:web:6b03fd02c56b55445373e0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email, username, photoURL } = user;
    try {
      await userRef.set({
        username: username,
        email: email,
        avatar: photoURL,
        id: user.uid,
        currentCoins: 0,
        totalCoins: 0,
        currentXp: 0,
        xpUsed: 0,
        lastSignedIn: new Date(),
        pointsPublic: true,
        purchasePublic: true,
        trophies: [],
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};

const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();

    return {
      uid,
      ...userDocument.data()
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};
