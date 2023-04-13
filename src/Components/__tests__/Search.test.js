import { render } from "@testing-library/react";
import Body from "../Body";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import store from "../../Utils/store";
import { dummy } from "./data";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(dummy);
    },
  });
});

test("Search results on HomePage", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
    
  );
});
