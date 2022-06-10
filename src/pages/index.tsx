import Button from "../components/Button"
import Form from "../components/Form"
import Layout from "../components/Layout"
import Table from "../components/Table"
import useClients from "../hooks/useClients"
import useToggleComponent from "../hooks/useToggleComponent"

export default function Home() {
  const {
    newClient,
    clients,
    selectedClient,
    deletedClient,
    client,
    saveClient,
    tableVisible,
    showTable,
  } = useClients()

  return (
    <div
      className={`
        flex h-screen justify-center items-center
        bg-gradient-to-r from-purple-500 to-blue-600 text-white
    `}
    >
      <Layout title="Cadastro Simples">
        {tableVisible ? (
          <>
            <div className="flex justify-end">
              <Button color="blue" className="mb-4" onClick={newClient}>
                Novo Cliente
              </Button>
            </div>
            <Table
              clients={clients}
              selectedClient={selectedClient}
              deletedClient={deletedClient}
            />
          </>
        ) : (
          <Form client={client} changeClient={saveClient} cancel={showTable} />
        )}
      </Layout>
    </div>
  )
}
