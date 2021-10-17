import morseToEnglish from "./morseToEnglish";

xdescribe ("test case for morse to English translation function", () => {


  it("should translate array of english  characters into morse", () => {
    expect(morseToEnglish(".-- --- .-. -..")).toBe(["word"]);
    expect(morseToEnglish(".-/... .... --- .-. -/... . -. -. -. . -. -.-. .")).toBe(["a short sentence"]);
    expect(morseToEnglish("...")).toBe(["s"])
  })});
