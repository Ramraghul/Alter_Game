import { PostEntity, PrioritizedPostEntity, PrioritizedPostEntityOne, UserEntity } from "../interface/postModel.interface";

export function prioritizePosts(userData: UserEntity, postsData: PostEntity[]): PrioritizedPostEntity[] {
    const likedPostsSet = new Set(userData.likedPosts);
    const commentedPostsSet = new Set(userData.commentedPosts);


    let followedPosts: PostEntity[] = postsData.filter(post => post.user_Id === userData.user_Id);
    followedPosts = followedPosts.filter(post => likedPostsSet.has(post.post_Id) || commentedPostsSet.has(post.post_Id));

    const prioritizedPosts: any[] = followedPosts.map(post => ({
        ...post,
        popularityScore: post.likes + post.comments
    }));

    prioritizedPosts.sort((a, b) => b.popularityScore - a.popularityScore);

    const cleanedPrioritizedPosts: PrioritizedPostEntity[] = prioritizedPosts.map(({ _doc, popularityScore }) => ({
        user_Id: _doc.user_Id,
        post_Id: _doc.post_Id,
        sport_Id: _doc.sport_Id,
        event_Id: _doc.event_Id,
        text: _doc.text,
        likes: _doc.likes,
        comments: _doc.comments,
        popularityScore
    }));
    
    return cleanedPrioritizedPosts;
}
