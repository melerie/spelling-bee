import { useEffect } from 'react'
import { useDrawer } from '../../context'
import { WordList } from './WordList'

export const DrawerMenus = () => {
  const { addDrawer } = useDrawer()

  useEffect(() => {
    addDrawer({
      title: 'Word list',
      children: <WordList />,
      buttonText: 'Word list',
      index: 0,
    })
  }, [addDrawer])

  return <></>
}
