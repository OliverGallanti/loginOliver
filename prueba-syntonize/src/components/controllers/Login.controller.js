import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

export const validateFields = (
  email,
  password,
  setEmailError,
  setPasswordError
) => {
  let valid = true;

  if (!email) {
    setEmailError("El correo no puede estar vacío");
    valid = false;
  } else {
    setEmailError("");
  }

  if (!password) {
    setPasswordError("La contraseña no puede estar vacía");
    valid = false;
  } else {
    setPasswordError("");
  }

  return valid;
};

export const clearErrors = (
  setEmailError,
  setPasswordError,
  setNotificationMessage
) => {
  setEmailError("");
  setPasswordError("");
  setNotificationMessage(null);
};

export const handleSubmit = async (
  email,
  password,
  navigate,
  validateFields,
  clearErrors,
  setEmailError,
  setPasswordError,
  setNotificationMessage,
  setLoading,
  setSeverity
) => {
  if (validateFields(email, password, setEmailError, setPasswordError)) {
    try {
      clearErrors(setEmailError, setPasswordError, setNotificationMessage);
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      setNotificationMessage("");
      setSeverity("Success! User logged in");
      console.log("success", user);
      navigate("/");
    } catch (error) {
      setNotificationMessage(error.message);
      setSeverity("error");
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  }
};
