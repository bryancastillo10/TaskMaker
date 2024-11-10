export const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:3000/api" : "/api";

export type TodoType = {
    _id: number;
    body: string;
    completed: boolean;
}