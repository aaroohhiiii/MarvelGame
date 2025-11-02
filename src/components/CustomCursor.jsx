import { useEffect } from 'react'

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.createElement('div')
    cursor.className = 'custom-cursor'
    document.body.appendChild(cursor)

    const moveCursor = (e) => {
      cursor.style.left = e.clientX - 10 + 'px'
      cursor.style.top = e.clientY - 10 + 'px'
    }

    const addClickEffect = () => {
      cursor.classList.add('clicked')
      setTimeout(() => {
        cursor.classList.remove('clicked')
      }, 200)
    }

    document.addEventListener('mousemove', moveCursor)
    document.addEventListener('click', addClickEffect)

    return () => {
      document.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('click', addClickEffect)
      if (cursor && cursor.parentNode) {
        cursor.parentNode.removeChild(cursor)
      }
    }
  }, [])

  return null
}

export default CustomCursor