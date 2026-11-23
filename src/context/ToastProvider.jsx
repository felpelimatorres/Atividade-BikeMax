import { useCallback, useMemo, useRef, useState } from 'react'
import { ToastContext } from './contexts.js'
import Toast from '../components/ui/Toast.jsx'

const DURATION_MS = 2800

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])
  const nextId = useRef(0)

  const dismiss = useCallback((id) => {
    setToasts((current) => current.filter((t) => t.id !== id))
  }, [])

  const showToast = useCallback(
    (message, variant = 'success') => {
      const id = ++nextId.current
      setToasts((current) => [...current, { id, message, variant }])
      setTimeout(() => dismiss(id), DURATION_MS)
    },
    [dismiss]
  )

  const value = useMemo(() => ({ showToast }), [showToast])

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="toast-region" role="status" aria-live="polite">
        {toasts.map((t) => (
          <Toast key={t.id} {...t} onClose={() => dismiss(t.id)} />
        ))}
      </div>
    </ToastContext.Provider>
  )
}
