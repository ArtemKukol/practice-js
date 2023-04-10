const surfaceAreaCalculator = (radius) => {
   return 4 * 3.14 * radius * radius;
};

const surfaceOfMars = surfaceAreaCalculator(3390);

console.log(surfaceOfMars.toLocaleString());