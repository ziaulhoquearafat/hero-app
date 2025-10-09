import React from 'react';

const AppCard = ({ app }) => {
  const { title, ratingAvg, image, downloads } = app;
  return (
    <div className="card bg-base-100 hover:bg-gray-100 shadow-sm hover:scale-103 transition ease-in-out">
      <figure className="p-4">
        <img className="w-full rounded-xl" src={image} alt={title} />
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
