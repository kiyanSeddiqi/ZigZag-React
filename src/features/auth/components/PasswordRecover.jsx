import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";
import useForm from "../../../hooks/useForm";

function PasswordRecover({
  onSetMode,
  formData,
  formError,
  onChange,
  onSubmit,
}) {
  return (
    <>
      <form onSubmit={onSubmit} className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-2 2xs:text-base text-sm">
          <label htmlFor="recover-email">
            ایمیل <span className="text-error">*</span>
          </label>
          <Input
            inputMode={"email"}
            id={"recover-email"}
            placeHolder="ایمیل خود را وارد کنید"
            name={"email"}
            className="tracking-wide"
            value={formData.email}
            onChange={onChange}
            hasError={formError.email || formError.general}
          />
          {formError.email && (
            <span className="text-error text-xs">{formError.email}</span>
          )}
        </div>

        <div className="flex flex-col space-y-2 2xs:text-base text-sm">
          <label htmlFor="recover-password">
            رمز عبور جدید <span className="text-error">*</span>
          </label>
          <Input
            id={"recover-password"}
            placeHolder="رمز عبور جدید را وارد کنید"
            name={"password"}
            className="tracking-wide"
            value={formData.password}
            onChange={onChange}
            hasError={formError.password}
          />
          {formError.password && (
            <span className="text-error text-xs">{formError.password}</span>
          )}
        </div>

        <div className="space-y-3 flex flex-col">
          <Button
            className={"lg:text-lg sm:text-base text-sm lg:h-12 h-10 gap-2"}
          >
            باز نشانی رمز عبور
          </Button>
        </div>
      </form>
      <p
        onClick={() => onSetMode("login")}
        className="text-center cursor-pointer sm:text-base text-sm"
      >
        بازگشت به ورود
      </p>
    </>
  );
}

export default PasswordRecover;
