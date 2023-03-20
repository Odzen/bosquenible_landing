import { useEffect, useState } from 'react'

import pageWidth from '../constants/pageWidth'

type WindowDimensions = {
  width: number | undefined
  height: number | undefined
  size: keyof ScreenSize | undefined
}

const useWindowDimensions = (): WindowDimensions => {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({
    width: undefined,
    height: undefined,
    size: undefined
  })
  useEffect(() => {
    function handleResize() {
      const width = document.documentElement.clientWidth
      let size
      if (width < pageWidth.phone) {
        size = 'smallPhone'
      } else if (width < pageWidth.smallScreen) {
        size = 'phone'
      } else if (width < pageWidth.screen) {
        size = 'smallScreen'
      } else if (width < pageWidth.bigScreen) {
        size = 'screen'
      } else {
        size = 'bigScreen'
      }
      setWindowDimensions({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
        size: size as keyof ScreenSize | undefined
      })
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowDimensions
}

export default useWindowDimensions
