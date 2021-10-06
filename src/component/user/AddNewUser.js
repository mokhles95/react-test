import { Card } from "../styles/Card";
import { Form } from "../styles/form/Form";
import { Input } from "../styles/form/Input";
import { Label } from "../styles/form/Label";
import { Control } from "../styles/form/Control";
import { Select } from "../styles/form/Select";
import { Button } from "../styles/form/Button";
import { useRef } from "react";
import { Span } from "../styles/form/Span";
import validator from "validator";
import React, { useState } from "react";
import store from '../../redux/Store';


function AddNewUser(props) {
 
  const [emailError, setEmailError] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");
  const [countries, setCountries] = useState([]);
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const ageRef = useRef();
  const countryRef = useRef();
  const cityRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  //get countries from the store
  store.subscribe(() => {
    setCountries(store.getState().allCountries.countries)
  });
  
  //email validation
  const validateEmail = () => {
    var email = emailRef.current.value;

    if (validator.isEmail(email)) {
      setEmailError("");
    } else {
      setEmailError("Enter valid Email!");
    }
  };
  //password strength validation
  const validatePassword = () => {
    let strongPassword = new RegExp(
      "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"
    );
    let mediumPassword = new RegExp(
      "((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))"
    );

    var password = passwordRef.current.value;
    if (strongPassword.test(password)) {
      setPasswordStrength("strong password");
    } else if (mediumPassword.test(password)) {
      setPasswordStrength("medium strength password");
    } else {
      setPasswordStrength("week password");
    }
  };
  //add user function
  function submitHandler(event) {
    event.preventDefault();
    const user = {
      id: Math.random(),
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      age: ageRef.current.value,
      country: countryRef.current.value,
      city: cityRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    props.onAddUser(user);
    firstNameRef.current.value = "";
    lastNameRef.current.value = "";
    ageRef.current.value = "";
    countryRef.current.value = "";
    cityRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";
  }

  return (
    <Card>
      <Form onSubmit={submitHandler}>
        <Control>
          <Label>First name</Label>
          <Input type="text" required id="firstName" ref={firstNameRef} />
        </Control>
        <Control>
          <Label>Last name</Label>
          <Input type="text" required id="lastName" ref={lastNameRef} />
        </Control>
        <Control>
          <Label>age</Label>
          <Input type="number" required id="age" ref={ageRef} />
        </Control>
        <Control>
          <Label>country</Label>
          <Select ref={countryRef} >
          {countries.map((country,index)=><option key={index} value={country.name} >{country.name}</option>)}
          </Select>
        </Control>
        <Control>
          <Label>city</Label>
          <Input type="text" required id="city" ref={cityRef} />
        </Control>
        <Control>
          <Label>email</Label>
          <Input
            type="email"
            required
            id="email"
            onChange={() => validateEmail()}
            ref={emailRef}
          />
          <Span>{emailError}</Span>
        </Control>
        <Control>
          <Label>password</Label>
          <Input
            type="password"
            required
            id="password"
            onChange={() => validatePassword()}
            ref={passwordRef}
          />
          <Span>{passwordStrength}</Span>
        </Control>
        <Button>save</Button>
      </Form>
    </Card>
  );
}
export default AddNewUser;
