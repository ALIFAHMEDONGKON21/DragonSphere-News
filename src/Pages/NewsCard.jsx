import { FaShareAlt, FaRegEye } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const NewsCard = (props ={}) => {
    const {singledata}=props || {};
   
    return (
       
        <div className=" p-4 bg-white rounded-lg shadow-md">
        {/* Author Information */}
        <div className="flex items-center mb-4">
          <img
            src={singledata.author.img}
            alt={singledata.author.name}
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <p className="font-semibold">{singledata.author.name}</p>
            <p className="text-sm text-gray-500">{singledata.author.published_date}</p>
          </div>
          <div className="ml-auto">
            <FaShareAlt className="text-gray-600" />
          </div>
        </div>
  
        {/* Title */}
        <h2 className="text-xl font-semibold mb-2">{singledata.title}</h2>
  
        {/* Thumbnail Image */}
        <img
          src={singledata.image_url}
          alt="Thumbnail"
          className="w-full  object-cover rounded-lg mb-4"
        />
  
        {/* Details */}
        <p className="text-gray-700 text-sm mb-4">
          {singledata.details.slice(0, 150)}...{" "}
          <Link to={`/news/${singledata._id}`} className="text-primary">
            Read More
          </Link>
        </p>
  
        {/* Ratings and Views */}
        <div className="flex items-center justify-between text-gray-600 text-sm">
          {/* Rating */}
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <AiFillStar
                key={i}
                className={`text-yellow-500 ${
                  i < Math.round(singledata.rating.number) ? "" : "opacity-50"
                }`}
              />
            ))}
            <span className="ml-2 font-semibold">{singledata.rating.number}</span>
          </div>
  
          {/* Views */}
          <div className="flex items-center">
            <FaRegEye className="mr-1" />
            <span>{singledata.total_view}</span>
          </div>
        </div>
      </div>
    );
};

export default NewsCard;