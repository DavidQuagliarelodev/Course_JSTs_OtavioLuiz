import { useState } from "react";

export default function Form() {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputYear, setInputYear] = useState("");
  const [users, setUsers] = useState([]);

  function handleGetInputName(e) {
    setInputName(e.target.value);
  }

  function handleGetInputEmail(e) {
    setInputEmail(e.target.value);
  }

  function handleGetInputYear(e) {
    setInputYear(e.target.value);
  }

  function createUser(e) {
    e.preventDefault();
    const newUser = {
      name: inputName,
      email: inputEmail,
      year: inputYear,
    };

    setUsers([...users, newUser]);
  }

  return (
    <>
      <form onSubmit={createUser}>
        <input
          type="text"
          placeholder="Name"
          className="NameInput"
          value={inputName}
          onChange={handleGetInputName}
        />
        <input
          type="email"
          placeholder="E-Mail"
          className="emailInput"
          value={inputEmail}
          onChange={handleGetInputEmail}
        />
        <input
          type="number"
          placeholder="year"
          className="yearInput"
          value={inputYear}
          onChange={handleGetInputYear}
        />
        <input type="submit" value="Send" />
      </form>

      <div>
        <div className="user">
          {users.map((e, i) => (
            <p key={i}>{e.name}</p>
          ))}
          {users.map((e, i) => (
            <p key={i}>{e.email}</p>
          ))}
          {users.map((e, i) => (
            <p key={i}>{e.year}</p>
          ))}
        </div>
      </div>
    </>
  );
}
