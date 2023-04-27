import { useState } from "react";
import "./styles.css";

const intiStudent = {
  name: "",
  std: "",
  age: "",
  add: "",
  female: ""
};

export default function App() {
  const [student, setStudent] = useState(intiStudent);
  const { name, std, age, add } = student;

  const handleChange = (e) => {
    const { type, name, value, checked } = e.target;

    type === "checkbox"
      ? setStudent({
          ...student,
          [name]: checked
        })
      : setStudent({
          ...student,
          [name]: value
        });
  };

  return (
    <div className="App">
      <input
        type="text"
        name="name"
        placeholder="enter name"
        value={name}
        onChange={handleChange}
      />
      {""}
      <br />
      <input
        type="text"
        name="std"
        placeholder="enter standard"
        value={std}
        onChange={handleChange}
      />
      {""}
      <br />
      <input
        type="text"
        name="age"
        placeholder="enter age"
        value={age}
        onChange={handleChange}
      />
      {""}
      <br />
      <input
        type="text"
        name="add"
        placeholder="enter address"
        value={add}
        onChange={handleChange}
      />
      {""}
      <br />
      <input type="checkbox" onChange={handleChange} name="female" />
      <button
        onClick={() => {
          console.log(student);
        }}
      >
        Click
      </button>
    </div>
  );
}
