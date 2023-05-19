import SpecificationForm from "@/components/SpecificationForm";
import FormContext from "@/store/form-context";
import { useContext } from "react";
const SpecificationFormPage = () => {
    const {formData,updateDataHandler} = useContext(FormContext);
    const formSubmitHandler = async (data)=>{
        const response = await fetch('/api/form-submit',{
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "Content-Type": "application/json",
            },
          })
    }
    return <SpecificationForm formData={formData} onFormSubmit={formSubmitHandler}/>
};

export default SpecificationFormPage;
