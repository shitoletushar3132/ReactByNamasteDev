import RestaurantMenu from "../RestaurantMenu";
import { act } from "react";
import { render } from "@testing-library/react";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_data),
  });
});

it("should load res menu component", async () => {
  await act(async () => render(<RestaurantMenu />));
});
