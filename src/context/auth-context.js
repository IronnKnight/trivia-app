import React from "react";

const AuthContext = React.createContext(undefined);
AuthContext.displayName = "AuthContext";

export function AuthProvider(props) {
  const [state, setState] = React.useState({
    status: "idle", // 'idle', 'success', ' ailed', 'loading'
    user: null,
  });

  React.useEffect(() => {
    if (state.status === "idle") {
      checkIfUserLoggedIn();
    }
  }, [state.status]);

  function checkIfUserLoggedIn() {
    // Proveri token u ls
    // Pozovi endpoint da potvrdis dal je ulogovan user
  }

  if (state.status === "idle" || state.status === "loading") {
    return "Full Page Spinner";
  }

  return <AuthContext.Provider value={{}} {...props} />;
}

export function useAuth() {
  const context = React.useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside <AuthProvider /> component");
  }

  return context;
}
