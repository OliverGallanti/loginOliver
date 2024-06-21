// SignUp.controller.js
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

export const validateFields = (
  email,
  password,
  passwordConfirm,
  setEmailError,
  setPasswordError,
  setPasswordConfirmError
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

  if (password !== passwordConfirm) {
    setPasswordConfirmError("Las contraseñas no coinciden");
    valid = false;
  } else {
    setPasswordConfirmError("");
  }

  return valid;
};

export const clearErrors = (
  setEmailError,
  setPasswordError,
  setPasswordConfirmError
) => {
  setEmailError("");
  setPasswordError("");
  setPasswordConfirmError("");
};

export const handleSubmit = async (
  email,
  password,
  passwordConfirm,
  validateFields,
  clearErrors,
  setEmailError,
  setPasswordError,
  setPasswordConfirmError,
  setLoading,
  navigate,
  showNotification
) => {
  if (
    validateFields(
      email,
      password,
      passwordConfirm,
      setEmailError,
      setPasswordError,
      setPasswordConfirmError
    )
  ) {
    try {
      clearErrors(setEmailError, setPasswordError, setPasswordConfirmError);
      clearErrors(setEmailError, setPasswordError, setPasswordConfirmError);
      setLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);
      showNotification("Usuario registrado!", "success", true);
      navigate("/login");
    } catch (error) {
      showNotification(error.message, "error", true);
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  }
};
