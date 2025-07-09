
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#235A81] shadow-md z-50 text-gray-800 font-semibold">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold">Olympus Painters</div>
        <div className="space-x-4">
          <a href="#home" className="hover:text-white">Home</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>
    </nav>
  )
}
