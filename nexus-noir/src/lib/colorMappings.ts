// colorMappings.ts

/** 
 * For coding activity: GitHub-like green shades 
 * 0 => none, 1 => darkest, 4 => brightest
 */
export function codingGreen(intensity: number) {
  switch (intensity) {
    case 1:
      return 'bg-[#0e4429]'; // darkest green
    case 2:
      return 'bg-[#006d32]'; // medium dark
    case 3:
      return 'bg-[#26a641]'; // medium bright
    case 4:
      return 'bg-[#39d353]'; // brightest green
    default:
      return 'bg-[#161b22]'; // no activity
  }
}

/**
 * For workouts: Shades of blue 
 * 0 => none, 1 => darkest, 4 => brightest
 */
export function workoutsBlue(intensity: number) {
  switch (intensity) {
    case 1:
      return 'bg-[#0c2a46]'; // darkest navy
    case 2:
      return 'bg-[#003e75]'; // medium dark blue
    case 3:
      return 'bg-[#0066cc]'; // medium bright
    case 4:
      return 'bg-[#3399ff]'; // brightest blue
    default:
      return 'bg-[#161b22]'; // no activity
  }
}

/**
 * For reading: Shades of red 
 * 0 => none, 1 => darkest, 4 => brightest
 */
export function readingRed(intensity: number) {
  switch (intensity) {
    case 1:
      return 'bg-[#450e0e]'; // darkest red
    case 2:
      return 'bg-[#750000]'; // medium dark
    case 3:
      return 'bg-[#a63b2f]'; // medium bright
    case 4:
      return 'bg-[#d32f2f]'; // brightest red
    default:
      return 'bg-[#161b22]'; // no activity
  }
}

/**
 * For calorie deficits: Shades of purple 
 * 0 => none, 1 => darkest, 4 => brightest
 */
export function caloriePurple(intensity: number) {
  switch (intensity) {
    case 1:
      return 'bg-[#3f007d]'; // darkest purple
    case 2:
      return 'bg-[#6a0dad]'; // medium dark purple
    case 3:
      return 'bg-[#8e2de2]'; // medium bright purple
    case 4:
      return 'bg-[#c471ed]'; // brightest purple
    default:
      return 'bg-[#161b22]'; // no deficit
  }
}
