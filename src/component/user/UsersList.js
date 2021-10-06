import UserItem from './UserItem';
import {List} from "../styles/list/List"
function UsersList(props) {
  return (
    <List>
      {props.users.map((user) => (
     <UserItem key={user.id}
      user={user} />
      ))}
    </List>
  );
}

export default UsersList;