import {
  signInWithGooglePopup,
  createUserDocumentFromAuth, // Corrected function name
} from '../../utils/firebase/firebase.utilis';

const SignIn = () => {
  const logGoogleuser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>SignIn</h1>
      <button onClick={logGoogleuser}>Sign In with Google Popup</button>
    </div>
  );
};

export default SignIn;
