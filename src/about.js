import React from "react";

function AboutPage() {
  return (
    <div>
      <div className="w-full bg-orange-400 flex items-center justify-center py-11">
        <div className="bg-black bg-opacity-40 rounded-full px-20 py-8">
          <span className="text-white text-3xl font-bold">About</span>
        </div>
      </div>
      <div className="w-full bg-blue-200 flex flex-col items-center justify-center py-11">
        <div className="text-center">
          <span className="font-bold text-2xl mb-4">
            About Calvary Summer Camp
          </span>
          <div className="flex justify-center mb-4 pt-8">
            <img
              src="/frame-5@2x.png"
              alt="Frame 5"
              className="mr-2"
              style={{ maxWidth: "400px", maxHeight: "300px" }}
            />
            <img
              src="/frame-9@2x.png"
              alt="Frame 9"
              className="ml-2"
              style={{ maxWidth: "400px", maxHeight: "300px" }}
            />
          </div>
          <div className="max-w-lg mx-auto pt-10">
            <span className="font-medium">
              Calvary Summer Camp is a place where your child can come to
              strengthen their mathematical and language arts skills and
              cultivate relationships with one another in a Christian
              environment. We have a dedicated team of young professionals who
              are adept at fostering academic growth while nurturing meaningful
              relationships among campers. We look forward to working with your
              child during this fun-filled summer with learning, games, arts and
              crafts, science, and field trips. Hope to see you there!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
