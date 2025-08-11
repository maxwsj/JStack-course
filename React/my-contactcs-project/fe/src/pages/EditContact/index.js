import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import PageHeader from "components/PageHeader";
import Loader from "components/Loader";
import ContactForm from "components/ContactForm";

import ContactsService from "services/ContactsService";
import toast from "utils/toast";

export default function EditContact() {
  const [isLoading, setisLoading] = useState(true);

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    async function loadContact() {
      try {
        const contactData = await ContactsService.getContactById(id);

        console.log(contactData);
        setisLoading(false);
      } catch {
        history.push("/");
        toast({ type: "danger", text: "Contato não encontrado!" });
      }
    }

    loadContact();
  }, [id, history]);

  function handleSubmit() {}

  return (
    <>
      <Loader isLoading={isLoading} />

      <PageHeader title="Editar Max William" />

      <ContactForm buttonLabel="Salvar alterações" onSubmit={handleSubmit} />
    </>
  );
}
