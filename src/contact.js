import React from "react";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/20/solid";

function ContactPage() {
  return (
    <div>
      <div className="w-full bg-green-400 flex items-center justify-center py-8 md:py-12 lg:py-16">
        <div className="bg-black bg-opacity-40 rounded-full px-6 md:px-12 py-4 md:py-8">
          <span className="text-white text-xl md:text-3xl font-bold">
            Contact
          </span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-start py-11 px-8 lg:px-20">
        <div>
          <div className="mb-8 lg:mb-0 lg:mr-8 flex flex-col items-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.5331370115346!2d-74.4213562883733!3d40.419192171320105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3c577e0c24179%3A0x29995c444322d64f!2s572%20Ryders%20Ln%2C%20East%20Brunswick%2C%20NJ%2008816!5e0!3m2!1sen!2sus!4v1715816873808!5m2!1sen!2sus"
              width="100%"
              height="350"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Google Maps showing location of 572 Ryders Ln, East Brunswick, NJ 08816"
            ></iframe>
            <span className="mt-4 text-center">
              Address: 572 Ryders Lane, East Brunswick, NJ 08816
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="mb-8">
            <span className="text-black text-3xl font-bold">Contact Us!</span>
          </div>

          <div className="contact-info mb-8">
            <div className="mb-4">
              <span>
                Got questions or need assistance? Reach out to us today. <br />
                We're here to help make your summer camp experience
                unforgettable!
              </span>
            </div>
            <div className="flex mb-4">
              <PhoneIcon className="text-black w-5 h-5 mr-2" /> (917) 282-5706;
              (908) 930-6483
            </div>
            <div className="flex mb-4">
              <EnvelopeIcon className="text-black w-5 h-5 mr-2" />{" "}
              calvarykumc.summercamp@gmail.com
            </div>
            <div className="flex">
              <MapPinIcon className="text-black w-5 h-5 mr-2" />
              572 Ryders Lane, East Brunswick, NJ 08816
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
