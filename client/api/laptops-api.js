import server from "./server";
export function getAllLaptops() {
    return server.get("/api/laptops").then(({ data }) => {
        return data;
    });
}