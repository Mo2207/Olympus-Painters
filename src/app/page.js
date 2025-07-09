
export default function HomePage() {
  return (
    <>
      <section className="text-gray-800 mt-10">

        <section
          id="home"
          className="relative min-h-screen scroll-mt-20 flex flex-col items-center justify-center bg-blue-100 text-center overflow-hidden"
        >
          {/* Left Side Image */}
          <div className="absolute top-0 left-0 bottom-0 w-13 z-0">
            <img
              src="/images/right.png"
              alt="Left Border"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side Image */}
          <div className="absolute top-0 right-0 bottom-0 w-13 z-0">
            <img
              src="/images/left.png"
              alt="Right Border"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 px-4">
            <img
              src="/images/logo.png"
              alt="Olympus Painters Logo"
              className="w-35 pb-3 mx-auto"
            />
            <h1 className="text-4xl font-bold mb-4">Welcome to Olympus Painters</h1>
            <p className="text-lg max-w-xl">
              At Olympus Painters, we bring a touch of Mount Olympus to every wall we
              paint — combining timeless craftsmanship with modern precision. Whether
              it’s refreshing a cozy home, restoring a historic deck, or adding curb
              appeal to your business, our team delivers perfection in every stroke.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="relative min-h-screen bg-black text-white flex items-center justify-center py-4 text-center"
        >
          {/* Background Image with Tint */}
          <div className="absolute inset-0">
            <img
              src="/images/painter-hand.jpg"
              alt="Olympus Painters"
              className="w-full h-full object-cover opacity-30"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-3xl p-6">
            <h2 className="text-4xl font-bold mb-4">About Us</h2>
            <p className="mb-4">Experienced, reliable, and committed to top-quality work.</p>
            <p>
              Discover why our customers trust us for a job done right — from the first brush to the final coat.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="min-h-screen flex items-center justify-center bg-gray-100 px-4 pt-20 pb-20 text-center"
        >
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Services</h2>
            <ul className="list-none text-left max-w-xl mx-auto text-lg space-y-6">
              <li className="border border-gray-300 rounded-lg p-6 transition-transform duration-300 hover:shadow-lg hover:scale-[1.02] bg-white cursor-pointer">
                <div className="flex items-center justify-center font-bold text-xl mb-2">
                  <span className="pr-2">Interior Painting</span>
                  <img src="/images/lamp.svg" alt="Interior Painting" className="w-5" />
                </div>
                <p>
                  Refresh your home’s interior with clean, smooth finishes, expert edging, and attention to detail in every room — from bedrooms to baseboards.
                </p>
              </li>

              <li className="border border-gray-300 rounded-lg p-6 transition-transform duration-300 hover:shadow-lg hover:scale-[1.02] bg-white cursor-pointer">
                <div className="flex items-center justify-center font-bold text-xl mb-2">
                  <span className="pr-2">Exterior Painting</span>
                  <img src="/images/sun.svg" alt="Exterior Painting" className="w-5" />
                </div>
                <p>
                  Boost curb appeal and protect your property with durable, weather-resistant coatings for siding, shutters, trim, and doors.
                </p>
              </li>

              <li className="border border-gray-300 rounded-lg p-6 transition-transform duration-300 hover:shadow-lg hover:scale-[1.02] bg-white cursor-pointer">
                <div className="flex items-center justify-center font-bold text-xl mb-2">
                  <span className="pr-2">Residential & Commercial</span>
                  <img src="/images/house.svg" alt="Residential & Commercial" className="w-5" />
                </div>
                <p>
                  Whether it’s a cozy home or a professional business space, we provide efficient, high-quality painting tailored to your environment and schedule.
                </p>
              </li>

              <li className="border border-gray-300 rounded-lg p-6 transition-transform duration-300 hover:shadow-lg hover:scale-[1.02] bg-white cursor-pointer">
                <div className="flex items-center justify-center font-bold text-xl mb-2">
                  <span className="pr-2">Decks, Fences & Trim Work</span>
                  <img src="/images/fence.svg" alt="Decks, Fences & Trim Work" className="w-5" />
                </div>
                <p>
                  Restore and revitalize outdoor woodwork with precision painting and staining that enhances both beauty and longevity.
                </p>
              </li>
            </ul>
          </div>
        </section>




        {/* Contact Section */}
        <section
          id="contact"
          className="min-h-screen flex items-center justify-center bg-white px-4 text-center"
        >
          <div className="bg-gray-100 shadow-lg rounded-xl p-8 max-w-lg w-full space-y-6">
            <h2 className="text-4xl font-bold text-[#235A81]">Get in Touch</h2>
            <p className="text-lg text-gray-700">
              We’d love to hear from you! Reach out for quotes, questions, or bookings.
            </p>

            <div className="text-gray-800 space-y-2">
              <p>
                <span className="font-semibold">Phone:</span>{' '}
                <a href="tel:5063788185" className="text-blue-600 hover:underline">
                  506-378-8185
                </a>
              </p>
              <p>
                <span className="font-semibold">Email:</span>{' '}
                <a href="mailto:olympuspainters07@gmail.com" className="text-blue-600 hover:underline">
                  olympuspainters07@gmail.com
                </a>
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center space-x-6 pt-4">
              {/* Facebook Icon */}
              <a
                href="https://www.facebook.com/profile.php?id=61577736417490"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-[#1877F2]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.406.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.406 24 22.674V1.326C24 .593 23.407 0 22.675 0z" />
                </svg>
              </a>

              {/* Instagram Icon */}
              <a
                href="https://www.instagram.com/YOUR_HANDLE"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <img
                  src="/images/instagram.svg"
                  alt="Instagram"
                  className="w-8 h-8"
                />
              </a>

            </div>
          </div>
        </section>

      </section>
    </>
  )
}

