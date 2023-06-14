function createPost(post) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(post);
    }, 1000);
  });
}

function updateLastUserActivityTime(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(time);
    }, 1000);
  });
}

function deleteLastPost() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Post deleted');
    }, 1000);
  });
}

const posts = [];

function updateLastUserActivityTimeAndDeletePost(post) {
  const createPostPromise = createPost(post);
  const updateActivityPromise = updateLastUserActivityTime(new Date());

  Promise.all([createPostPromise, updateActivityPromise])
    .then(([createdPost, activityTime]) => {
      posts.push(createdPost);
      console.log('All posts:', posts);
      console.log('Last activity time:', activityTime);

      deleteLastPost().then(() => {
        console.log('Post deleted');
        console.log('Updated posts:', posts);
      });
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

const newPost = 'This is a new post.';
updateLastUserActivityTimeAndDeletePost(newPost);
