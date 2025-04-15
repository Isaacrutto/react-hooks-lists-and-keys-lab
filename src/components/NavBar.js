function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <nav>
      {/* Map through the links array to create anchor tags */}
      {links.map((link) => (
        <a key={link} href={`#${link}`}>
          {link}
        </a>
      ))}
    </nav>
  );
};

export default NavBar;