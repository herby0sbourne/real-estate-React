import { createContext, useState, useEffect } from 'react';
import {
  getAuthState,
  getCurrentUser,
  onAuthStateChangeListener,
} from '../utils/firebase';

export const UserContext = createContext({
  currentUser: null,
  isLoggedIn: false,
  checking: true,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [checking, setChecking] = useState(true);
  const value = { currentUser, isLoggedIn, checking };

  useEffect(() => {
    const unsubscribe = onAuthStateChangeListener((user) => {
      if (user) {
        setIsLoggedIn(true);
        // createUserDocumentFromAuth(user);
      } else {
        setIsLoggedIn(false);
      }
      console.log(user);
      setCurrentUser(user);
      setChecking(false);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

UserContext.displayName = 'UserContext';
