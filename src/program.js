import React from "react";
import { Link } from "react-router-dom";

function ProgramPage() {
  return (
    <div>
      <div className="w-full bg-blue-400 flex items-center justify-center py-11">
        <div className="bg-black bg-opacity-40 rounded-full px-8 py-4 md:px-20 md:py-8">
          <span className="text-white text-xl md:text-3xl font-bold">
            Program
          </span>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-start py-11 px-4 md:px-8 lg:px-20">
        <div className="w-full lg:w-1/2">
          <div className="mb-8 lg:mb-0 lg:mr-8 flex flex-col items-center">
            <img
              src="/frame-42@2x.png"
              className="rounded-xl w-full"
              alt="Program Image"
            ></img>
          </div>
        </div>
        <div className="flex flex-col items-center lg:items-start">
          <div className="mb-8 text-center lg:text-left">
            <span className="text-black text-xl md:text-3xl font-bold">
              Program Details
            </span>
          </div>
          <div className="meet-us-here mb-8 flex flex-col items-center lg:items-start">
            <div className="mb-4 text-center lg:text-left">
              <span>
                <strong>Dates:</strong> Monday, July 1st to Friday, August 9th
                <br></br>
                <br></br>
                <strong>Times:</strong> 9:00am - 3:30pm
                <br></br>
                <br></br>
                <strong>Ages:</strong> Current Kindergarteners - 7th Grade
                (Entering 1st - 8th)
                <br></br>
                <br></br>
                <strong>Field Trips:</strong> We will go to one field trip per
                week
              </span>
            </div>
            <div className="pt-10">
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
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-start py-11 px-4 md:px-8 lg:px-20">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:mr-8 flex flex-col items-center lg:items-start">
          <span className="text-black text-xl md:text-3xl font-bold pb-8">
            Rates and Discounts
          </span>
          <div className="flex flex-col md:flex-row">
            <div className="bg-blue-200 rounded-lg p-4 mr-0 md:mr-4 mb-4 md:mb-0 w-full md:w-auto text-center">
              <span>
                First Child
                <br />
                <br />
                <div className="text-2xl">
                  <strong>$1,665</strong>
                </div>
              </span>
            </div>
            <div className="bg-blue-100 rounded-lg p-4 w-full md:w-auto text-center">
              <span>
                Each additional child
                <br />
                <br />
                <div className="text-2xl">
                  <strong>$1,615</strong>
                </div>
              </span>
            </div>
          </div>
          <span className="block mt-4">
            <strong>Discount:</strong> Each additional sibling will receive a
            discount of $50
            <br />
            <br />
            <strong>Price includes:</strong> textbooks, notebooks, daily
            activities, t-shirt, snacks, and field trips
          </span>
          <span className="block mt-4">
            <i>*$200 non-refundable deposit due upon registration.</i>
            <br />
            <br />
            <div className="text-center">
              <strong>Full payment due by 5/26/24</strong>
            </div>
          </span>
        </div>
        <div class="flex flex-col items-center lg:items-start">
          <div class="mb-8 text-center lg:text-left">
            <span class="text-black text-xl md:text-3xl font-bold">
              Daily Schedule
            </span>
          </div>
          <div class="meet-us-here mb-8 flex flex-col items-center lg:items-start">
            <div class="bg-blue-100 p-5 rounded-lg mb-4">
              <span>
                <div class="text-center">
                  <strong>July 1st - August 9th</strong>
                  <br></br>
                  Mon - Fri / 9am - 3pm
                  <div class="pt-2 border-b-2 border-yellow-400 w-3/4 mx-auto"></div>
                </div>
              </span>
              <div class="flex flex-col md:flex-row justify-center">
                <div class="md:flex-grow text-center md:text-left">
                  <span>
                    <div class="md:inline-block md:mr-4">
                      9:00 - 9:30
                      <br></br>
                      9:30 - 10:15
                      <br></br>
                      10:15 - 10:35
                      <br></br>
                      10:35 - 11:20
                      <br></br>
                      11:20 - 12:15
                      <br></br>
                      12:15 - 1:00
                      <br></br>
                      1:00 - 3:00
                      <br></br>
                      3:00 - 3:30
                    </div>
                  </span>
                </div>
                <div class="md:flex-grow text-center md:text-left">
                  <span>
                    <div class="md:inline-block md:pl-4">
                      Morning Worship
                      <br></br>
                      Study Session 1<br> </br>
                      Snack Time
                      <br></br>
                      Study Session 2<br></br>
                      Study Session 3<br></br>
                      Lunch
                      <br></br>
                      Specials/Activity
                      <br></br>
                      Closing Worship
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgramPage;
