
import {StyledLayout} from "../styles/StyledLayout"

function Layout(props){
return (<div>
      <StyledLayout>
        {props.children}
      </StyledLayout>
</div>)
}
export default Layout