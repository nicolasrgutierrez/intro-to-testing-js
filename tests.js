// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function() {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Nick" when executed', function() {
        expect(sayHello("Nick")).toBe("Hello, Nick");
    });
    it('should return the string "Hello, Alex" when executed', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex");
    });
    it('should return the string "Hello, Travis" when executed', function() {
        expect(sayHello("Travis")).toBe("Hello, Travis");
    });
    it('should return the string "Hello, World" when executed', function() {
        expect(sayHello("World")).toBe("Hello, World");
    });
    it('should return the string "Hello, World" when executed', function() {
        expect(sayHello(true)).toBe("Hello, World");
    });
    it('should return the string "Hello, World" when executed', function() {
        expect(sayHello(false)).toBe("Hello, World");
    });
});