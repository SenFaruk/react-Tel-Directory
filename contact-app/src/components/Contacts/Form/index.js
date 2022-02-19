import React from "react";
import { useState } from "react";

function Form() {
  const [form, setForm] = useState({ fullname: "", phone_number: "" });

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const onSubmit =(e)=>{
    e.preventDefault();

    if (form.fullname === "" || form.phone_number === "") {
      return false;
      
    }
    console.log(form)
  }




  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          name="fullname"
          placeholder="Fullname"
          onChange={onChangeInput}
        />
      </div>
      <div>
        <input
          name="phone_number"
          placeholder="phone number"
          onChange={onChangeInput}
        />
      </div>
      <div>
        <button >ADD</button>
      </div>
    </form>
  );
}

export default Form;
