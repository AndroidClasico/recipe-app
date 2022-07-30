import React, { useState } from "react";


function RecipeCreate({recipes, setRecipes}) { 
 
 //initial form and reset
  const initialFormState = { 
    name: "", 
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  //useState is initial form state
  const [form,setForm] = useState({...initialFormState}); 
  
  //handler
  const handleChange = ({target}) => { 
    setForm({...form,
      [target.name]: target.value})
  };

  //eventhandler for submit and prevents default
  const handleSubmit = (event) => { 
    event.preventDefault()   
    console.log(form)
    setRecipes([...recipes, form])
    setForm({...initialFormState})
  };
  
  
  //form render
  return ( 
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr className="row">
            <td>
              <label htmlFor="name"></label> 
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                required={true}
                onChange={handleChange}
                value={form.name}
              />
            </td>
            <td>
              <label htmlFor="cuisine"></label>
              <input
                id="cuisine"
                name="cuisine"
                type="text"
                placeholder="Cuisine"
                required={true}
                onChange={handleChange}
                value={form.cuisine}
              />
            </td>
            <td>
              <label htmlFor="photo"></label>
              <input
                id="photo"
                name="photo"
                type="url"
                placeholder="URL"
                required={true}
                onChange={handleChange}
                value={form.photo}
              />
            </td>
            <td>
              <label htmlFor="ingredients"></label>
              <textarea
                id="ingredients"
                name="ingredients"
                placeholder="Ingredients"
                required={true}
                onChange={handleChange}
                value={form.ingredients}
                autoFocus= "on"
              />
            </td>
            <td>
              <label htmlFor="preparation"></label>
              <textarea
                id="preparation"
                name="preparation"
                placeholder="Preparation"
                required={true}
                onChange={handleChange}
                value={form.preparation}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
