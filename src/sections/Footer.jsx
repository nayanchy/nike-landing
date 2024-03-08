import { footerLogo } from "../assets/images";
import { socialMedia } from "../constants";

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <footer className="max-container bg-black text-white">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="Nike" width={146} height={50} />
          </a>
          <p className="font-montserrat sm:max-w-sm mt-6">
            Get shoes ready for the new term at your nearest Nike store. Find
            your perfect size in store. Get rewards!
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((social) => {
              return (
                <img
                  src={social.src}
                  alt={social.alt}
                  key={social.alt}
                  className="rounded-full bg-white p-2 cursor-pointer"
                />
              );
            })}
          </div>
        </div>
        <div className="flex font-montserrat justify-between gap-20 lg:gap-10 max-sm:flex-col">
          <div className="">
            <h3 className="text-2xl font-bold">Products</h3>
            <ul className="text-slate-gray mt-4 leading-8">
              <li>
                <a href="">Air Force 1</a>
              </li>
              <li>
                <a href="">Air Jordan 1</a>
              </li>
              <li>
                <a href="">Air Max 1</a>
              </li>
              <li>
                <a href="">Air Jordan 2</a>
              </li>
              <li>
                <a href="">Air Waffle</a>
              </li>
              <li>
                <a href="">Nike Footsal 1</a>
              </li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-2xl font-bold">Help</h3>
            <ul className="text-slate-gray mt-4 leading-8">
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">FAQs</a>
              </li>
              <li>
                <a href="">How it Works</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">Payment Policy</a>
              </li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-2xl font-bold">Get in touch</h3>
            <ul className="text-slate-gray mt-4 leading-8">
              <li>
                <a href="mailto:nayan.1aacl@gmail.com">nayan.1aacl@gmail.com</a>
              </li>
              <li>
                <a href="tel:+8801780154515">+8801780154515</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="pt-16 text-slate-gray font-montserrat">
        Copyright &copy; {year} | Nayan Chowdhury
      </div>
    </footer>
  );
};

export default Footer;
