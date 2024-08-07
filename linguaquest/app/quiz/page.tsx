"use client";

import { MenuToggle } from "@/components/menu/menuToggle";
import React, { useState } from "react";
import { Menu } from "react-feather";

const arr = [
  {
    title:
      "I.2.9. დაასრულეთ წინადადება: შარშან ჩემი კაქტუსი ზუსტად ამ პერიოდში ----------.",
  },
  {
    title:
      "III.3.11. რომელი წინადადება შეესაბამება ტექსტის შინაარსს? დმანისი უძველესი ქალაქია ქვემო ქართლში. არქეოლოგიური გათხრები აქ 1936 წლიდან მიმდინარეობს. თავდაპირველად აღმოაჩინეს შუა საუკუნეების ციხესიმაგრის ნანგრევები, შენობების ნაშთები, ცხოველთა ძვლები, ქვის იარაღები, მოგვიანებით კი დმანისის მახლობლად იპოვეს უძველესი ადამიანების თავის ქალები. დადგინდა მათი ასაკიც – 1,8 მილიონი წელი. უნიკალურმა აღმოჩენამ შეცვალა მანამდე არსებული მოსაზრება, რომ უძველესი ადამიანები ევრაზიაში აფრიკიდან მოვიდნენ. დღეს უკვე აღიარებულია, რომ დმანისი პირველი ევროპელების სამშობლოა. დმანისში აღმოჩენილი ორი თავის ქალის მიხედვით აღადგინეს ამ ადამიანების სახეები. მათ სახელებიც შეურჩიეს: ერთს მზია დაარქვეს, მეორეს – ზეზვა.",
  },
];
const Quiz = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [counter, setCounter] = useState(0);
  return (
    <section className="w-full   h-[calc(100vh-5rem)] p-6">
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg h-full">
        <div className="flex w-full h-full gap-2">
          <aside className="w-1/3 overflow-auto hidden grid-cols-1 max-h-full shadow-sm border-gray-200  rounded-lg p-4 md:grid gap-2">
            {Array(200)
              .fill("0")
              .map((element, index) => (
                <div
                  key={index}
                  className="w-full  hover:bg-slate-100 rounded-lg p-2 cursor-pointer text-primary-dark font-inter shadow-sm border-gray-100"
                >
                  {index}
                </div>
              ))}
          </aside>
          {isOpen && (
            <div
              className="fixed inset-0 bg-black/25 w-full h-screen opacity-50 z-10 md:hidden"
              onClick={() => setIsOpen(false)}
            ></div>
          )}
          <div
            className={`md:hidden rounded-md bg-transparent w-7/12 bg-white fixed top-0 left-0 z-40  h-screen transition-all duration-200 ${
              isOpen
                ? "w-full translate-x-0 opacity-100"
                : "w-0 -translate-x-full opacity-0 lg:translate-x-0"
            }`}
          >
            <div className="px-2 pt-2 pb-20 space-y-1 sm:px-3 mt-20 overflow-auto max-h-full">
              {Array(200)
                .fill("0")
                .map((element, index) => (
                  <div
                    key={index}
                    className="w-full  hover:bg-slate-100 rounded-lg p-2 cursor-pointer text-primary-dark font-inter shadow-sm border-gray-100"
                  >
                    {index}
                  </div>
                ))}
            </div>
          </div>
          <aside className="w-full  flex items-center max-w-screen-lg m-auto  gap-4 flex-col max-h-full overflow-auto relative">
            <div className="self-start">
              <div className="-mr-2 flex md:hidden z-50">
                <MenuToggle setIsOpen={setIsOpen} isOpen={isOpen} />
              </div>
            </div>
            <div className="grid grid-cols-1  mb-2">
              <div>{arr[counter].title}</div>
            </div>
            <div className="grid grid-cols-1 w-full gap-4 md:grid-cols-2  py-2">
              {Array(4)
                .fill("-")
                .map((element, index) => (
                  <div
                    key={index}
                    onClick={() => setCounter((prev) => prev + 1)}
                    className="w-full bg-slate-200 rounded-lg p-4 cursor-pointer text-primary-dark font-inter hover:bg-slate-300 shadow-sm border-gray-100"
                  >
                    {index}
                  </div>
                ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Quiz;
