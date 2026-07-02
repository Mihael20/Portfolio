import ConstrainedBox from "@/components/core/constrained-box";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import Link from "next/link";

const PaymentMainSection = () => {
  return (
    <ResponsiveBox
      classNames="dark:bg-[var(--bgColor)] bg-[var(--bgColor)] dark:bg-grid-white/[0.1] bg-grid-white/[0.1] min-h-screen items-center justify-center relative overflow-hidden rounded-md"
      id="payment"
    >
      <ConstrainedBox classNames="px-4 py-8 z-20 items-center justify-center">
        <p className="text-center text-2xl lg:text-3xl font-semibold mt-4 max-w-screen-md">
          Thank you for choosing me to work on your project - I appreciate your
          trust and partnership!
        </p>
        <p className="text-center text-base mt-4 mb-8 max-w-screen-md">
          Securely pay for your website, mobile app, or backend API development
          project. I specialize in creating high-quality, customized solutions
          tailored to your needs.
        </p>
        <Link
          href="https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=mihael.kusibojoski26@gmail.com&currency_code=EUR"
          target="_blank"
          className="app__filled_btn min-w-[12rem] flex items-center justify-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 3.72a.641.641 0 0 1 .632-.544h6.964c2.58 0 4.427.583 5.492 1.732.505.541.828 1.108.985 1.733.163.658.144 1.446-.056 2.404l-.007.042v.365l.232.131a2.96 2.96 0 0 1 .853.734c.36.464.59 1.055.683 1.757.117.878.08 1.927-.11 3.115-.222 1.37-.583 2.563-1.072 3.544a6.421 6.421 0 0 1-1.705 2.163c-.658.539-1.437.944-2.315 1.201-.853.25-1.824.376-2.886.376H9.37a.883.883 0 0 0-.87.744l-.424 2.67zm9.405-13.36c-.024.144-.052.292-.084.445-.981 5.029-4.338 6.766-8.626 6.766H5.556a.883.883 0 0 0-.87.744L3.53 22h3.546l.424-2.67a.883.883 0 0 1 .87-.744h1.826c3.574 0 6.373-1.45 7.19-5.647.34-1.745.164-3.202-.905-3.962z"/>
          </svg>
          Pay with PayPal
        </Link>
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default PaymentMainSection;