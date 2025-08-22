import PropTypes from "prop-types";
import { forwardRef } from "react";

import { Form, ButtonContainer } from "./styles";

import Input from "components/Input";
import FormGroup from "components/FormGroup";
import Select from "components/Select";
import Button from "components/Button";
import useContactForm from "./useContactForm";

const ContactForm = forwardRef(function ContactForm(
  { buttonLabel, onSubmit },
  ref
) {
  const {
    name,
    email,
    phone,
    categoryId,
    categories,
    isLoadingCategories,
    isSubmitting,
    handleNameChange,
    handleEmailChange,
    handlePhoneChange,
    setCategoryId,
    handleSubmit,
    getErrorMessageByFieldName,
    isFormValid,
  } = useContactForm({ onSubmit, ref });

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErrorMessageByFieldName("name")}>
        <Input
          error={getErrorMessageByFieldName("name")}
          placeholder="Nome *"
          value={name}
          onChange={handleNameChange}
          disabled={isSubmitting}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName("email")}>
        <Input
          type="email"
          error={getErrorMessageByFieldName("email")}
          placeholder="E-mail"
          value={email}
          onChange={handleEmailChange}
          disabled={isSubmitting}
        />
      </FormGroup>

      <FormGroup>
        <Input
          maxLength="15"
          placeholder="Telefone"
          value={phone}
          onChange={handlePhoneChange}
          disabled={isSubmitting}
        />
      </FormGroup>

      <FormGroup isLoading={isLoadingCategories}>
        <Select
          value={categoryId}
          onChange={(event) => setCategoryId(event.target.value)}
          disabled={isLoadingCategories || isSubmitting}
        >
          <option value="">Sem categoria</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit" disabled={!isFormValid} isLoading={isSubmitting}>
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  );
});

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
