import { MetaTags } from '@redwoodjs/web'
import MatrixCanvas from 'src/components/MatrixCanvas'
import Modal from 'src/components/Modal'
import Sidebar from 'src/components/Sidebar'
import ItemList from 'src/components/ItemList'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <div className="h-screen flex max-w-6xl mx-auto">
        <Sidebar className="hidden space-y-4 md:block">
          <ItemList />
        </Sidebar>
        <MatrixCanvas />
      </div>
      <Modal className="md:hidden space-y-4 flex flex-col items-center">
        <ItemList />
      </Modal>
    </>
  )
}

export default HomePage
