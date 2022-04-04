import { createContext, useReducer } from "react";
import { reducer, initialState } from "../reducers/FormRegReducers";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
  useAuthState,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
export const UseAuthReg = createContext();
export const UseAuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const [user] = useAuthState(auth);

  const [signInWithGoogle] = useSignInWithGoogle(auth);

  return (
    <UseAuthReg.Provider
      value={{
        state,
        dispatch,
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        user,
        signInWithGoogle,
      }}
    >
      {children}
    </UseAuthReg.Provider>
  );
};
