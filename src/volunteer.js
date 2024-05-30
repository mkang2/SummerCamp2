import React from "react";
import { Link } from "react-router-dom";

function VolunteerPage() {
  return (
    <div>
      <div className="w-full bg-purple-400 flex items-center justify-center py-11">
        <div className="bg-black bg-opacity-40 rounded-full px-20 py-8">
          <span className="text-white text-3xl font-bold">Volunteer</span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-start py-11 px-8 lg:px-20">
        <div>
          <div className="mb-8 lg:mb-0 lg:mr-8 flex flex-col items-center">
            <img
              src="/image-5@2x.png"
              className="rounded-xl"
              alt="Volunteer 1"
            ></img>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="mb-8">
            <span className="text-black text-3xl font-bold">Meet Us Here</span>
          </div>

          <div className="meet-us-here mb-8 flex flex-col items-center">
            <div className="mb-4">
              <span>
                If you are looking for a way to serve God while having the most
                amazing summer experience, please fill out the Registration form
                below!
                <br />
                <br />
                *Make sure to apply as a volunteer
              </span>
            </div>

            <div className="pt-10">
              <Link
                to="https://docs.google.com/document/d/12ENpocNVzE1hWJo8EiXFpKg1PMGui46Z/edit?usp=sharing&ouid=108619811667458028511&rtpof=true&sd=true"
                target="_blank"
                className="bg-yellow-400 text-white rounded-full px-8 py-4 hover:bg-yellow-300"
              >
                Apply Today!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VolunteerPage;
