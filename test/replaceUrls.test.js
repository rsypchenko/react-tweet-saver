import { replaceURLs } from "../src/utils";
import { it } from "vitest";

describe("replace URLs", () => {
  it("should replace urls in text to clickable links", () => {
    const result = replaceURLs("some test https://google.com another text");
    expect(result).toEqual(
      'some test <a class="text-blue-500" href="https://google.com" target="_blank" rel="noopener noreferrer">https://google.com</a> another text'
    );
  });

  it("should not replace urls if urls not exists in corrent format", () => {
    const result = replaceURLs("some text google news another text");
    expect(result).toEqual(
      'some text google news another text'
    );
  });
});
