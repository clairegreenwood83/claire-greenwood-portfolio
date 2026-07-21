function Navigation() {
    return (
      <nav className="flex items-center justify-between px-6 py-4">
        <a className="font-bold text-white text-[20px] tracking-wide" href="/" style={{ fontFamily: "'Bebas Neue'" }}>
          Claire Greenwood
        </a>
  
        <div className="flex gap-6 text-white font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
          <a href="/about" className="rounded-md px-2 py-1 mx-1 hover:bg-[#0A3E6F] hover:rounded-md transition-colors duration-300">About</a>
          <a href="#projects" className="rounded-md px-2 py-1 mx-1 hover:bg-[#0A3E6F] hover:rounded-md transition-colors duration-300">Projects</a>
          <a href="/articles" className="rounded-md px-2 py-1 mx-1 hover:bg-[#0A3E6F] hover:rounded-md transition-colors duration-300">Articles</a>
          <a href="/contact" className="rounded-md px-2 py-1 mx-1 hover:bg-[#0A3E6F] hover:rounded-md transition-colors duration-300">Contact</a>
        </div>
      </nav>
    );
  }
  
  export default Navigation;