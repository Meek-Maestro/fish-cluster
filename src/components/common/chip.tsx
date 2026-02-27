import { Box } from "@mantine/core";
import type { ReactNode } from "react";

interface Props {
  variant?: "danger" | "warning" | "success" | "default";
  children: ReactNode;
  color?: string;
  size?: "xs" | "md" | "lg" | "xl";
}

const variantStyles: Record<
  NonNullable<Props["variant"]>,
  { gradient: string; color: string; border: string }
> = {
  success: {
    gradient: "linear-gradient(135deg, #1CCE921F 0%, #1CCE9210 100%)",
    color: "#1CCE92",
    border: "#1CCE9240",
  },
  warning: {
    gradient: "linear-gradient(135deg, #F59E0B1F 0%, #F59E0B10 100%)",
    color: "#F59E0B",
    border: "#F59E0B40",
  },
  danger: {
    gradient: "linear-gradient(135deg, #EF44441F 0%, #EF444410 100%)",
    color: "#EF4444",
    border: "#EF444440",
  },
  default: {
    gradient: "linear-gradient(135deg, #0D91F01F 0%, #0D91F010 100%)",
    color: "#0D91F0",
    border: "#0D91F040",
  },
};

const ThemedChip: React.FC<Props> = ({
  variant = "default",
  children,
  color,
}) => {
  const styles = variantStyles[variant];

  return (
    <Box
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        paddingInline: 10,
        paddingBlock: 4,
        borderRadius: 12,
        background: color
          ? `linear-gradient(135deg, ${color}1F 0%, ${color}10 100%)`
          : styles.gradient,
        // border: `1px solid ${color ? `${color}40` : styles.border}`,
        color: color ?? styles.color,
        fontSize: 12,
        fontWeight: 500,
        lineHeight: 1.5,
        letterSpacing: "0.01em",
        whiteSpace: "nowrap",
        width: "fit-content",
      }}
    >
      {/* Dot indicator */}
      {/* <Box
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          backgroundColor: "currentColor",
          flexShrink: 0,
          opacity: 0.9,
        }}
      /> */}
      {children}
    </Box>
  );
};

export { ThemedChip };
