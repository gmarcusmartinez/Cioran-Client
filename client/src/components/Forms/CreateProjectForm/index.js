import React from "react";
import Text from "components/Inputs/Text";
import Spinner from "components/Common/Spinner";

const CreateProjectForm = () => {
  const [formData, setFormData] = React.useState({ title: "", slug: "" });
  const { title, slug } = formData;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.targetvalue });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ title: "", slug: "" });
  };

  //   const setError = (field) =>
  //     errors ? errors.find((err) => err.field === field) : null;
  // return <Spinner />;
  return (
    <form className="create-project-form" onSubmit={handleSubmit}>
      <h3 className="create-project-form__title">Create Project</h3>
      <Text
        label="Project Title"
        name="title"
        required={true}
        value={title}
        onChange={handleChange}
        // error={setError("title")}
      />
      <Text
        label="Project Slug"
        name="slug"
        required={true}
        value={slug}
        onChange={handleChange}
        info="Slug should be between 4 and 6 characters"
        // error={setError("slug")}
      />
      <button type="submit" className="create-project-form__btn">
        Submit
      </button>
    </form>
  );
};

export default CreateProjectForm;
