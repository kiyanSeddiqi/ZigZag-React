import { useContext, useState } from "react";
import { AuthContext } from "../features/auth/context/AuthContext";
import { toast } from "react-toastify";

export default function useForm({ initialValues, validate, onSubmit }) {
  const [formData, setFormData] = useState(initialValues);
  const [formError, setFormError] = useState({});

  function changeHandler(e) {
    const { value, name } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formError[name]) {
      setFormError((prev) => ({ ...prev, [name]: "" }));
    }
  }

  async function submitHandler(e) {
    e.preventDefault();
    const errors = validate(formData);

    if (Object.keys(errors).length > 0) {
      setFormError(errors);
      return;
    }

    try {
      await onSubmit(formData);
      console.log("Form Submitted: ✅", formData);
      setFormError({});
    } catch (error) {
      setFormError({ general: error.message });
    }
  }

  function resetForm() {
    setFormData(initialValues);
    setFormError({});
  }

  return {
    formData,
    formError,
    changeHandler,
    submitHandler,
    resetForm,
    setFormData,
    setFormError,
  };
}
