import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CreateArticlesAPI, GetAllArticlesAPI } from "../../api";

const Home = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.articles.isLoading);
  const data = useSelector((state) => state.articles.data);
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [body, setBody] = useState("")
  const [tag, setTag] = useState("")
  useEffect(() => {
    dispatch(GetAllArticlesAPI());
  }, []);
  const dulieu = {
    "article": {
      "title": title,
      "description": description,
      "body": body,
      "tagList": [
        tag
      ]
    }
  }
  const handleClick = () =>{
    dispatch(CreateArticlesAPI(dulieu))
  }
  return isLoading ? "Loading..." :(
    <Fragment>
        <div>Đăng bài</div>
        <div>
            <input placeholder="title" onChange={e=>setTitle(e.target.value)}></input><br/>
            <input placeholder="description" onChange={e=>setDescription(e.target.value)}></input><br/>
            <input placeholder="body" onChange={e=>setBody(e.target.value)}></input><br/>
            <input placeholder="tag" onChange={e=>setTag(e.target.value)}></input><br/>
            <button onClick={e=>handleClick()}>ĐĂNG</button>
        </div>
      <br/>
      {data?.articles?.map((e) => {
        return <div key={e.slug}>title: {e.title}</div>;
      })}
    </Fragment>
  );
};
export default Home;
