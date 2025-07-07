
export default function HomePage() {
  return (
    <>
    <section className="text-gray-800 mt-10">


        {/* Welcome Section */}
        <section id="home" className="min-h-screen scroll-mt-20 flex flex-col items-center justify-center bg-blue-100 text-center px-4">
          <img src="/images/OlympusPaintersLogo.png" alt="Olympus Painters Logo" className="w-75 mb-6" />
          <h1 className="text-4xl font-bold mb-4">Welcome to Olympus Painters</h1>
          <p className="text-lg max-w-xl">At Olympus Painters, we bring a touch of Mount Olympus to every wall we paint — combining timeless craftsmanship with modern precision. Whether it’s refreshing a cozy home, restoring a historic deck, or adding curb appeal to your business, our team delivers perfection in every stroke.</p>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="relative min-h-screen bg-black text-white flex items-center justify-center px-4 text-center"
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
  className="min-h-screen flex items-center justify-center bg-gray-100 px-4 text-center"
>
  <div>
    <h2 className="text-3xl font-bold mb-6">Our Services</h2>
    <ul className="list-none text-left max-w-xl mx-auto text-lg space-y-10">
  <li>
    <div className="flex flex-row text-center justify-center font-bold text-xl mb-2">
      <span className="pr-2">Interior Painting</span>
      <img src="/images/lamp.svg" alt="Interior Painting" className="w-5" />
      </div>
    <p>
      Refresh your home’s interior with clean, smooth finishes, expert edging, and attention to detail in every room — from bedrooms to baseboards.
    </p>
  </li>
  <li>
    <div className="flex flex-row text-center justify-center font-bold text-xl mb-2">
      <span className="pr-2">Exterior Painting</span>
      <img src="/images/sun.svg" alt="Exterior Painting" className="w-5" />
    </div>
    <p>
      Boost curb appeal and protect your property with durable, weather-resistant coatings for siding, shutters, trim, and doors.
    </p>
  </li>
  <li>
    <div className="flex flex-row text-center justify-center font-bold text-xl mb-2">
      <span className="pr-2">Residential & Commercial</span>
      <img src="/images/house.svg" alt="Residential & Commercial" className="w-5" />
    </div>
    <p>
      Whether it’s a cozy home or a professional business space, we provide efficient, high-quality painting tailored to your environment and schedule.
    </p>
  </li>
  <li>
    <div className="flex flex-row text-center justify-center font-bold text-xl mb-2">
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
      <section id="contact" className="min-h-screen flex items-center justify-center bg-white px-4 text-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p>Phone: (123) 456-7890<br />Email: hello@painterpro.com</p>
        </div>
      </section>

      </section>
    </>
  )
}

