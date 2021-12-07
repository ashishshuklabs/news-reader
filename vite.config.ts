import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import rollAliasupPlugin from "@rollup/plugin-alias";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    
    react(),
  ],
  //useless: aliasing doesn't work directly or via rollup options.
  // build: {
  //   rollupOptions:{
  //     plugins:[
  //       rollAliasupPlugin({
  //         entries: [
  //           { find: "@", replacement: resolve(__dirname, "./src") },
  //           {
  //             find: "@components",
  //             replacement: resolve(__dirname, "./src/components"),
  //           },
  //         ],
  //       }),
  //     ]
      
  //   }
  // }
});
