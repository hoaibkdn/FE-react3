/** @format */
import { memo, useState } from 'react';
import type { Post as PostModel } from './../types/post.type';
import { Link } from 'react-router-dom';

type Props = {
  post: PostModel;
  savePost: (post: PostModel) => void;
};

const Post = ({ post, savePost }: Props) => {
  console.log('post ', post.id);
  const [editingTitle, setEditingTitle] = useState(false);
  const [titleText, setTitleText] = useState(post.title);
  const showInput = (value: boolean) => {
    setEditingTitle(value);
  };
  const handleChange = (e: any) => {
    setTitleText(e.target.value);
  };

  const handleSavePost = () => {
    showInput(false);
    savePost({
      ...post,
      title: titleText,
    });
  };

  return (
    <div>
      <div>
        {editingTitle ? (
          <div>
            <input type='text' value={titleText} onChange={handleChange} />
            <button onClick={handleSavePost}>Save</button>
          </div>
        ) : (
          <div>
            <Link to={`/post/${post.id}`}>
              <b>{post.title}</b>
            </Link>
            <button onClick={() => showInput(true)}>Edit</button>
          </div>
        )}
      </div>
      <p>{post.body}</p>
    </div>
  );
};

export default memo(Post, (prevProps: Props, nextProps: Props) => {
  const { post: prevPost } = prevProps;
  const { post } = nextProps;
  return prevPost.title === post.title && prevPost.body === post.body;
});

/**
 * Edit body post, which similar to title
 * Fetch User, render user name on each post
 */
