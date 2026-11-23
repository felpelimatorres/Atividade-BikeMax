import { useEffect } from 'react'

/**
 * Comportamentos comuns a modais e gavetas: fecha com Esc e
 * trava a rolagem da página enquanto está aberto.
 */
export function useOverlay(isOpen, onClose) {
  useEffect(() => {
    if (!isOpen) return undefined

    const handleKey = (event) => {
      if (event.key === 'Escape') onClose()
    }
    const previousOverflow = document.body.style.overflow

    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen, onClose])
}
