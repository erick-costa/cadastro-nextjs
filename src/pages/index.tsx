import { useState } from "react"
import Button from "../components/Button"
import Form from "../components/Form"
import Layout from "../components/Layout"
import Table from "../components/Table"
import Client from "../core/Client"

export default function Home() {
  const [visibility, setVisibility] = useState<"table" | "form">("table")

  const clients = [
    new Client("Ana", 34, "1"),
    new Client("Bia", 21, "2"),
    new Client("Carlos", 23, "3"),
    new Client("Pedro", 54, "4"),
  ]

  function selectedClient(client: Client) {
    console.log(client.name)
  }

  function deletedClient(client: Client) {
    console.log(`Excluir... ${client.name}`)
  }

  function saveClient(client: Client) {
    console.log(client)
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
              <Button
                color="blue"
                className="mb-4"
                onClick={() => setVisibility("form")}
              >
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
            client={clients[0]}
            changeClient={saveClient}
            cancel={() => setVisibility("table")}
          />
        )}
      </Layout>
    </div>
  )
}
