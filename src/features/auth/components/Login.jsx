import {
  IoConstructOutline,
  IoEyeOffOutline,
  IoEyeOutline,
  IoLogIn,
  IoLogInOutline,
  IoLogInSharp,
  IoLogoGoogle,
  IoMedal,
  IoMedalOutline,
  IoRefresh,
  IoShield,
} from "react-icons/io5";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { FaSignInAlt } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";
import useForm from "../../../hooks/useForm";

function Login({ onSetMode, formData, formError, onChange, onSubmit }) {
  const [showPass, setShowPass] = useState(false);
  const [toggleOn, setToggleOn] = useState(true);

  return (
    <>
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="flex flex-col space-y-2 2xs:text-base text-sm">
          <label htmlFor="login-email">
            ایمیل <span className="text-error">*</span>
          </label>
          <Input
            inputMode={"email"}
            id={"login-email"}
            name={"email"}
            className={"tracking-wide"}
            value={formData.email}
            onChange={onChange}
            hasError={formError.email || formError.general}
          />
          {formError.email && (
            <span className="text-error text-xs">{formError.email}</span>
          )}
        </div>

        <div className="flex flex-col space-y-2 2xs:text-base text-sm">
          <label htmlFor="login-password">
            رمز عبور <span className="text-error">*</span>
          </label>
          <div className="relative">
            <Input
              type={showPass ? "text" : "password"}
              id={"login-password"}
              name={"password"}
              className={`w-full tracking-widest ${showPass ? "font-heading" : "font-serif"} `}
              value={formData.password}
              onChange={onChange}
              hasError={formError.password || formError.general}
            />
            <span
              onClick={() => setShowPass(!showPass)}
              className="absolute top-1/2 -translate-y-1/2 left-5 2xs:size-6 size-5  flex items-center justify-center cursor-pointer"
            >
              <span className="relative size-full child:2xs:size-6 child:size-5 child:absolute child:duration-200">
                {showPass ? <IoEyeOutline /> : <IoEyeOffOutline />}
              </span>
            </span>
          </div>
          {formError.password && (
            <span className="text-error text-xs">{formError.password}</span>
          )}
        </div>
        <div className="flex items-center flex-wrap 2xs:justify-between justify-center gap-x-8 gap-y-2">
          <div className="flex items-center  gap-x-1">
            <span
              onClick={() => setToggleOn(!toggleOn)}
              className={`rounded-full w-12 h-7 scale-80 relative transition cursor-pointer ${toggleOn ? "bg-gray-400" : "bg-primary dark:bg-slate-950"}`}
            >
              <span
                className={`absolute transition rounded-full top-1 size-5 bg-white ${toggleOn ? "right-1" : "-translate-x-6"}`}
              ></span>
            </span>
            <p className="2xs:text-sm text-xs">مرا به خاطر بسپار</p>
          </div>
          <p
            onClick={() => onSetMode("recover")}
            className="2xs:text-sm text-xs underline underline-offset-4 cursor-pointer"
          >
            رمز عبور را فراموش کرده اید؟
          </p>
        </div>
        <div className="space-y-3 flex flex-col">
          <Button
            className={"lg:text-lg sm:text-base text-sm lg:h-12 h-10 gap-2"}
          >
            ورود
          </Button>
          <Button
            type="secondary"
            className={"lg:text-lg sm:text-base text-sm lg:h-12 h-10 gap-2"}
          >
            ورود با گوگل
          </Button>
        </div>
      </form>

      <p className="text-center sm:text-base text-sm">
        حساب کاربری ندارید؟
        <span
          onClick={() => onSetMode("signup")}
          className="mr-3 cursor-pointer sm:text-base text-sm"
        >
          ثبت نام
        </span>
      </p>
    </>
  );
}

export default Login;
