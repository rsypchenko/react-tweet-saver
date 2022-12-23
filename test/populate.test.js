import { populateData } from "../src/utils";
import { mockData } from "../mock";
import { it } from "vitest";

describe("populateData", () => {
  it("should return an array of tweets", () => {
    const result = populateData(mockData);
    expect(result).toEqual([
      {
        id: "123",
        text: "Hello world",
        author_id: "456",
        created_at: "2022/12/22",
        user: {
          id: "456",
          name: "John Doe",
          username: "johndoe",
        },
      },
    ]);
  });

  it("should return an empty array", () => {
    const res = {
      data: [],
      includes: {
        users: [],
      },
    };
    const result = populateData(res);
    expect(result).toEqual([]);
  });

  it("should return an empty array if data is null", () => {
    const res = null;
    const result = populateData(res);
    expect(result).toEqual([]);
  });

  it("should return date with empty user", () => {
    const res = {
      ...mockData,
      includes: null
    };
    const result = populateData(res);
    expect(result).toEqual([
      {
        id: "123",
        text: "Hello world",
        author_id: "456",
        created_at: "2022/12/22",
        user: {
          name: "",
          username: "",
          profile_image_url: "",
        },
      },
    ]);
  });
});
