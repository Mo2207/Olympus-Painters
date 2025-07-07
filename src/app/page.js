
export default function HomePage() {
  return (
    <>
    <section className="text-gray-800">


      {/* Welcome Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-blue-100 px-4 text-center ">
        <div>
          <h1 className="text-4xl font-bold mb-4">Welcome to Olympus Painters</h1>
          <p className="text-lg">Interior & exterior painting done right.</p>
        </div>
      </section>


      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center bg-white px-4 text-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p>Experienced, reliable, and committed to top-quality work.</p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="min-h-screen flex items-center justify-center bg-gray-100 px-4 text-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <ul className="list-disc list-inside text-left max-w-md mx-auto">
            <li>Interior Painting</li>
            <li>Exterior Painting</li>
            <li>Residential & Commercial</li>
            <li>Decks, Fences & Trim</li>
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

