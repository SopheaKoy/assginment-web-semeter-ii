import React from 'react';
import thumbnail from '../lib/logo/img11.jpg';
import placeholderImage from '../lib/logo/placeholder.jpg'; // Add your placeholder image path

export default function Card() {
  return (
    <section>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3 overflow-hidden hover:scale-105 transition-transform hover:border-blue-600">
        <a href="#">
          <img
            className="rounded-t-lg"
            src={thumbnail}
            alt="thumbnail"
            loading="lazy"
            onError={(e) => {
              e.target.src = placeholderImage; // Use placeholder image if thumbnail fails to load
            }}
          />
        </a>
        <div className="p-5">
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-3xl hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            45$
          </a>
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Ram SAMSUNG</h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Technology: LPDDR4X Capacity: 8GB vSpeed: 4266 Mbps
          </p>
        </div>
      </div>
    </section>
  );
}

