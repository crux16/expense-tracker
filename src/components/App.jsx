// all import below here

// import { useAuth } from "hooks/useAuth";
// import { refreshUser} from "redux/auth/authOperations";
// import { useEffect } from "react";

import { Routes, Route } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";

import { lazy } from "react";
// import { useDispatch } from "react-redux";
import { RestrictedRoute } from "./RestrictedRoute/RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute";



const WelcomePage = lazy(() => import("../pages/WelcomePage/WelcomePage"));


const RegisterPage = lazy(() => import("../pages/RegisterPage/RegisterPage"));

const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));

const MainTransactionsPage = lazy(() => import("../pages/MainTransactionsPage/MainTransactionsPage"));



export const App = () => {
  // const dispatch = useDispatch();
  // const { isRefreshing } = useAuth();

  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);


  
  // isRefreshing ? (<b>Refreshing user...</b>) :
   return (
    <>
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<WelcomePage />} />

        <Route path="/signup" element={<RestrictedRoute redirectTo="mainTransactionsPage" component={<RegisterPage />} />} />

        <Route path="/login" element={<RestrictedRoute redirectTo="/mainTransactionsPage" component={<LoginPage />} />} />

        <Route path="/mainTransactionsPage" element={<PrivateRoute redirectTo="/login" component={<MainTransactionsPage />} />} />
      </Route>

    </Routes>
    </>
  )
};