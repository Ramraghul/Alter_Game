import { getCachedRecommendations, setCacheRecommendations } from './CachingMechanism';
import { getUserDataByUserId } from '../controllers/masterData.controller';
import { Request, Response } from 'express';


const generateRecommendations = (userId: string): any => {
    return getUserDataByUserId(userId);
};


export async function getRecommendations(req: Request, res: Response): Promise<void> {
    const userId: string = req.query.userId as string;
    getCachedRecommendations(userId, async (cachedRecommendations: any) => {
        if (cachedRecommendations) {
            return res.status(200).json({
                success: true,
                message: "Successfully retrieved postData",
                data: cachedRecommendations
            });
        }
        else {
            const postData: any = await generateRecommendations(userId);
            if (postData.success === true) {
                setCacheRecommendations(userId, postData.data);
                return res.status(201).json({
                    postData
                });
            } else {
                return res.status(500).json({
                    status: postData.success,
                    message: postData.message
                });
            }
        }
    });
}
