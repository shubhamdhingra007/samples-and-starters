import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";


export default [
    {
        input: { core: "src/core/index.ts", legacy: "src/legacy/index.ts", react: "src/react/index.ts" },
        external: ["react-dom"],
        output: [
            {
                entryFileNames: "[name]/index.cjs.js",
                format: "cjs",
                dir: "dist",
            },
            {
                entryFileNames: "[name]/index.esm.js",
                format: "esm",
                dir: "dist",
            },
        ],
        plugins: [
            peerDepsExternal(),
            resolve(),
            commonjs(),
            typescript({ tsconfig: "./tsconfig.json" }),
            postcss(),
            terser(),
        ],
    },
    {
        input: { core: "src/core/index.ts", legacy: "src/legacy/index.ts", react: "src/react/index.ts" },
        output: [
            {
                entryFileNames: "[name]/index.d.ts",
                format: "esm",
                dir: "dist"
            },
        ],
        plugins: [dts()],
        external: [/\.scss$/],
    }
];