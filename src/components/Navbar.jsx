import { appleImg, bagImg, searchImg } from "../utils";
import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        
        {/* Apple Logo */}
        <img src={appleImg} alt="apple logo" width={18} height={24} />

        {/* Navigation Links (Hidden on Small Screens) */}
        {/* <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div 
              key={nav} 
              className="px-5 nav-link cursor-pointer text-gray-500 hover:text-white transition-all"
            >
              {nav}
            </div>
          ))}
        </div> */}
        <ul className="nav-ul flex-1 justify-center">
            {navLinks.map(({id, href, name}) => (
                <li key={id} className="nav-li max-sm:hidden text-ul">
                    <a href={href} className="nav-li_a cursor-pointer" onClick={() =>{}}>
                        {name}
                    </a>
                </li>
            ))}
        </ul>

        {/* Search & Bag Icons */}
        <div className="flex items-center gap-7 max-sm:flex-1 max-sm:justify-end">
          <img src={searchImg} alt="search icon" width={18} height={18} />
          <img src={bagImg} alt="bag icon" width={18} height={18} />
        </div>

      </nav>
    </header>
  );
};

export default Navbar;
