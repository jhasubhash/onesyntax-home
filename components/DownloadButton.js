// Stands in for CopyCommand when an app is installed from a download rather than Homebrew.
export default function DownloadButton({ href, label, note }) {
  return (
    <a className="cmd dl" href={href} target="_blank" rel="noopener noreferrer">
      <span className="prompt">↓</span>
      <code>{label}</code>
      {note && <span className="copy">{note}</span>}
    </a>
  )
}
