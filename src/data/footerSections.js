import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoYoutube,
} from "react-icons/io5";

export const footerSections = [
  {
    title: "شبکه های اجتماعی",
    items: [
      {
        icon: IoLogoInstagram,
        label: "اینستاگرام",
        url: "https://www.instagram.com",
      },
      {
        icon: IoLogoTwitter,
        label: "توییتر",
        url: "https://x.com",
      },
      {
        icon: IoLogoFacebook,
        label: "فیسبوک",
        url: "https://facebook.com",
      },
      {
        icon: IoLogoYoutube,
        label: "یوتیوب",
        url: "https://www.youtube.com",
      },
    ],
  },
  {
    title: "تماس با ما",
    items: [
      { label: "پشتیبانی", url: "contact" },
      {
        label: "zigzag@gmail.com",
        url: "mailto:zigzag@gmail.com",
      },
      {
        label: "98937-6242832+",
        url: "tel:+989376242832",
      },
      {
        label: "ZigZag_channel@",
        url: "/",
      },
    ],
  },
  {
    title: "درباره ما",
    items: [
      { label: "شرایط و ضوابط فروشگاه", url: "faq" },
      { label: "نقشه سایت", url: "faq" },
      { label: "حریم خصوصی", url: "faq" },
      { label: "فرصت همکاری", url: "faq" },
    ],
  },
  {
    title: "خدمات مشتریان",
    items: [
      { label: "حمل و نقل و تحویل", url: "faq" },
      { label: "مرجوعی و تعویض", url: "faq" },
      { label: "پرسش های متداول", url: "faq" },
    ],
  },
  {
    title: "راهنمای خرید از زیگزاگ",
    items: [
      { label: "نحوه ثبت سفارش", url: "faq" },
      { label: "رویه ارسال سفارش", url: "faq" },
      { label: "شیوه های پرداخت", url: "faq" },
      { label: "نصب اپلیکیشن", url: "faq" },
    ],
  },
  {
    title: "دسته بندی های برتر",
    items: [
      { label: "پوشاک مردانه", url: "/products?category=men" },
      { label: "پوشاک زنانه", url: "/products?category=women" },
      { label: "پوشاک بچگانه", url: "/products?category=kids" },
      { label: "پوشاک ورزشی", url: "/products" },
    ],
  },
];
