import React, { useState } from 'react';
// import MessageSentModal from '../components/MessageSentModal';

export default function ContactUsPage() {
  // const [messageSent, setMessageSent] = useState(false);
  const [result, setResult] = useState("");
  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   setMessageSent(true)

    
   
  // };

  // const handleCloseModal = () => {
  //   setMessageSent(false)
  // };


  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f79d9dbc-88ea-47de-b329-7c119b152d58");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent! Thanks for contacting us.");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full px-4">
          <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
            <span className="block mb-2 text-lg font-semibold text-primary">
              <section className="mb-5 bg-white dark:bg-gray-900">
                <div className="max-w-screen-md px-4 mx-auto">
                  <h2 className="mb-4 text-4xl tracking-tight text-center text-gray-900 font-extralight dark:text-white">Contact Us</h2>
                  <p className="mb-1 font-light text-center text-gray-500 lg:mb-8 dark:text-gray-400 sm:text-xl">
                    Hit us up with any questions or comments. We are here to help you! All emails will be answered within 24 hours 'business days'. To give you the optimal support, please include your order # if you have purchased an item.
                  </p>
                  <form onSubmit={onSubmit} className="space-y-1">
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                      <input type="email" name='email' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Your email" required />
                    </div>
                    <div>
                      <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                      <input type="text" name='name' id="subject" className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
                    </div>
                    <div className="sm:col-span-2">
                      <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                      <textarea id="message" name='message' rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..." required></textarea>
                    </div>
                    <button type="submit" className="px-5 py-1 text-lg font-medium text-center text-black border-2 border-gray-300 rounded-lg bg-gray-50 bg-primary-700 sm:w-fit hover:bg-gray-300">Send</button>
                  </form>
                  <span className='mt-1'>{result}</span>
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
      {/* {messageSent && (
        <MessageSentModal 
          message="Message Sent! Thanks for contacting us." 
          onClose={handleCloseModal} 
        />
      )} */}
    </div>
  );
}
