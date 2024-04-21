import express from "express";
const route = express.Router();
import mockDataController from "../controllers/createMockData.controller";
import { getRecommendations } from "../redis/cachingData";

//Mock Data Create
route.get('/generate_mock_data', mockDataController.createMockData);


//Data Get(Redis and Data base);
route.get('/recommendations/posts',getRecommendations)


export default route;