import breakDownMorse from "./breakDownMorse";

describe ("test case for breaking down morse input function", () => {

  it("should throw new error when given input that is not a string", () => {
    expect(breakDownMorse()).toThrowError("Must give valid text input");
    expect(breakDownMorse(25)).toThrowError("Must give valid text input");
    expect(breakDownMorse(false)).toThrowError("Must give valid text input");
  });

  it("should break up input into constituent parts", () => {
    expect(breakDownMorse([". - -  - - -  . - .  - . ."])).toBe([". - -", "- - -", ". - .", "- . ."]);
    expect(breakDownMorse(". -/. . .  . . . .  - - -  . - .  -/ . . .  .  - .  -  .  - .  .  - .  - . - .  .")).toBe([". -", "/", ". . .", ". . . .", "- - -", ". - .", "-", "/", ". . .", ".", "- .", "-", ".", "- .", "- . - .", "."]);
  
  })});
