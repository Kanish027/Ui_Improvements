import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    toast
      .promise(
        emailjs.sendForm(
          "service_db4nipa",
          "template_pt3n9fs",
          form.current,
          "uaxN3IN2mxnA7gGMW"
        ),
        {
          loading: "Sending...",
          success:
            "Thank you for contacting us! We’ve received your message and will get back to you shortly.",
          error: "Please try again later.",
        }
      )
      .then(() => {
        e.target.reset();
      })
      .catch((error) => {
        console.log("FAILED...", error.text);
      });
  };

  return (
    <div className="lg:mx-5 py-4 mb-10 rounded-3xl">
      <div className="container rounded-3xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          <div className="w-full">
            <p
              className="text-base sm:text-lg"
              style={{
                visibility: "hidden",
                height: 0,
                overflow: "hidden",
              }}
            >
              Experience the next generation of{" "}
              <span className="font-bold">TWS earbuds</span> with advanced{" "}
              <span className="font-bold">AI-capabilities</span> designed to
              enhance your audio experience and keep you connected seamlessly.
            </p>
            <div className="my-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d847618.9437944116!2d77.58356171824018!3d17.966233766764997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bce0a03f17ff82b%3A0x9d02e89b98deb496!2sIIIT-H%20%7C%20The%20International%20Institute%20of%20Information%20Technology%20-%20Hyderabad!5e0!3m2!1sen!2sin!4v1701178540581!5m2!1sen!2sin"
                className="w-full h-screen border-0 rounded-lg"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              ></iframe>
            </div>
          </div>
          <div className="w-full mt-8 lg:mt-0">
            <div className="relative">
              <section>
                <div className="px-4 mx-auto max-w-screen-md">
                  <h2 className="mb-8 text-4xl tracking-tight text-center font-semibold text-gray-900">
                    Contact Us
                  </h2>
                  <form ref={form} onSubmit={sendEmail} className="space-y-8">
                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Your name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="from_name"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Your email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="user_email"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Let us know how we can help you"
                        required
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="message"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Your message
                      </label>
                      <textarea
                        id="message"
                        rows="6"
                        name="message"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Leave a comment..."
                        required
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="py-3 px-5 text-sm font-medium text-center bg-blue-800 text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
                    >
                      Send message
                    </button>
                  </form>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
