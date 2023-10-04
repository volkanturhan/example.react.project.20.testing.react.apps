import { render, screen } from "@testing-library/react";
import Async from "./Async";
describe("Async component", () => {
  test("renders post if request succeeds", async () => {
    //simulating fetch with mock
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First post" }],
    });

    render(<Async />);

    //find returns a promise for async
    const listItemElements = await screen.findAllByRole("listitem", {}, {});
    expect(listItemElements).not.toHaveLength(0);
  });
});
