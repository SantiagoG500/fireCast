import { heroui } from '@heroui/react';
import type { Config } from "tailwindcss";
import tailwindcssFormsPlugin from '@tailwindcss/forms';

export default {
  content: [
    "./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
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
      keyframes: {
        hide: {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
        slideDownAndFade: {
          from: { opacity: "0", transform: "translateY(-6px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideLeftAndFade: {
          from: { opacity: "0", transform: "translateX(6px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        slideUpAndFade: {
          from: { opacity: "0", transform: "translateY(6px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideRightAndFade: {
          from: { opacity: "0", transform: "translateX(-6px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        accordionOpen: {
          from: { height: "0px" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        accordionClose: {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: { height: "0px" },
        },
        dialogOverlayShow: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        dialogContentShow: {
          from: {
            opacity: "0",
            transform: "translate(-50%, -45%) scale(0.95)",
          },
          to: { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
        },
        drawerSlideLeftAndFade: {
          from: { opacity: "0", transform: "translateX(100%)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        drawerSlideRightAndFade: {
          from: { opacity: "1", transform: "translateX(0)" },
          to: { opacity: "0", transform: "translateX(100%)" },
        },
      },  
      animation: {
        hide: "hide 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideDownAndFade:
          "slideDownAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideLeftAndFade:
          "slideLeftAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideUpAndFade: "slideUpAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideRightAndFade:
          "slideRightAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        // Accordion
        accordionOpen: "accordionOpen 150ms cubic-bezier(0.87, 0, 0.13, 1)",
        accordionClose: "accordionClose 150ms cubic-bezier(0.87, 0, 0.13, 1)",
        // Dialog
        dialogOverlayShow:
          "dialogOverlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        dialogContentShow:
          "dialogContentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        // Drawer
        drawerSlideLeftAndFade:
        "drawerSlideLeftAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        drawerSlideRightAndFade: "drawerSlideRightAndFade 150ms ease-in",
      },

    },
  },
  darkMode: 'class',
  plugins: [
    tailwindcssFormsPlugin({
      strategy: 'class'
    }),
    heroui({
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
              "50": "#fbf1e9",
              "100": "#f4dec9",
              "200": "#eecbaa",
              "300": "#e8b88a",
              "400": "#e1a56b",
              "500": "#db924b",
              "600": "#b5783e",
              "700": "#8e5f31",
              "800": "#684524",
              "900": "#422c17",
              "foreground": "#000",
              "DEFAULT": "#db924b"
            },
            "secondary": {
              "50": "#eaf0f0",
              "100": "#cedadb",
              "200": "#b1c5c6",
              "300": "#94afb0",
              "400": "#779a9b",
              "500": "#5a8486",
              "600": "#4a6d6f",
              "700": "#3b5657",
              "800": "#2b3f40",
              "900": "#1b2828",
              "foreground": "#000",
              "DEFAULT": "#5a8486"
            },
            "success": {
              "50": "#f3f6f0",
              "100": "#e2e9db",
              "200": "#d0ddc6",
              "300": "#bfd0b1",
              "400": "#aec49c",
              "500": "#9db787",
              "600": "#82976f",
              "700": "#667758",
              "800": "#4b5740",
              "900": "#2f3729",
              "foreground": "#000",
              "DEFAULT": "#9db787"
            },
            "warning": {
              "50": "#fff9eb",
              "100": "#fff2cf",
              "200": "#ffeab3",
              "300": "#ffe297",
              "400": "#ffda7b",
              "500": "#ffd25f",
              "600": "#d2ad4e",
              "700": "#a6893e",
              "800": "#79642d",
              "900": "#4d3f1d",
              "foreground": "#000",
              "DEFAULT": "#ffd25f"
            },
            "danger": {
              "50": "#fff2ef",
              "100": "#fedfd9",
              "200": "#fecdc3",
              "300": "#fdbaad",
              "400": "#fda897",
              "500": "#fc9581",
              "600": "#d07b6a",
              "700": "#a46154",
              "800": "#78473d",
              "900": "#4c2d27",
              "foreground": "#000",
              "DEFAULT": "#fc9581"
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
              "50": "#422c17",
              "100": "#684524",
              "200": "#8e5f31",
              "300": "#b5783e",
              "400": "#db924b",
              "500": "#e1a56b",
              "600": "#e8b88a",
              "700": "#eecbaa",
              "800": "#f4dec9",
              "900": "#fbf1e9",
              "foreground": "#000",
              "DEFAULT": "#db924b"
            },
            "secondary": {
              "50": "#1b2828",
              "100": "#2b3f40",
              "200": "#3b5657",
              "300": "#4a6d6f",
              "400": "#5a8486",
              "500": "#779a9b",
              "600": "#94afb0",
              "700": "#b1c5c6",
              "800": "#cedadb",
              "900": "#eaf0f0",
              "foreground": "#000",
              "DEFAULT": "#5a8486"
            },
            "success": {
              "50": "#2f3729",
              "100": "#4b5740",
              "200": "#667758",
              "300": "#82976f",
              "400": "#9db787",
              "500": "#aec49c",
              "600": "#bfd0b1",
              "700": "#d0ddc6",
              "800": "#e2e9db",
              "900": "#f3f6f0",
              "foreground": "#000",
              "DEFAULT": "#9db787"
            },
            "warning": {
              "50": "#4d3f1d",
              "100": "#79642d",
              "200": "#a6893e",
              "300": "#d2ad4e",
              "400": "#ffd25f",
              "500": "#ffda7b",
              "600": "#ffe297",
              "700": "#ffeab3",
              "800": "#fff2cf",
              "900": "#fff9eb",
              "foreground": "#000",
              "DEFAULT": "#ffd25f"
            },
            "danger": {
              "50": "#4c2d27",
              "100": "#78473d",
              "200": "#a46154",
              "300": "#d07b6a",
              "400": "#fc9581",
              "500": "#fda897",
              "600": "#fdbaad",
              "700": "#fecdc3",
              "800": "#fedfd9",
              "900": "#fff2ef",
              "foreground": "#000",
              "DEFAULT": "#fc9581"
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
    }),
  ],
} satisfies Config;



  