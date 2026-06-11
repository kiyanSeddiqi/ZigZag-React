export function validateAuth(data, mode) {
  const errors = {};

  const nameRegex = /^[A-Za-z\u0600-\u06FF\s]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*\d)(?=.*[A-Za-z])[A-Za-z0-9]{6,}$/;

  const name = data.name?.trim();
  const email = data.email?.trim();
  const password = data.password;

  if (mode === "signup") {
    if (!name) {
      errors.name = "نام الزامی است";
    } else if (!nameRegex.test(name)) {
      errors.name = "نام باید فقط شامل حروف باشد";
    }
  }

  if (!email) {
    errors.email = "ایمیل الزامی است";
  } else if (!emailRegex.test(email)) {
    errors.email = "قالب ایمیل صحیح نیست";
  }

  if (!password) {
    errors.password = "رمز عبور الزامی است";
  } else if (!passwordRegex.test(password)) {
    errors.password =
      "رمز عبور باید حداقل ۶ کاراکتر و شامل حروف انگلیسی و اعداد باشد";
  }

  return errors;
}
