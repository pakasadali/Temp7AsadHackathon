'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface BookingData {
  fullName: string
  contactNumber: string
  residenceAddress: string
  cityOrTown: string
  pickupSpot: string
  pickupDate: string
  pickupTime: string
  returnSpot: string
  returnDate: string
  returnTime: string
  creditCardNumber: string
  cardExpiry: string
  nameOnCard: string
  securityCode: string
  paymentOption: 'creditCard' | 'paypal' | 'bitcoin'
  acceptMarketing: boolean
  agreeToTerms: boolean
}

const initialBookingData: BookingData = {
  fullName: '',
  contactNumber: '',
  residenceAddress: '',
  cityOrTown: '',
  pickupSpot: '',
  pickupDate: '',
  pickupTime: '',
  returnSpot: '',
  returnDate: '',
  returnTime: '',
  creditCardNumber: '',
  cardExpiry: '',
  nameOnCard: '',
  securityCode: '',
  paymentOption: 'creditCard',
  acceptMarketing: false,
  agreeToTerms: false
}

const FormSection = ({ title, step, children }: { title: string, step: string, children: React.ReactNode }) => (
  <div className="bg-white rounded-lg p-6 shadow-sm">
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">{title}</h2>
        <span className="text-sm text-gray-500">{step}</span>
      </div>
      {children}
    </div>
  </div>
)

const InputField = ({ label, id, name, value, onChange, type = 'text', placeholder }: {
  label: string
  id: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: string
  placeholder: string
}) => (
  <div className="space-y-2">
    <label htmlFor={id} className="text-sm font-medium">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-3 py-2 rounded-md border bg-gray-50"
      placeholder={placeholder}
    />
  </div>
)

const SelectField = ({ label, options }: { label: string, options: string[] }) => (
  <div className="space-y-2">
    <label className="text-sm font-medium">{label}</label>
    <select className="w-full px-3 py-2 rounded-md border bg-gray-50">
      {options.map((option, index) => (
        <option key={index}>{option}</option>
      ))}
    </select>
  </div>
)

