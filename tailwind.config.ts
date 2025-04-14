import { heroui } from '@heroui/react';
import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
    },
  },
  darkMode: 'class',
  plugins: [heroui({
      "themes": {
        "light": {
          "colors": {
            "default": {
              "50": "#f6f5f4",
              "100": "#e9e7e5",
              "200": "#dbd9d6",
              "300": "#cecbc6",
              "400": "#c1bdb7",
              "500": "#b4afa8",
              "600": "#95908b",
              "700": "#75726d",
              "800": "#565350",
              "900": "#363532",
              "foreground": "#000",
              "DEFAULT": "#b4afa8"
            },
            "primary": {
              "50": "#fef3e7",
              "100": "#fde1c6",
              "200": "#fbd0a4",
              "300": "#fabf83",
              "400": "#f8ad61",
              "500": "#f79c40",
              "600": "#cc8135",
              "700": "#a1652a",
              "800": "#754a1e",
              "900": "#4a2f13",
              "foreground": "#000",
              "DEFAULT": "#f79c40"
            },
            "secondary": {
              "50": "#f1fafa",
              "100": "#ddf2f4",
              "200": "#c8ebed",
              "300": "#b4e4e6",
              "400": "#a0dce0",
              "500": "#8cd5d9",
              "600": "#74b0b3",
              "700": "#5b8a8d",
              "800": "#436567",
              "900": "#2a4041",
              "foreground": "#000",
              "DEFAULT": "#8cd5d9"
            },
            "success": {
              "50": "#f5faf1",
              "100": "#e7f4dd",
              "200": "#d9edc8",
              "300": "#cce6b4",
              "400": "#bee0a0",
              "500": "#b0d98c",
              "600": "#91b374",
              "700": "#728d5b",
              "800": "#546743",
              "900": "#35412a",
              "foreground": "#000",
              "DEFAULT": "#b0d98c"
            },
            "warning": {
              "50": "#fffaec",
              "100": "#fff2d1",
              "200": "#ffebb6",
              "300": "#ffe39c",
              "400": "#ffdc81",
              "500": "#ffd466",
              "600": "#d2af54",
              "700": "#a68a42",
              "800": "#796530",
              "900": "#4d401f",
              "foreground": "#000",
              "DEFAULT": "#ffd466"
            },
            "danger": {
              "50": "#fff0ee",
              "100": "#fedcd5",
              "200": "#fdc7bd",
              "300": "#fcb3a5",
              "400": "#fc9e8c",
              "500": "#fb8a74",
              "600": "#cf7260",
              "700": "#a35a4b",
              "800": "#774237",
              "900": "#4b2923",
              "foreground": "#000",
              "DEFAULT": "#fb8a74"
            },
            "background": "#fffbf6",
            "foreground": "#a27225",
            "content1": {
              "DEFAULT": "#fff2e0",
              "foreground": "#000"
            },
            "content2": {
              "DEFAULT": "#ffe9cc",
              "foreground": "#000"
            },
            "content3": {
              "DEFAULT": "#ffe0b8",
              "foreground": "#000"
            },
            "content4": {
              "DEFAULT": "#ffd7a3",
              "foreground": "#000"
            },
            "focus": "#db924b",
            "overlay": "#000000"
          }
        },
        "dark": {
          "colors": {
            "default": {
              "50": "#0d0b0d",
              "100": "#1a161a",
              "200": "#272227",
              "300": "#342d34",
              "400": "#413841",
              "500": "#676067",
              "600": "#8d888d",
              "700": "#b3afb3",
              "800": "#d9d7d9",
              "900": "#ffffff",
              "foreground": "#fff",
              "DEFAULT": "#413841"
            },
            "primary": {
              "50": "#4a2f13",
              "100": "#754a1e",
              "200": "#a1652a",
              "300": "#cc8135",
              "400": "#f79c40",
              "500": "#f8ad61",
              "600": "#fabf83",
              "700": "#fbd0a4",
              "800": "#fde1c6",
              "900": "#fef3e7",
              "foreground": "#000",
              "DEFAULT": "#f79c40"
            },
            "secondary": {
              "50": "#2a4041",
              "100": "#436567",
              "200": "#5b8a8d",
              "300": "#74b0b3",
              "400": "#8cd5d9",
              "500": "#a0dce0",
              "600": "#b4e4e6",
              "700": "#c8ebed",
              "800": "#ddf2f4",
              "900": "#f1fafa",
              "foreground": "#000",
              "DEFAULT": "#8cd5d9"
            },
            "success": {
              "50": "#35412a",
              "100": "#546743",
              "200": "#728d5b",
              "300": "#91b374",
              "400": "#b0d98c",
              "500": "#bee0a0",
              "600": "#cce6b4",
              "700": "#d9edc8",
              "800": "#e7f4dd",
              "900": "#f5faf1",
              "foreground": "#000",
              "DEFAULT": "#b0d98c"
            },
            "warning": {
              "50": "#4d401f",
              "100": "#796530",
              "200": "#a68a42",
              "300": "#d2af54",
              "400": "#ffd466",
              "500": "#ffdc81",
              "600": "#ffe39c",
              "700": "#ffebb6",
              "800": "#fff2d1",
              "900": "#fffaec",
              "foreground": "#000",
              "DEFAULT": "#ffd466"
            },
            "danger": {
              "50": "#4b2923",
              "100": "#774237",
              "200": "#a35a4b",
              "300": "#cf7260",
              "400": "#fb8a74",
              "500": "#fc9e8c",
              "600": "#fcb3a5",
              "700": "#fdc7bd",
              "800": "#fedcd5",
              "900": "#fff0ee",
              "foreground": "#000",
              "DEFAULT": "#fb8a74"
            },
            "background": "#20161F",
            "foreground": "#c59f60",
            "content1": {
              "DEFAULT": "#2c1f2b",
              "foreground": "#fff"
            },
            "content2": {
              "DEFAULT": "#3e2b3c",
              "foreground": "#fff"
            },
            "content3": {
              "DEFAULT": "#50374d",
              "foreground": "#fff"
            },
            "content4": {
              "DEFAULT": "#62435f",
              "foreground": "#fff"
            },
            "focus": "#db924b",
            "overlay": "#ffffff"
          }
        }
      },
      "layout": {
        "disabledOpacity": "0.5"
      }
    })],
} satisfies Config;



  