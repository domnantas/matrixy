import { Stage, Layer, Line } from 'react-konva'
import useResizeObserver from '@react-hook/resize-observer'
import { useRef } from 'react'

const useElementSize = (target) => {
  const [size, setSize] = React.useState<DOMRect>()

  React.useLayoutEffect(() => {
    setSize(target.current.getBoundingClientRect())
  }, [target])

  useResizeObserver(target, (entry) => setSize(entry.contentRect))
  return size
}

const MatrixCanvas = () => {
  const konvaContainerRef = useRef(null)
  const konvaContainerSize = useElementSize(konvaContainerRef)
  const axisPadding = 40

  return (
    <div ref={konvaContainerRef} className="flex-auto relative">
      {konvaContainerSize && (
        <Stage
          width={konvaContainerSize.width}
          height={konvaContainerSize.height}
          className="absolute"
        >
          <Layer>
            <Line
              points={[
                konvaContainerSize.width / 2,
                axisPadding,
                konvaContainerSize.width / 2,
                konvaContainerSize.height - axisPadding,
              ]}
              stroke="black"
            />
            <Line
              points={[
                axisPadding,
                konvaContainerSize.height / 2,
                konvaContainerSize.width - axisPadding,
                konvaContainerSize.height / 2,
              ]}
              stroke="black"
            />
          </Layer>
        </Stage>
      )}
    </div>
  )
}

export default MatrixCanvas
