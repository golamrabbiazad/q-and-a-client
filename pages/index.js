import { useAuth } from "../lib/auth";

export default function Index() {
  const auth = useAuth();
  return auth.user ? (
    <div>
      <p>Email: {auth.user.email}</p>
      <button onClick={(e) => auth.signout()}>Sign Out</button>
    </div>
  ) : (
    <div>
      <h1>Fast FeedBack</h1>
      <button onClick={(e) => auth.signinWithGoogle()}>
        Signin with Google
      </button>
    </div>
  );
}
