import englishToMorse from "./englishToMorse";

describe ("test case for English to morse translation function", () => {


  it("should translate array of english  characters into morse", () => {
    expect(englishToMorse("Word")).toBe([". - -  - - -  . - .  - . ."]);
    expect(englishToMorse("A short sentence.")).toBe([". -/. . .  . . . .  - - -  . - .  -/ . . .  .  - .  -  .  - .  .  - .  - . - .  ."]);
    expect(englishToMorse("s")).toBe([". . ."])
  })});
