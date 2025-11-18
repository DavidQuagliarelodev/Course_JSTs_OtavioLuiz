import "./footer.css";
export default function Footer(props) {
  return (
    <>
      <div className="footer">
        <span>copyright@{props.name}</span>
      </div>
    </>
  );
}
