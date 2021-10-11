import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blablabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ]
}

test('length of posts should be incremented', () => {
    let action = addPostActionCreator("my-site.com");
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(5)

});

test('message of new post should be correct', () => {
    let action = addPostActionCreator("my-site.com");

    let newState = profileReducer(state, action);

    expect(newState.posts[4].message).toBe("my-site.com")

});

test('after deleting length of messages should decrement', () => {
    let action = deletePost(1);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3)

});

test('after deleting length of messages should not decrement, if id is not correct', () => {
    let action = deletePost(10000);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(4)

});
