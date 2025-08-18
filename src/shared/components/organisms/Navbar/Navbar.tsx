import { Link } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";

const Navbar = () => {
  const { logout } = useAuth();

  // Menu items
  const menuItems = [
    { name: "SS", path: "/ss" },
    { name: "FW", path: "/fw" },
    { name: "PANTS", path: "/pants" },
    { name: "T-Shirt", path: "/t-shirt" },
    { name: "SALE", path: "/sale" },
    { name: "COLLECTION", path: "/collection" },
    { name: "COMMUNITY", path: "/community" },
  ];

  return (
    <nav className="bg-black text-white fixed w-full top-0 z-50">
      <div className="flex items-center justify-between px-10 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-wider text-[#FFC40B]"
        >
          LANDAS
        </Link>

        {/* Navigation links */}
        <div className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="hover:text-gray-300 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Icons and User actions */}
        <div className="flex items-center space-x-5">
          {/* Search icon */}
          <button className="hover:text-gray-300 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* User account icon */}
          <button className="hover:text-gray-300 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Cart icon */}
          <button className="hover:text-gray-300 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
          </button>

          {/* Logout button */}
          <button
            onClick={logout}
            className="text-sm hover:text-gray-300 transition-colors"
          >
            로그아웃
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
