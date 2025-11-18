import "./header.css";
function Header(props) {
  return (
    <>
      <div className="header">
        <img src={props.imageUrl} alt="logo header" />
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </>
  );
}

export default Header;
