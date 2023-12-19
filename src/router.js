import React, { lazy, Suspense } from "react";
// Navigate重定向组件
import { Navigate } from "react-router-dom";
import LoadingPage from "./pages/LoadingPage";

const MobilePage = lazy(() => import("./pages/MobilePage"));
const PCPage = lazy(() => import("./pages/PCPage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const Page404 = lazy(() => import("./pages/Page404"));
const MoblieHome = lazy(() => import("./pages/MobileHome"));
const MobileMe = lazy(() => import("./pages/MobileMe"));
const MobileMessage = lazy(() => import("./pages/MobileFind"));
const MobileTodo = lazy(() => import("./pages/MobileTodo"));
const Friend = lazy(() => import("./pages/MobileFind/components/friends"));
const Look = lazy(() => import("./pages/MobileFind/components/look"));
const Surrounding = lazy(() => import("./pages/MobileFind/components/surrounding"));

const routes = [
  //  嵌套路由 开始-------------------
  {
    path: "/",
    element: (
      <Suspense fallback={<LoadingPage />}>
        <Navigate to="/homepage" />
      </Suspense>
    ),
  },
  {
    path: "/mobilepage",
    element: (
      <Suspense fallback={<LoadingPage />}>
        <Navigate to="/mobilepage/home" />
      </Suspense>
    ),
  },
  {
    path: "/homepage",
    element: (
      <Suspense fallback={<LoadingPage />}>
        <HomePage />
      </Suspense>
    ),
  },
  // 嵌套路由 结束-------------------
  {
    path: "/mobilepage",
    element: (
      <Suspense fallback={<LoadingPage />}>
        <MobilePage />
      </Suspense>
    ),
    children: [
      {
        path: "/mobilepage/home",
        element: (
          <Suspense fallback={<LoadingPage />}>
            <MoblieHome />
          </Suspense>
        ),
      },
      {
        path: "/mobilepage/todo",
        element: (
          <Suspense fallback={<LoadingPage />}>
            <MobileTodo />
          </Suspense>
        ),
      },
      {
        path: "/mobilepage/find",
        element: (
          <Suspense fallback={<LoadingPage />}>
            <MobileMessage />
          </Suspense>
        ),
        // children: [
        //   {
        //     path: "/mobilepage/find/friends",
        //     element: <Friend />,
        //   },
        //   {
        //     path: "/mobilepage/find/look",
        //     element: <Look />,
        //   },
        //   {
        //     path: "/mobilepage/find/surrounding",
        //     element: <Surrounding />,
        //   },
        // ],
      },
      {
        path: "/mobilepage/me",
        element: (
          <Suspense fallback={<LoadingPage />}>
            <MobileMe />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/mobilepage/find/friends",
    element: (
      <Suspense fallback={<LoadingPage />}>
        <Friend />
      </Suspense>
    ),
  },
  {
    path: "/mobilepage/find/look",
    element: (
      <Suspense fallback={<LoadingPage />}>
        <Look />
      </Suspense>
    ),
  },
  {
    path: "/mobilepage/find/surrounding",
    element: (
      <Suspense fallback={<LoadingPage />}>
        <Surrounding />
      </Suspense>
    ),
  },
  {
    path: "/pcpage",
    element: (
      <Suspense fallback={<LoadingPage />}>
        <PCPage />
      </Suspense>
    ),
  },
  {
    path: "/404",
    element: (
      <Suspense fallback={<LoadingPage />}>
        <Page404 />
      </Suspense>
    ),
  },
  // 访问其余路径的时候直接跳到首页
  {
    path: "*",
    element: (
      <Suspense fallback={<LoadingPage />}>
        <Navigate to="/404" />
      </Suspense>
    ),
  },
];
export default routes;
