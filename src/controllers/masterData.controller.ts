import MasterTable from '../model/post.model';
import UserTable from '../model/user.model';
import { prioritizePosts } from '../utils/prioritizePosts.utils';

export async function getUserDataByUserId(userId: string) {
    try {
        if (!userId) {
            return {
                success: false,
                message: "User Id Is Needed",
            };
        }

        // Find the user
        const user: any = await UserTable.findOne({ user_Id: parseInt(userId) });
        if (!user) {
            return {
                success: false,
                message: "User Not Found",
            };
        }

        // Find posts related to the user
        const posts: any = await MasterTable.find({ user_Id: parseInt(userId) });

        const prioritizePost = await prioritizePosts(user, posts)

        return {
            success: true,
            message: "User Data Successfully Fetched",
            data: {
                user: user,
                posts: prioritizePost
            }
        };
    } catch (error: any) {
        return {
            success: false,
            message: error.message
        };
    }
}
