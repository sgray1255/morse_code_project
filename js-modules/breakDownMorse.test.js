import breakDownEnglish from "./breakDownEnglish";

describe ("test case for breaking down english input function", () => {

  it("should throw new error when given input that is not a string", () => {
    expect(breakDownEnglish()).toThrowError("Must give valid text input");
    expect(breakDownEnglish(25)).toThrowError("Must give valid text input");
    expect(breakDownEnglish(false)).toThrowError("Must give valid text input");
  });

  it("should break up input into constituent parts", () => {
    expect(breakDown("Word")).toBe(["w", "o", "r", "d"]);
    expect(breakDownEnglish("A short sentence.")).toBe(["a", " ", "s", "h", "o", "r", "t", " ", "s", "e", "n", "t", "e", "n", "c", "e"]);
    expect(breakDownEnglish("s")).toBe(["s"])
  })});
