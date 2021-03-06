import { useState } from "react"
import Client from "../core/Client"
import Button from "./Button"
import Input from "./Input"

interface FormProps {
  client: Client
  changeClient?: (client: Client) => void
  cancel?: () => void
}

export default function Form(props: FormProps) {
  const id = props.client?.id
  const [name, setName] = useState(props.client?.name ?? "")
  const [age, setAge] = useState(props.client?.age ?? 0)

  return (
    <div>
      {id && <Input label="Código" value={id} readonly />}
      <Input label="Nome" value={name} onChange={setName} className="mb-5" />
      <Input label="Idade" type="number" value={age} onChange={setAge} />
      <div className="flex justify-end gap-2 mt-5">
        <Button
          color="blue"
          onClick={() => props.changeClient?.(new Client(name, +age, id))}
        >
          {id ? "Alterar" : "Salvar"}
        </Button>
        <Button onClick={props.cancel}>Cancelar</Button>
      </div>
    </div>
  )
}
