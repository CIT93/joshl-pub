
const displayPosts = posts => {
    //filter
    const filterPostsArr = posts.filter(post => post.userId === 1 && post.title.length > 17)
    console.log(filterPostsArr)

    // map
    const mappedPostsArr = filterPostsArr.map (post => post.body.length)
    console.log(mappedPostsArr)

    //reduce
    const total = mappedPostsArr.reduce((sum, len) => sum + len, 0);
    console.log(total)

// how would you calculate avg?
    const avg = total/mappedPostsArr.length;
    console.log(avg);

    // console.log(posts);
    // posts.forEach(post => {
    //     console.log(post);
    // })
}

const onError = err => {
    console.log(`Error ${err}`);
}

const onSuccess = posts => {
    displayPosts(posts);
}

const start = () => {
    getPosts();
}

start();