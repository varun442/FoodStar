import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../Utils/store";
import { StaticRouter } from "react-router-dom/server";

test("logo should load on rendering header", () => {
  //Load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  console.log(header);

  //Check if logo is loaded
  const logo = header.getAllByTestId("logo");
  console.log(logo[0]);
  expect(logo[0].src).toBe("http://localhost/dummy.png");
});

test("Online status should be green on rendering header", () => {
  //Load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  // console.log(header);

  //Check if logo is loaded
  const onlineStatus = header.getByTestId("online-status");
  // console.log(logo[0]);
  expect(onlineStatus.innerHTML).toBe("Yes, Online!!");
});

test("Cart should have 0 items", () => {
  //Load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  // <Link to="/cart" data-testid="cart-status">Cart - {itemCount.length}</Link>
  const cartStatus = header.getByTestId("cart-status");
  expect(cartStatus.innerHTML).toBe("Cart - 0");
});
