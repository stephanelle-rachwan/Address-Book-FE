import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";
import EditContacts from "./pages/EditContacts";
import DisplayContacts from "./pages/DisplayContacts";
import AddContacts from "./pages/AddContacts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LogIn />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="contacts/edit" element={<EditContacts />}></Route>
        <Route path="contacts" element={<DisplayContacts />}></Route>
        <Route path="contacts/add" element={<AddContacts />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
