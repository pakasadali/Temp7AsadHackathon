'use client'

import Image from "next/image";
import React from "react";

// Sidebar navigation item type
type NavItem = {
  icon: string;
  label: string;
  href: string;
};

// Main navigation items
const mainNavItems: NavItem[] = [
  { icon: "dashboard", label: "Dashboard", href: "#" },
  { icon: "car-rent", label: "Car Rent", href: "#" },
  { icon: "insight", label: "Insight", href: "#" },
  { icon: "reimburse", label: "Reimburse", href: "#" },
  { icon: "inbox", label: "Inbox", href: "#" },
  { icon: "calendar", label: "Calendar", href: "#" },
];

// Preferences navigation items
const prefNavItems: NavItem[] = [
  { icon: "settings", label: "Settings", href: "#" },
  { icon: "help-center", label: "Help & Center", href: "#" },
  { icon: "dark-mode", label: "Dark Mode", href: "#" },
];

// NavItem component
const NavItem: React.FC<NavItem> = ({ icon, label, href }) => (
  <li>
    <a
      href={href}
      className="text-black hover:text-white text-[15px] flex items-center hover:bg-[#3563E9] rounded px-4 py-3 transition-all"
    >
      <Image src={`/${icon}.svg`} alt={label} width={18} height={18} className="mr-4" />
      <span>{label}</span>
    </a>
  </li>
);

// Sidebar Component
const Sidebar: React.FC = () => (
  <nav className="bg-[#ffffff] w-80 px-4 font-[sans-serif]">
    <h4 className="text-[#94A7CB66] text-[12px] mt-6 ml-5">MAIN MENU</h4>   
    <div className="overflow-auto pb-6 h-full mt-4">
      <ul className="space-y-1">
        {mainNavItems.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
      </ul>
      <h4 className="text-[#94A7CB66] text-[12px] mt-6 ml-5">PREFERENCES</h4>  
      <ul className="space-y-1">
        {prefNavItems.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
      </ul>
      <NavItem icon="logout" label="Logout" href="#" />
    </div>
  </nav>
);

// Rental Form Component
const RentalForm: React.FC = () => (
  <div className="flex flex-col justify-center items-center space-y-4">
    <RentalSection title="Pick - Up" icon="mark.png" />
    <RentalSection title="Drop - Off" icon="mark1.png" />
  </div>
);

// Rental Section Component
const RentalSection: React.FC<{ title: string; icon: string }> = ({ title, icon }) => (
  <div className="p-4 w-full bg-white rounded-xl">
    <div className="flex items-center mb-4">
      <Image src={`/${icon}`} alt={title} width={20} height={20} className="mr-3" />
      <h2 className="text-lg font-bold">{title}</h2>
    </div>
    <div className="grid grid-cols-3 gap-4">
      <FormSelect label="Locations" options={["Select your city", "Karachi", "Lahore", "Islamabad"]} />
      <FormSelect label="Date" options={["Select Date", "17-07-2023"]} />
      <FormSelect label="Time" options={["Select Time", "12:00"]} />
    </div>
  </div>
);

// Form Select Component
const FormSelect: React.FC<{ label: string; options: string[] }> = ({ label, options }) => (
  <div>
    <label className="block font-semibold mb-1">{label}</label>
    <select className="block w-full border rounded px-2 py-1">
      {options.map((option) => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  </div>
);

// Total Price Component
const TotalPrice: React.FC = () => (
  <div className="w-full flex justify-between items-center mt-6">
    <div>
      <h2 className="text-[20px] text-[#1A202C]">Total Rental Price</h2>
      <p className="text-[14px] text-[#90A3BF]">Overall price and includes rental discount</p>
    </div>
    <h2 className="text-[32px] text-[#1A202C]">$80.00</h2>
  </div>
);

// Main Content Component
const MainContent: React.FC = () => (
  <div className="w-[534px] h-[836px] bg-white m-3">
    <h2 className="text-[20px] m-4 text-[#1A202C]">Detail Rental</h2>
    <Image
      src="/Maps.png"
      alt="map"
      width={486}
      height={272}
      className="m-4"
    />
    <div className="flex items-center justify-between m-4">
      <div className="flex items-center">
        <Image
          src="/Look.png"
          alt="car"
          width={132}
          height={72}
        />
        <div className="ml-4">
          <h2 className="font-bold">Nissan GT - R</h2>
          <span className="text-gray-500">Sport Car</span>
        </div>
      </div>
      <h3 className="text-gray-500">#9761</h3>
    </div>
    
    {/* Rental Details */}
    <div className="container px-5 mx-auto">
      <RentalForm />
      <TotalPrice />
    </div>
  </div>
);

// Right Panel Component
const RightPanel: React.FC = () => (
  <div className="w-[486px] h-[836px] bg-white m-3">
    <Image
      src="/top.png"
      alt="car"
      width={524}
      height={324}
    />
    <Image
      src="/recent.png"
      alt="car"
      width={524}
      height={480}
      className="mt-5"
    />
  </div>
);

// Main CarRentalDashboard Component
export default function CarRentalDashboard() {
  return (
    <div className="flex bg-[#F6F7F9]">
      <Sidebar />
      <MainContent />
      <RightPanel />
    </div>
  );
}

