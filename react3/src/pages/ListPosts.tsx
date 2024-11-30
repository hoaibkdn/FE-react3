/** @format */

import { useCallback, useEffect } from 'react';
import type { Post as PostModel, PostState } from './../types/post.type';
import type { UserState } from '../types/user.type';
import { Post } from './../components';
import { useApis } from './../hooks/useApis';
import { BASE_URL } from './../constants';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './../store/reducers/postsReducer';
import { fetchUsers } from '../store/reducers/usersReducer';
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
    dispatch(fetchUsers());
  }, [dispatch]);

  const {
    postIds, // userid
    objPosts,
    objUsers,
    stage,
  } = useSelector((state: { posts: PostState; users: UserState }) => ({
    postIds: state.posts.ids,
    objPosts: state.posts.objList,
    objUsers: state.users.objList,
    stage: state.posts.stage,
  }));

  console.log('objUsers ', objUsers);

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
