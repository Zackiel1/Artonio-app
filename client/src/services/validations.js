const validations = (data) => {
  let errors = {};

  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const regexName = /^[a-zA-Z]{3,}$/;
  const regexPassword = /^((?!.*[\s])(?=.*[a-z])(?=.*\d).{3,10})/;

  if (data.email && !regexEmail.test(data.email)) {
    errors.email = "Formato de email incorrecto";
  }

  if (data.password && !regexPassword.test(data.password)) {
    errors.password =
      "La clave tiene que contener entre 3 y 10 caracteres y debe contener numeros y letras";
  }

  if (data.name && !regexName.test(data.name)) {
    errors.name = "Solo se acepta letras y tiene que tener mas de 3 caracteres";
  }

  if (data.newPassword && !regexPassword.test(data.newPassword)) {
    errors.newPassword =
      "La clave tiene que contener entre 3 y 10 caracteres y debe contener numeros y letras";
  }

  if (data.confirmPassword && !regexPassword.test(data.confirmPassword)) {
    errors.confirmPassword =
      "La clave tiene que contener entre 3 y 10 caracteres y debe contener numeros y letras";
  }

  if(data.newPassword && data.confirmPassword && data.newPassword !== data.confirmPassword) {
    errors.differentPassword = "Las contraseñas no coinsiden"
  }

  if(data.password && data.confirmPassword && data.password !== data.confirmPassword) {
    errors.differentPassword = "Las contraseñas no coinsiden"
  }

  return errors;
};

export default validations;
// export default function validation(userData) {
//   let errors = {};

//   const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

//   const regexPassword = /^((?!.*[\s])(?=.*[a-z])(?=.*\d).{6,10})/;

//   if (!userData.username) {
//     errors.username = "Por favor, complete los dos campo.";
//   } else if (!regexEmail.test(userData.username)) {
//     errors.username = "Email Incorrecto.";
//   }

//   if (userData.password.length < 6 && userData.password.length > 10) {
//     errors.password = "La clave tiene que ser entre 6 y 10 caracteres.";
//   } else if (!regexPassword.test(userData.password)) {
//     errors.password = "La clave tiene que tener al menos una letra.";
//   }

//   return errors;
// }
