import { IoCall, IoLocation, IoMail } from "react-icons/io5";
import { Link } from "react-router-dom";
import { optimizedImgs } from "../library/imageLoader";
import { ValidateContact } from "../validations/contactValidations";
import { useContext } from "react";
import { AuthContext } from "../features/auth/context/AuthContext";
import { createTicket } from "../services/api/ticketApi";
import { toast } from "react-toastify";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import ImageOptimizer from "../components/ui/ImageOptimizer";
import Input from "../components/ui/Input";
import Subscribe from "../components/ui/Subscribe";
import useForm from "../hooks/useForm";

function Contact() {
  const { currentUser } = useContext(AuthContext);
  const { formData, formError, changeHandler, submitHandler, resetForm } =
    useForm({
      initialValues: { name: "", email: "", subject: "", message: "" },
      validate: (data) => ValidateContact(data),
      onSubmit: async (data) => {
        const payload = {
          userId: currentUser?.id ?? null,
          authorName: currentUser?.name ?? data.name.trim(),
          authorEmail: currentUser?.email ?? data.email.trim(),
          subject: data?.subject.trim(),
          body: data.message.trim(),
          created_at: new Date().toISOString(),
          status: currentUser ? "approved" : "pending",
        };
        await createTicket(payload);
        toast.success("پیام شما با موفقیت ثبت شد");
        resetForm();
      },
    });

  return (
    <>
      <div className="contact-header relative">
        <div className="overlay absolute inset-0 bg-black/50 flex items-center justify-center text-xl md:text-2xl lg:text-3xl text-white ">
          <h2>تماس با ما</h2>
        </div>
        <ImageOptimizer
          image={optimizedImgs.page_header}
          sizes="(max-width: 768px) 100vw, 1200px"
          alt="header-image"
          className="size-full object-cover"
        />
      </div>
      <Container>
        <div className="md:my-20 my-14 flex flex-col md:flex-row lg:gap-14 gap-7 font-semibold">
          <div className="lg:p-5 lg:rounded lg:border border-brdr-clr md:w-full lg:w-2/5 2xl:w-2/6 sm:space-y-7 space-y-4 lg:bg-paper">
            <h3 className="md:text-xl sm:text-lg 2xs:text-base text-sm ">
              ما را اینجا پیدا کنید
            </h3>
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center 2xs:size-10 size-8 rounded p-1.5 border border-brdr-clr">
                <IoLocation className="2xs:size-5 dark:text-secondary text-primary" />
              </div>
              <div className="2xs:text-sm text-xs">
                <h4>آدرس</h4>
                <p className="text-muted">
                  خیابان زنبق ، نبش بانک ملی پلاک 485
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center 2xs:size-10 size-8 rounded p-1.5 border border-brdr-clr">
                <IoMail className="2xs:size-5 dark:text-secondary text-primary" />
              </div>
              <div className="2xs:text-sm text-xs tracking-wide">
                <h4>ایمیل</h4>
                <Link to="mailto:zigzag@gmail.com" className="text-muted">
                  zigzag@gmail.com
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center 2xs:size-10 size-8 rounded p-1.5 border border-brdr-clr">
                <IoCall className="2xs:size-5 dark:text-secondary text-primary" />
              </div>
              <div className="2xs:text-sm text-xs tracking-wide">
                <h4>تلفن</h4>
                <Link to="tell:+989376242832" className="text-muted">
                  989376242832+ | 05131234567
                </Link>
              </div>
            </div>
            <div className="max-w-150 w-full">
              <ImageOptimizer
                image={optimizedImgs.map}
                sizes="(max-width: 768px) 100vw, 1200px"
                alt="map"
                className="size-full object-cover rounded"
              />
            </div>
          </div>
          <div className="w-full space-y-5 md:w-full lg:w-3/5 2xl:w-4/6">
            <h3 className="md:text-xl sm:text-lg 2xs:text-base text-sm">
              در تماس باشید
            </h3>
            <form className="space-y-6" onSubmit={submitHandler}>
              <div className="flex flex-col lg:flex-row gap-5 ">
                <div className="w-full space-y-3">
                  <label
                    htmlFor="contact-name"
                    className="block 2xs:text-base text-sm"
                  >
                    نام <span className="text-error">*</span>
                  </label>
                  <Input
                    name="name"
                    id={"contact-name"}
                    placeHolder="نام خود را وارد کنید"
                    className="tracking-wide w-full"
                    value={formData.name}
                    onChange={changeHandler}
                    hasError={formError.name || formError.general}
                  />
                  {formError.name && (
                    <p className="2xs:text-sm text-xs text-red-500 dark:text-red-400">
                      {formError.name}
                    </p>
                  )}
                </div>
                <div className="w-full space-y-3">
                  <label
                    htmlFor="contact-email"
                    className="block 2xs:text-base text-sm"
                  >
                    ایمیل <span className="text-error">*</span>
                  </label>
                  <Input
                    inputMode={"email"}
                    name={"email"}
                    id={"contact-email"}
                    placeHolder="example@gmail.com"
                    className="tracking-wide w-full"
                    value={formData.email}
                    onChange={changeHandler}
                    hasError={formError.email || formError.general}
                  />
                  {formError.email && (
                    <p className="2xs:text-sm text-xs text-red-500 dark:text-red-400">
                      {formError.email}
                    </p>
                  )}
                </div>
              </div>
              <div className="w-full">
                <label
                  htmlFor="contact-subject"
                  className="block mb-3 2xs:text-base text-sm "
                >
                  موضوع
                </label>
                <Input
                  type="text"
                  name="subject"
                  id={"contact-subject"}
                  placeHolder="موضوع خود را وارد کنید"
                  className="w-full"
                  value={formData.subject}
                  onChange={changeHandler}
                />
              </div>
              <div className="w-full ">
                <label
                  htmlFor="contact-message"
                  className="block mb-3 2xs:text-base text-sm "
                >
                  پیام <span className="text-error">*</span>
                </label>
                <textarea
                  type="text"
                  style={{ resize: "none" }}
                  autoComplete="off"
                  spellCheck="false"
                  rows={5}
                  name="message"
                  id="contact-message"
                  value={formData.message}
                  onChange={changeHandler}
                  placeholder="پیام خود را اینجا بنویسید"
                  className={`px-3 py-2 w-full rounded appearance-none transition duration-300 ease-in-out sm:text-base text-sm placeholder:2xs:text-sm placeholder:text-muted text-heading font-normal focus:outline-none ${formError.message ? "border-error ring-2 ring-error focus:ring-error hover:ring-error" : "border border-brdr-clr dark:border-brdr-clr focus:ring-2 focus:ring-primary hover:ring-2 hover:ring-primary"}`}
                />
                {formError.message && (
                  <p className="2xs:text-sm text-xs text-red-500 dark:text-red-400 ">
                    {formError.message}
                  </p>
                )}
              </div>
              <Button className={"2xs:text-base text-sm"}>ارسال پیام</Button>
            </form>
          </div>
        </div>
        <Subscribe />
      </Container>
    </>
  );
}

export default Contact;
