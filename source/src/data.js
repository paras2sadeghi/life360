// Life360 "Circle explorer" — same shape as the longevity biomarker data.
const PIN = 'M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21zM12 7a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z'
const CAR = 'M3 13h18v4H3zM6 13l2-5h8l2 5M7 17v2M17 17v2'
const SOS = 'M7 18v-6a5 5 0 0 1 10 0v6M5 18h14M12 3v2M4.5 6.5l1.4 1.4M19.5 6.5l-1.4 1.4'
const LOCK = 'M6 11V8a6 6 0 0 1 12 0v3M5 11h14v10H5zM12 15v2'
const TAG = 'M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM12 9.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z'
const PAW = 'M12 13c-3 0-5 2.5-5 4.5S9 20 12 20s5-.5 5-2.5-2-4.5-5-4.5zM6 9.5a1.8 2.2 0 1 0 0 .01M18 9.5a1.8 2.2 0 1 0 0 .01M9.5 6a1.8 2.2 0 1 0 0 .01M14.5 6a1.8 2.2 0 1 0 0 .01'

export const SYS = [
  { name: 'Location', sub: 'Places & arrivals', icon: PIN, cards: [
    { n: 'Maya', s: 'Arrived at Lincoln High.', v: '8:02', u: 'am', tag: 'Arrived', spark: [3, 5, 6, 8, 9] },
    { n: 'Leo', s: 'Left practice, heading home.', v: '12', u: 'min away', tag: 'On the way', spark: [9, 8, 6, 4, 3] },
    { n: 'Sara', s: 'At home since 5:40 pm.', v: '5:40', u: 'pm', tag: 'Home', spark: [5, 5, 6, 5, 5] },
    { n: 'Place Alerts', s: "School, practice, home and Grandma's.", v: '4', u: 'places', tag: 'All set', spark: [2, 3, 3, 4, 4] },
  ]},
  { name: 'Driving', sub: 'Every trip', icon: CAR, cards: [
    { n: "Leo's week", s: 'Drives this week, all arrived safely.', v: '12', u: 'drives', tag: 'Safe', spark: [6, 8, 7, 9, 12] },
    { n: 'Top speed', s: 'Highest speed this week, on Oak St.', v: '62', u: 'km/h', tag: 'Within limit', spark: [7, 6, 7, 6, 6] },
    { n: 'Phone use', s: 'Minutes on the phone while driving.', v: '3', u: 'min', warn: 1, tag: 'Worth a chat', spark: [1, 1, 2, 2, 3] },
    { n: 'Hard braking', s: 'Sudden stops, down from last week.', v: '1', u: 'event', tag: 'Improving', spark: [5, 4, 3, 2, 1] },
  ]},
  { name: 'Emergencies', sub: 'Help, fast', icon: SOS, cards: [
    { n: 'Crash Detection', s: 'Watching every drive for impacts.', v: 'On', u: '24/7', tag: 'Active', spark: [5, 5, 5, 5, 5] },
    { n: 'SOS', s: 'One press alerts your Circle and help.', v: '1', u: 'tap', tag: 'Ready', spark: [4, 4, 5, 5, 5] },
    { n: 'Roadside', s: 'Flat tire or dead battery? We send help.', v: '24/7', u: 'support', tag: 'Covered', spark: [5, 6, 5, 6, 6] },
    { n: 'Emergency Dispatch', s: 'Ambulances dispatched every day.', v: '100+', u: 'per day', tag: 'Live', spark: [6, 7, 8, 8, 9] },
  ]},
  { name: 'Digital safety', sub: 'Identity & data', icon: LOCK, cards: [
    { n: 'Breach alerts', s: 'Family emails checked against new leaks.', v: '0', u: 'new leaks', tag: 'Clear', spark: [3, 2, 2, 1, 1] },
    { n: 'Monitored', s: 'Emails and phone numbers we watch.', v: '6', u: 'accounts', tag: 'Watching', spark: [3, 4, 5, 6, 6] },
    { n: 'Old password', s: 'Found in a 2021 breach. Time to change it.', v: '1', u: 'alert', warn: 1, tag: 'Needs a look', spark: [0, 0, 1, 1, 1] },
    { n: 'ID theft cover', s: 'Recovery costs covered on Platinum.', v: '$1M', u: 'USD', tag: 'Platinum', spark: [5, 5, 5, 5, 5] },
  ]},
  { name: 'Things', sub: 'Tile trackers', icon: TAG, cards: [
    { n: 'Keys', s: 'By the front door.', v: '2', u: 'm away', tag: 'Found', spark: [9, 7, 5, 3, 2] },
    { n: 'Backpack', s: "Maya's, at Lincoln High.", v: '1.2', u: 'km', tag: 'With Maya', spark: [3, 5, 6, 6, 6] },
    { n: 'Wallet', s: 'Left at the café. Smart Alert sent.', v: '0.3', u: 'km behind', warn: 1, tag: 'Left behind', spark: [1, 1, 2, 3, 4] },
    { n: 'Headphones', s: "Leo's, last seen at practice.", v: '3:40', u: 'pm', tag: 'Last seen', spark: [5, 5, 4, 4, 4] },
  ]},
  { name: 'Pets', sub: 'Pet GPS', icon: PAW, cards: [
    { n: 'Biscuit', s: 'In the backyard, inside the safe zone.', v: 'Home', u: 'safe zone', tag: 'Home', spark: [5, 5, 5, 5, 5] },
    { n: 'Walks', s: 'Distance walked this week.', v: '14', u: 'km', tag: 'Active', spark: [2, 4, 5, 7, 9] },
    { n: 'Battery', s: 'Pet GPS lasts up to 14 days.', v: '82', u: '%', tag: 'Charged', spark: [9, 8, 8, 7, 7] },
    { n: 'Escape alert', s: 'Instant alert if Biscuit leaves the yard.', v: 'On', u: 'alert', tag: 'Ready', spark: [4, 4, 4, 4, 4] },
  ]},
]

export function sparkPath(vals){
  const w=180,h=32,max=Math.max(...vals),min=Math.min(...vals),rng=(max-min)||1
  const pts=vals.map((v,i)=>[8+i*(w-16)/(vals.length-1),h-4-((v-min)/rng)*(h-9)])
  return { d: pts.map((p,i)=>(i?'L':'M')+p[0].toFixed(1)+' '+p[1].toFixed(1)).join(' '), last: pts[pts.length-1] }
}
