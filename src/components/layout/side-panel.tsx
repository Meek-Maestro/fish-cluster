import { Badge, Button, Group, Stack, Text, Box, Image } from "@mantine/core";
import { ops_paths } from "../../pages/nav_builder";
import React from "react";
import { Logo, logo } from "../../assets";
import { NavLink, useLocation } from "react-router-dom";

export default function AppShellNavBar() {
  const location = useLocation();

  return (
    <nav style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <Box
        h={90}
        style={{
          background: "#00345C",
          border: "none",
        }}
      >
        <Group h={`100%`} justify="left" gap="sm" align="center" p={`md`}>
          <Image src={logo} alt="Fishcluster" h={40} w="auto" fit="contain" />
        </Group>
      </Box>

      {/* Navigation Items */}
      <Stack p="md" gap="xs" style={{ flex: 1 }}>
        {ops_paths.map((data, groupIndex) => (
          <React.Fragment key={groupIndex}>
            {data.items?.map((item, itemIndex) => {
              const IconComponent = item.icon;
              const isActive = location.pathname === item.link;
              return (
                <Button
                  key={itemIndex}
                  component={NavLink}
                  to={`${item.link}`}
                  fullWidth
                  h={44}
                  variant={isActive ? "light" : "subtle"}
                  color={isActive ? "blue" : "gray"}
                  justify="space-between"
                  leftSection={
                    IconComponent ? <IconComponent size={18} /> : null
                  }
                  rightSection={
                    item.label === "Alerts" ? (
                      <Badge color="red" size="sm" variant="filled">
                        3
                      </Badge>
                    ) : null
                  }
                  styles={{
                    root: {
                      fontWeight: isActive ? 600 : 500,
                    },
                    inner: {
                      justifyContent: "flex-start",
                    },
                  }}
                >
                  {item.label}
                </Button>
              );
            })}

            {/* Add divider between groups if not last group */}
            {groupIndex < ops_paths.length - 1 && (
              <Box
                style={{
                  height: 1,
                  backgroundColor: "#e9ecef",
                  margin: "0.5rem 0",
                }}
              />
            )}
          </React.Fragment>
        ))}
      </Stack>
    </nav>
  );
}
