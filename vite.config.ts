import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": resolve(__dirname, "./src/"),
            "@api": resolve(__dirname, "./src/api"),
            "@components": resolve(__dirname, "./src/components/"),
            "@constants": resolve(__dirname, "./src/constants/index.ts"),
            "@context": resolve(__dirname, "./src/context/"),
            "@helpers": resolve(__dirname, "./src/helpers/"),
            "@hooks": resolve(__dirname, "./src/hooks/"),
            "@routes": resolve(__dirname, "./src/routes/"),
            "@types": resolve(__dirname, "./src/types/index.ts"),
            "@utils": resolve(__dirname, "./src/utils/index.ts"),
        },
    },
});
