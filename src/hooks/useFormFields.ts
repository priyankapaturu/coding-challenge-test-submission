import { useState } from "react";

type FormFields = {
  postCode: string;
  houseNumber: string;
  firstName: string;
  lastName: string;
  selectedAddress: string;
};

const useFormFields = (initialValues: FormFields) => {
  const [fields, setFields] = useState<FormFields>(initialValues);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFields((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetFields = () => {
    setFields(initialValues);
  };

  return { fields, handleChange, resetFields, setFields };
};

export default useFormFields;