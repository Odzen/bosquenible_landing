import { useState, useEffect, useRef, RefObject } from 'react'

const useVisibility = <Element extends HTMLElement>(offset = 0): [boolean, RefObject<Element>] => {
  const [isVisible, setIsVisible] = useState(false)
  const currentElement = useRef<Element>(null)

  const onScroll = () => {
    if (!currentElement.current) {
      setIsVisible(false)
      return
    }

    const { top } = currentElement.current.getBoundingClientRect()
    const visible = top + offset >= 0 && top - offset <= window.innerHeight
    if (!isVisible && visible) {
      setIsVisible(true)
      document.removeEventListener('scroll', onScroll, true)
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', onScroll, true)
    return () => document.removeEventListener('scroll', onScroll, true)
  }, [])

  return [isVisible, currentElement]
}

export default useVisibility
