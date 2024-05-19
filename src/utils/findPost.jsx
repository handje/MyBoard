const findPost = (postList, id) => {
  const postIndex = postList.findIndex((post) => post.id === id);
  const post = postList[postIndex] ?? {};
  return { postIndex, post };
};
export default findPost;
