// all import below here

import { useAuth } from "hooks/useAuth";
// import { refreshUser } from "redux/auth/authOperations";

import { Routes, Route } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";

import { lazy, 
  // useEffect
 } from "react";
// import { useDispatch } from "react-redux";
import { RestrictedRoute } from "./RestrictedRoute/RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute";
//import { Header } from "./Header/Header";
//import UserBarBtn from "./UserBarBtn/UserBarBtn";



const WelcomePage = lazy(() => import("../pages/WelcomePage/WelcomePage"));


const RegisterPage = lazy(() => import("../pages/RegisterPage/RegisterPage"));

const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));

const MainTransactionsPage = lazy(() => import("../pages/MainTransactionsPage/MainTransactionsPage"));



export const App = () => {
  // const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);


  return isRefreshing ? (<b>Refreshing user...</b>) : (

    <Routes>

      <Route path="/" element={<SharedLayout />}>
        <Route index element={<WelcomePage />} />

        <Route path="/signup" element={<RestrictedRoute  redirectTo="/mainTransactionsPage" component={<RegisterPage />} />} />

        <Route path="/login" element={<RestrictedRoute redirectTo="/mainTransactionsPage" component={<LoginPage />} />} />

        <Route path="/mainTransactionsPage" element={<PrivateRoute redirectTo="/login" component={<MainTransactionsPage />} />} />

        {/* <Route path="/mainTransactionsPage" component={<MainTransactionsPage />} /> */}
      </Route>

    </Routes>
  )
};

// {/* 
//     // <div style={{ padding: '10px' }}>
//     //   <LoginForm ></LoginForm>
//     // </div> */}



