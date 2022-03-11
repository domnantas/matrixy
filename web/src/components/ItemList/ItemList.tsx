import { useForm, Form, TextField, Submit } from '@redwoodjs/forms'
import { useEffect, useState } from 'react'
import Card from 'src/components/Card'
import { yItems } from 'src/y'

const ItemList = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    yItems.observe(() => {
      setItems(yItems.toArray())
    })
  }, [])

  const onSubmit = ({ itemName }) => {
    yItems.push([itemName])
    formMethods.reset()
  }

  const onRemove = (itemIndex) => {
    yItems.delete(itemIndex)
  }

  const formMethods = useForm()
  return (
    <>
      {items.map((item, index) => (
        <Card
          key={index}
          className="flex justify-between w-full cursor-pointer"
        >
          <h3 className="text-xl mr-4">{item}</h3>
          <button onClick={() => onRemove(index)}>✕</button>
        </Card>
      ))}
      <Form
        onSubmit={onSubmit}
        className="flex flex-wrap flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4"
        formMethods={formMethods}
      >
        <TextField
          name="itemName"
          validation={{ required: true }}
          className="border border-gray-500 rounded-md flex-auto px-4 py-2"
          errorClassName="border border-red-500 rounded-md flex-auto px-4 py-2"
        />
        <Submit className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded flex-auto">
          + Add
        </Submit>
      </Form>
    </>
  )
}

export default ItemList
