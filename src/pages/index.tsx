import { useEffect, useState } from "react"
import ClientCollection from "../backend/db/ClientCollection"
import Button from "../components/Button"
import Form from "../components/Form"
import Layout from "../components/Layout"
import Table from "../components/Table"
import Client from "../core/Client"
import ClientRepository from "../core/ClientRepository"

export default function Home() {
  const repo: ClientRepository = new ClientCollection()
  const [client, setClient] = useState<Client>(Client.empty())
  const [clients, setClients] = useState<Client[]>([])
  const [visibility, setVisibility] = useState<"table" | "form">("table")

  useEffect(getAll, [])

  function getAll() {
    repo.getAll().then((clients) => {
      setClients(clients)
      setVisibility("table")
    })
  }

  function selectedClient(client: Client) {
    setClient(client)
    setVisibility("form")
  }

  async function deletedClient(client: Client) {
    await repo.delete(client)
    getAll()
  }

  function newClient() {
    setClient(Client.empty())
    setVisibility("form")
  }

  async function saveClient(client: Client) {
    await repo.save(client)
    getAll()
  }

  return (
    <div
      className={`
        flex h-screen justify-center items-center
        bg-gradient-to-r from-purple-500 to-blue-600 text-white
    `}
    >
      <Layout title="Cadastro Simples">
        {visibility === "table" ? (
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
          <Form
            client={client}
            changeClient={saveClient}
            cancel={() => setVisibility("table")}
          />
        )}
      </Layout>
    </div>
  )
}
