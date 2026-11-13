import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import App from './App.jsx'

// Test-only: ?noanim shows every section without its entrance animation (for screenshots),
// &y=1234 jumps to a scroll position. Normal visitors never hit this.
const q = new URLSearchParams(location.search)
if (q.has('noanim')) {
  const st = document.createElement('style')
  st.textContent = '[style*="opacity: 0"]{opacity:1!important;transform:none!important}' +
    // unpin scroll-driven sections so a single tall capture shows everything
    'section[style*="vh"]{height:auto!important;min-height:0!important}' +
    '#root>section:first-of-type{min-height:900px!important}' +
    'div[style*="sticky"]{position:static!important;height:auto!important;padding:80px 0!important}'
  document.head.appendChild(st)
}
if (q.has('y')) setTimeout(() => window.scrollTo(0, +q.get('y')), 900)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode><App /></React.StrictMode>
)
