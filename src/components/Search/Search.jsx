import { useState } from "react";
import { SubmitButton } from "./SubmitButton";
import { TextField } from "./TextField";

import { validateTextField } from "../../utils";

export const Search = ({ onSearch, loading }) => {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    let text = e.target.value;
    text = text.replace(/[^A-Za-z0-9\s]/gi, "");
    setText(text);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const [ isError, errorText ] = validateTextField(text);

    if (isError) {
      setError(errorText);
      return;
    }

    onSearch(text);
    setError("");
  };

  return (
    <div className="flex w-1/2 h-16">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="flex">
          <TextField
            handleChange={handleChange}
            loading={loading}
            text={text}
            error={error}
          />
          <SubmitButton loading={loading} />
        </div>

        <span className="text-red-600">{error}</span>
      </form>
    </div>
  );
};
