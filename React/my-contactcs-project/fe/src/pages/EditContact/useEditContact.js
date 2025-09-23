import useSafeAsyncAction from "hooks/useSafeAsyncAction";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import ContactsService from "services/ContactsService";
import toast from "utils/toast";

export default function useEditContact() {
  const [isLoading, setisLoading] = useState(true);
  const [contactName, setContactName] = useState("");

  const contactFormRef = useRef(null);

  const { id } = useParams();
  // const history = useHistory();
  const safeAsyncAction = useSafeAsyncAction();

  useEffect(() => {
    const controller = new AbortController();

    async function loadContact() {
      try {
        const contactData = await ContactsService.getContactById(
          id,
          controller.signal
        );

        safeAsyncAction(() => {
          contactFormRef.current.setFieldsValues(contactData);
          setisLoading(false);
          setContactName(contactData.name);
        });
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }
        safeAsyncAction(() => {
          // history.push("/");
          toast({ type: "danger", text: "Contato não encontrado!" });
        });
      }
    }

    loadContact();

    return () => {
      controller.abort();
    };
  }, [id, safeAsyncAction]);

  async function handleSubmit(contact) {
    try {
      const contactData = await ContactsService.updateContact(id, contact);

      setContactName(contactData.name);
      toast({
        type: "success",
        text: "Contato editado com sucesso!",
        duration: 8000,
      });
    } catch {
      toast({
        type: "danger",
        text: "Ocorreu um erro ao editar o contato!",
      });
    }
  }
  return { isLoading, contactName, contactFormRef, handleSubmit };
}