export default function VehicleReservationForm() {
  const [bookingData, setBookingData] = useState<BookingData>(initialBookingData)

  const updateBookingInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setBookingData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const processReservation = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Reservation processed:', bookingData)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      <div className="mx-auto max-w-6xl grid grid-cols-1 gap-8 lg:grid-cols-3">
        <form onSubmit={processReservation} className="lg:col-span-2 space-y-8">
          <FormSection title="Billing Info" step="Step 1 of 4">
            <p className="text-sm text-gray-500">Please enter your billing info</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                label="Name"
                id="fullName"
                name="fullName"
                value={bookingData.fullName}
                onChange={updateBookingInfo}
                placeholder="Your name"
              />
              <InputField
                label="Phone Number"
                id="contactNumber"
                name="contactNumber"
                value={bookingData.contactNumber}
                onChange={updateBookingInfo}
                placeholder="Phone number"
              />
              <InputField
                label="Address"
                id="residenceAddress"
                name="residenceAddress"
                value={bookingData.residenceAddress}
                onChange={updateBookingInfo}
                placeholder="Address"
              />
              <InputField
                label="Town / City"
                id="cityOrTown"
                name="cityOrTown"
                value={bookingData.cityOrTown}
                onChange={updateBookingInfo}
                placeholder="Town or city"
              />
            </div>
          </FormSection>

          <FormSection title="Rental Info" step="Step 2 of 4">
            <p className="text-sm text-gray-500">Please select your rental date</p>
            <div className="space-y-6">
              {['Pick - Up', 'Drop - Off'].map((type, index) => (
                <div key={index} className="space-y-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio text-blue-600"
                      name={`${type.toLowerCase()}Type`}
                      checked
                      readOnly
                    />
                    <span className="ml-2">{type}</span>
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <SelectField label="Locations" options={['Select your city']} />
                    <InputField
                      label="Date"
                      id={`${type.toLowerCase()}Date`}
                      name={`${type.toLowerCase()}Date`}
                      value={bookingData[`${type.toLowerCase()}Date` as keyof BookingData]}
                      onChange={updateBookingInfo}
                      type="date"
                      placeholder=""
                    />
                    <SelectField label="Time" options={['Select your time']} />
                  </div>
                </div>
              ))}
            </div>
          </FormSection>

          <FormSection title="Payment Method" step="Step 3 of 4">
            <p className="text-sm text-gray-500">Please enter your payment method</p>
            <div className="space-y-6">
              {['Credit Card', 'PayPal', 'Bitcoin'].map((method, index) => (
                <div key={index}>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="paymentOption"
                      value={method.toLowerCase().replace(' ', '')}
                      checked={bookingData.paymentOption === method.toLowerCase().replace(' ', '')}
                      onChange={updateBookingInfo}
                      className="form-radio text-blue-600"
                    />
                    <span className="ml-2">{method}</span>
                  </label>
                  {method === 'Credit Card' && bookingData.paymentOption === 'creditCard' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <InputField
                        label="Card Number"
                        id="creditCardNumber"
                        name="creditCardNumber"
                        value={bookingData.creditCardNumber}
                        onChange={updateBookingInfo}
                        placeholder="Card number"
                      />
                      <InputField
                        label="Expiration Date"
                        id="cardExpiry"
                        name="cardExpiry"
                        value={bookingData.cardExpiry}
                        onChange={updateBookingInfo}
                        placeholder="DD/MM/YY"
                      />
                      <InputField
                        label="Card Holder"
                        id="nameOnCard"
                        name="nameOnCard"
                        value={bookingData.nameOnCard}
                        onChange={updateBookingInfo}
                        placeholder="Card holder"
                      />
                      <InputField
                        label="CVC"
                        id="securityCode"
                        name="securityCode"
                        value={bookingData.securityCode}
                        onChange={updateBookingInfo}
                        placeholder="CVC"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </FormSection>

          <FormSection title="Confirmation" step="Step 4 of 4">
            <p className="text-sm text-gray-500">We are getting to the end. Just few clicks and your rental is ready!</p>
            <div className="space-y-4">
              {[
                { name: 'acceptMarketing' as keyof BookingData, label: 'I agree with sending an Marketing and newsletter emails. No spam, promised!' },
                { name: 'agreeToTerms' as keyof BookingData, label: 'I agree with our terms and conditions and privacy policy.' }
              ].map((item, index) => (
                <label key={index} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name={item.name}
                    checked={!!bookingData[item.name]}
                    onChange={updateBookingInfo}
                    className="form-checkbox text-blue-600"
                  />
                  <span className="ml-2 text-sm">{item.label}</span>
                </label>
              ))}
            </div>
            <Link href="/admin-portion">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors mt-4"
              >
                Rent Now
              </button>
            </Link>
          </FormSection>
        </form>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg p-6 shadow-sm space-y-4 sticky top-6">
            <h2 className="text-xl font-semibold">Rental Summary</h2>
            <p className="text-sm text-gray-500">
              Prices may change depending on the length of the rental and the price of your rental car.
            </p>
    
            <div className="flex items-start space-x-4 mt-6">
              <Image
                src="/Look.png"
                alt="Nissan GT-R"
                width={100}
                height={60}
                className="rounded-lg"
              />
              <div>
                <h3 className="font-semibold">Nissan GT-R</h3>
                <div className="flex items-center">
                  <span className="text-yellow-400">★★★★</span>
                  <span className="text-gray-400">☆</span>
                  <span className="text-sm text-gray-500 ml-1">440+ Reviewer</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 mt-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold">$80.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span className="font-semibold">$0</span>
              </div>
              <div className="pt-4 border-t">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Apply promo code"
                    className="flex-1 px-3 py-2 border rounded-md text-sm"
                  />
                  <button className="text-blue-600 text-sm whitespace-nowrap">Apply now</button>
                </div>
              </div>
              <div className="flex justify-between items-start border-t pt-4">
                <div>
                  <span className="text-gray-600">Total Rental Price</span>
                  <p className="text-sm text-gray-500 mt-1">Overall price and includes rental discount</p>
                </div>
                <span className="font-semibold text-xl">$80.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

