describe("FizzBuzz", function() {

  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new FizzBuzz();
  });

  describe("Know when a number is", function() {

    it("divisible by 3", function() {
      expect(fizzbuzz.isDivisibleByThree(3, 3)).toBe(true);
    });
    it("divisible by 5", function() {
      expect(fizzbuzz.isDivisibleByFive(15, 5)).toBe(true);
    });
    it("divisible by 15", function() {
      expect(fizzbuzz.isDivisibleByFifteen(45, 15)).toBe(true);
    });
  });

  describe("Know when a number is NOT", function() {

    it("divisible by 3", function() {
      expect(fizzbuzz.isDivisibleByThree(1, 3)).toBe(false);
    });
    it("divisible by 5", function() {
      expect(fizzbuzz.isDivisibleByFive(1, 5)).toBe(false);
    });
    it("divisible by 15", function() {
      expect(fizzbuzz.isDivisibleByFifteen(27, 15)).toBe(false);
    });
  });

  describe("When playing, says", function() {

    it("'Fizz' when a number is divisible by 3", function() {
      expect(fizzbuzz.says(3)).toEqual("Fizz");
    });
    it("'Buzz' when a number is divisible by 5", function() {
      expect(fizzbuzz.says(5)).toEqual("Buzz");
    });
    it("'FizzBuzz' when a number is divisible by 15", function() {
      expect(fizzbuzz.says(15)).toEqual("FizzBuzz");
    });
  });
});
