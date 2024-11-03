import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Provider = ({ children }: Props) => {
  return <div>{children}</div>
}

export default Provider
