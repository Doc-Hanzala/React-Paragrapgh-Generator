const Navbar = ({ onToggleTheme }) => {
  return (
    <nav>
      <h2 className="logo">
        coding <span> doc</span>
      </h2>
      <button onClick={onToggleTheme} className="btn">
        toggle theme
      </button>
    </nav>
  );
};

export default Navbar;
