import Button from "../components/Button"
import Layout from "../components/Layout"
import Table from "../components/Table"
import Client from "../core/Client"

export default function Home() {
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

  return (
    <div
      className={`
        flex h-screen justify-center items-center
        bg-gradient-to-r from-purple-500 to-blue-600 text-white
    `}
    >
      <Layout title="Cadastro Simples">
        <div className="flex justify-end">
          <Button color="blue" className="mb-4">
            Novo Cliente
          </Button>
        </div>
        <Table
          clients={clients}
          selectedClient={selectedClient}
          deletedClient={deletedClient}
        ></Table>
      </Layout>
    </div>
  )
}
