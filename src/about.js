import React from "react";

function AboutPage() {
  return (
    <div>
      <div className="w-full bg-orange-400 flex items-center justify-center py-8 md:py-12 lg:py-16">
        <div className="bg-black bg-opacity-40 rounded-full px-6 md:px-12 py-4 md:py-8">
          <span className="text-white text-xl md:text-3xl font-bold">
            About
          </span>
        </div>
      </div>

      <div className="w-full bg-blue-100 py-8 md:py-12 lg:py-16">
        <div className="text-center">
          <span className="font-bold text-xl md:text-2xl mb-4">
            About Calvary Summer Camp
          </span>
          <div className="flex flex-col md:flex-row justify-center items-center mb-4 md:mb-8 pt-8">
            <img
              src="/program1.jpg"
              className="mb-4 md:mr-4 md:mb-0"
              style={{ maxWidth: "100%", maxHeight: "300px" }}
              alt="Program 1"
            />
            <img
              src="/program2.jpg"
              className="md:ml-4"
              style={{ maxWidth: "100%", maxHeight: "300px" }}
              alt="Program 2"
            />
          </div>
          <div className="max-w-lg mx-auto">
            <span className="font-medium text-left">
              Calvary Summer Camp is a place where your child can come to
              strengthen their mathematical and language arts skills and
              cultivate relationships with one another in a Christian
              environment. We have a dedicated team of young professionals who
              are adept at fostering academic growth while nurturing meaningful
              relationships among campers.
              <br />
              <br />
              We look forward to working with your child during this fun-filled
              summer with learning, games, arts and crafts, science, and field
              trips. Hope to see you there!
            </span>
          </div>
        </div>
      </div>

      <div className="text-center py-8 md:py-12 lg:py-16">
        <span className="font-bold text-xl md:text-2xl mb-4 block">
          Our Vision
        </span>
        <div className="bg-lime-100 p-4 rounded-lg max-w-lg mx-auto">
          <span className="font-medium block">
            Our vision is to provide a space for students to be academically and
            socially engaged in a fun and friendly environment. Our goal is to
            empower each child with the tools and resources they need to
            navigate the challenges of the upcoming school year with resilience
            and enthusiasm!
          </span>
        </div>
      </div>

      <div className="text-center py-8 md:py-12 lg:py-16">
        <span className="font-bold text-xl md:text-2xl mb-4 block">
          Meet the Director
        </span>
        <div className="max-w-md mx-auto">
          <img
            src="/PastorPaul.png"
            className="mx-auto mb-4"
            style={{ maxWidth: "100%" }}
            alt="Pastor Paul"
          />
          <span className="font-bold text-xl block">Pastor Paul Baek</span>
          <span className="font-medium italic block mb-4">
            Director of Summer Camp
          </span>
          <span className="font-medium block">
            Paul Baek currently serves as the Youth Group and Young Adult EM
            pastor of Calvary KUMC. He is currently attending Covenant
            Theological Seminary to pursue his Masters of Divinity. Paul is
            dedicated to creating engaging and impactful experiences where every
            child feels welcomed, valued, and motivated.
          </span>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
