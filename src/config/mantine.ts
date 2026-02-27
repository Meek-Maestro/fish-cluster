import {
  createTheme,
  Button,
  TextInput,
  type ButtonProps,
  PasswordInput,
  PinInput,
} from "@mantine/core";
import { colors } from "@/constants/color";

const fontFamily = "'Inter', sans-serif";

export const theme = createTheme({
  colors: {
    primary: [
      "#e6f4fe",
      "#cce9fd",
      "#99d3fb",
      "#66bdf9",
      "#33a7f7",
      "#0D91F0", // [5] - main
      "#0b74c0",
      "#085790",
      "#063a60",
      "#031d30",
    ],
    green: [
      "#e8faf4",
      "#d1f5e9",
      "#a3ebcf",
      "#75e1b5",
      "#47d7a0",
      "#1CCE92", // [5] - main
      "#16a575",
      "#107c58",
      "#0b523a",
      "#05291d",
    ],
  },
  fontFamily,
  headings:{
    fontFamily,
  },
  primaryColor: "primary",
  primaryShade: 5,

  components: {
    Button: Button.extend({
      // vars: (theme, props) => {
      //   if (props.variant === "subtle") {
      //     return {
      //       root: {
      //         "--button-bg": colors.accent.subtleGreen,
      //         "--button-color": colors.accent.green,
      //         "--button-hover": colors.accent.subtleGreen,
      //       },
      //     };
      //   }
      //   if (props.variant === "outline") {
      //     return {
      //       root: {
      //         "--button-bd": `1px solid ${colors.brand.primary}`,
      //         "--button-color": colors.brand.primary,
      //         "--button-bg": "transparent",
      //         "--button-hover": "transparent",
      //       },
      //     };
      //   }
      //   if (props.variant === "danger") {
      //     return {
      //       root: {
      //         "--button-bg": "#FF4D4F",
      //         "--button-color": colors.text.inverse,
      //         "--button-hover": "#cc3e40",
      //       },
      //     };
      //   }
      //   if (props.variant === "ghost") {
      //     return {
      //       root: {
      //         "--button-bg": "transparent",
      //         "--button-color": colors.brand.primary,
      //         "--button-hover": "transparent",
      //         "--button-bd": "none",
      //       },
      //     };
      //   }
      //   if (props.variant === "success") {
      //     return {
      //       root: {
      //         "--button-bg": colors.accent.green,
      //         "--button-color": colors.text.inverse,
      //         "--button-hover": "#16a575",
      //       },
      //     };
      //   }
      //   // default filled
      //   return {
      //     root: {
      //       "--button-bg": colors.brand.primary,
      //       "--button-color": colors.text.inverse,
      //       "--button-hover": "#0b74c0",
      //     },
      //   };
      // },
      styles: {
        root: {
          borderRadius: "12px",
          height: "56px",
        },
      },
    }),

    TextInput: TextInput.extend({
      styles: {
        input: {
          // backgroundColor: colors.bg.default,
          // borderColor: "transparent",
          color: colors.text.primary,
          height: "56px",
          borderRadius: "6px",
          "&::placeholder": {
            color: colors.text.secondary,
          },
          "&:focus": {
            borderColor: colors.brand.primary,
          },
        },
        label: {
          color: colors.text.label,
          marginBottom: "4px",
          fontSize: "14px",
           //Medium font for Inter
        },
      },
    }),
    PasswordInput: PasswordInput.extend({
      styles: {
        input: {
          // backgroundColor: colors.bg.default,
          // borderColor: "transparent",
          color: colors.text.primary,
          height: "56px",
          borderRadius: "6px",
          "&::placeholder": {
            color: colors.text.secondary,
          },
          "&:focus": {
            borderColor: colors.brand.primary,
          },
        },
        label: {
          color: colors.text.label,
          marginBottom: "4px",
          fontSize:'14px'
          //Medium font for Inter
        },
      },
    }),
    PinInput:PinInput.extend({
      styles:{
        input:{
         width:'71px',
         height:'56px'
        }
      }
    })
  },
});
