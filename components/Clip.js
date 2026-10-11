import AutoVideo from './AutoVideo'

export default function Clip({ base, label }) {
  return (
    <div className="clip">
      <AutoVideo src={`${base}.mp4`} poster={`${base}.jpg`} label={label} w={960} h={576} />
    </div>
  )
}
