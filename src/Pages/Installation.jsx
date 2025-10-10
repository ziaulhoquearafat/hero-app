import React, { useEffect, useState } from 'react';
import downloadImg from '../assets/icon-downloads.png';
import ratingsImg from '../assets/icon-ratings.png';

const Installation = () => {
  const [wishlist, setWishList] = useState([]);

  useEffect(() => {
    const saveList = JSON.parse(localStorage.getItem('wishlist'));
    if (saveList) setWishList(saveList);
  }, []);
  return (
    <div className="bg-[#f5f5f5]">
      <div className="pt-14 pb-8">
        <h1 className="text-[#001931] text-3xl md:text-4xl text-center font-bold leading-13">
          Your Installed Apps
        </h1>
        <p className="text-[#627382] text-center px-5 w-full md:w-3xl mx-auto">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="container mx-auto">
        <div>
          <p className="text-[#001931] text-2xl leading-8 font-semibold">
            {wishlist.length} Apps Found
          </p>
        </div>

        <div className="space-y-3 py-10">
          {wishlist.map(p => (
            <div key={p.id} className="card card-side bg-base-100 shadow px-3">
              <figure>
                <img
                  className="w-15 h-15 object-cover rounded-lg shadow"
                  src={p.image}
                  alt={p.title}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{p.title}</h2>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <img className="w-3 h-3" src={downloadImg} alt="" />
                    <p className=" text-[#00D390]">{p.downloads}M</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <img className="w-3 h-3" src={ratingsImg} alt="" />
                    <p className=" text-[#FF8811]">{p.ratingAvg}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <p className=" text-[#627382]">{p.size} MB</p>
                  </div>
                </div>
              </div>
              <div className="pr-4 flex items-center gap-3">
                <button className="btn bg-[#00D390] text-white font-semibold">
                  Uninstall
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Installation;
