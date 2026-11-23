/** Ícones SVG inline (traço), sem dependências externas. */
const paths = {
  cart: 'M3 3h2l2.4 12.2a2 2 0 0 0 2 1.6h8.2a2 2 0 0 0 2-1.5L21 8H6 M10 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2z M18 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2z',
  menu: 'M4 6h16 M4 12h16 M4 18h16',
  close: 'M6 6l12 12 M18 6L6 18',
  search: 'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z M21 21l-4.3-4.3',
  truck: 'M1 4h14v12H1z M15 9h4l3 3v4h-7 M6 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4z M18 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
  wrench: 'M14.7 6.3a4 4 0 0 0-5.4 5.2L3 17.8V21h3.2l6.3-6.3a4 4 0 0 0 5.2-5.4l-2.6 2.6-2.5-.5-.5-2.5z',
  card: 'M2 5h20v14H2z M2 10h20 M6 15h4',
  shield: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z M9 12l2 2 4-4',
  plus: 'M12 5v14 M5 12h14',
  minus: 'M5 12h14',
  trash: 'M3 6h18 M8 6V4h8v2 M19 6l-1 14H6L5 6 M10 11v6 M14 11v6',
  check: 'M20 6L9 17l-5-5',
  arrowRight: 'M5 12h14 M13 6l6 6-6 6',
  pin: 'M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z M12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
  phone: 'M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z',
  clock: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z M12 6v6l4 2',
  mail: 'M3 5h18v14H3z M3 6l9 7 9-7',
  bike: 'M5.5 18a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z M18.5 18a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z M5.5 14.5L9 8h6l3.5 6.5 M9 8l3.5 6.5H5.5 M12.5 14.5L15 8 M8 5h3',
}

export default function Icon({ name, size = 20, strokeWidth = 2, className = '', ...rest }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...rest}
    >
      {paths[name]?.split(' M').map((d, i) => (
        <path key={i} d={i === 0 ? d : `M${d}`} />
      ))}
    </svg>
  )
}
