function Navigation() {
    return (
      <nav className="flex items-center justify-between px-6 py-4">
        <a className="font-semibold" href="/">
          Claire Greenwood
        </a>
  
        <div className="flex gap-6">
          <a href="/about">About</a>
          <a href="/projects">Projects</a>
          <a href="/articles">Articles</a>
          <a href="/contact">Contact</a>
        </div>
      </nav>
    );
  }
  
  export default Navigation;