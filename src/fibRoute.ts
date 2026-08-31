// Endpoint for querying the fibonacci numbers

import { Response } from "express";
import { Request } from "express-serve-static-core";

type Fibonacci = (n: number) => number;

const fibonacci = module.require("./fib") as Fibonacci;

export default (req: Request<{ num: string }>, res: Response): void => {
  const { num } = req.params;

  const fibN = fibonacci(parseInt(num, 10));
  let result = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};
