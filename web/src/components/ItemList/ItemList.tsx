import { useForm, Form, TextField, Submit } from '@redwoodjs/forms'
import { useState } from 'react'
import Card from 'src/components/Card'


const ItemList = () => {
  const [items, setItems] = useState([])

  const onSubmit = ({ itemName }) => {
    setItems([...items, itemName])
    formMethods.reset()
  }

  const formMethods = useForm()
  return (
    <>
      {items.map((item, index) => (
        <Card key={index}>
          <h3 className="text-xl">{item}</h3>
        </Card>
      ))}
      <Form
        onSubmit={onSubmit}
        className="flex space-x-4"
        formMethods={formMethods}
      >
        <TextField
          name="itemName"
          validation={{ required: true }}
          className="border border-gray-500 rounded-md flex-auto px-4"
          errorClassName="border border-red-500 rounded-md flex-auto px-4"
        />
        <Submit className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
          + Add
        </Submit>
      </Form>
    </>
  )
}

export default ItemList
