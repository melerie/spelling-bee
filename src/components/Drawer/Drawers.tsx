import { createPortal } from 'react-dom'
import { useDrawer } from '../../context'
import { Fragment } from 'react'

export const Drawers = () => {
  const { drawers } = useDrawer()

  const drawersReorder = drawers.sort((a, b) => {
    const aIndex = a.props.index
    const bIndex = b.props.index

    if (aIndex < bIndex) {
      return -1
    }
    if (aIndex > bIndex) {
      return 1
    }
    return 0
  })

  return createPortal(
    <>
      {drawersReorder.map((drawer, index) => (
        <Fragment key={`drawer-${index}`}>{drawer}</Fragment>
      ))}
    </>,
    document.body
  )
}
