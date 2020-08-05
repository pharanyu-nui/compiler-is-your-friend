/*
Question #2: Immutability

The function below is a "safe divide" function. That is, it promises not to throw any "divide by zero" exceptions.

Questions:
1) Spot and describe the cause of the bug that causes the "divide by zero" to occur.
  - variable x is changed after process for checking whether x is zero or not.

2) Now, make a *single* code change on line 14:
2.1) without changing the number 42;
  - change from 'let' to 'const' to prevent changing value of x.

2.2) such that cause of the bug can be spotted by the compiler at *compile time*.
  - When compile will error because of x is constant value, but code at line 24 is chang value of x.

3) What did you learn from this exercise?
  - How to define whether the value of variable can be changed or not.

*/
function safeDivide(): number {
    const x: number = 42;

    if (x == 0) throw new Error("x should not be 0");

    x = x - 42;

    return 42 / x;
}
