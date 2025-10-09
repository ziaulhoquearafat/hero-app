import React from 'react';

const AppCard = ({ app }) => {
  const { title, ratingAvg, image, downloads } = app;
  return (
    <div className="card bg-base-100 border shadow-sm hover:scale-105 transition ease-out">
      <figure className="h-48 overflow-hidden">
        <img className="w-full object-cover" src={image} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>Category: {downloads}</p>
        <p>Price: ${ratingAvg}</p>

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
