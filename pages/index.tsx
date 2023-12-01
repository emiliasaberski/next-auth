import { signIn, signOut, useSession } from "next-auth/react";

const IndexPage = () => {
  const { data: session, status } = useSession()
  const loading = status === "loading"


  if (loading) {
    return <div>Loading...</div>;
  }

  if (session) {
    return (
      <div>
        {/* Hello, {session.user.email ?? session.user.name} <br /> */}
        Hello, Emilia <br />
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  } else {
    return (
      <div>
        You are not logged in! <br />
        <button onClick={() => signIn('email', { callbackUrl: 'http://localhost:3000/' })}></button>
      </div>
    );
  }
};

export default IndexPage;