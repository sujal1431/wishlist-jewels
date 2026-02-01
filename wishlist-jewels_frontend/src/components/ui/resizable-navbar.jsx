"use client";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../lib/utils"; // <-- relative path
import { IconMenu2, IconX } from "@tabler/icons-react";

/**
 * Navbar container - fixed to top and passes visible (scrolled) prop to children
 */
export const Navbar = ({ children, className }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 80); // threshold
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 pointer-events-auto",
        className
      )}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? React.cloneElement(child, { visible }) : child
      )}
    </div>
  );
};

/**
 * Desktop nav body — animates width, blur, translate, shadow via inline style + transition
 */
export const NavBody = ({ children, visible, className }) => {
  const style = {
    width: visible ? "60%" : "100%",
    transform: visible ? "translateY(6px)" : "translateY(0)",
    backdropFilter: visible ? "blur(8px)" : "none",
    transition: "all 320ms cubic-bezier(.2,.9,.2,1)",
  };

  return (
    <div
      style={style}
      className={cn(
        "mx-auto max-w-7xl px-4 py-2 hidden lg:flex items-center justify-between rounded-full",
        visible ? "bg-white/60 dark:bg-neutral-950/60" : "bg-transparent",
        className
      )}
    >
      {children}
    </div>
  );
};

/**
 * Centered nav items (desktop)
 */
export const NavItems = ({ items = [], className, onItemClick }) => {
  const [hovered, setHovered] = useState(null);

  return (
    <div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "absolute inset-0 hidden flex-1 items-center justify-center text-base font-medium lg:flex",
        className
      )}
      style={{ pointerEvents: "none" }} // lets links appear but keep layout stable
    >
      <div className="relative flex space-x-2" style={{ pointerEvents: "auto" }}>
        {items.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            onMouseEnter={() => setHovered(idx)}
            onClick={onItemClick}
            className="relative px-4 py-2 text-neutral-700 dark:text-neutral-200"
          >
            {hovered === idx && (
              <span
                className="absolute inset-0 rounded-full"
                style={{ background: "rgba(0,0,0,0.04)" }}
              />
            )}
            <span className="relative z-10">{item.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

/**
 * Mobile container (shows on small screens)
 */
export const MobileNav = ({ children, visible, className }) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between px-4 py-2 lg:hidden",
        visible ? "bg-white/60 dark:bg-neutral-950/60" : "bg-transparent",
        className
      )}
      style={{ transition: "all 300ms ease" }}
    >
      {children}
    </div>
  );
};

export const MobileNavHeader = ({ children, className }) => (
  <div className={cn("flex w-full items-center justify-between", className)}>{children}</div>
);

export const MobileNavMenu = ({ isOpen, children }) => {
  if (!isOpen) return null;
  return (
    <div className="absolute left-0 right-0 top-14 z-40 bg-white dark:bg-neutral-900 px-4 py-6 shadow-lg lg:hidden">
      <div className="flex flex-col gap-4">{children}</div>
    </div>
  );
};

export const MobileNavToggle = ({ isOpen, onClick }) =>
  isOpen ? (
    <IconX className="w-6 h-6 text-black dark:text-white" onClick={onClick} />
  ) : (
    <IconMenu2 className="w-6 h-6 text-black dark:text-white" onClick={onClick} />
  );

export const NavbarLogo = ({ className }) => (
  <Link to="/" className={cn("flex items-center space-x-2 px-2 py-1 text-base hover:opacity-80 transition-opacity", className)}>
    <img src="https://assets.aceternity.com/logo-dark.png" alt="logo" width={28} height={28} />
    <span className="font-medium text-black dark:text-white">Wishlist Jewels</span>
  </Link>
);

export const NavbarButton = ({ href, as: Tag = "a", children, className, variant = "primary", ...props }) => {
  const base = "px-4 py-2 rounded-md text-base font-bold inline-block transition-all duration-200";
  const variants = {
    primary: "bg-white text-black shadow",
    secondary: "bg-transparent text-black dark:text-white",
  };
  return (
    <Tag href={href} className={cn(base, variants[variant], className)} {...props}>
      {children}
    </Tag>
  );
};
