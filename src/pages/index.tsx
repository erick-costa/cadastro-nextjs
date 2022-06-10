import { useState } from "react"
import Button from "../components/Button"
import Form from "../components/Form"
import Layout from "../components/Layout"
import Table from "../components/Table"
import Client from "../core/Client"

export default function Home() {
  const [client, setClient] = useState<Client>(Client.empty())
  const [visibility, setVisibility] = useState<"table" | "form">("table")

  const clients = [
    new Client("Ana", 34, "1"),
    new Client("Bia", 21, "2"),
    new Client("Carlos", 23, "3"),
    new Client("Pedro", 54, "4"),
  ]

  function selectedClient(client: Client) {
    setClient(client)
    setVisibility("form")
  }

  function deletedClient(client: Client) {
    console.log(`Excluir... ${client.name}`)
  }

  function newClient() {
    setClient(Client.empty())
    setVisibility("form")
  }

  function saveClient(client: Client) {
    console.log(client)
    setVisibility("table")
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
