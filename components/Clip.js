import AutoVideo from './AutoVideo'

export default function Clip({ base, label, size = [960, 576] }) {
  return (
    <div className="clip">
      <AutoVideo src={`${base}.mp4`} poster={`${base}.jpg`} label={label} w={size[0]} h={size[1]} />
    </div>
  )
}
