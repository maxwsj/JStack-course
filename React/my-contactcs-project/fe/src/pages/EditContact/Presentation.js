import PageHeader from "components/PageHeader";
import Loader from "components/Loader";
import ContactForm from "components/ContactForm";
import PropTypes from "prop-types";

export default function Presentation({
  isLoading,
  contactName,
  contactFormRef,
  onSubmit,
}) {
  return (
    <>
      <Loader isLoading={isLoading} />

      <PageHeader
        title={isLoading ? "Carregando.." : `Editar ${contactName}`}
      />

      <ContactForm
        ref={contactFormRef}
        buttonLabel="Salvar alterações"
        onSubmit={onSubmit}
      />
    </>
  );
}

Presentation.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  contactName: PropTypes.string.isRequired,
  contactFormRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
};
