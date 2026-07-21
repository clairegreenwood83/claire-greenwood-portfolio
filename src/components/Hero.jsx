function Hero() {
    return (
      <main className="flex min-h-screen items-center justify-center text-center px-6">
        <section className="flex flex-col items-center gap-20">
          <h1 className="text-5xl font-bold tracking-wide text-white mt-20" style={{ fontFamily: "'Perfectly Nineties'" }}>
            Building thoughtful digital experiences
          </h1>
          <p className="max-w-2xl text-[#0A3E6F] text-lg">I'm Claire, a developer and designer creating intuitive web experiences with clean code and thoughtful design.</p>
          <a href="#projects" className="inline-block font-medium text-sm text-white bg-[#0A3E6F] rounded-md p-2 transition-transform duration-300 hover:scale-110">View my work</a>
        </section>
      </main>
    );
  }
  
  export default Hero;