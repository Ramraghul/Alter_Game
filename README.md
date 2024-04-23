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
    
## API Detail

1. http://localhost:9000/api/generate_mock_data
   This Endpoint Creates mock data in a Particular Server

2. http://localhost:9000/api/recommendations/posts/?userId=6036675796
   This API is get post by ID. This API Work with caching System

## Contact

For any inquiries or feedback, please contact [Raghul](mailto:raghulraghul111@gmail.com).
