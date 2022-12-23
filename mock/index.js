export const mockData = {
  data: [
    {
      id: "123",
      text: "Hello world",
      author_id: "456",
      created_at: "2022-12-23T03:02:22.000Z",
    },
  ],
  includes: {
    users: [
      {
        id: "456",
        name: "John Doe",
        username: "johndoe",
      },
    ],
  },
};
