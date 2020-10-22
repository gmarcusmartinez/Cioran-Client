import axios from "axios";
import { useState } from "react";

export default ({ url, method, body, onSuccess }) => {
  const [errors, setErrors] = useState(null);

  const doRequest = async () => {
    try {
      setErrors(null);
      const { data } = await axios[method](url, body);

      if (onSuccess) onSuccess(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  return { doRequest, errors };
};
