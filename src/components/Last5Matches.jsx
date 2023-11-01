import { Form } from "."

export const Last5Matches = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap gap-6 items-center justify-center">
        <Form localidad="local"/>
        <Form localidad="visitante"/>
    </div>
  )
}
