/**
 * Note: All function will accept unlimited number of arguments.
 * Return sum of numbers
 */

export const sum = (...args: any[]): number => {
  if (args.length === 0) return 0;
  return args.reduce((acc, num) => acc + num, 0);
};

/**
 * Return substraction
 */

export const subtract = (...args: number[]): number => {
  if (args.length === 0) return 0;
  const [first = 0, ...rest] = args; // Default to 0 if args is empty

  return rest.reduce((acc, num) => acc - num, first);
};

/**
 * Return multiplication
 */

export const multiplication = (...args: number[]): number => {
  if (args.length === 0) return 0;
  if (args.length === 0) return 1;
  return args.reduce((acc, num) => acc * num, 1);
};

/**
 * Return division
 */

export const divide = (...args: number[]): number => {
  const [first = 1, ...rest] = args; // Start with the first element as initial value
  return rest.reduce((acc, num) => (num !== 0 ? acc / num : acc), first);
};

// TODO : Add more math operations
