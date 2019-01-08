import createEnum from '..';

describe('Test regular enum', () => {
   let fruitEnum = null;

   beforeAll(() => {
      fruitEnum = createEnum('APPLE', "ORANGE", "PEAR");
   });

   test("Make sure enum values are as expected", () => {
      expect(fruitEnum.APPLE).toBe("APPLE");
      expect(fruitEnum.ORANGE).toBe("ORANGE");
      expect(fruitEnum.PEAR).toBe("PEAR");
   });

   test("Make sure enum object is frozen", () => {
      expect(Object.isFrozen(fruitEnum)).toBe(true);
   });

   test("Try to change a property value", () => {
      expect(() => fruitEnum.PEAR = "truck").toThrow();
   });

   test("Try to delete a property from enum", () => {
      expect(() => delete fruitEnum.APPLE).toThrow();
   });

   test("Try to add property to enum", () => {
      expect(() => fruitEnum.TOMATO = "TOMATO").toThrow();
   });
});

describe('Test duplicate arguments', () => {
   test("Try duplicate arguments", () => {
      let fruitEnum = createEnum("APPLE", "ORANGE", "PEAR", "PEAR", "ORANGE", "APPLE");
      expect(Object.keys(fruitEnum).length).toBe(3);
      expect(fruitEnum.APPLE).toBe("APPLE");
      expect(fruitEnum.ORANGE).toBe("ORANGE");
      expect(fruitEnum.PEAR).toBe("PEAR");
   });
});

describe('Test invalid arguments', () => {
   test("Try no arguments", () => {
      expect(() => createEnum()).toThrow();
   });

   test("Try non-string arguments", () => {
      expect(() => createEnum("APPLE", 2, "ORANGE")).toThrow();
   });
});