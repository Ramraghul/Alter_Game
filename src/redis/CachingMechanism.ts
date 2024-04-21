import client from "../connection/connection.redis";

export const setCacheRecommendations = async (userId: string, postData: any): Promise<void> => {
    try {
        await client.set(
            `postData:${userId}`,
            JSON.stringify(postData),
            { EX: 3600 }
        );
    } catch (error) {
        console.error('Error setting cache:', error);
        throw error;
    }
};

export const getCachedRecommendations = async (userId: string, callback: (data: any) => void):  Promise<void> => {
    try {
        const postData: any = await client.get(`postData:${userId}`);

        callback(JSON.parse(postData));
    } catch (error) {
        console.error('Error fetching cached postData:', error);
        callback(null);
    }
};

