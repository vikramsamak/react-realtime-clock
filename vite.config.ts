import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/RealTimeClock.tsx"),
      name: "ReactRealTimeWatch",
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
