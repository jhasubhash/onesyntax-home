import { useState } from 'react'

export default function CopyCommand({ command }) {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(command)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch (e) {}
  }
  return (
    <button className="cmd" onClick={copy} aria-label={`Copy ${command}`}>
      <span className="prompt">$</span>
      <code>{command}</code>
      <span className="copy">{copied ? 'Copied' : 'Copy'}</span>
    </button>
  )
}
