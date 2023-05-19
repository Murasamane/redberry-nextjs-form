import { useState } from "react";
import FormContext from "./form-context";
const AppContextProvider = (props) => {
  const [formData, setFormData] = useState();
  const updateDataHandler = (data) => {
    setFormData(data);
  };

  return (
    <FormContext.Provider value={{ formData, updateDataHandler }}>
      {props.children}
    </FormContext.Provider>
  );
};

export default AppContextProvider;
