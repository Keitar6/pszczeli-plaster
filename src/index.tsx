import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { AppStore, persistor } from "./store/store.redux";

import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./global.styles";
import Spinner from "./components/spinner/spinner.component";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={AppStore}>
      <PersistGate persistor={persistor}>
        <Suspense fallback={<Spinner />}>
          <GlobalStyle />
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Suspense>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
