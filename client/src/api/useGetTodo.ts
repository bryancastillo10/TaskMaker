import { useQuery } from "@tanstack/react-query";
import { BASE_URL, TodoType } from './api';

const useGetTodo = () => {
    const { data: Todos, isLoading } = useQuery<TodoType[]>({
        queryKey: ["todos"],
        queryFn: async () => {
            try {
                const res = await fetch(`${BASE_URL}/todos`);
                const data = await res.json();

                if (!res.ok) {
                    throw new Error(
                        data.error || "Something went wrong"
                    );
                }
                return data || [];
            } catch (error) {
                console.error("Failed to fetch the data", error);
            }
        }
    });
    return {Todos,isLoading}
}

export default useGetTodo;
