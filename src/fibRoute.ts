// Endpoint for querying the fibonacci numbers
import { Request, Response } from 'express';

import rawFibonacci from './fib';
const fibonacci = rawFibonacci as unknown as (n: number) => number;

export default (req: Request, res: Response): Response | void => {
  const { num } = req.params;

  if (!num || isNaN(parseInt(num))) {
    return res.status(400).send("Please provide a valid route parameter.");
  }

  const parsedNum = parseInt(num);
  
  const fibN = fibonacci(parsedNum);
  
  let result = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};
