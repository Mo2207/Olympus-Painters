export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#235A81] shadow-md z-50 text-gray-800 font-semibold">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold">Olympus Painters</div>
        <div className="space-x-4">
          {["Home", "About", "Services", "Contact"].map((text) => (
            <a
              key={text}
              href={`#${text.toLowerCase()}`}
              className="hover:text-white inline-block transition-transform duration-200 ease-in-out transform hover:scale-110"
            >
              {text}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
