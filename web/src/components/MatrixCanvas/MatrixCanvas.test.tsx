import { render } from '@redwoodjs/testing/web'

import MatrixCanvas from './MatrixCanvas'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MatrixCanvas', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MatrixCanvas />)
    }).not.toThrow()
  })
})
