import { Fragment} from "react";
import PostArticle from "../article/postArticle";
import GetAllArticle from "../article/getArticle";

const Home = () => {
  return(
    <Fragment>
      <PostArticle/>
      <GetAllArticle/>
    </Fragment>
  );
};
export default Home;
