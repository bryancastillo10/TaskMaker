import { UseToastOptions } from "@chakra-ui/react";

export const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:3000/api" : "/api";

export type TodoType = {
    _id: number;
    body: string;
    completed: boolean;
}

export const baseToastConfig: UseToastOptions = {
       duration: 5000,
       isClosable: true,
       position: "top",
};
