'use client';

import React from 'react';
import Image from 'next/image';
import switch1 from '../../../Public/Switch.png'
import icon1 from '../../../Public/mark.png'
import car from '../../../Public/car.png'

// Interface for CarCard properties
interface CarCardProps {
  // name: string;
  //type: string;
 // image: string; // Use a string for the `image` prop to refer to public assets directly
  fuel: string;
  transmission: string;
  capacity: string;
  price: number;
}

// Rental Section Component
const RentalSection = ({ title, icon }: { title: string; icon: string }) => {
  return (
    <div className="p-4 w-full lg:w-[600px] bg-white h-auto lg:h-40 rounded-xl">
      <div className="flex items-center">
        <Image src={icon1} alt="icon" width={20} height={20} className="w-5" />
        <h2 className="ml-3 text-lg font-bold">{title}</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
        <div>
          <label htmlFor="location" className="block font-semibold">
            Locations
          </label>
          <select id="location" className="block w-full mt-1 border rounded px-2 py-1">
            <option>Select your city</option>
            <option>Karachi</option>
            <option>Lahore</option>
            <option>Islamabad</option>
          </select>
        </div>
        <div>
          <label htmlFor="date" className="block font-semibold">
            Date
          </label>
          <select id="date" className="block w-full mt-1 border rounded px-2 py-1">
            <option>Select Date</option>
            <option>17-07-2023</option>
          </select>
        </div>
        <div>
          <label htmlFor="time" className="block font-semibold">
            Time
          </label>
          <select id="time" className="block w-full mt-1 border rounded px-2 py-1">
            <option>Select Time</option>
            <option>12:00</option>
          </select>
        </div>
      </div>
    </div>
  );
};

// CarCard Component
const CarCard = ({
  name,
  type,
  image,
  fuel,
  transmission,
  capacity,
  price,
}: CarCardProps) => {
  return (
    <div className="shadow-md overflow-hidden rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative h-96">
      <div className="text-[#ED3F3F] w-11 h-10 flex items-center justify-center cursor-pointer absolute top-3 right-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          className="text-[#ED3F3F] inline-block"
          viewBox="0 0 64 64"
        >
          <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" />
        </svg>
      </div>

      <div className="w-5/6 h-[250px] p-2 overflow-hidden mx-auto">
        <Image src={car} alt="car" width={190} height={180} className="h-full w-full object-contain" />
      </div>

      <div className="pt-4 bg-white">
        <div className="flex justify-between px-6">
          <div className="flex items-center">
            <span className="ml-2 text-[#90A3BF]">{fuel}</span>
          </div>
          <div className="flex items-center">
            <span className="ml-2 text-[#90A3BF]">{transmission}</span>
          </div>
          <div className="flex items-center">
            <span className="ml-2 text-[#90A3BF]">{capacity}</span>
          </div>
        </div>
        <div className="flex justify-between items-center px-6 mt-4 pb-4">
          <div>
            <span className="text-xl font-bold">${price.toFixed(2)}/</span>
            <span className="text-sm text-gray-400">day</span>
          </div>
          <button className="bg-[#3563E9] text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
            Rent Now
          </button>
        </div>
      </div>
    </div>
  );
};

// Main Hero Component
export default function Popular() {
  return (
    <div className="font-[sans-serif] py-4 mx-auto lg:max-w-7xl sm:max-w-full mt-10">
      <div className="container px-5 mx-auto">
        <div className="flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-4">
          <RentalSection title="Pick - Up" icon="/mark.png" />
          <div className="flex justify-center lg:block">
            <Image src={switch1} alt="Switch" width={64} height={64} className="w-16 h-16 lg:w-25 lg:h-20" />
          </div>
          <RentalSection title="Drop - Off" icon="/mark1.png" />
        </div>
      </div>

      <div className="flex flex-wrap items-center py-8">
        <div className="w-full sm:w-1/2 flex justify-center sm:justify-start mb-4 sm:mb-0">
          <h2 className="text-[#90A3BF] text-center sm:text-left">Popular Car</h2>
        </div>
        <div className="w-full sm:w-1/2 flex justify-center sm:justify-end">
          <h2 className="text-[#3563E9] text-center sm:text-right">View All</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <CarCard name="Koenigsegg" type="Sport" image="/car.png" fuel="90L" transmission="Manual" capacity="2 People" price={99.0} />
        <CarCard name="Nissan GT-R" type="Sport" image="/Car5.png" fuel="80L" transmission="Manual" capacity="2 People" price={80.0} />
      </div>
    </div>
  );
}