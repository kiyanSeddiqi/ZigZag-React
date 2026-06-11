import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { IoCheckmarkSharp } from "react-icons/io5";
import { createReview } from "../../../services/api/reviewsApi";
import { AuthContext } from "../../auth/context/AuthContext";
import { ValidateReview } from "../../../validations/reviewValidations";
import Input from "../../../components/ui/Input";
import StarRating from "../../../components/ui/StarRating";
import Button from "../../../components/ui/Button";
import useForm from "../../../hooks/useForm";

function ProductReviewForm({ id }) {
  const { currentUser } = useContext(AuthContext);
  const [isSaved, setIsSaved] = useState(false);
  const [userRate, setUserRate] = useState(null);

  const { formData, formError, changeHandler, submitHandler, resetForm } =
    useForm({
      initialValues: {
        name: currentUser?.name || "",
        email: currentUser?.email || "",
        message: "",
      },
      validate: (data) => ValidateReview(data, userRate),
      onSubmit: async (data) => {
        const payload = {
          productId: id,
          userId: currentUser?.id ?? null,
          authorName: currentUser?.name ?? data.name.trim(),
          authorEmail: currentUser?.email ?? data.email.trim(),
          rating: Number(userRate),
          body: data.message.trim(),
          created_at: new Date().toISOString(),
          status: currentUser ? "approved" : "pending",
        };
        await createReview(payload);
        toast.success("نظر شما با موفقیت ثبت شد");
        resetForm();
        setUserRate(null);
      },
    });

  useEffect(() => {
    resetForm();
    setUserRate(null);
  }, [id, currentUser]);

  return (
    <>
      <form
        onSubmit={submitHandler}
        className="w-full mx-auto mt-4 lg:mt-6 font-semibold px-1"
      >
        <div className="flex flex-col space-y-3 md:space-y-4 lg:space-y-5">
          <div className="flex items-center justify-between flex-wrap gap-y-3 gap-x-5">
            <div className="flex items-center gap-x-2">
              <label className="md:text-base lg:text-lg text-sm">
                امتیاز شما :
                <span className="font-heading md:text-base text-sm mr-1">
                  {userRate && `${userRate} از 5`}
                </span>
              </label>
              {formError.rating && !userRate && (
                <p className="2xs:text-sm text-xs text-red-500">
                  {formError.rating}
                </p>
              )}
            </div>
            <StarRating value={userRate} onChange={setUserRate} key={id} />
          </div>
          <div className="flex flex-col md:flex-row space-y-3 md:space-y-0">
            <div className="w-full md:w-1/2 ">
              <label
                htmlFor="review-name"
                className="block md:text-base leading-none mb-4 cursor-pointer"
              >
                نام
              </label>
              <Input
                id={"review-name"}
                name="name"
                placeHolder={"نام خود را وارد کنید"}
                className="w-full"
                value={formData.name}
                onChange={changeHandler}
                hasError={formError.name || formError.general}
              />
              {formError.name && (
                <p className="2xs:text-sm text-xs text-red-500 mt-2">
                  {formError.name}
                </p>
              )}
            </div>
            <div className="w-full md:w-1/2 md:mr-2.5 lg:mr-5 mt-2 md:mt-0">
              <label
                htmlFor="review-email"
                className="block md:text-base leading-none mb-4 cursor-pointer"
              >
                ایمیل
              </label>
              <Input
                inputMode={"email"}
                id={"review-email"}
                name={"email"}
                placeHolder="example@gmail.com"
                className={"tracking-wide w-full"}
                value={formData.email}
                onChange={changeHandler}
                hasError={formError.email || formError.general}
              />
              {formError.email && (
                <p className="2xs:text-sm text-xs text-red-500 mt-2">
                  {formError.email}
                </p>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block leading-none mb-4 md:text-base text-sm cursor-pointer"
            >
              پیام
            </label>
            <textarea
              style={{ resize: "none" }}
              name="message"
              id="message"
              autoComplete="off"
              spellCheck="false"
              rows={4}
              value={formData.message}
              placeholder="پیام خود را درج نمایید"
              onChange={changeHandler}
              className={`px-3 py-2 w-full rounded appearance-none transition duration-300 ease-in-out sm:text-base text-sm placeholder:2xs:text-sm placeholder:text-muted text-heading font-normal focus:outline-none ${formError.message ? "border-error ring-2 ring-error focus:ring-error hover:ring-error" : "border border-brdr-clr dark:border-brdr-clr focus:ring-2 focus:ring-primary hover:ring-2 hover:ring-primary"}`}
            ></textarea>
            {formError.message && (
              <p className="2xs:text-sm text-xs text-red-500">
                {formError.message}
              </p>
            )}
          </div>
          <label
            htmlFor="save"
            className="flex items-center text-heading 2xs:text-sm text-xs"
          >
            <input
              type="checkbox"
              name="save"
              id="save"
              checked={isSaved}
              className="size-5 rounded duration-500 ease-in-out focus:ring-offset-0 focus:outline-none focus:ring-0 focus-visible:outline-none sr-only peer"
              onChange={(e) => setIsSaved(e.target.checked)}
            />
            <div className="flex items-center justify-center size-5 border border-brdr-clr dark:border-white rounded-sm peer-checked:bg-primary dark:peer-checked:bg-primary transition-colors duration-200 cursor-pointer">
              {isSaved && (
                <IoCheckmarkSharp className="text-white dark:text-primary-dark text-xl transition-opacity duration-300 " />
              )}
            </div>
            <span className="ms-3 text-primary">
              نام و ایمیل من را در این مرورگر ذخیره کن
            </span>
          </label>
          <div>
            <Button className={"w-22"}>ارسال</Button>
          </div>
        </div>
      </form>
    </>
  );
}

export default ProductReviewForm;
