# Post caching System

This is the server for the caching System

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Ramraghul/Alter_Game.git
    ```

2. Navigate to the server directory:

3. Install server dependencies:
    ```bash
    yarn install
    ```
4. Need To Install The Redis Server for the caching system
5. Install the Redisinsight also (View)

## Usage (Local)

1. Start the server:
    ```bash
    yarn start or nodemon
    ```
2. Start the Redis server:
    ```bash
    redis-server
    ```
    
## API Detail (Local && LIVE)

1. This Endpoint Creates mock data in a Particular Server
   ## (Local)
   ```bash
   http://localhost:9000/api/generate_mock_data
   ```
   ## (LIVE)
   ```bash
   https://alter-game-server.vercel.app/api/generate_mock_data
   ```
   
2. This API is GET post by ID. This API Works with the caching System
   ## (Local)
   ```bash
   http://localhost:9000/api/recommendations/posts?userId=9604798002
   ```
   ## (LIVE)
   ```bash
   https://alter-game-server.vercel.app/api/recommendations/posts?userId=9604798002
   ```
   
## Contact

For any inquiries or feedback, please contact [Raghul](mailto:raghulraghul111@gmail.com).
