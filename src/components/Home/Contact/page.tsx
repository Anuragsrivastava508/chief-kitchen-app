const Contact = () => {
  return (
    <section
      id="contact-section"
      className="py-20 bg-white dark:bg-black text-gray-800 dark:text-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT – CONTACT INFO */}
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <i className="fa-solid fa-location-crosshairs text-primary text-xl mt-1"></i>
              <p>123 Lorem ipsum dolor sit amet, CA 98765432</p>
            </li>

            <li className="flex items-center gap-4">
              <i className="fa-solid fa-envelope text-primary text-xl"></i>
              <p>chefskitchen@gmail.com</p>
            </li>

            <li className="flex items-center gap-4">
              <i className="fa-solid fa-phone text-primary text-xl"></i>
              <p>+(123)-456-7896</p>
            </li>

            <li className="flex items-center gap-4">
              <i className="fa-solid fa-clock text-primary text-xl"></i>
              <p>Monday – Friday : 9:00 AM – 5:00 PM</p>
            </li>

            <li className="flex items-center gap-4">
              <i className="fa-solid fa-clock text-primary text-xl"></i>
              <p>Sunday : Closed</p>
            </li>

            <li className="flex items-center gap-4">
              <i className="fa-solid fa-globe text-primary text-xl"></i>
              <p>www.chefskitchen.com</p>
            </li>
          </ul>

          {/* RIGHT – CONTACT FORM */}
          <form className="space-y-6 bg-gray-50 dark:bg-gray-900 p-8 rounded-xl shadow-lg">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-5 py-3 rounded-md bg-transparent border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-5 py-3 rounded-md bg-transparent border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />

            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-5 py-3 rounded-md bg-transparent border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-md font-medium hover:bg-transparent hover:text-primary border border-primary transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
