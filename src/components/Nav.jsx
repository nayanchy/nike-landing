import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
const Nav = () => {
  return (
    <header className="padding-x py-8 z-10 w-full absolute">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Nike Logo" width={130} height={29} />
        </a>
        <ul className="flex flex-1 gap-16 justify-center items-center max-lg:hidden">
          {navLinks.map(({ href, label }, index) => (
            <li key={index}>
              <a
                href={href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="max-lg:block hidden">
          <img src={hamburger} alt="hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
