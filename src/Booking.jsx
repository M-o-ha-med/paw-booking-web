import React from "react";

const Booking = () => {
  return (
    <div className="container mx-auto py-5">
      <div className="bg-gray-800 text-white p-5 rounded-lg shadow-lg">
        <div className="grid md:grid-cols-2 gap-5 items-center">
          <div>
            <h6 className="uppercase text-white">Booking</h6>
            <h1 className="text-2xl md:text-4xl font-bold mb-4">Online Booking</h1>
            <p className="mb-4">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.
            </p>
            <p className="mb-4">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
              sed stet lorem sit clita duo justo magna dolore erat amet
            </p>
            <a
              href="#"
              className="inline-block border border-white text-white py-3 px-5 mt-2 hover:bg-white hover:text-gray-800 transition duration-300"
            >
              Read More
            </a>
          </div>
          <div>
            <h1 className="text-2xl md:text-4xl font-bold mb-4">Book A Tour</h1>
            <form>
              <div className="grid md:grid-cols-2 gap-3">
                <div>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      placeholder="Your Name"
                      className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <label htmlFor="name" className="absolute top-0 left-4 text-gray-400 text-sm transform -translate-y-1/2">
                      Your Name
                    </label>
                  </div>
                </div>
                <div>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      placeholder="Your Email"
                      className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <label htmlFor="email" className="absolute top-0 left-4 text-gray-400 text-sm transform -translate-y-1/2">
                      Your Email
                    </label>
                  </div>
                </div>
                <div>
                  <div className="relative">
                    <input
                      type="text"
                      id="datetime"
                      placeholder="Date & Time"
                      className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <label htmlFor="datetime" className="absolute top-0 left-4 text-gray-400 text-sm transform -translate-y-1/2">
                      Date & Time
                    </label>
                  </div>
                </div>
                <div>
                  <div className="relative">
                    <select
                      id="select1"
                      className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="1">Destination 1</option>
                      <option value="2">Destination 2</option>
                      <option value="3">Destination 3</option>
                    </select>
                    <label htmlFor="select1" className="absolute top-0 left-4 text-gray-400 text-sm transform -translate-y-1/2">
                      Destination
                    </label>
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="relative">
                    <textarea
                      id="message"
                      placeholder="Special Request"
                      className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-2 h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                    <label htmlFor="message" className="absolute top-0 left-4 text-gray-400 text-sm transform -translate-y-1/2">
                      Special Request
                    </label>
                  </div>
                </div>
                <div className="col-span-2">
                  <button
                    type="submit"
                    className="w-full bg-transparent border border-white text-white py-3 rounded-lg hover:bg-white hover:text-gray-800 transition duration-300"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
