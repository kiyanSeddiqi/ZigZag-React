import { createContext } from "react";
import useLocalStorage from "../../../hooks/useLocalStorage";

export const AuthContext = createContext();

const API_URL = import.meta.env.VITE_API_URL;
const USER_API = `${API_URL}/users`;

function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useLocalStorage("currentUser", null);

  // Signup =========
  async function signupHandler(data) {
    const newUser = {
      ...data,
      avatar: "",
      phone: "",
      address: "",
      role: "user",
      created_at: new Date().toISOString(),
    };
    const res = await fetch(USER_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });

    const saved = await res.json();
    setCurrentUser(saved);
    return saved;
  }

  // Login =========
  async function loginHandler(email, password) {
    const res = await fetch(USER_API);
    const userData = await res.json();
    const found = userData.find(
      (user) => user.email === email && user.password === password,
    );
    if (!found) throw new Error("کاربر یافت نشد یا اطلاعات اشتباه است!");
    setCurrentUser(found);
    return found;
  }

  // Recover (change password) =========
  async function recoverHandler(email, newPass) {
    const res = await fetch(USER_API);
    const userData = await res.json();

    const user = userData.find((u) => u.email === email);
    if (!user) throw new Error("کاربری با این ایمیل وجود ندارد");

    await fetch(`${USER_API}/${user.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: newPass }),
    });
    return true;
  }

  // Delete =========
  // async function deleteAccount() {
  //   if (!currentUser) return;
  //   await fetch(`${USER_API}/${currentUser.id}`, {
  //     method: "Delete",
  //   });

  //   setCurrentUser(null);
  // }

  const logOut = () => setCurrentUser(null);

  const contextValue = {
    signupHandler,
    loginHandler,
    recoverHandler,
    logOut,
    currentUser,
  };
  return (
    <>
      <AuthContext.Provider value={contextValue}>
        {children}
      </AuthContext.Provider>
    </>
  );
}

export default AuthProvider;
