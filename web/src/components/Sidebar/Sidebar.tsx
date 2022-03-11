import { FC, HTMLAttributes } from 'react'

const Sidebar: FC<HTMLAttributes<HTMLElement>> = ({ children, className }) => {
  return (
    <aside
      className={`w-96 bg-white border border-gray-200 shadow-md m-4 rounded-lg p-6 flex-shrink-0 overflow-auto ${className}`}
    >
      {children}
    </aside>
  )
}

export default Sidebar
