import { ArrowDownToLine, Star } from 'lucide-react';
import React from 'react';

const AppCard = ({ app }) => {
  const { title, ratingAvg, image, downloads } = app;
  return (
    <div className="card bg-base-100 hover:bg-gray-100 shadow-sm hover:scale-103 transition ease-in-out">
      <figure className="p-4">
        <img className="w-full rounded-xl" src={image} alt={title} />
      </figure>
      <div className="card-body px-4 pt-1">
        <h2 className="card-title">{title}</h2>
        <div className="flex justify-between items-center">
          <div className="items-center w-[70px] text-[#00D390]">
            <p className="px-3 bg-[#F1F5E8] py-1 rounded-lg flex gap-1 items-center">
              <ArrowDownToLine size={16} />
              {downloads}M
            </p>
          </div>
          <div className="items-center w-[70px] text-[#FF8811]">
            <p className="px-3 bg-[#fff0e1] py-1 rounded-lg flex gap-1 items-center">
              <Star size={16} />
              {ratingAvg}
            </p>
          </div>
        </div>

        {/* <div className="card-actions justify-end">
          <Link to={`/product-details/${id}`} className="btn btn-outline">
            View Details
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default AppCard;
