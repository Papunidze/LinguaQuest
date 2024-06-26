import Image from "next/image";
import React from "react";

interface CardProps {
  image: string;
  title: string;
  tags: string[];
  price: string;
  ingredients: string;
}

const Card = ({ image, title, tags, price, ingredients }: CardProps) => {
  return (
    <article className="bg-backgrounds-primary shadow-md rounded-lg w-96">
      <figure>
        <Image
          src={image}
          alt={title}
          className="w-full object-cover rounded-lg  rounded-b-none h-60"
          width={500}
          height={500}
        />
      </figure>
      <div className="px-4 pb-2 flex flex-col justify-center container mx-auto ">
        <h1 className="text-xl font-semibold">{title}</h1>{" "}
        <div className="flex items-center justify-start mt-2">
          {tags.map((element, index) => (
            <span
              key={index}
              className="bg-primary-light text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded  border-border-primary"
            >
              {element}
            </span>
          ))}
        </div>
        <p className="text-sm">{ingredients}</p>
        <div className="flex items-center justify-between">
          <span className="font-bold text-lg">{price}</span>
          <button className="button outlined">
            <span className="button-text-span">კალთაში დამატება</span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default Card;
