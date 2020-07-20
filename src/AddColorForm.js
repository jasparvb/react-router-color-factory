import React, { useState } from "react";
import { useHistory } from "react-router-dom";

/** Form for creating a new madlibs story.*/

const AddColorForm = ({ addColor }) => {
  const INITIAL_STATE = { name: "", color: "#000000" };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const history = useHistory();

  /** Send {name, quantity} to parent
   *    & clear form. */

  const handleSubmit = evt => {
    evt.preventDefault();
    addColor({[formData.name]: formData.color});
    history.push("/colors");
  };

  /** Update local state w/curr state of input elem */

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  };

  /** render form */

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="name"
        name="name"
        placeholder="Color name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        id="color"
        name="color"
        placeholder="color"
        type="color"
        value={formData.color}
        onChange={handleChange}
      />

      <button>Get Story</button>
    </form>
  );
};

export default AddColorForm;
