import { useContext, useEffect, useState } from "react";
import { IoAlertCircle, IoCloseSharp } from "react-icons/io5";
import { validateAuth } from "../../../validations/authValidations";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import Backdrop from "../../../components/ui/Backdrop";
import Login from "./Login";
import SignUp from "./SignUp";
import PasswordRecover from "./PasswordRecover";
import Logo from "../../../components/layout/Logo";
import useForm from "../../../hooks/useForm";

function AuthModal({ isOpen, onShow }) {
  const [mode, setMode] = useState("login");
  const [formVisible, setFormVisible] = useState(true);
  const { signupHandler, loginHandler, recoverHandler } =
    useContext(AuthContext);

  const { formData, formError, changeHandler, submitHandler, resetForm } =
    useForm({
      initialValues: { name: "", email: "", password: "" },
      validate: (data) => validateAuth(data, mode),
      onSubmit: async (data) => {
        if (mode === "signup") {
          await signupHandler(formData);
          toast.success("ثبت نام با موفقیت انجام شد");
        }
        if (mode === "login") {
          await loginHandler(formData.email, formData.password);
          toast.success("با موفقیت وارد شدید");
        }
        if (mode === "recover") {
          await recoverHandler(formData.email, formData.password);
          toast.success("رمز عبور جدید ایجاد شد");
        }
        onShow(false);
      },
    });

  function handleSwitch(newMode) {
    setFormVisible(false);
    setTimeout(() => {
      resetForm();
      setMode(newMode);
      setFormVisible(true);
    }, 200);
  }

  useEffect(() => {
    setTimeout(() => {
      resetForm();
      setMode("login");
    }, 300);
  }, [isOpen]);

  return (
    <>
      <Backdrop onClick={() => onShow(false)} isOpen={isOpen}>
        <div
          onClick={(e) => e.stopPropagation()}
          className={`login-modal relative text-heading font-semibold duration-400 ${isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-4"} md:w-112.5 2xs:w-96 w-full`}
        >
          <div className="rounded overflow-y-auto 2xs:max-h-screen max-h-86">
            <div className="xl:p-6 sm:p-5 2xs:p-4 p-3 bg-paper">
              <div className="flex flex-col justify-center items-center lg:mb-6 mb-5">
                <div className="dark:text-white" onClick={() => onShow(false)}>
                  <Logo />
                </div>
                <p className="mt-2 text-primary sm:text-sm text-xs">
                  {mode === "login"
                    ? "با ایمیل و رمز عبور خود وارد شوید"
                    : mode === "signup"
                      ? "همزمان با ثبت نام، شما با قوانین موافقت می کنید"
                      : "برای بازنشانی رمز عبور، ایمیل خود را وارد کنید"}
                </p>
                {formError.general && (
                  <p className="text-error text-sm mt-3 flex items-center gap-2">
                    <IoAlertCircle className="size-6 animate-pulse" />
                    {formError.general}
                  </p>
                )}
              </div>
              <div
                className={`flex flex-col lg:gap-y-5 gap-y-4 transition-all duration-200 ${formVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
              >
                {mode === "login" ? (
                  <Login
                    key={"login-form"}
                    formData={formData}
                    formError={formError}
                    onChange={changeHandler}
                    onSubmit={submitHandler}
                    onSetMode={handleSwitch}
                  />
                ) : mode === "signup" ? (
                  <SignUp
                    key={"signup-form"}
                    formData={formData}
                    formError={formError}
                    onChange={changeHandler}
                    onSubmit={submitHandler}
                    onSetMode={handleSwitch}
                  />
                ) : (
                  <PasswordRecover
                    key={"recover-form"}
                    formData={formData}
                    formError={formError}
                    onChange={changeHandler}
                    onSubmit={submitHandler}
                    onSetMode={handleSwitch}
                  />
                )}
              </div>
            </div>
            {/* ==== CLOSE BTN ==== */}
            <button
              onClick={() => onShow(false)}
              className="absolute md:-top-5 md:-left-5 -top-3 -left-3 bg-primary rounded-full size-8 md:size-10 flex items-center justify-center cursor-pointer hover:scale-110 duration-200 border border-brdr-clr"
            >
              <IoCloseSharp className="md:size-6 size-5 text-white dark:text-primary-dark" />
            </button>
          </div>
        </div>
      </Backdrop>
    </>
  );
}

export default AuthModal;
