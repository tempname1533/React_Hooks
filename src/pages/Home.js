import React, { useContext } from "react";
import { UserContext } from "../UserContext";

export function Index() {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <h2>Home</h2>

      <pre>{JSON.stringify(user, null, 2)}</pre>
      <button
        onClick={async () => {
          const user = await login();
          setUser("hey");
        }}
      >
        Login
      </button>
    </div>
  );
}
