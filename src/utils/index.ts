export const getCoordinatesByAngle = (angle: number, radius = 160) => ({
  x: -radius * Math.sin(angle),
  y: radius * Math.cos(angle),
})
