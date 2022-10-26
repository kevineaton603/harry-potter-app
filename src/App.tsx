import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CharacterScreen from "./screens/CharacterScreen";
import Layout from "./layouts";
import { lazy, Suspense } from "react";

const HomeScreen = lazy(() => import("./screens/HomeScreen"));

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Layout />}>
            <Route
              index
              path={"/"}
              element={
                <Suspense fallback={<h1 className="text-5xl">Loading...</h1>}>
                  <HomeScreen />
                </Suspense>
              }
            />
            <Route path={"/characters/:id"} element={<CharacterScreen />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
