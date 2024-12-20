import { ApiError, BASE_URL, baseToastConfig} from "./api"
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@chakra-ui/react";

const useCreateTodo = () => {
    const queryClient = useQueryClient();
    const toast = useToast();



    const { mutate: createTodo, isPending: isCreateLoading } = useMutation({
      mutationKey: ["createTodo"],
      mutationFn: async (toDoData: string) => {
        try {
          const res = await fetch(`${BASE_URL}/todos`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ body: toDoData }),
          });
          const data = await res.json();

          if (!res.ok) {
            throw new Error(data.error || "Something went wrong");
          }
        } catch (error) {
          console.error("Failed to add the data", error);
        }
      },
      onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["todos"] });
          toast({
              ...baseToastConfig,
              title: "Created Task",
              description: "Your Task has been created",
              status:"success"
            })
      },
      onError: (error: Error | ApiError) => {
            toast({
                ...baseToastConfig,
                title: "Failed to Create Task",
                description:  error.message || "Failed to create the task",
                status: "error",
                });
      },
    });
    return { createTodo, isCreateLoading };
}

export default useCreateTodo
