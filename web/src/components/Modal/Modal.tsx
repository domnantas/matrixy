import { FC, HTMLAttributes } from 'react'

const Modal: FC<HTMLAttributes<HTMLElement>> = ({ children, className }) => {
  return (
    <div
      className={`fixed inset-0 bg-white border border-gray-200 shadow-md m-8 rounded-lg p-6 ${className}`}
    >
      {children}
    </div>
  )
}

export default Modal
