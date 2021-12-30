import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";

export default function Home() {

  const clients = [
    new Client('Ana', 34, '1'),
    new Client('Bia', 21, '2'),
    new Client('Carlos', 23, '3'),
    new Client('Pedro', 54, '4')
  ]

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 to-blue-600 text-white
    `}>
      <Layout title="Cadastro Simples">
        <Table clients={clients}></Table>
      </Layout>
    </div>
  )
}
