import React, { FunctionComponent } from "react";

import Button from "../Button/Button";
import InputText from "../InputText/InputText";
import $ from "./Form.module.css";

// Use this type to cover all valid input attributes from React
type InputExtraProps = React.InputHTMLAttributes<HTMLInputElement>;

interface FormEntry {
  name: string;
  placeholder: string;
  // TODO: Defined a suitable type for extra props
  // This type should cover all different of attribute types
  extraProps?: InputExtraProps; // optional and typed properly
}

interface FormProps {
  label: string;
  loading: boolean;
  formEntries: FormEntry[];
  onFormSubmit: () => void;
  submitText: string;
}

const Form: FunctionComponent<FormProps> = ({
  label,
  loading,
  formEntries,
  onFormSubmit,
  submitText,
}) => {
  return (
    <form onSubmit={onFormSubmit}>
      <fieldset>
        <legend>{label}</legend>
        {formEntries.map(({ name, placeholder, extraProps }, index) => (
          <div key={`${name}-${index}`} className={$.formRow}>
            <InputText
              key={`${name}-${index}`}
              name={name}
              placeholder={placeholder}
              {...extraProps}
              // ensure value defaults to empty string to avoid uncontrolled/controlled warnings
              value={
                extraProps?.value === undefined || extraProps.value === null
                  ? ""
                  : String(extraProps.value)
              }
            />
          </div>
        ))}

        <Button loading={loading} type="submit">
          {submitText}
        </Button>
      </fieldset>
    </form>
  );
};

export default Form;
