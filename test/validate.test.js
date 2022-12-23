import { validateTextField } from "../src/utils";
import { it } from "vitest";
import { FORM_ERRORS } from "../src/constants";

describe("populateData", () => {
  it("should return no errors if data is valid", () => {
    const result = validateTextField("123");
    expect(result).toEqual([false, ""]);
  });

  it("should return required error", () => {
    const result = validateTextField("");
    expect(result).toEqual([true, FORM_ERRORS.REQUIRED]);
  });
  
  it("should return max length error", () => {
    const result = validateTextField("123456789012345678901234567890123456789012345678901");
    expect(result).toEqual([true, FORM_ERRORS.MAX_LENGTH]);
  })
});
