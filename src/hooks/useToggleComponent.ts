import { useState } from "react"
export default function useToggleComponent() {
  const [visibility, setVisibility] = useState<"table" | "form">("table")

  const showTable = () => setVisibility("table")
  const showForm = () => setVisibility("form")

  return {
    formVisible: visibility === "form",
    tableVisible: visibility === "table",
    showTable,
    showForm,
  }
}
