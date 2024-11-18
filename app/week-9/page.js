"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

const LandingPage = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <div className="p-4">
      {!user ? (
        <button
          onClick={gitHubSignIn}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Login with GitHub
        </button>
      ) : (
        <div>
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>
          <button
            onClick={firebaseSignOut}
            className="bg-red-500 text-white p-2 rounded"
          >
            Logout
          </button>
          <div>
          </div>
          <Link href="/week-9/shopping-list">
            Go to Shopping List
          </Link>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
