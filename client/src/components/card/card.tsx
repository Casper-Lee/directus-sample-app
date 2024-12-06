import React from "react";

interface CardProps {
  title: string;
  slug: string;
  publishDate: string;
  authorName: string;
}

const Card: React.FC<CardProps> = ({
  title,
  slug,
  publishDate,
  authorName,
}) => {
  return (
    <a href={`/blog/${slug}`}>
      <div className="text-center bg-white w-72 shadow-md m-6 rounded-lg overflow-hidden">
        <div className="p-4">
          <h2 className="text-xl text-black font-bold mb-2">{title}</h2>
          <p className="text-gray-700 text-base">Posted: {publishDate}</p>
          <p className="text-gray-700 text-base">Author: {authorName}</p>
        </div>
      </div>
    </a>
  );
};

export default Card;
