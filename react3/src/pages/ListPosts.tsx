/** @format */

import { useCallback, useEffect } from 'react';
import type { Post as PostModel, PostState } from './../types/post.type';
import type { UserState } from '../types/user.type';
import { Post } from './../components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, editPost } from './../store/reducers/postsReducer';
import { fetchUsers } from '../store/reducers/usersReducer';
import type { AppDispatch } from './../store';
import { Navigate } from 'react-router-dom';

const ListPost = () => {
  // const {
  //   data: listPosts = [],
  //   setData: setListPosts,
  //   loading,
  // } = useApis(BASE_URL + '/posts');

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchUsers());
  }, [dispatch]);

  const {
    postIds, // userid
    objPosts,
    objUsers,
    stage,
    isLoggedIn,
  } = useSelector(
    (state: { posts: PostState; users: UserState; auth: any }) => ({
      postIds: state.posts.ids,
      objPosts: state.posts.objList,
      objUsers: state.users.objList,
      stage: state.posts.stage,
      isLoggedIn: state.auth.isLoggedIn,
    })
  );

  const savePost = useCallback(
    (post: PostModel) => {
      console.log('post ', post);
      dispatch(editPost(post));
    },
    [dispatch]
  );
  console.log('isLoggedIn ', isLoggedIn);
  if (!isLoggedIn) {
    return <Navigate to='/login' replace={true} />;
  }
  if (stage === 'loading') {
    <>
      <h2>List post</h2>
      <p>loading....</p>
    </>;
  }
  return (
    <>
      <h2>List post</h2>
      {postIds.map((id: PostModel['id'], index: number) => {
        const post = objPosts[id]; // userId
        const user = objUsers[post.userId];
        return <Post key={index} post={post} user={user} savePost={savePost} />;
      })}
    </>
  );
};

export default ListPost;
/**
  edit title/body of a post
  save the new data in the global state
*/
