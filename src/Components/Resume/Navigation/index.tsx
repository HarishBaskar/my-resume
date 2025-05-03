'use client'

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Styles from "./Navigation.module.scss";

interface NavItem {
  path: string;
  label: string;
}

const navItems: NavItem[] = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" }
];

const Navigation: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className={Styles.navigation}>
      <ul>
        {navItems.map(({ path, label }) => (
          <li key={path}>
            <Link 
              href={path}
              className={pathname === path ? Styles.active : ""}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;