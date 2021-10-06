import AddNewUser from "../component/user/AddNewUser";
import UsersList from "../component/user/UsersList";
import { useState } from "react";
function Register() {
  const [user, setUser] = useState([]);

  function onsubmitHandler(data) {
    setUser([...user, data]);
  }
  return (
    <section>
      <h1>Add new User</h1>
      <AddNewUser onAddUser={onsubmitHandler} />
      <h2>Users list</h2>
      <UsersList users={user} />
    </section>
  );
}
export default Register;
