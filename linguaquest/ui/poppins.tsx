"use client";

import { useCallback, useState } from "react";
import { MoreVertical } from "react-feather";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

interface PoppinsProps {
  btn: React.ReactNode;
  content?: React.ReactNode;
  list: {
    label: string;
    fn?: () => void;
  }[];
}

const Poppins = ({ list, content, btn }: PoppinsProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavigation = useCallback(() => {
    setIsOpen((prevOpen) => {
      const newOpen = !prevOpen;
      if (newOpen) {
        disablePageScroll();
      } else {
        enablePageScroll();
      }
      return newOpen;
    });
  }, []);
  const tailPosition =
    "-translate-x-1/2 translate-y-full top-auto right-0  bottom-[calc(100%+3px)] ";
  return (
    <div className="relative">
      <div onClick={() => toggleNavigation()}>{btn}</div>
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/25 w-full h-screen opacity-50 z-10"
            onClick={() => toggleNavigation()}
          ></div>
          <div className="z-20 bg-white divide-y absolute top-full right-0 mt-3 divide-gray-100 rounded-lg w-44 shadow-inner transition-all animate-fadeIn">
            <div className="px-4 py-3 text-sm text-gray-900 inset-y-0 inset-0 rounded-md z-20">
              {content}
            </div>

            <ul
              className="py-2 text-sm text-gray-700"
              aria-labelledby="avatarButton"
            >
              {list.map((element) => (
                <li
                  key={element.label}
                  onClick={() => setIsOpen(false)}
                  className="px-2"
                >
                  <a
                    className="block px-2 py-1 hover:bg-gray-100 cursor-pointer rounded-lg"
                    onClick={element.fn}
                  >
                    {element.label}
                  </a>
                </li>
              ))}
            </ul>

            <div
              className={`absolute w-4 h-4 bg-white rotate-45 ${tailPosition} z-10`}
            ></div>
          </div>
        </>
      )}
    </div>
  );
};

export default Poppins;
