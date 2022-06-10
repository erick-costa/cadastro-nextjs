import { useEffect, useState } from "react"
import ClientCollection from "../backend/db/ClientCollection"
import Client from "../core/Client"
import ClientRepository from "../core/ClientRepository"
import useToggleComponent from "./useToggleComponent"

export default function useClients() {
  const repo: ClientRepository = new ClientCollection()
  const { showForm, showTable, tableVisible } = useToggleComponent()
  const [client, setClient] = useState<Client>(Client.empty())
  const [clients, setClients] = useState<Client[]>([])

  useEffect(getAll, [])

  function getAll() {
    repo.getAll().then((clients) => {
      setClients(clients)
      showTable()
    })
  }

  function selectedClient(client: Client) {
    setClient(client)
    showForm()
  }

  async function deletedClient(client: Client) {
    await repo.delete(client)
    getAll()
  }

  function newClient() {
    setClient(Client.empty())
    showForm()
  }

  async function saveClient(client: Client) {
    await repo.save(client)
    getAll()
  }

  return {
    saveClient,
    newClient,
    deletedClient,
    selectedClient,
    getAll,
    client,
    clients,
    tableVisible,
    showTable,
  }
}
