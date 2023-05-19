import EmployeeForm from "@/components/EmployeeForm";
import { useContext } from "react";
import FormContext from "@/store/form-context";
import { useRouter } from "next/router";
////////////////////////////////

const EmployeeFormPage = (props) => {
  const router = useRouter()
  const formCtx = useContext(FormContext)
  const employeeFormSubmitHandler = (data) => {
    formCtx.updateDataHandler(data)
    router.push('/SpecificationForm')
  };
  return <EmployeeForm onFormSubmit={employeeFormSubmitHandler} />;
};

export default EmployeeFormPage;
