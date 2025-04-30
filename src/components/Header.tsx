import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toogleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="bg-sky-600 p-4 text-white">
      <nav className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-lg font-bold">
          Fashion Shop
        </Link>
        <button onClick={toogleMenu} className="block text-xl lg:hidden">
          &#8801;
        </button>
        {/* Desktop view Nav*/}
        <ul className="hidden gap-6 lg:flex">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-yellow-500" : "hover:text-gray-300"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive ? "text-yellow-500" : "hover:text-gray-300"
              }
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? "text-yellow-500" : "hover:text-gray-300"
              }
            >
              Cart
            </NavLink>
          </li>
        </ul>

        {/* Mobile View Nav*/}
        <div
          className={`fixed inset-0 z-50 transform bg-sky-600 opacity-90 ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out lg:hidden`}
        >
          <div className="flex h-full flex-col items-center justify-center gap-8">
            <Link to="/" onClick={toogleMenu} className="text-3xl">
              Home
            </Link>
            <Link to="/shop" onClick={toogleMenu} className="text-3xl">
              Shop
            </Link>
            <Link to="/cart" onClick={toogleMenu} className="text-3xl">
              Cart
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
