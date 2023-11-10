let sales: number = 1234467737;
let course = "Typescript";
let is_published = true;
let namre = "hi";
let bickBick;

function render(document: any) {
  console.log(document);
}

// arrays in typescript
let numbers: number[] = [1, 2, 3];
//tuples
let person: [number, string] = [1, "Doe"];
//enum
enum Size {
  small = 1,
  medium,
  large,
}
let mySize: Size = Size.medium;
console.log(mySize);

function calculateSoemething(income: number, taxYear: number): number {
  if (taxYear < 2023) return income * 1.2;
  console.log(income);
  return income;
}
calculateSoemething(10000, 2022);
