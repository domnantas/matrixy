import { MetaTags } from '@redwoodjs/web'
import { useState, useEffect, useRef } from 'react'
import { Stage, Layer, Line } from 'react-konva'

const HomePage = () => {
  const konvaContainerRef = useRef(null)

  const useObserveSize = (elementRef) => {
    const [size, setSize] = useState({
      width: undefined,
      height: undefined,
    })
    useEffect(() => {
      const observer = new ResizeObserver(() => {
        setSize({
          width: elementRef.current.offsetWidth,
          height: elementRef.current.offsetHeight,
        })
      })
      observer.observe(elementRef.current)

      return () => observer.disconnect()
    }, [elementRef])

    return size
  }

  const konvaSize = useObserveSize(konvaContainerRef)

  const axisPadding = 40

  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <div className="h-screen flex max-w-6xl mx-auto">
        <aside className="hidden bg-white border border-gray-300 shadow-md m-4 rounded-lg w-96 p-8 space-y-4 md:block flex-shrink-0">
          <div className="bg-gray-100 p-4 rounded-md text-gray-800">Card</div>
          <div className="bg-gray-100 p-4 rounded-md text-gray-800">Card</div>
          <div className="bg-gray-100 p-4 rounded-md text-gray-800">Card</div>
        </aside>
        <div ref={konvaContainerRef} className="flex-auto relative">
          {konvaSize.width && konvaSize.height && (
            <Stage
              width={konvaSize.width}
              height={konvaSize.height}
              className="absolute"
            >
              <Layer>
                <Line
                  points={[
                    konvaSize.width / 2,
                    axisPadding,
                    konvaSize.width / 2,
                    konvaSize.height - axisPadding,
                  ]}
                  stroke="black"
                />
                <Line
                  points={[
                    axisPadding,
                    konvaSize.height / 2,
                    konvaSize.width - axisPadding,
                    konvaSize.height / 2,
                  ]}
                  stroke="black"
                />
              </Layer>
            </Stage>
          )}
        </div>
      </div>
      <div className="fixed inset-0 bg-white border border-gray-300 shadow-md m-8 rounded-lg p-8 space-y-4 md:hidden">
        <div className="bg-gray-100 p-4 rounded-md text-gray-800">Card</div>
        <div className="bg-gray-100 p-4 rounded-md text-gray-800">Card</div>
        <div className="bg-gray-100 p-4 rounded-md text-gray-800">Card</div>
      </div>
    </>
  )
}

export default HomePage
