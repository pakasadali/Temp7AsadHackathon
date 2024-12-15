'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Star } from 'lucide-react'
import Link from 'next/link'

// Interfaces
interface FilterCriteria {
  id: string
  label: string
  count: number
}

interface Vehicle {
  id: string
  name: string
  category: string
  image: string
  details: {
    fuelCapacity: string
    gearbox: string
    seating: string
  }
  dailyRate: number
  originalRate?: number
}

interface CustomerFeedback {
  id: number
  name: string
  position: string
  date: string
  rating: number
  feedback: string
  profilePic: string
}

// Data
const categoryFilters: FilterCriteria[] = [
  { id: 'sport', label: 'Sport', count: 10 },
  { id: 'suv', label: 'SUV', count: 12 },
  { id: 'mpv', label: 'MPV', count: 16 },
  { id: 'sedan', label: 'Sedan', count: 20 },
  { id: 'coupe', label: 'Coupe', count: 14 },
  { id: 'hatchback', label: 'Hatchback', count: 14 }
]

const seatingFilters: FilterCriteria[] = [
  { id: '2', label: '2 Person', count: 10 },
  { id: '4', label: '4 Person', count: 14 },
  { id: '6', label: '6 Person', count: 12 },
  { id: '8', label: '8 or More', count: 16 }
]

const latestVehicles: Vehicle[] = [
  {
    id: '1',
    name: 'Koenigsegg',
    category: 'Sport',
    image: '/car.png',
    details: {
      fuelCapacity: '90L',
      gearbox: 'Manual',
      seating: '2 People'
    },
    dailyRate: 99
  },
  {
    id: '2',
    name: 'Nissan GT-R',
    category: 'Sport',
    image: '/car3.png',
    details: {
      fuelCapacity: '80L',
      gearbox: 'Manual',
      seating: '2 People'
    },
    dailyRate: 80
  },
  {
    id: '3',
    name: 'Rolls-Royce',
    category: 'Sport',
    image: '/car4.png',
    details: {
      fuelCapacity: '70L',
      gearbox: 'Manual',
      seating: '4 People'
    },
    dailyRate: 96
  }
]

const suggestedVehicles: Vehicle[] = [
  {
    id: '4',
    name: 'All New Rush',
    category: 'SUV',
    image: '/car5.png',
    details: {
      fuelCapacity: '70L',
      gearbox: 'Manual',
      seating: '6 People'
    },
    dailyRate: 72,
    originalRate: 80
  },
  {
    id: '5',
    name: 'CR - V',
    category: 'SUV',
    image: '/car6.png',
    details: {
      fuelCapacity: '80L',
      gearbox: 'Manual',
      seating: '6 People'
    },
    dailyRate: 80
  },
  {
    id: '6',
    name: 'All New Terios',
    category: 'SUV',
    image: '/car7.png',
    details: {
      fuelCapacity: '90L',
      gearbox: 'Manual',
      seating: '6 People'
    },
    dailyRate: 74
  }
]

const customerFeedbacks: CustomerFeedback[] = [
  {
    id: 1,
    name: "Alex Stanton",
    position: "CEO at Bukalapak",
    date: "21 July 2022",
    rating: 4,
    feedback: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
    profilePic: "/Profill.png"
  },
  {
    id: 2,
    name: "Skylar Dias",
    position: "CEO at Amazon",
    date: "20 July 2022",
    rating: 4,
    feedback: "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
    profilePic: "/Profill1.png"
  }
]

// Components
const VehicleCard = ({ vehicle }: { vehicle: Vehicle }) => (
  <div className="shadow-md overflow-hidden rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative bg-white">
    <div className="flex items-center justify-between px-4 pt-4">
      <div>
        <h2 className="font-bold">{vehicle.name}</h2>
        <span className="text-[#90A3BF] text-sm">{vehicle.category}</span>
      </div>
    </div>

    <div className="w-5/6 h-[200px] p-2 overflow-hidden mx-auto">
      <Image
        src={vehicle.image}
        alt={vehicle.name}
        width={300}
        height={200}
        className="h-full w-full object-contain"
      />
    </div>

    <div className="p-4 space-y-4">
      <div className="flex justify-between text-[#90A3BF]">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <path d="M3 14h7a3 3 0 0 1 3 3v3h-9v-6Z" />
            <path d="M6 6h7a3 3 0 0 1 3 3v5" />
          </svg>
          {vehicle.details.fuelCapacity}
        </div>
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <circle cx="12" cy="12" r="8" />
            <path d="M12 2v7.5" />
            <path d="m19 5-5.23 5.23" />
          </svg>
          {vehicle.details.gearbox}
        </div>
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          {vehicle.details.seating}
        </div>
      </div>

      <div className="flex items-center justify-between pt-2">
        <div>
          <p className="text-xl font-bold">${vehicle.dailyRate}.00/<span className="text-sm text-gray-400">day</span></p>
          {vehicle.originalRate && (
            <p className="text-gray-600 text-sm line-through">${vehicle.originalRate}.00</p>
          )}
        </div>
        <button className="bg-[#3563E9] text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
          Rent Now
        </button>
      </div>
    </div>
  </div>
)

