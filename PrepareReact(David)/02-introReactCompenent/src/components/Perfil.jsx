import "./perfil.css";
export default function Perfil(props) {
  return (
    <>
      <div>
        <img src={props.img} alt={props.alt} />
        <h2>{props.name}</h2>
        <p>{props.bio}</p>
      </div>
    </>
  );
}
