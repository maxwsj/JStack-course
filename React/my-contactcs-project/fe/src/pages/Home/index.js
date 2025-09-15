import { Container, ListHeader, Card } from "./styles";

import Loader from "components/Loader";
import useHome from "./useHome";
import InputSearch from "pages/components/InputSearch";
import Header from "pages/components/Header";
import ErrorStatus from "pages/components/ErrorStatus";
import EmptyList from "pages/components/EmptyList";
import SearchNotFound from "pages/components/SearchNotFound";
import ContactsList from "pages/components/ContactsList";
import Modal from "components/Modal";

export default function Home() {
  const {
    isPending,
    isLoading,
    isLoadingDelete,
    isDeleteModalVisible,
    contacts,
    orderBy,
    searchTerm,
    hasError,
    contactBeingDeleted,
    filteredContacts,
    handleToggleOrderBy,
    handleChangeSearchTerm,
    handleTryAgain,
    handleDeleteContact,
    handleCloseDeleteModal,
    handleConfirmDeleteContact,
  } = useHome();

  const hasContacts = contacts.length > 0;
  const isListEmpty = !hasError && !isLoading && !hasContacts;
  const isSearchEmpty = !hasError && hasContacts && filteredContacts.length < 1;

  return (
    <Container>
      <Loader isLoading={isLoading} />

      {hasContacts && (
        <InputSearch value={searchTerm} onChange={handleChangeSearchTerm} />
      )}

      <Header
        hasError={hasError}
        qtyOfContacts={contacts.length}
        qtyOfFilteredContacts={filteredContacts.length}
      />

      {hasError && <ErrorStatus onTryAgain={handleTryAgain} />}
      {isListEmpty && <EmptyList />}
      {isSearchEmpty && <SearchNotFound searchTerm={searchTerm} />}

      {hasContacts && (
        <>
          <ContactsList
            filteredContacts={filteredContacts}
            orderBy={orderBy}
            onToggleOrderBy={handleToggleOrderBy}
            onDeleteContact={handleDeleteContact}
          />

          <Modal
            danger
            isLoading={isLoadingDelete}
            visible={isDeleteModalVisible}
            title={`Tem certeza que deseja remover o contato "${contactBeingDeleted?.name}"?`}
            confirmLabel="Deletar"
            onCancel={handleCloseDeleteModal}
            onConfirm={handleConfirmDeleteContact}
          >
            <p>
              Você está prestes a remover um contato. Esta ação não pode ser
              desfeita.
            </p>
          </Modal>
        </>
      )}
    </Container>
  );
}
