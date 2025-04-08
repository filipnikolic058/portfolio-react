export default function Background() {
  const lines = [
    ["1.15514", "2860.52", "1441.16", "3330.52"],
    ["1.1149", "3285.51", "1441.11", "3625.51"],
    ["1.15514", "4870.52", "1441.16", "5340.52"],
    ["1.1149", "5295.51", "1441.11", "5635.51"],
    ["0.851467", "5905.52", "1440.85", "5457.52"],
    ["0.883505", "4708.51", "1440.88", "4363.51"],
    ["1.13227", "4141.52", "1441.13", "4536.52"],
    ["0.862463", "5195.52", "1440.86", "4783.52"],
    ["0.851467", "3895.52", "1440.85", "3447.52"],
    ["0.883505", "2698.51", "1440.88", "2353.51"],
    ["1.13227", "2131.52", "1441.13", "2526.52"],
    ["0.862463", "3185.52", "1440.86", "2773.52"],
    ["1.15514", "850.525", "1441.16", "1320.52"],
    ["1.1149", "1275.51", "1441.11", "1615.51"],
    ["0.851467", "1885.52", "1440.85", "1437.52"],
    ["0.883505", "688.514", "1440.88", "343.514"],
    ["1.13227", "121.518", "1441.13", "516.518"],
    ["0.862463", "1175.52", "1440.86", "763.519"],
  ];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="auto"
      viewBox="0 0 1442 6074"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      <rect x="1" width="1440" height="6074" fill="#222222" />

      <defs>
        {lines.map(([x1, y1, x2, y2], i) => (
          <path
            key={i}
            id={`path-${i}`}
            d={`M${x1},${y1} L${x2},${y2}`}
            fill="none"
            stroke="none"
          />
        ))}
      </defs>

      {lines.map(([x1, y1, x2, y2], i) => (
        <g key={i}>
          {/* Static grey background line */}
          <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#404040" />

          {/* Animated white line matching angle */}
          <rect width="100" height="1" rx="1" fill="#999999">
            <animateMotion dur="12s" repeatCount="indefinite" rotate="auto">
              <mpath xlinkHref={`#path-${i}`} />
            </animateMotion>
          </rect>
        </g>
      ))}
    </svg>
  );
}
