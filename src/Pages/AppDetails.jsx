import React, { useState } from 'react';
import useApps from '../hooks/useApps';
import { useParams } from 'react-router';
import downloadImg from '../assets/icon-downloads.png';
import ratingsImg from '../assets/icon-ratings.png';
import reviewImg from '../assets/icon-review.png';
import { toast, ToastContainer } from 'react-toastify';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const AppDetails = () => {
  const { id } = useParams();
  const { apps } = useApps();

  const app = apps.find(ap => String(ap.id) === id);
  console.log(app);

  const {
    image,
    title,
    description,
    ratings,
    companyName,
    downloads,
    ratingAvg,
    reviews,
    size,
  } = app || {};

  const [isInstalled, setIsInstalled] = useState(false);

  const handleClick = () => {
    toast.success(`${title} Installed Successfuly`, {
      position: 'top-center',
      autoClose: 3000,
    });
    setIsInstalled(true);
  };

  return (
    <div className="bg-[#f5f5f5] py-20">
      <div className="container mx-auto">
        <div className="flex gap-20 w-full">
          <div>
            <img className="w-sm shadow-lg rounded-2xl" src={image} alt="" />
          </div>
          <div className="w-full">
            <div>
              <h1 className="text-[#001931] font-bold text-4xl">{title}</h1>
              <p className="text-[#627382] font-semibold text-xl leading-8">
                Developed by{' '}
                <span className="text-[#632EE3]">{companyName}</span>
              </p>
              <p className="divider w-full"></p>
              <div className="flex items-center gap-10">
                <div className="space-y-2">
                  <img src={downloadImg} alt="" />
                  <p className="text-base  text-[#001931]">Downloads</p>
                  <p className="text-4xl text-[#001931] font-extrabold">
                    {downloads}M
                  </p>
                </div>
                <div className="space-y-2">
                  <img src={ratingsImg} alt="" />
                  <p className="text-base  text-[#001931]">Average Ratings</p>
                  <p className="text-4xl text-[#001931] font-extrabold">
                    {ratingAvg}
                  </p>
                </div>
                <div className="space-y-2">
                  <img src={reviewImg} alt="" />
                  <p className="text-base  text-[#001931]">Total Reviews</p>
                  <p className="text-4xl text-[#001931] font-extrabold">
                    {reviews}
                  </p>
                </div>
              </div>
              <button
                onClick={handleClick}
                disabled={isInstalled}
                className="btn my-5 text-white bg-[#00D390] font-medium"
              >
                {' '}
                {isInstalled ? 'Installed' : `Install Now ${size} MB`}
              </button>
            </div>
          </div>
        </div>
        <p className="divider w-full"></p>
        {/* chart */}

        {/* <div className="space-y-3">
          <h3 className="text-xl font-semibold">Wishlist Summery</h3>
          <div className="bg-base-100 border rounded-xl p-4 h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={app.rating}
                layout="vertical"
                barSize={20}
                barCategoryGap={'20%'}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" dataKey="price" />
                <YAxis type="category" dataKey="category" />
                <Tooltip />
                <Legend />
                <Bar dataKey="price" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div> */}
      </div>
      <ToastContainer />
    </div>
  );
};

export default AppDetails;
