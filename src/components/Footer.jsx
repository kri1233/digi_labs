const Footer = () => {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="
        mx-auto
        flex
        max-w-7xl
        flex-col
        justify-between
        gap-4
        text-sm
        text-white/40
        md:flex-row
      ">
        <p>
          © 2026 Digilabss
        </p>

        <p>
          Performance Marketing
        </p>

        <a
          href="#home"
          className="text-red-400 transition-colors hover:text-black"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}

export default Footer