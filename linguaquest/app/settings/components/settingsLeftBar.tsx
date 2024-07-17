"use client";

import { link } from "fs";
import Link from "next/link";
import React, { useState } from "react";

interface State {
  account: boolean;
  preference: boolean;
  billing: boolean;
  help: boolean;
}

interface Link {
  label: string;
  href: string;
}

const DropdownIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    className={`w-3 h-3 transform transition-transform ${
      isOpen ? "rotate-180" : ""
    }`}
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 10 6"
  >
    <path stroke="currentColor" d="m1 1 4 4 4-4" />
  </svg>
);

const SettingsLeftBar = () => {
  const [state, setState] = useState({
    account: true,
    preference: true,
    billing: true,
    help: true,
  });

  const toggleSection = (section: keyof State) => {
    setState((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const renderDropdown = (
    label: string,
    section: keyof State,
    links?: Link[]
  ) => (
    <li>
      <button
        type="button"
        className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
        aria-controls={`${section}-dropdown`}
        aria-expanded={state[section]}
      >
        <Link
          className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap"
          href={`/settings/${section}`}
        >
          {label}
        </Link>
        {links && (
          <span onClick={() => toggleSection(section)}>
            <DropdownIcon isOpen={state[section]} />
          </span>
        )}
      </button>
      {links && (
        <ul
          id={`${section}-dropdown`}
          className={`py-2 space-y-2 transition-all duration-75 ${
            state[section]
              ? "opacity-100 max-h-screen"
              : "opacity-0 max-h-0 hidden"
          }`}
        >
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={`/settings/${section}${link.href}`}
                className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );

  return (
    <aside
      id="sidebar-multi-level-sidebar"
      className="z-40 w-full transition-transform max-w-80 bg-backgrounds-secondary rounded-xl md:block hidden"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto">
        <ul className="space-y-2 font-medium flex flex-col gap-4">
          {renderDropdown("Account Settings", "account")}
          {renderDropdown("Preferences", "preference", [
            { label: "Language", href: "#" },
            { label: "Theme (Light/Dark Mode)", href: "#" },
          ])}
          {renderDropdown("Subscription and Billing", "billing", [
            { label: "Subscription Plans", href: "#" },
            { label: "Billing History", href: "#" },
            { label: "Manage Subscriptions", href: "#" },
          ])}
          {renderDropdown("Help and Support", "help", [
            { label: "Help Center", href: "#" },
            { label: "Contact Support", href: "#" },
            { label: "FAQs", href: "#" },
          ])}
        </ul>
      </div>
    </aside>
  );
};

export default SettingsLeftBar;
