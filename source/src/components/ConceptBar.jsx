export default function ConceptBar() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: 34, zIndex: 80, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
      background: '#1A1430', color: '#fff', fontSize: 12.5, padding: '0 12px', whiteSpace: 'nowrap', overflow: 'hidden' }}>
      <span style={{ opacity: .8, overflow: 'hidden', textOverflow: 'ellipsis' }}>Concept by Parastoo Sadeghi · not affiliated with Life360</span>
      <a href="case-study/" style={{ color: '#FFC21A', fontWeight: 600 }}>Case study →</a>
    </div>
  )
}
