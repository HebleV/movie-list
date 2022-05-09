import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.scss";
import Header from "./components/Header/Header";
import Trending from "./Pages/Trending/Trending";
import Popular from "./Pages/Popular/Popular";
import TopRated from "./Pages/TopRated/TopRated";
import Latest from "./Pages/Latest/Latest";
import Search from "./Pages/Search/Search";
import Filter from "./Pages/Filter/Filter";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Trending />} exact />
          <Route path="/popular" element={<Popular />} />
          <Route path="/toprated" element={<TopRated />} />
          <Route path="/newest" element={<Latest />} />
          <Route path="/search" element={<Search />} />
          <Route path="/filter" element={<Filter />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
