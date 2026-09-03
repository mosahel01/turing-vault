import { defineConfig } from "vite";

export default defineConfig({
    build: {
        lib: {
            entry: "main.js",
            formats: ["es"],
        },
    },
});

/*
  build.lib -> tells Vite that we're generating a "library" bundle
  there is a single JavaScript entry which will be packaged
  (idea for CLIs or libraries), the output can be executed in Nodejs

  entry: 'main.js' sets entry point for bundle as 'main.js'
  formats: ['es'] instructs Vite to output bundle in ES module formats
*/