import { MetaTags } from '@redwoodjs/web'
import Card from 'src/components/Card'
import MatrixCanvas from 'src/components/MatrixCanvas'
import Modal from 'src/components/Modal'
import Sidebar from 'src/components/Sidebar'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <div className="h-screen flex max-w-6xl mx-auto">
        <Sidebar className="hidden space-y-4 md:block">
          <Card>Card</Card>
          <Card>Card</Card>
          <Card>Card</Card>
        </Sidebar>
        <MatrixCanvas />
      </div>
      <Modal className="md:hidden space-y-4 flex flex-col items-center">
        <Card>Card</Card>
        <Card>Card</Card>
        <Card>Card</Card>
      </Modal>
    </>
  )
}

export default HomePage
