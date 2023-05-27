import { Fragment, useContext, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import classes from "./SpecificationForm.module.css";
import MainHeader from "@/components/MainHeader";
import FormbackgroundLayout from "@/components/Layout/FormBackgroundLayout";
import FormLayout from "@/components/Layout/FormLayout";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Link from "next/link";
import FormContext from "@/store/form-context";
const SpecificationForm = (props) => {
  const [specFormValue, setSpecFormValue] = useState({});
  const [imageIsValid, setImageIsValid] = useState(null);
  const router = useRouter();
  const formCtx = useContext(FormContext);
  const formSubmitHandler = async (e) => {
    e.preventDefault();
    if (!formCtx.formData || !formCtx.formData.employeeFormValid) {
      alert("გთხოვთ ორივე ფორმა შეავსოთ სანამ დაიმახსოვრებთ");
      router.push("/EmployeeForm");
      return;
    }
    const form = e.currentTarget;
    const fileInput = Array.from(form.elements).find(
      ({ name }) => name === "file"
    );

    const imageFormData = new FormData();
    imageFormData.append("file", fileInput.files[0]);
    imageFormData.append("upload_preset", "redberry-upload");
    const response = await fetch(
      "https://api.cloudinary.com/v1_1/du2uozszj/image/upload",
      {
        method: "POST",
        body: imageFormData,
      }
    );

    const data = await response.json();

    props.onFormSubmit({
      ...props.formData,
      image: data.url,
      ...specFormValue,
    });

    formCtx.updateDataHandler({});
    router.push("/FinishPage");
  };
  const laptopNameStateHandler = (e) => {
    setSpecFormValue((prevState) => ({
      ...prevState,
      laptopName: e.target.value,
    }));
  };
  const brandStateHandler = (e) => {
    setSpecFormValue((prevState) => ({
      ...prevState,
      brandName: e.target.value,
    }));
  };
  const cpuStateHandler = (e) => {
    setSpecFormValue((prevState) => ({
      ...prevState,
      cpu: e.target.value,
    }));
  };
  const coreStateHandler = (e) => {
    setSpecFormValue((prevState) => ({
      ...prevState,
      cpuCore: e.target.value,
    }));
  };
  const threadStateHandler = (e) => {
    setSpecFormValue((prevState) => ({
      ...prevState,
      cpuThreads: e.target.value,
    }));
  };

  const ramStateHandler = (e) => {
    setSpecFormValue((prevState) => ({
      ...prevState,
      ram: e.target.value,
    }));
  };
  const dateStateHandler = (e) => {
    setSpecFormValue((prevState) => ({
      ...prevState,
      date: e.target.value,
    }));
  };

  const priceStateHandler = (e) => {
    setSpecFormValue((prevState) => ({
      ...prevState,
      price: e.target.value,
    }));
  };
  const memoryChangeHandler = (e) => {
    setSpecFormValue((prevState) => ({
      ...prevState,
      memory: e.target.value,
    }));
  };
  const stateChangeHandler = (e) => {
    setSpecFormValue((prevState) => ({
      ...prevState,
      laptopState: e.target.value,
    }));
  };
  const imageValidationHandler = (e) => {
    if (!e.target.value) {
      setImageIsValid(false);
      return;
    }
    setImageIsValid(true);
  };
  return (
    <Fragment>
      <Head>
        <title>Employee Specification Info Form</title>
        <meta
          name="description"
          content="RedBerry Employee Personal Info Form"
        />
      </Head>
      <FormbackgroundLayout>
        <MainHeader />
        <FormLayout>
          <form className={classes.form} onSubmit={formSubmitHandler}>
            <Input
              type="file"
              id="fileInput"
              parentClass={classes.fileUploadInput}
              labelText="ატვირთე "
              uploadText="ჩააგდე ან ატვირთე ლეპტოპის ფოტო"
              accept="image/png, image/jpeg"
              name="file"
              required
              onChange={imageValidationHandler}
            />
            <div className={classes.brandInputs}>
              <Input
                className={classes.brandInput}
                labelText="ლეპტოპის სახელი"
                id="brandInput"
                hint="ლათინური ასოები, ციფრები, !@#$%^&*()_+= "
                required
                onChange={laptopNameStateHandler}
              />
              <select
                className={classes.brandSelect}
                id="brandSelect"
                name="brandSelect"
                required
                onChange={brandStateHandler}
              >
                <option value="">ლეპტოპის ბრენდი</option>
                <option value="Dell">Dell</option>
                <option value="Acer">Acer</option>
                <option value="Asus">Asus</option>
                <option value="HP">HP</option>
                <option value="Mac">Mac</option>
              </select>
            </div>

            <div className={classes.underline}></div>

            <div className={classes.cpuInputs}>
              <select
                className={classes.cpuSelect}
                id="cpuSelect"
                name="cpuSelect"
                required
                onChange={cpuStateHandler}
              >
                <option value="">CPU</option>
                <option value="Intel">Intel</option>
                <option value="AMD">AMD</option>
              </select>

              <Input
                className={classes.cpuInput}
                labelText="CPU-ს ბირთვი"
                hint="მხოლოდ ციფრები"
                required
                onChange={coreStateHandler}
              />
              <Input
                className={classes.cpuInput}
                labelText="CPU-ს ნაკადი"
                hint="მხოლოდ ციფრები"
                required
                onChange={threadStateHandler}
              />
            </div>

            <div className={classes.ramInputs}>
              <Input
                type="text"
                id="ramInput"
                className={classes.ramInput}
                labelText="ლეპტოპის RAM (GB)"
                hint="მხოლოდ ციფრები"
                required
                onChange={ramStateHandler}
              />
              <div className={classes.memoryBox}>
                <p>მეხსიერების ტიპი</p>
                <div className={classes.radioFlexBox}>
                  <div className={classes.radioInputs}>
                    <label htmlFor="ssd">SSD</label>
                    <input
                      type="radio"
                      name="memType"
                      id="ssd"
                      className={classes.radioInput}
                      value="SSD"
                      required
                      onChange={memoryChangeHandler}
                    />
                  </div>
                  <div className={classes.radioInputs}>
                    <label htmlFor="hdd">HDD</label>
                    <input
                      type="radio"
                      name="memType"
                      id="hdd"
                      className={classes.radioInput}
                      value="HDD"
                      required
                      onChange={memoryChangeHandler}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.underline}></div>

            <div className={classes.laptopDateAndPriceInputs}>
              <Input
                type="date"
                id="laptopDate"
                labelText="შეძენის რიცხვი (არჩევითი)"
                hint="აირჩიეთ ვალიდური რიცხვი"
                className={classes.laptopInput}
                required
                onChange={dateStateHandler}
              />
              <Input
                type="text"
                id="laptopPrice"
                labelText="ლეპტოპის ფასი"
                hint="მხოლოდ ციფრები"
                className={classes.laptopInput}
                required
                onChange={priceStateHandler}
              />
            </div>

            <div className={classes.memoryBox}>
              <p>ლეპტოპის მდგომარეობა</p>
              <div className={classes.radioFlexBox}>
                <div className={classes.radioInputs}>
                  <label htmlFor="old">ძველი</label>
                  <input
                    type="radio"
                    name="laptopState"
                    id="old"
                    className={classes.radioInput}
                    value="ძველი"
                    required
                    onChange={stateChangeHandler}
                  />
                </div>
                <div className={classes.radioInputs}>
                  <label htmlFor="new">ახალი</label>
                  <input
                    type="radio"
                    name="laptopState"
                    id="new"
                    className={classes.radioInput}
                    value="ახალი"
                    required
                    onChange={stateChangeHandler}
                  />
                </div>
              </div>
            </div>

            <div className={classes.formBtnNavigation}>
              <Link href="/" className={classes.backBtn}>
                უკან
              </Link>
              <Button>დამახსოვრება</Button>
            </div>
          </form>
        </FormLayout>
      </FormbackgroundLayout>
    </Fragment>
  );
};

export default SpecificationForm;
