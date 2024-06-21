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

  console.log("valid?", valid);
  return valid;
};

export const clearErrors = (
  setEmailError,
  setPasswordError,
  setPasswordConfirmError,
  setNotificationMessage
) => {
  setEmailError("");
  setPasswordError("");
  setPasswordConfirmError("");
  setNotificationMessage(null);
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
  setNotificationMessage,
  setSeverity,
  setLoading,
  navigate
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
      clearErrors(
        setEmailError,
        setPasswordError,
        setPasswordConfirmError,
        setNotificationMessage
      );
      clearErrors(
        setEmailError,
        setPasswordError,
        setPasswordConfirmError,
        setNotificationMessage
      );
      setLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);
      setNotificationMessage("Usuario registrado!");
      setSeverity("Success!");
      navigate("/login");
    } catch (error) {
      setNotificationMessage(error.message);
      setSeverity("error");
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  }
};
