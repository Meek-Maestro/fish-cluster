import { Button as MantineButton, type ButtonProps } from "@mantine/core";

type ExtendedVariant = ButtonProps["variant"] | "danger" | "ghost" | "success";

interface AppButtonProps extends Omit<ButtonProps, "variant"> {
  variant?: ExtendedVariant;
}

export const Button = ({ variant, ...props }: AppButtonProps) => {
  return <MantineButton variant={variant as ButtonProps["variant"]} {...props} />;
};