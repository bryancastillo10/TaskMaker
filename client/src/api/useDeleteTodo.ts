import { BASE_URL, baseToastConfig } from "./api";
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useToast } from "@chakra-ui/react";
const useDeleteTodo = () => {
    const queryClient = useQueryClient();
    const toast = useToast();

    const { mutate: deleteToDo, isPending: isDeleteLoading } = useMutation({
        mutationKey: ["deleteTodo"],
        mutationFn: async (id: number) => {
            try {
                const res = await fetch(`${BASE_URL}/todos/${id}`, {
                    method: "DELETE",
                });
                const data = await res.json();
                if (!res.ok) {
                    throw new Error(data.error || "Something went wrong");
                }
                return data;
            } catch (error) {
                console.error("Failed to delete the data", error);
            }
        }, 
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["todos"] });
            toast({
                ...baseToastConfig,
                title: "Deleted Task",
                description: "Your Task has been deleted",
                status:"success"
            })
        },
        onError: (error: any) => {
            toast({
              ...baseToastConfig,
              title: "Failed to Delete Task",
              description: error.message || "Failed to delete the task",
              status: "error",
            });
        }
    });
    return {deleteToDo, isDeleteLoading}
}

export default useDeleteTodo;
