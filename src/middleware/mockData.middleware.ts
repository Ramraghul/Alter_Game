import { faker } from '@faker-js/faker';
import { Post, UserData } from '../interface/postModel.interface';



export function generateMockData(numPosts: number, numUsers: number) {
    try {
        const postsData = generatePostsData(numPosts, numUsers);
        const usersData = generateUsersData(numUsers, postsData);
        return { usersData, postsData };
    } catch (error) {
        return error;
    }
}

function generateUsersData(numUsers: number, postsData: Post[]): UserData[] {
    const usersData: UserData[] = [];
    for (let i = 0; i < numUsers; i++) {
        const likedPosts = generateLikedPosts(postsData);
        const commentedPosts = generateCommentedPosts(postsData);
        const randomPost = getRandomPost(postsData);
        const userData: UserData = {
            user_Id: randomPost.user_Id,
            likedPosts,
            commentedPosts,
            sportsInterested: getRandomSports()
        };
        usersData.push(userData);
    }
    return usersData;
}

function generateLikedPosts(postsData: Post[]): number[] {
    const numLikedPosts = Math.floor(Math.random() * postsData.length);
    const likedPosts: number[] = [];
    for (let i = 0; i < numLikedPosts; i++) {
        const randomPost = getRandomPost(postsData);
        likedPosts.push(randomPost.post_Id);
    }
    return likedPosts;
}

function generateCommentedPosts(postsData: Post[]): number[] {
    const numCommentedPosts = Math.floor(Math.random() * postsData.length);
    const commentedPosts: number[] = [];
    for (let i = 0; i < numCommentedPosts; i++) {
        const randomPost = getRandomPost(postsData);
        commentedPosts.push(randomPost.post_Id);
    }
    return commentedPosts;
}

function getRandomPost(postsData: Post[]): Post {
    const randomIndex = Math.floor(Math.random() * postsData.length);
    return postsData[randomIndex];
}

function generatePostsData(numPosts: number, numUsers: number): Post[] {
    const postsData: Post[] = [];
    const sports = ['Football', 'Basketball', 'Tennis', 'Soccer', 'Golf'];
    const events = ['World Cup', 'NBA Finals', 'Wimbledon', 'Champions League', 'The Masters'];

    const userIds: number[] = [];
    for (let i = 0; i < numUsers; i++) {
        userIds.push(generateUserId());
    }

    for (let i = 0; i < numPosts; i++) {
        const post: Post = {
            post_Id: generateNonRepeatedIds(postsData.map(post => post.post_Id)),
            user_Id: userIds[Math.floor(Math.random() * numUsers)],
            likes: Math.floor(Math.random() * 100),
            comments: Math.floor(Math.random() * 50),
            sport_Id: getRandomIndex(sports),
            event_Id: getRandomIndex(events),
            text: faker.lorem.sentences(3),
        };
        postsData.push(post);
    }
    return postsData;
}


function generateNonRepeatedIds(existingIds: number[]): number {
    let id = generateUserId();
    while (existingIds.includes(id)) {
        id = generateUserId();
    }
    return id;
}

function generateUserId(): number {
    const userIdString = Math.floor(1000000000 + Math.random() * 9000000000).toString();
    return parseInt(userIdString);
}

function getRandomSports(): string[] {
    const sports = ['Football', 'Basketball', 'Tennis', 'Soccer', 'Golf'];
    const numSports = Math.floor(Math.random() * 3) + 1;
    const selectedSports: string[] = [];
    for (let i = 0; i < numSports; i++) {
        const randomIndex = Math.floor(Math.random() * sports.length);
        selectedSports.push(sports[randomIndex]);
    }
    return selectedSports;
}

function getRandomIndex(array: any[]): number {
    return Math.floor(Math.random() * array.length) + 1;
}

function round(value: number, decimals: number): number {
    return parseFloat(value.toFixed(decimals));
}
