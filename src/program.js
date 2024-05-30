import React from "react";
import { Link } from "react-router-dom";

function ProgramPage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="w-full bg-blue-400 flex items-center justify-center py-11">
        <div className="bg-black bg-opacity-40 rounded-full px-8 py-4 md:px-20 md:py-8">
          <span className="text-white text-xl md:text-3xl font-bold">
            Program
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row justify-center items-start py-11 px-4 md:px-8 lg:px-20 space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Program Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src="/frame-42@2x.png"
            className="rounded-xl w-full max-w-lg"
            alt="Program 1"
          />
        </div>
        {/* Program Details */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start space-y-8">
          <div className="text-center lg:text-left">
            <span className="text-black text-xl md:text-3xl font-bold">
              Program Details
            </span>
          </div>
          <div className="text-center lg:text-left">
            <span>
              <strong>Dates:</strong> Monday, July 1st to Friday, August 9th
              <br />
              <strong>Times:</strong> 9:00am - 3:30pm
              <br />
              <strong>Ages:</strong> Current Kindergarteners - 7th Grade
              (Entering 1st - 8th)
              <br />
              <strong>Field Trips:</strong> We will go to one field trip per
              week
            </span>
          </div>
          <div>
            <Link
              to="https://docs.google.com/forms/d/e/1FAIpQLSfLalY5hj0OM9tmiKdXrSOY0ltDpwPwAGk6dgxKQX1ka7_uzA/viewform"
              target="_blank"
              className="bg-yellow-400 text-white rounded-full px-6 py-3 md:px-10 md:py-4 hover:bg-yellow-300"
            >
              Register
            </Link>
          </div>
        </div>
      </div>

      {/* Rates and Discounts */}
      <div className="flex flex-col lg:flex-row justify-center items-start py-11 px-4 md:px-8 lg:px-20 space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start space-y-8">
          <span className="text-black text-xl md:text-3xl font-bold">
            Rates and Discounts
          </span>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="bg-blue-200 rounded-lg p-4 w-full text-center">
              <span>
                First Child
                <br />
                <strong className="text-2xl">$1,665</strong>
              </span>
            </div>
            <div className="bg-blue-100 rounded-lg p-4 w-full text-center">
              <span>
                Each additional child
                <br />
                <strong className="text-2xl">$1,615</strong>
              </span>
            </div>
          </div>
          <div>
            <span>
              <strong>Discount:</strong> Each additional sibling will receive a
              discount of $50
              <br />
              <strong>Price includes:</strong> textbooks, notebooks, daily
              activities, t-shirt, snacks, and field trips
            </span>
          </div>
          <div>
            <span>
              <i>*$200 non-refundable deposit due upon registration.</i>
              <br />
              <strong>Full payment due by 5/26/24</strong>
            </span>
          </div>
        </div>

        {/* Daily Schedule */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start space-y-8">
          <span className="text-black text-xl md:text-3xl font-bold">
            Daily Schedule
          </span>
          <div className="bg-blue-100 p-5 rounded-lg w-full">
            <div className="text-center">
              <strong>July 1st - August 9th</strong>
              <br />
              Mon - Fri / 9am - 3pm
              <div className="pt-2 border-b-2 border-yellow-400 w-3/4 mx-auto"></div>
            </div>
            <div className="flex flex-col md:flex-row justify-center mt-4 space-y-4 md:space-y-0 md:space-x-8">
              <div className="text-center md:text-left">
                <strong>9:00 - 9:30</strong>
                <br /> Morning Worship
                <br />
                <strong>9:30 - 10:15</strong>
                <br /> Study Session 1
                <br />
                <strong>10:15 - 10:35</strong>
                <br /> Snack Time
                <br />
                <strong>10:35 - 11:20</strong>
                <br /> Study Session 2
                <br />
                <strong>11:20 - 12:15</strong>
                <br /> Study Session 3
                <br />
                <strong>12:15 - 1:00</strong>
                <br /> Lunch
                <br />
                <strong>1:00 - 3:00</strong>
                <br /> Specials/Activity
                <br />
                <strong>3:00 - 3:30</strong>
                <br /> Closing Worship
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgramPage;
