/** @format */
import { useParams } from 'react-router-dom';
import { useApis } from './../hooks/useApis';
import { BASE_URL } from '../constants';

const PostDetail = () => {
  const params = useParams();
  const { data: post } = useApis(BASE_URL + '/posts/' + params.postId);

  if (!post) {
    return null;
  }
  return (
    <div>
      <h4>{post.title}</h4>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetail;
