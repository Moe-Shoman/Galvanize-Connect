import initialState from './initialState';

export default function (posts = initialState.posts, action) {
  switch (action.type) {
    case 'ADD_POST': {
      return [
        ...posts,
        action.payload,
      ];
    }
    case 'FETCH_POSTS':
      return action.payload;
    case 'DELETE_POST': {
      const postId = action.payload;
      return posts.filter(post => post.postKey !== postId);
    }
    case 'DELETE_COMMENT': {
      // console.log(action.payload);
    }
    case 'ADD_COMMENTS': {
      const newPosts = [...posts];
      const specificPost = newPosts[action.payload.postIndex];
      newPosts[action.payload.postIndex] = {
        ...specificPost,
        comments: [
          ...specificPost.comments,
          action.payload,
        ],
      };
      return newPosts;
    }
    default:
      return posts;
  }
}
