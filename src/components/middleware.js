import {useNavigate} from "react-router-dom";

const withRouter = (Component) =>{
    return function WrappedComponent(props){
        const navigate = useNavigate(); //Get navigate inside a functional components since you cannot use hooks in a class components
        return <Component {...props} navigate={navigate}/>  //pass navigate as a prop
    }
}


export default withRouter;