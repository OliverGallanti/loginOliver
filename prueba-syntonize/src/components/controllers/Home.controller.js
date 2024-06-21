import { auth } from "../../firebase";

export const handleLogout = async (
  setNotificationMessage,
  navigate,
  setSeverity
) => {
  setNotificationMessage("");
  try {
    await auth.signOut();
    navigate("/login");
  } catch (error) {
    setNotificationMessage("Fallo al cerrar sesión");
    setSeverity("error");
  }
};