const Sidebar = ({ maxDailyRate, setMaxDailyRate }: { maxDailyRate: number, setMaxDailyRate: (value: number) => void }) => (
  <div className="w-72 p-6 bg-white shadow-sm">
    <div className="space-y-6">
      <div>
        <h4 className="text-sm font-medium text-gray-500 mb-4">Type</h4>
        <div className="space-y-4">
          {categoryFilters.map((filter) => (
            <div key={filter.id} className="flex items-center space-x-3">
              <input
                type="checkbox"
                id={filter.id}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor={filter.id} className="text-sm text-gray-700">
                {filter.label} ({filter.count})
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium text-gray-500 mb-4">Capacity</h4>
        <div className="space-y-4">
          {seatingFilters.map((filter) => (
            <div key={filter.id} className="flex items-center space-x-3">
              <input
                type="checkbox"
                id={filter.id}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor={filter.id} className="text-sm text-gray-700">
                {filter.label} ({filter.count})
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium text-gray-500 mb-4">Price</h4>
        <input
          type="range"
          min="0"
          max="200"
          value={maxDailyRate}
          onChange={(e) => setMaxDailyRate(parseInt(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <p className="mt-2 text-xl font-semibold">Max. ${maxDailyRate}.00</p>
      </div>
    </div>
  </div>
)

const FeaturedVehicle = ({ activeImage, setActiveImage }: { activeImage: string, setActiveImage: (src: string) => void }) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
    <div>
      <div className="aspect-video relative mb-4">
        <img
          src={activeImage}
          alt="Nissan GT-R"
          className="rounded-lg object-cover w-full h-full"
        />
      </div>
      <div className="flex gap-4">
        {['/view.png', '/View-1.png', '/View-2.png','/View-4.png'].map((src) => (
          <button
            key={src}
            onClick={() => setActiveImage(src)}
            className="w-24 h-24 rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <Image
              src={src}
              alt="Car view"
              width={96}
              height={96}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold">Nissan GT-R</h2>
          <div className="flex items-center mt-2">
            <div className="flex">
              {[1, 2, 3, 4].map((star) => (
                <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
              <Star className="w-4 h-4 text-gray-300" />
            </div>
            <span className="ml-2 text-sm text-gray-600">440+ Reviewer</span>
          </div>
        </div>
      </div>

      <p className="text-gray-600">
        NISMO has become the embodiment of Nissan&apos;s outstanding performance, inspired by the most
        unforgiving proving ground, the &quot;race track&quot;.
      </p>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-500">Type Car</p>
          <p className="font-semibold">Sport</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Capacity</p>
          <p className="font-semibold">2 Person</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Steering</p>
          <p className="font-semibold">Manual</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Gasoline</p>
          <p className="font-semibold">70L</p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <p className="text-3xl font-bold">$80.00/ <span className="text-sm font-thin text-gray-400"> day</span></p>
          <p className="text-gray-500 line-through">$100.00</p>
        </div>
        <Link href={'/billing-portion'}>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          Rent Now
        </button>
        </Link>
      </div>
    </div>
  </div>
)

const Reviews = () => (
  <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
    <div className="flex items-center gap-2 mb-6">
      <h3 className="text-lg font-semibold">Reviews</h3>
      <span className="px-2 py-1 text-sm bg-blue-100 text-blue-600 rounded-lg">13</span>
    </div>

    <div className="space-y-6">
      {customerFeedbacks.map((feedback) => (
        <div key={feedback.id} className="flex gap-4 pb-6 border-b border-gray-100 last:border-0">
          <img
            src={feedback.profilePic}
            alt={feedback.name}
            className="w-10 h-10 rounded-full"
          />
          <div className="flex-1 space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold">{feedback.name}</h4>
                <p className="text-sm text-gray-500">{feedback.position}</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < feedback.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500">{feedback.date}</span>
              </div>
            </div>
            <p className="text-gray-600">{feedback.feedback}</p>
          </div>
        </div>
      ))}
    </div>

    <button className="mt-6 w-full py-3 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
      Show All
    </button>
  </div>
)

const VehicleListings = () => (
  <div className="mt-12">
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-400">Recent Vehicles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {latestVehicles.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>
    </div>

    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-400">Recommended Vehicles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {suggestedVehicles.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>
    </div>

    <div className="flex justify-center mt-8">
      <button className="bg-[#3563E9] text-white font-bold py-2 px-4 rounded">
        Show more vehicles
      </button>
    </div>
  </div>
)

export default function VehicleShowcase() {
  const [maxDailyRate, setMaxDailyRate] = useState(100)
  const [activeImage, setActiveImage] = useState('/View.png')

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar maxDailyRate={maxDailyRate} setMaxDailyRate={setMaxDailyRate} />
      <div className="flex-1 p-6">
        <FeaturedVehicle activeImage={activeImage} setActiveImage={setActiveImage} />
        <Reviews />
        <VehicleListings />
      </div>
    </div>
  )
}

