import React from "react";

const HeroHeader = () => {
  return (
    <div className="relative bg-hero py-5 mb-5 min-h-screen">
      <div className="bg-primary bg-opacity-90 py-5"> 
        <div className="container py-5">
          <div className="row justify-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="text-5xl text-white mb-3 animate-slideInDown">
                Enjoy Your Vacation With Us
              </h1>
              <p className="text-lg text-white mb-4 animate-slideInDown">
                Find place that you can rest more easily
              </p>
              <div className="relative w-3/4 mx-auto animate-slideInDown">
                <input
                  className="form-control border-0 rounded-full w-full py-3 pl-4 pr-5"
                  type="text"
                  placeholder="Eg: Thailand"
                />
                <button
                  type="button"
                  className="btn btn-primary rounded-full py-2 px-4 absolute top-0 right-0 mt-[7px] mr-2"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
