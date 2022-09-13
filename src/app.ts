export function sumTwoNumbers(a: number, b: number) {
  return a + b;
}

export function statusCodes(value: boolean) {
  if (value) {
    return {
      status: 200,
    };
  }
  return {
    status: 404,
  };
}

interface Item {
  total: number;
}

export function sumAllTotal(arr: Item[]) {
  return arr.reduce((acc, curr) => acc + curr.total, 0);
}

//export { sumTwoNumbers, sumAllTotal, statusCodes };
