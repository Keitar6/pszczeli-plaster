import React, { PropsWithChildren } from "react";
import { render } from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import type { PreloadedState } from "@reduxjs/toolkit";

import rootReducer, { ReduxState } from "../../store/rootReducer.redux";
import { Provider } from "react-redux";
import { AppStore } from "../../store/store.redux";
import { BrowserRouter } from "react-router-dom";

// As a basic setup, import your same slice reducers

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<ReduxState>;
  store?: typeof AppStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = configureStore({ reducer: rootReducer as any, preloadedState }),
    ...renderOptions
  }: ExtendedRenderOptions = {},
  ifWithRouter = true
) {
  function Wrapper({ children }: PropsWithChildren): JSX.Element {
    if (ifWithRouter)
      return (
        <BrowserRouter>
          <Provider store={store}>{children}</Provider>
        </BrowserRouter>
      );
    else return <Provider store={store}>{children}</Provider>;
  }
  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
