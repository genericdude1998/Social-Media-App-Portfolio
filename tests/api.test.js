import { getLoginToken, getPosts, getUser, sendComment, sendPost } from '../server/api';
import { posts } from '../server/posts';
import { users } from '../server/users';

describe('getLoginToken', () => {
    it('should return token when given correct credentials', () => {
        return getLoginToken('Admin', '1234').then(res => {
            expect(res.data).toBe('live-server-token');
        })
    });
    it('should return error when given incorrect credentials', () => {
        return getLoginToken('wrongname', '1234').catch(err => {
            expect(err.response.data).toBe('username or password are wrong please try again!');
        })
    });
});
describe('getPosts', () => {
    it('should return the posts with a valid token given', () => {
        return getPosts('token').then(res => {
            expect(res.data).toEqual(posts);
        })
    });
    it('should return and error with an invalid token given', () => {
        return getPosts(undefined).catch(err => {
            expect(err.response.data).toBe('no token given!');
        })
    });
});

describe('getUser', () => {
    it('should return the user with a valid id', () => {
        const id = 1;
        return getUser(id).then(res => {
            expect(res.data).toEqual(users[id]);
        })
    });
    it('should return and error with an invalid token given', () => {
        return getUser(undefined).catch(err => {
            expect(err.response.data).toBe('no id given');
        })
    });
});

describe('sendPost', () => {
    it('should create a new post', () => {
        return sendPost('content').then(res => {
            expect(res.data).toBe('posted a new post!');
        })
    });
});

describe('sendComment', () => {
    const postId = 1;
    it('should create a new comment', () => {
        return sendComment('content', postId).then(res => {
            expect(res.data).toBe('posted a new comment!');
        })
    });
});