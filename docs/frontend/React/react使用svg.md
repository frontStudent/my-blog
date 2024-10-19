
可参考https://segmentfault.com/a/1190000043750890；但需部分修改

安装vite-plugin-svgr
npm i vite-plugin-svgr -D

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
    plugins: [react(), svgr()]
});

Change:
import { ReactComponent as ChuteIcon } from '../assets/chute-icon.svg';
to
import ChuteIcon from '../assets/chute-icon.svg?react';