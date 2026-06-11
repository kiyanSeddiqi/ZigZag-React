export function ValidateContact(data) {
  const errors = {};

  const nameRegex = /^[A-Za-z\u0600-\u06FF\s]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const name = data.name?.trim();
  const email = data.email?.trim();
  const subject = data.subject?.trim();
  const message = data.message?.trim();

  if (!name) {
    errors.name = "نام الزامی است";
  } else if (!nameRegex.test(name)) {
    errors.name = "نام باید فقط شامل حروف باشد";
  }

  if (!email) {
    errors.email = "ایمیل الزامی است";
  } else if (!emailRegex.test(email)) {
    errors.email = "قالب ایمیل صحیح نیست";
  }

  if (!message) {
    errors.message = "بخش پیام نباید خالی باشد";
  } else if (message.length < 10)
    errors.message = "پیام نباید کمتر از ده کاراکتر باشد";

  return errors;
}
