/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { title, thumbnail_url, image_url, details, _id, author: { name, published_date } } = news;
  return (
    <div className="max-w-xl p-6 overflow-hidden rounded-lg shadow mb-3 dark:bg-gray-300 dark:text-gray-800">
      <article>
      <div className="flex items-center mb-4 space-x-4">
          <img
            src={thumbnail_url}
            alt=""
            className="w-10 h-10 rounded-full dark:bg-gray-500"
          />
          <div>
            <h3 className="text-sm font-medium">{name}</h3>
            <time className="text-sm dark:text-gray-600">
              {published_date}
            </time>
          </div>
        </div>
        <img
            src={image_url}
            alt=""
            className="mb-4 rounded-xl"
          />
        <h2 className="text-xl font-bold">
          {title}
        </h2>
        {
            details.length > 200 ? 
            <p className="mt-4 dark:text-gray-600">{details.slice(0,200)} <Link to={`/news/${_id}`} className="text-purple-700 font-semibold">Read More...</Link></p>
                : <p>{details}</p>
        }
        
      </article>
    </div>
  );
};

export default NewsCard;
