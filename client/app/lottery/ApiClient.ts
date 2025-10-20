export interface LotteryResponseDTO {
    timestamp?: number;
    results?: Array<number>;
    algorithm?: string;
}

export class ApiClient {
    public static readonly USE_NODEJS_SERVER: boolean = false;
    public static readonly NODEJS_BASE_URL: string = "http://localhost:3000/";
    public static readonly JAVA_SERVER_BASE_URL: string = "http://localhost:8080/";
    public static readonly LOTTERY: string = "lottery";

    private static instance: ApiClient;

    private constructor() {

    }

    public static getInstance(): ApiClient {
        if (!ApiClient.instance) {
            ApiClient.instance = new ApiClient();
        }
        return ApiClient.instance;
    }

    private getLotteryURL(): string {
        let url = ApiClient.JAVA_SERVER_BASE_URL;
        if (ApiClient.USE_NODEJS_SERVER === true) {
            url = ApiClient.NODEJS_BASE_URL;
        }
        return url + ApiClient.LOTTERY;
    }

    public async fetchWinningLotteryNumbers(): Promise<LotteryResponseDTO> {
        try {
            const response = await fetch(this.getLotteryURL());

            // Check if the response was successful
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            // Parse the response body as JSON and cast it to our defined interface
            const data: LotteryResponseDTO = await response.json();
            return data;
        } catch (error) {
            console.error("Error fetching posts:", error);
            // Re-throw the error or handle it as appropriate for your application
            throw error;
        }
    }
}