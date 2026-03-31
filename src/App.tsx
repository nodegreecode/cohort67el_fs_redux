import { BrowserRouter, Route, Routes } from "react-router-dom";
//import Lesson_17 from "lessons/Lesson_17/Lesson_17.tsx";
//import Homework_17 from "homeworks/Homework_17/Homework_17.tsx";
import Layout from "pages/UserManagement/components/Layout/Layout";
import Home from "pages/UserManagement/components/Home/Home.tsx";
import Employee from "pages/UserManagement/components/CreateEmployee/Employee";
import Employees from "pages/UserManagement/components/Employees/Employees";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/createEmployee" element={<Employee />} />
            <Route path="/employees" element={<Employees />} />
          </Routes>
        </Layout>
      </BrowserRouter>
      {/*<Lesson_17 />*/}
      {/*<Homework_17 />*/}
    </>
  );
}
