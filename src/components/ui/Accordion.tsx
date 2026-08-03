import { useState, type ReactNode } from 'react'

export interface AccordionItemProps {
  title: ReactNode
  children: ReactNode
  defaultOpen?: boolean
}

/**
 * AccordionItem — collapsible FAQ / detail card using design system glass styling.
 * Accessible with aria-expanded and keyboard focus states.
 */
export function AccordionItem({ title, children, defaultOpen = false }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="bg-[rgba(22,27,34,0.7)] backdrop-blur-xl rounded-2xl border border-white/5 overflow-hidden transition-all">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className="w-full flex justify-between items-center p-6 text-left font-bold text-[#e8dfee] hover:text-white cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED]"
      >
        <span>{title}</span>
        <span
          className={`material-symbols-outlined transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-[#7C3AED]' : 'text-[#ccc3d8]'
          }`}
          aria-hidden="true"
        >
          expand_more
        </span>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-[#ccc3d8] text-base leading-relaxed animate-fade-in">
          {children}
        </div>
      )}
    </div>
  )
}
