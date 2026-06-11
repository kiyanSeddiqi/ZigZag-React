import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";
import useForm from "../../../hooks/useForm";

function SignUp({ onSetMode, formData, formError, onChange, onSubmit }) {
  const [showPass, setShowPass] = useState(false);

  return (
    <>
      <form onSubmit={onSubmit} className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-2 2xs:text-base text-sm">
          <label htmlFor="signup-name">
            نام <span className="text-error">*</span>
          </label>
          <Input
            id={"signup-name"}
            name={"name"}
            className="tracking-wide"
            value={formData.name}
            onChange={onChange}
            hasError={formError.name}
            placeHolder="مثال: کیان صدیقی"
          />
          {formError.name && (
            <span className="text-error text-xs">{formError.name}</span>
          )}
        </div>

        <div className="flex flex-col space-y-2 2xs:text-base text-sm">
          <label htmlFor="signup-email">
            ایمیل <span className="text-error">*</span>
          </label>
          <Input
            id={"signup-email"}
            name={"email"}
            inputMode={"email"}
            className="tracking-wide"
            value={formData.email}
            onChange={onChange}
            hasError={formError.email}
            placeHolder="example@gmail.com"
          />
          {formError.email && (
            <span className="text-error text-xs">{formError.email}</span>
          )}
        </div>
        <div className="flex flex-col space-y-2 2xs:text-base text-sm">
          <label htmlFor="signup-password">
            رمز عبور <span className="text-error">*</span>
          </label>
          <div className="relative">
            <Input
              type={showPass ? "text" : "password"}
              id={"signup-password"}
              name={"password"}
              className={`w-full tracking-widest ${showPass ? "font-heading" : "font-serif"} `}
              value={formData.password}
              onChange={onChange}
              hasError={formError.password}
            />
            <span
              onClick={() => setShowPass(!showPass)}
              className="absolute top-1/2 -translate-y-1/2 left-5 2xs:size-6 size-5 flex items-center justify-center cursor-pointer"
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
        <Button
          className={"lg:text-lg lg:h-12 h-10 gap-2 sm:text-base text-sm"}
        >
          ثبت نام
        </Button>
      </form>
      <p className="text-center sm:text-base text-sm">
        قبلا حساب کاربری دارید؟
        <span
          onClick={() => onSetMode("login")}
          className="mr-3 font-black cursor-pointer lg:text-lg sm:text-base text-sm"
        >
          ورود
        </span>
      </p>
    </>
  );
}

export default SignUp;
