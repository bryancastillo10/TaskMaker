import { useMutation, useQueryClient } from "@tanstack/react-query"
import { ApiError, BASE_URL, baseToastConfig } from "./api"
import { useToast } from "@chakra-ui/react";
const useUpdateTodo = () => {
    const queryClient = useQueryClient();
    const toast = useToast();

    const { mutate: updateTodo, isPending: isUpdateLoading } = useMutation({
        mutationKey: ["updateTodo"],
        mutationFn: async (id: number) => {
            try {
                const res = await fetch(`${BASE_URL}/todos/${id}`, {
                    method: "PATCH",
                });
                const data = await res.json();
                if (!res.ok) {
                    throw new Error(data.error || "Something went wrong");
                }
                return data;
            } catch (error) {
                console.error("Failed to update the data", error);
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["todos"] });
            toast({
                ...baseToastConfig,
                title: "Updated Task",
                description: "Your task has been updated",
                status: "success"
            })
        },
        onError: (error: Error | ApiError) => {
            toast({
                ...baseToastConfig,
                title: "Failed to Update the task",
                description: error.message || "Failed to update the task",
                status: "error"
            });
        }
    });
    return { updateTodo, isUpdateLoading };
}

export default useUpdateTodo
