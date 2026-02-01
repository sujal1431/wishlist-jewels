import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./ui/resizable-navbar";
import { useCart } from "../context/CartContext.jsx";

export function NavbarDemo() {
  const { cart } = useCart();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: "Earrings", link: "/earrings" },
    { name: "Rings", link: "/rings" },
    { name: "Necklace", link: "/necklace" },
    { name: "Daily Wear", link: "/daily-wear" },
  ];

  // ✅ check session on mount + storage change
  useEffect(() => {
    const checkSession = () => {
      const user = sessionStorage.getItem("user");
      setIsLoggedIn(!!user);
    };

    checkSession();

    // Listen for storage updates (multi-tab + same app sync)
    window.addEventListener("storage", checkSession);
    return () => window.removeEventListener("storage", checkSession);
  }, []);

  // ✅ logout handler
  const handleLogout = () => {
    sessionStorage.removeItem("user");
    setIsLoggedIn(false);

    // Broadcast logout to other tabs/components
    window.dispatchEvent(new Event("storage"));

    navigate("/login");
  };

  return (
    <Navbar className="px-2">
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <NavItems
          items={navItems.map((item) => ({
            ...item,
            element: (
              <Link
                to={item.link}
                className="text-neutral-700 dark:text-neutral-100 hover:underline"
              >
                {item.name}
              </Link>
            ),
          }))}
        />
        <div className="flex items-center gap-3">
          {isLoggedIn ? (
            <NavbarButton onClick={handleLogout} variant="secondary">
              Logout
            </NavbarButton>
          ) : (
            <NavbarButton as={Link} to="/login" variant="secondary">
              Login
            </NavbarButton>
          )}

          {/* Cart button with item count */}
          <NavbarButton
            as={Link}
            to="/cart"
            variant="primary"
            className="relative"
          >
            Cart
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                {cart.reduce((acc, item) => acc + item.quantity, 0)}
              </span>
            )}
          </NavbarButton>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileOpen}
            onClick={() => setIsMobileOpen((s) => !s)}
          />
        </MobileNavHeader>
        <MobileNavMenu isOpen={isMobileOpen}>
          {navItems.map((it, i) => (
            <Link
              key={i}
              to={it.link}
              className="block text-neutral-700 dark:text-neutral-100 py-2"
              onClick={() => setIsMobileOpen(false)}
            >
              {it.name}
            </Link>
          ))}

          {isLoggedIn ? (
            <NavbarButton
              onClick={() => {
                handleLogout();
                setIsMobileOpen(false);
              }}
              variant="primary"
              className="w-full mb-2"
            >
              Logout
            </NavbarButton>
          ) : (
            <NavbarButton
              as={Link}
              to="/login"
              variant="primary"
              className="w-full mb-2"
              onClick={() => setIsMobileOpen(false)}
            >
              Login
            </NavbarButton>
          )}

          {/* Mobile Cart button */}
          <NavbarButton
            as={Link}
            to="/cart"
            variant="secondary"
            className="w-full relative"
            onClick={() => setIsMobileOpen(false)}
          >
            Cart
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                {cart.reduce((acc, item) => acc + item.quantity, 0)}
              </span>
            )}
          </NavbarButton>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
