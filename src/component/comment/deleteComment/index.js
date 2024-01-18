import { Fragment } from "react"
import { TiDelete } from "react-icons/ti";

const DeleteComment = (props) =>{
    const isAuthor = JSON.parse(localStorage.getItem("user")).username;
    return isAuthor != props.author ? "" : (
        <Fragment>
            <TiDelete />
        </Fragment>
    )
}
export default DeleteComment;