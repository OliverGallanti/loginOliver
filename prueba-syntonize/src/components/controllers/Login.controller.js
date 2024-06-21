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

export const clearErrors = (setEmailError, setPasswordError) => {
  setEmailError("");
  setPasswordError("");
};

export const handleSubmit = async (
  email,
  password,
  navigate,
  validateFields,
  clearErrors,
  setEmailError,
  setPasswordError,
  setLoading,
  showNotification
) => {
  if (validateFields(email, password, setEmailError, setPasswordError)) {
    try {
      clearErrors(setEmailError, setPasswordError);
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      showNotification("¡Sesión iniciada!", "success", true);
      navigate("/");
    } catch (error) {
      showNotification(error.message, "error", true);
      setEmailError("Credenciales inválidas");
      setPasswordError("Credenciales inválidas");
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  }
};
