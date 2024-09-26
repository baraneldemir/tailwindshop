import React, { useState } from 'react';
import MessageSentModal from '../components/MessageSentModal';

export default function ContactUsPage() {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    setMessageSent(true); // Set message sent state to true

    
    event.target.reset();
  };

  const handleCloseModal = () => {
    setMessageSent(false); // Close the modal
  };

  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full px-4">
          <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
            <span className="block mb-2 text-lg font-semibold text-primary">
              <section className="mb-5 bg-white dark:bg-gray-900">
                <div className="max-w-screen-md px-4 mx-auto">
                  <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-center text-gray-900 dark:text-white">Contact Us</h2>
                  <p className="mb-1 font-light text-center text-gray-500 lg:mb-8 dark:text-gray-400 sm:text-xl">
                    Hit us up with any questions or comments. We are here to help you! All emails will be answered within 24 hours 'business days'. To give you the optimal support, please include your order # if you have purchased an item.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-1">
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                      <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Your email" required />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                      <input type="text" id="subject" className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                      <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..." required></textarea>
                    </div>
                    <button type="submit" className="px-5 py-1 text-lg font-medium text-center text-black border-2 border-gray-300 rounded-lg bg-gray-50 bg-primary-700 sm:w-fit hover:bg-gray-300">Send</button>
                  </form>
                </div>
              </section>
            </span>
            <h2 className="text-black mb- text-3xl font-bold sm:text-[40px]/[48px]">
              .....
            </h2>
            <p className="text-base text-body-color dark:text-dark-6">
            </p>
          </div>
        </div>
      </div>

      {/* Modal for Message Sent */}
      {messageSent && (
        <MessageSentModal 
          message="Message Sent! Thanks for contacting us." 
          onClose={handleCloseModal} 
        />
      )}
    </div>
  );
}
