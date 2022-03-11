import { FC, HTMLAttributes } from 'react'

const Card: FC<HTMLAttributes<HTMLElement>> = ({ children, className }) => {
  return (
    <div
      className={`bg-white max-w-sm p-4 rounded-md border border-gray-200 shadow-md ${className}`}
    >
      {children}
    </div>
  )
}

export default Card
