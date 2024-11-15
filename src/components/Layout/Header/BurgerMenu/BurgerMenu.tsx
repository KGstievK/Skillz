"use client";
import Cart from "@/assets/Cart.svg";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import scss from "./BurgerMenu.module.scss";

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const pathname = usePathname();
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest(`.${scss.aa}`)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={scss.burgerMenu}>
      {isOpen ? (
        <button  className={scss.closeButton}
        onClick={() => setIsOpen(false)}>
          <div className={scss.close}></div>
          <div className={scss.close}></div>
        </button>
      ) : (
        <button className={scss.menuButton} onClick={() => setIsOpen(true)}>
          <div className={scss.Burger_Menu}></div>
          <div className={scss.Burger_Menu}></div>
          <div className={scss.Burger_Menu}></div>
        </button>
      )}

      {isOpen && (
        <div className={scss.menuOverlay}>
          <div className={scss.cart}>
            <Link href="/">
              <Image src={Cart} alt="Cart" />
            </Link>
          </div>
          <nav className={scss.menuNav}>
            <Link
              href="#Courses"
            >
              Courses
            </Link>
            <Link
              href="#Workshops"
            >
              Free Workshops
            </Link>
            <Link
              href="/"
            >
              Blog
            </Link>
            <Link onClick={() => setIsOpen(false)} href="/">
              About
            </Link>
            <Link onClick={() => setIsOpen(false)} href="#Contact">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
