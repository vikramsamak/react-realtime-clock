import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      outDir: "dist",
      copyDtsFiles: true,
      exclude: ["**/*.test.ts", "**/*.test.tsx"],
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "ReactRealTimeClock",
      fileName: (format) => `react-realtime-clock.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "moment", "moment-timezone"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          moment: "moment",
          "moment-timezone": "moment.tz",
        },
      },
    },
  },
});
