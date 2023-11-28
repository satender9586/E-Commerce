export const SinginputValidation = (data) => {
  const error = {};
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].*[a-z]).{8,20}$/;
  const emailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
  const phoneRegex = /^\d{10}$/;

  if (!data.name) {
    error.name = "Name is Required";
  }

  if (!data.email) {
    error.email = "Email is Required";
  } else if (!emailRegex.test(data.email)) {
    error.email = "Invalid Email";
  }

  if (!data.password) {
    error.password = "Password is Required";
  } else if (!passwordRegex.test(data.password)) {
    error.password = "Invalid Password";
  }

  if (!data.repassword) {
    error.repassword = "Please re-enter your password";
  } else if (data.password !== data.repassword) {
    error.repassword = "Passwords do not match";
  }

  if (!data.phone) {
    error.phone = "Phone Number is Required";
  } else if (!phoneRegex.test(data.phone)) {
    error.phone = "Invalid Phone Number";
  }

  return error;
};
