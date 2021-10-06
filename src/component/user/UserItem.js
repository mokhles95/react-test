import {Card} from "../styles/Card"
import {SubList} from "../styles/list/SubList"
import { Block } from "../styles/Block";
import {H5} from "../styles/H1"
function UserItem(props) {
  return (
    <SubList>
        <Card>
      <div >
      <Block>
      <H5>first name :</H5>  <p>{props.user.firstName}</p>
      </Block>
      <Block>
      <H5>last name: </H5>  <p>{props.user.lastName}</p>
      </Block>
      <Block>
      <H5>email:</H5> <p>{props.user.email}</p>
      </Block>
      <Block>
      <H5>country: </H5> <p>{props.user.country}</p>
      </Block>
      <Block>
      <H5>city: </H5> <p>{props.user.city}</p>
      </Block>
      </div>
      </Card>
    </SubList>
  );
}

export default UserItem;