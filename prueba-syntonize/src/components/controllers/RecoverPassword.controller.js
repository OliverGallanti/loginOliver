import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase";

export const resetPassword = async (
  email,
  showNotification
) => {
  try {
    await sendPasswordResetEmail(auth, email);
    showNotification(
      "¡Correo enviado! Revise su bandeja de entrada",
      "success",
      true
    );
  } catch (error) {
    showNotification(error.message, "error", true);
  }
};
