export const numWithPx = (num: number) => {
  return `${num}px`;
};

// Function for calculating distance between two point
export const calculateDistance = (
  x: number,
  y: number,
  x0: number,
  y0: number
) => {
  return Math.sqrt((x -= x0) * x + (y -= y0) * y);
};

// Function for calculating angel between two point
export const calculateAngel = (
  x: number,
  y: number,
  x0: number,
  y0: number
) => {
  return (Math.atan2(y0 - y, x0 - x) * 180) / Math.PI;
};

// Function for calculating intersect
// Thank you stackoverflow
export const calculateIsIntersect = (
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  x3: number,
  y3: number,
  x4: number,
  y4: number
) => {
  // Check if none of the lines are of length 0
  if ((x1 === x2 && y1 === y2) || (x3 === x4 && y3 === y4)) {
    return false;
  }

  let denominator = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);

  // Lines are parallel
  if (denominator === 0) {
    return false;
  }

  let ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denominator;
  let ub = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / denominator;

  // is the intersection along the segments
  if (ua < 0 || ua > 1 || ub < 0 || ub > 1) {
    return false;
  }

  // Return a object with the x and y coordinates of the intersection
  let x = x1 + ua * (x2 - x1);
  let y = y1 + ua * (y2 - y1);

  return { x, y };
};
