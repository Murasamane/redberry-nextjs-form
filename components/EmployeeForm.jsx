import classes from "./EmployeeForm.module.css";
import { Fragment, useState } from "react";
import Head from "next/head";
import MainHeader from "@/components/MainHeader";
import FormLayout from "@/components/Layout/FormLayout";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { useRouter } from "next/router";
import FormbackgroundLayout from "@/components/Layout/FormBackgroundLayout";
////////////////////////////////

const EmployeeForm = (props) => {
  const router = useRouter();
  const [formInputState, setFormInputState] = useState({});
  const [firstNameInputValid, setFirstNameInputValid] = useState(null);
  const [lastNameInputValid, setLastNameInputValid] = useState(null);
  const [teamInputValid, setTeamInputValid] = useState(null);
  const [positionInputValid, setPositionInputValid] = useState(null);
  const [emailInputValid, setEmailInputValid] = useState(null);
  const [phoneInputValid, setPhoneInputValid] = useState(null);

  /////////////////////////////////////
  /////////////////////////////////////

  function firstNameValidation(e) {
    const georgianRegex = /^[\u10D0-\u10FF]+$/; // Georgian Unicode range
    if (!georgianRegex.test(e.target.value) || e.target.value.length < 2) {
      setFirstNameInputValid(false);
      return false;
    }
    setFormInputState((prevState) => ({
      ...prevState,
      firstName: e.target.value,
    }));
    setFirstNameInputValid(true);
    return true;
  }
  function lastNameValidation(e) {
    const georgianRegex = /^[\u10D0-\u10FF]+$/; // Georgian Unicode range
    if (!georgianRegex.test(e.target.value) || e.target.value.length < 2) {
      setLastNameInputValid(false);
      return false;
    }
    setFormInputState((prevState) => ({
      ...prevState,
      lastName: e.target.value,
    }));
    setLastNameInputValid(true);
    return true;
  }
  function validateRedberryEmail(e) {
    const redberryEmailRegex = /^[a-zA-Z0-9._%+-]+@redberry\.ge$/;
    if (!redberryEmailRegex.test(e.target.value)) {
      setEmailInputValid(false);
      return false;
    }
    setFormInputState((prevState) => ({ ...prevState, email: e.target.value }));
    setEmailInputValid(true);
    return true;
  }

  const phonevalidationHandler = (e) => {
    const phoneRegex = /^(\+995|0)[5-9][0-9]{8}$/;

    if (!phoneRegex.test(e.target.value)) {
      setPhoneInputValid(false);
      return;
    }
    setFormInputState((prevState) => ({ ...prevState, phone: e.target.value }));
    setPhoneInputValid(true);
    return null;
  };

  const selectTeamValidation = (e) => {
    if (e.target.value === "") {
      setTeamInputValid(false);
    } else {
      setFormInputState((prevState) => ({
        ...prevState,
        team: e.target.value,
      }));
      setTeamInputValid(true);
    }
  };
  const selectPositionValidation = (e) => {
    if (e.target.value === "") {
      setPositionInputValid(false);
    } else {
      setFormInputState((prevState) => ({
        ...prevState,
        position: e.target.value,
      }));
      setPositionInputValid(true);
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (
      !firstNameInputValid &&
      !lastNameInputValid &&
      !teamInputValid &&
      !positionInputValid &&
      !emailInputValid &&
      !phoneInputValid
    ) {
      return;
    }

    props.onFormSubmit(formInputState)
    // router.push("/SpecificationForm");
  };
  return (
    <Fragment>
      <Head>
        <title>Employee Personal Info Form</title>
        <meta
          name="description"
          content="RedBerry Employee Personal Info Form"
        />
      </Head>
      <FormbackgroundLayout>
        <MainHeader />
        <FormLayout>
          <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.nameInputs}>
              <Input
                labelText="სახელი"
                id="firstNameInput"
                type="text"
                minLength={2}
                hint="მინიმუმ 2 სიმბოლო, ქართული ასოები"
                className={`${classes.nameInput} ${
                  firstNameInputValid === false ? classes.invalid : ""
                }`}
                placeholder="გრიშა"
                onChange={firstNameValidation}
                required
              />
              <Input
                labelText="გვარი"
                id="lastNameInput"
                type="text"
                minLength={2}
                hint="მინიმუმ 2 სიმბოლო, ქართული ასოები"
                className={`${classes.nameInput} ${
                  lastNameInputValid === false ? classes.invalid : ""
                }`}
                placeholder="ბაგრატიონი"
                onChange={lastNameValidation}
                required
              />
            </div>
            <select
              id="team"
              name="team"
              className={classes.formSelect}
              onChange={selectTeamValidation}
              required
            >
              <option value="">თიმი</option>
              <option value="დეველოპმენტი">დეველოპმენტი</option>
              <option value="HR">HR</option>
              <option value="გაყიდვები">გაყიდვები</option>
              <option value="დიზაინი">დიზაინი</option>
              <option value="მარკეტინგი">მარკეტინგი</option>
            </select>
            <select
              id="position"
              name="position"
              className={classes.formSelect}
              onChange={selectPositionValidation}
              required
            >
              <option value="">პოზიცია</option>
              <option value="სტაჟიორი">სტაჟიორი</option>
              <option value="ჯუნიორი">ჯუნიორი</option>
              <option value="მიდლი">მიდლი</option>
              <option value="სენიორი">სენიორი</option>
              <option value="ლიდი">ლიდი</option>
            </select>

            <Input
              labelText="მეილი"
              id="email"
              type="email"
              hint="უნდა მთავრდებოდეს @redberry.ge-ით"
              placeholder="grish666@redberry.ge"
              className={`${classes.addressInput} ${
                emailInputValid === false ? classes.invalid : ""
              }`}
              onChange={validateRedberryEmail}
              required
            />
            <Input
              labelText="ტელეფონის ნომერი"
              id="phone"
              type="tel"
              hint="უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს"
              placeholder="+995 598 00 07 01"
              className={`${classes.addressInput} ${
                phoneInputValid === false ? classes.invalid : ""
              }`}
              onChange={phonevalidationHandler}
              required
            />
            <div className={classes.nextBtn}>
              <Button>შემდეგი</Button>
            </div>
          </form>
        </FormLayout>
      </FormbackgroundLayout>
    </Fragment>
  );
};

export default EmployeeForm;
