import { Request, Response } from 'express';
import MasterTable from '../model/post.model';
import { generateMockData } from '../middleware/mockData.middleware';
import UserTable from '../model/user.model';


const mockDataController = {
    async createMockData(req: Request, res: Response) {
        try {
            const numPosts = 1000;
            const numUsers = 50;

            const mockPosts: any = await generateMockData(numPosts, numUsers);

            if (mockPosts) {
                await MasterTable.insertMany(mockPosts.postsData);
                await UserTable.insertMany(mockPosts.usersData);
                res.status(201).json({
                    success: true,
                    message: 'Mock Data Successfully Created',
                });
            } else {
                res.status(500).json({
                    success: false,
                    message: 'Error In Mock Data Creation',
                });
            }

        } catch (error) {
            res.status(500).json({
                success: false,
                error,
            });
        }
    }
};

export default mockDataController;
