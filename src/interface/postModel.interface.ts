export interface Post {
    post_Id: number;
    user_Id: number;
    likes: number;
    comments: number;
    sport_Id: number;
    event_Id: number;
    text: string;
}

export interface UserData {
    user_Id: number;
    likedPosts: number[];
    commentedPosts: number[];
    sportsInterested: string[];
}



export interface UserEntity {
    user_Id: string;
    likedPosts: string[];
    commentedPosts: string[];
}

export interface PostEntity {
    user_Id: string;
    post_Id: string;
    sport_Id: number;
    event_Id: number;
    likes: number;
    text: string;
    comments: number;
}

export interface PrioritizedPostEntity extends PostEntity {
    popularityScore: number;
}


export interface PrioritizedPostEntityOne extends PostEntity {
    _doc: {
        user_Id: string;
        post_Id: string;
        sport_Id: number;
        event_Id: number;
        text: string;
        likes: number;
        comments: number;
    };
    popularityScore: number;
}

