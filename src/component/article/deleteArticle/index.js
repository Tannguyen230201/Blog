import React from 'react';
import { Dropdown } from 'react-bootstrap';
import {BsThreeDots} from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { DeleteArticlesAPI } from '../../../api';

const DeleteArticle = (props) => {
  const dispatch = useDispatch();
  const handleClick = () =>{
    dispatch(DeleteArticlesAPI(props.slug))
  }
  return (
    <Dropdown>
      <Dropdown.Toggle className='btn_delete' variant="success" id="dropdown-basic" caret={false}>
        <BsThreeDots style={{color:"black"}}/>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" style={{textAlign:"center"}} onClick={handleClick}>Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DeleteArticle;