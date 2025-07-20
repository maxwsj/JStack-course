import PropTypes from "prop-types";
import Input from "components/Input";
import { Form, ButtonContainer } from "./styles";

import FormGroup from "components/FormGroup";
import Select from "components/Select";
import Button from "components/Button";

export default function ContactForm({ buttonLabel }) {
  return (
    <Form>
      <FormGroup>
        <Input placeholder="Nome" />
      </FormGroup>

      <FormGroup error="O formato do e-mail é inválido.">
        <Input placeholder="E-mail" error />
      </FormGroup>
      <FormGroup>
        <Input placeholder="Telefone" />
      </FormGroup>

      <FormGroup>
        <Select>
          <option value="instagram">Instagram</option>
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
