import PropTypes from "prop-types";
import { useState } from "react";

import isEmailValid from "utils/isEmailValid";

import { Form, ButtonContainer } from "./styles";

import Input from "components/Input";
import FormGroup from "components/FormGroup";
import Select from "components/Select";
import Button from "components/Button";
export default function ContactForm({ buttonLabel }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("");
  const [errors, setErrors] = useState([]);

  function handleNameChange(event) {
    setName(event.target.value);

    if (!event.target.value) {
      setErrors((prevState) => [
        ...prevState,
        { field: "name", message: "Nome é obrigatório." },
      ]);
    } else {
      setErrors((prevState) => [
        prevState.filter((error) => error.field !== "name"),
      ]);
    }
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);

    if (event.target.value && !isEmailValid(event.target.value)) {
      const errorAlreadyExists = errors.find(
        (error) => error.field === "email"
      );

      if (errorAlreadyExists) return;

      setErrors((prevState) => [
        ...prevState,
        { field: "email", message: "E-mail inválido." },
      ]);
    } else {
      setErrors((prevState) => [
        prevState.filter((error) => error.field !== "email"),
      ]);
    }
  }

  console.log(errors);

  function handlePhoneChange(event) {
    setPhone(event.target.value);
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Input placeholder="Nome" value={name} onChange={handleNameChange} />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="E-mail"
          value={email}
          onChange={handleEmailChange}
        />
      </FormGroup>
      <FormGroup>
        <Input
          placeholder="Telefone"
          value={phone}
          onChange={handlePhoneChange}
        />
      </FormGroup>

      <FormGroup>
        <Select value={category} onChange={handleCategoryChange}>
          <option value="">Categoria</option>
          <option value="instagram">Instagram</option>
          <option value="discord">Discord</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit">{buttonLabel}</Button>
      </ButtonContainer>
    </Form>
  );
}

ContactForm.prototype = {
  buttonLabel: PropTypes.string.isRequired,
};
