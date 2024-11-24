/** @format */

import { useCallback, useEffect } from 'react';
import type { Post as PostModel, PostState } from './../types/post.type';
import { Post } from './../components';
import { useApis } from './../hooks/useApis';
import { BASE_URL } from './../constants';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './../store/reducers/postsReducer';
import type { AppDispatch } from './../store';

const ListPost = () => {
  // const {
  //   data: listPosts = [],
  //   setData: setListPosts,
  //   loading,
  // } = useApis(BASE_URL + '/posts');

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const { list: listPosts, stage } = useSelector(
    (state: { posts: PostState }) => state.posts
  );
  console.log('listPosts ', listPosts);

  const savePost = useCallback((post: PostModel) => {
    // const curPostIdx = listPosts.findIndex(
    //   (item: PostModel) => item.id === post.id
    // );
    // if (curPostIdx >= 0) {
    //   const newList: Array<PostModel> = [...listPosts];
    //   newList[curPostIdx] = post;
    //   setListPosts(newList);
    // }
  }, []);
  if (stage === 'loading') {
    <>
      <h2>List post</h2>
      <p>loading....</p>
    </>;
  }
  return (
    <>
      <h2>List post</h2>
      {listPosts.map((item: PostModel, index: number) => (
        <Post key={index} post={item} savePost={savePost} />
      ))}
    </>
  );
};

export default ListPost;
