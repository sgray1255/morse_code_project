describe ("test case for breaking down input function", () => {

  it("should throw new error when given input that is not a string", () => {
    expect(breakDown()).toThrowError("Must give valid text input");
    expect(breakDown(25)).toThrowError("Must give valid text input");
    expect(breakDown(false)).toThrowError("Must give valid text input");
  });

  it("should break up input into constituent parts", () => {
    expect(breakDown("Word")).toBe(["w", "o", "r", "d"]);
    expect(breakDown("A short sentence.")).toBe(["a", " ", "s", "h", "o", "r", "t", " ", "s", "e", "n", "t", "e", "n", "c", "e"]);
    expect(breakDown("s")).toBe(["s"])
  });

  it("should ")
});