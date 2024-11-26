import { Route, Routes, Navigate } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Homepage from "./Screens/Homepage";
import Servicepage from "./Screens/Servicepage";
import Login from "./Screens/LoginPage";
import SignUp from "./Screens/SignUppage";
import NewEntery from "./Screens/NewProductEntry";
import PendingEntityTable from "./Screens/PendingTask";
import CompletedEntryTable from "./Screens/completedtask";
import TotalEntryTable from "./Screens/Totaltask";
import UpdatePendingEntry from "./Screens/UpdatePending";
import Contact_button from "./Components/Contact";
import ContactPage from "./Screens/Contactpage";
import UpdateTask from "./Screens/UpdateTask";
import UpdatePendingTask from "./Screens/UpdatePendingTask";
import UpdateCompletedEntry from "./Screens/UpdateCompletedEntry";
import DeleteJob from "./Screens/DeleteJob";
import Dashboard from "./Screens/Dashboardpage";
import UserDashBoard from "./Screens/UserDashBoard";
import UserSidebar from "./Components/UserSidebar";
import WorkInprogress from "./Components/WorkInprogess";
import UserData from "./Screens/UserData";
import WorkFlow from "./WorkFlow";



function App() {
  return (
    <>
      <Routes>
        <Route path="/Dashboard" element={<Dashboard />}></Route>
        <Route
          path="/Dashboard/pendingtask/:id"
          element={<UpdatePendingEntry />}
        ></Route>
                <Route
          path="/Dashboard/UpdateEntery/:id"
          element={<UpdatePendingTask />}
        ></Route>
          <Route
          path="/Dashboard/totaltask/:id"
          element={<UpdateCompletedEntry/>}
        ></Route>
        <Route path="/Dashboard/newEntry" element={<NewEntery />}></Route>
        <Route
          path="/Dashboard/pendingtask"
          element={<PendingEntityTable />}
        ></Route>
                <Route
          path="/Dashboard/completedtask"
          element={<CompletedEntryTable />}
        ></Route>
        <Route
          path="/Dashboard/totaltask"
          element={<TotalEntryTable />}
        ></Route>

         <Route
          path="/Dashboard/UpdateEntery"
          element={<UpdateTask/>}
        ></Route>
        \         <Route
          path="/Dashboard/DeleteJob"
          element={<DeleteJob/>}
        ></Route>

      </Routes>

      <Routes>
        <Route
          path="/"
          exact
          element={
            <>
              <Header />
              <Homepage />
              <Servicepage />
              <WorkFlow />
              <Contact_button />
              <Footer />
            </>
          }
        />

        <Route
          path="/services"
          element={
            <>
              <Header />
              <Servicepage />
              <Footer />
            </>
          }
        ></Route>

<Route
          path="/contact"
          element={
            <>
              <Header />
              <ContactPage />
              <Footer />
            </>
          }
        ></Route>

        <Route
          path="userData/:name"
          element={
            <>
            <Header />
              <UserSidebar />
              <UserDashBoard />
              <UserData />
            </>
          }
        ></Route>

<Route
          path="/login"
          element={
            <>
              <Header />
              <Login />
              <Footer />
            </>
          }
        ></Route>

        <Route
          path="/signup"
          element={
            <>
              <Header />
              <SignUp />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/shop"
          element={
            <>
              <Header />
              <WorkInprogress />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/blogs"
          element={
            <>
              <Header />
              <WorkInprogress />
              <Footer />
            </>
          }
        ></Route>
                <Route
          path="/hardWareServices"
          element={
            <>
              <Header />
              <WorkInprogress />
              <Footer />
            </>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
