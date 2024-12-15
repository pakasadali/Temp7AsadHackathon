'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const carData = [
  { name: "Koenigsegg", type: "Sport", image: "/car.png", fuel: "90L", transmission: "Manual", capacity: "2 People", price: 99.00 },
  { name: "Nissan GT - R", type: "Sport", image: "/car2.png", fuel: "80L", transmission: "Manual", capacity: "2 People", price: 80.00 },
  { name: "Rolls - Royce", type: "Sport", image: "/car3.png", fuel: "70L", transmission: "Manual", capacity: "4 People", price: 96.00 },
  { name: "All New Rush", type: "SUV", image: "/car4.png", fuel: "70L", transmission: "Manual", capacity: "6 People", price: 72.00 },
  { name: "CR - V", type: "SUV", image: "/car5.png", fuel: "80L", transmission: "Manual", capacity: "6 People", price: 80.00 },
  { name: "All New Terios", type: "SUV", image: "/car6.png", fuel: "90L", transmission: "Manual", capacity: "6 People", price: 74.00 },
  { name: "MG ZX Exclusice", type: "Hatchback", image: "/car8.png", fuel: "70L", transmission: "Electric", capacity: "4 People", price: 76.00 },
  { name: "New MG ZS", type: "SUV", image: "/car9.png", fuel: "80L", transmission: "Manual", capacity: "6 People", price: 80.00 },
  { name: "MG ZX Excite", type: "Hatchback", image: "/car10.png", fuel: "90L", transmission: "Electric", capacity: "4 People", price: 74.00 },
];

const CarRental: React.FC = () => {
  const [priceRange, setPriceRange] = useState(100)
  const [favorites, setFavorites] = useState<Set<number>>(new Set())

  const toggleFavorite = (index: number) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev)
      if (newFavorites.has(index)) {
        newFavorites.delete(index)
      } else {
        newFavorites.add(index)
      }
      return newFavorites
    })
  }

  return (
    <div style={styles.container}>
      <aside style={styles.sidebar}>
        <div style={styles.filterSection}>
          <h3>TYPE</h3>
          <div>
            {[
              { label: 'Sport', count: 10 },
              { label: 'SUV', count: 12 },
              { label: 'MPV', count: 16 },
              { label: 'Sedan', count: 20 },
              { label: 'Coupe', count: 14 },
              { label: 'Hatchback', count: 14 },
            ].map(({ label, count }) => (
              <label key={label} style={styles.checkboxLabel}>
                <input type="checkbox" defaultChecked={label === 'Sport' || label === 'SUV'} />
                {label} ({count})
              </label>
            ))}
          </div>
        </div>
        <div style={styles.filterSection}>
          <h3>CAPACITY</h3>
          <div>
            {[
              { label: '2 Person', count: 10 },
              { label: '4 Person', count: 14 },
              { label: '6 Person', count: 12 },
              { label: '8 or More', count: 16 },
            ].map(({ label, count }) => (
              <label key={label} style={styles.checkboxLabel}>
                <input type="checkbox" defaultChecked={label === '2 Person' || label === '8 or More'} />
                {label} ({count})
              </label>
            ))}
          </div>
        </div>
        <div style={styles.filterSection}>
          <h3>PRICE</h3>
          <input
            type="range"
            min="0"
            max="100"
            value={priceRange}
            style={styles.slider}
            onChange={(e) => setPriceRange(Number(e.target.value))}
          />
          <p>Max. ${priceRange.toFixed(2)}</p>
        </div>
      </aside>
      <main style={styles.mainContent}>
        <div style={styles.searchSection}>
          {['Pick - Up', 'Drop - Off'].map((title) => (
            <div key={title} style={styles.searchBox}>
              <h3>{title}</h3>
              <div style={styles.searchInputs}>
                {['Locations', 'Date', 'Time'].map((label) => (
                  <div key={label} style={styles.inputGroup}>
                    <label htmlFor={`${title.toLowerCase()}-${label.toLowerCase()}`}>{label}</label>
                    <select id={`${title.toLowerCase()}-${label.toLowerCase()}`} style={styles.select}>
                      <option>{`Select your ${label.toLowerCase()}`}</option>
                    </select>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={styles.carGrid}>
          {carData.map((car, index) => (
            <Link href="/detail-portion" key={index} style={styles.carCard}>
              <div style={styles.carHeader}>
                <h3 style={styles.carTitle}>{car.name}</h3>
                <p>{car.type}</p>
                <button
                  style={{...styles.favoriteBtn, color: favorites.has(index) ? '#e53e3e' : '#000'}}
                  onClick={(e) => {
                    e.preventDefault();
                    toggleFavorite(index);
                  }}
                >
                  {favorites.has(index) ? '❤️' : '❤'}
                </button>
              </div>
              <Image src={car.image} alt={car.name} width={300} height={200} style={styles.carImage} />
              <div style={styles.carDetails}>
                <span>⛽ {car.fuel}</span>
                <span>⚙ {car.transmission}</span>
                <span>👤 {car.capacity}</span>
              </div>
              <div style={styles.carFooter}>
                <p style={styles.price}>${car.price.toFixed(2)}/<span style={styles.perDay}>day</span></p>
                <button style={styles.rentBtn}>Rent Now</button>
              </div>
            </Link>
          ))}
        </div>
        <button style={styles.showMoreBtn}>Show more car</button>
      </main>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  sidebar: {
    width: '250px',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  filterSection: {
    marginBottom: '20px',
  },
  checkboxLabel: {
    display: 'block',
    marginBottom: '10px',
    color: '#4a5568',
  },
  slider: {
    width: '100%',
    marginBottom: '10px',
  },
  mainContent: {
    flexGrow: 1,
    paddingLeft: '20px',
  },
  searchSection: {
    display: 'flex',
    gap: '20px',
    marginBottom: '20px',
  },
  searchBox: {
    flex: 1,
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  searchInputs: {
    display: 'flex',
    gap: '10px',
  },
  inputGroup: {
    flex: 1,
  },
  select: {
    width: '100%',
    padding: '5px',
    border: '1px solid #e2e8f0',
    borderRadius: '5px',
  },
  carGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
    marginBottom: '20px',
  },
  carCard: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    textDecoration: 'none',
    color: 'inherit',
  },
  carHeader: {
    padding: '15px',
    position: 'relative',
  },
  carTitle: {
    marginBottom: '5px',
    fontWeight: 'bold',
    fontSize: '1.2em',
  },
  favoriteBtn: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    background: 'none',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer',
  },
  carImage: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
  },
  carDetails: {
    display: 'flex',
    justifyContent: 'flex-start',
    gap: '20px',
    padding: '15px',
    color: '#90A3BF',
  },
  carFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px',
    borderTop: '1px solid #e2e8f0',
  },
  price: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  perDay: {
    fontSize: '14px',
    fontWeight: 'normal',
    color: '#718096',
  },
  rentBtn: {
    backgroundColor: '#3563e9',
    color: '#fff',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  showMoreBtn: {
    display: 'block',
    width: '200px',
    margin: '0 auto',
    padding: '10px',
    backgroundColor: '#3563e9',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
} as const;

export default CarRental;

