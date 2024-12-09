import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout";
import MainPage from "./pages";
import Calender from "./pages/calender";
import Sidebar from "./pages/sidebar";
import Carousel from "./pages/carousel";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <MainPage />,
        },
        {
          path: "/calender",
          element: <Calender />,
        },
        {
          path: "/sidebar",
          element: <Sidebar />,
        },
        {
          path: "/carousel",
          element: <Carousel />,
        },
      ],
    },
  ],
  {
    future: {
      // 없으면 콘솔에 경고 표시
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

export default router;
