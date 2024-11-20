import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { InputText } from "primereact/inputtext";
import { Button } from "react-bootstrap";
// import { Dropdown } from 'primereact/dropdown';
// import { Calendar } from 'primereact/calendar';
// import { Password } from 'primereact/password';
// import { Checkbox } from 'primereact/checkbox';
import { Dialog } from "primereact/dialog";
// import { Divider } from 'primereact/divider';
import { classNames } from "primereact/utils";
import "../../assets/css/style.css";
// import { CountryService } from '../service/CountryService';

export const ForgotPassword = () => {
  // const [countries, setCountries] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({});
  // const countryservice = new CountryService();
  const defaultValues = {
    name: "",
    email: "",
  };

  // useEffect(() => {
  //     countryservice.getCountries().then(data => setCountries(data));
  // }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues });

  const onSubmit = (data) => {
    setFormData(data);
    setShowMessage(true);

    reset();
  };

  const getFormErrorMessage = (name) => {
    return (
      errors[name] && <small className="p-error">{errors[name].message}</small>
    );
  };

  const dialogFooter = (
    <div className="p-d-flex p-jc-center">
      <Button
        label="OK"
        className="p-button-text"
        autoFocus
        onClick={() => setShowMessage(false)}
      />
    </div>
  );

  return (
    <div className="form-demo container mt-5 ">
      <Dialog
        visible={showMessage}
        onHide={() => setShowMessage(false)}
        position="top"
        footer={dialogFooter}
        showHeader={false}
        breakpoints={{ "960px": "80vw" }}
        style={{ width: "30vw" }}
      >
        <div className="p-d-flex p-ai-center p-dir-col p-pt-6 p-px-3">
          <i
            className="pi pi-check-circle"
            style={{ fontSize: "5rem", color: "var(--green-500)" }}
          ></i>
          <h5>Registration Successful!</h5>
          <p style={{ lineHeight: 1.5, textIndent: "1rem" }}>
            Your account's password is reseted under name <b>{formData.name}</b>{" "}
            ; please check your verification password we sent to{" "}
            <b>{formData.email}</b> .
          </p>
        </div>
      </Dialog>

      <div className="p-d-flex p-jc-center">
        <div className="card">
          <h5 className="p-text-center">Reset password</h5>
          <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
            <div className="p-field">
              <span className="p-float-label p-input-icon-right">
                <i className="pi pi-envelope" />
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: "Email is required.",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Invalid email address. E.g. example@email.com",
                    },
                  }}
                  render={({ field, fieldState }) => (
                    <InputText
                      id={field.name}
                      {...field}
                      className={classNames({
                        "p-invalid": fieldState.invalid,
                      })}
                    />
                  )}
                />
                <label
                  htmlFor="email"
                  className={classNames({ "p-error": !!errors.email })}
                >
                  Email*
                </label>
              </span>
              {getFormErrorMessage("email")}
            </div>

            <div className="me-auto">
              <Button type="submit" className="p-mt-2 btn-success m-auto">
                Reset
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
