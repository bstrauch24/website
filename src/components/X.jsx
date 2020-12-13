export default function X({ color }) {
  return (
    <svg viewBox="0 0 100 100">
      <line x1="20" y1="20" x2="80" y2="80" stroke={color} strokeWidth="4" />
      <line x1="80" y1="20" x2="20" y2="80" stroke={color} strokeWidth="4" />
    </svg>
  )
}
