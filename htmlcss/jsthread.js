/** @format */
function thread() {
  setTimeout(() => {
    console.log('3');
  }, 0);
  Promise.resolve().then(() => {
    console.log('1');
    setTimeout(() => {
      console.log('4');
    }, 0);
  });

  Promise.resolve().then(() => {
    console.log('5');
  });
  console.log('2');
  // 2 1 4 5 3
}

function fetchPosts() {
  const possPromise = new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (response.status !== 200) {
          throw new Error('error');
        }
        return response.json();
      })
      .then((posts) => {
        const evenPosts = posts.filter((item, idx) => idx % 2);
        resolve(evenPosts);
      })
      .catch((e) => reject(e));
  });
  return possPromise;
}

fetchPosts().then((posts) => console.log('fetchPosts ', posts));

async function fetchPosts2() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // 600
  if (response.status !== 200) {
    throw new Error('error');
  }
  const posts = await response.json();
  return posts;
}

// const data = await fetchPosts2();

fetchPosts2().then((data) => console.log('data ', data));

console.log('hello');
/**
 * 200 201: success
 * 400 401: client error
 * 500 503: server error
 * 301 302 303: success, redirect
 */

async function fetchPost(postId) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
  if (res.status !== 200) {
    throw new Error('Error fetching post');
  }

  const posts = await res.json(); // string
  return post;
}

async function fetchPostById(postId) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  if (res.status !== 200) {
    throw new Error('Error fetching post'); //
  }

  const post = await res.json(); // string
  return post;
}

fetchPostById(3)
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

async function fetchUsers() {
  // 600
  const response = await fetch('https://jsonplaceholder.typicode.com/users'); // 500
  if (response.status !== 200) {
    throw new Error('error');
  }
  const users = await response.json();
  return users;
}

function fetchAllData1() {
  return Promise.allSettled([fetchPostById(4), fetchUsers()]) // parrallel
    .then((values) => console.log(values))
    .catch((error) => console.log('error ', error));
}

fetchAllData1();

async function fetchAllData() {
  const fetchUser = fetchPostById(1); // promise
  const fetchAllUsers = fetchUsers();
  const userById = await fetchUser; // 600ms
  const allUsers = await fetchAllUsers; // 0ms
  return [userById, allUsers];
}

fetchAllData().then((data) => console.log(data));

function fetchAllData3() {
  return Promise.any([fetchPostById(10000), fetchUsers()]) // parrallel
    .then((values) => console.log('fetch 3 ', values))
    .catch((error) => console.log('error ', error));
}

function fetchAllData4() {
  return Promise.race([fetchPostById(4), fetchUsers()]) // parrallel
    .then((values) => console.log('fetch 4 ', values))
    .catch((error) => console.log('error ', error));
}

fetchAllData3();
fetchAllData4();

/**
 * Homework:
 * fetchData() {
 *    posts = []
 *    users = []
 * 
 *    return [{
 *      userId: 1,
        id: 1,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body: "et iusto sed quo iure
        voluptatem occaecati omnis eligendi aut ad
        voluptatem doloribus vel accusantium quis pariatur
        molestiae porro eius odio et labore et velit aut",
        author: "Leanne Graham"
 *    }, {
 *      userId: 3,
        id: 2,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body: "et iusto sed quo iure
        voluptatem occaecati omnis eligendi aut ad
        voluptatem doloribus vel accusantium quis pariatur
        molestiae porro eius odio et labore et velit aut",
        author: "Clementine Bauch"
 *    }]
 * }
 */

async function fetchDataCombined() {
  try {
    const fetchUsers = fetchUsers(); // 660
    const fetchPosts = fetchPostById(10000); // 560
    const usersData = await fetchUsers; // 660
    const postsData = await fetchPosts; // 0

    // 660ms
    const users = usersData.reduce((acc, user) => {
      if (user) {
        acc[user.id] = user;
      }
      return acc;
    }, {}); // m
    const combinedData = postsData.map((post) => {
      // O(n)
      // 1220
      // const author = usersData.find((user) => user.id === post.userId); // undefined
      const author = users[post.userId]; // O(1)
      return {
        ...post,
        author: author ? author.name : 'Unknown',
      };
    }); // O(m * n)
    // Expect: O(m+n)

    return combinedData;
  } catch (err) {
    console.log('Error fetching data try catch', err); //
    return null;
  }
}

fetchDataCombined()
  .then((res) => console.log(res))
  .catch((err) => console.log('catch promise ', err)); //

// 2nd
function fetchData5() {
  return (
    Promise.all([
      fetch('https://jsonplaceholder.typicode.com/posts'), // 600
      fetch('https://jsonplaceholder.typicode.com/users'), // 500
    ])

      .then((response) => {
        // 600
        return Promise.all(response.map((respon) => respon.json())); // 60ms
      })
      // 1 post -> m users
      // n post -> n * m users
      .then(([posts, users]) => {
        // 660ms
        const mappingData = posts.map((post) => {
          // n
          const user = users.find((u) => (u.id = post.userId)); // m:
          return {
            userId: post.userId,
            author: user.name,
            id: post.id,
            title: post.title,
            body: post.body,
          };
        }); // O(m*n) O(m+n)
        return mappingData;
      })
  );
}

// regrex
const str = 'hello     World3';
const reg = /\s+/;
const reg2 = /[a-zA-Z0-9]/;
const result = str.split(reg);
console.log('regex str ', result);
