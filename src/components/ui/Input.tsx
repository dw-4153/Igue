import { useId } from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

const inputClasses = 'w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-200'

export function Input({ label, id, className = '', ...props }: InputProps) {
  const reactId = useId()
  const inputId = id ?? reactId
  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium text-slate-700">
          {label}
        </label>
      )}
      <input id={inputId} className={`${inputClasses} ${className}`} {...props} />
    </div>
  )
}
