import {
  ActionIcon,
  Box,
  Card,
  Grid,
  Group,
  PasswordInput,
  PinInput,
  Stack,
  Text,
  TextInput,
  ThemeIcon,
} from "@mantine/core";
import { IoCloudOfflineOutline, IoAlertCircleOutline } from "react-icons/io5";
import { CgDanger } from "react-icons/cg";
import { CiWarning } from "react-icons/ci";
import { SiNormalizedotcss } from "react-icons/si";
import { MdMail, MdOutlineWater, MdPassword } from "react-icons/md";
import { Button, ThemedChip } from "@/components/common";
import { IoMdEye } from "react-icons/io";

const Dashboard = () => {
  const Card_data = [
    { value: 20, desc: "Total Ponds", color: "blue", icon: MdOutlineWater },
    { value: 1, desc: "Critical", color: "red", icon: CgDanger },
    { value: 1, desc: "Warning", color: "yellow", icon: CiWarning },
    { value: 15, desc: "Normal", color: "green", icon: SiNormalizedotcss },
    { value: 0, desc: "Offline", color: "gray", icon: IoCloudOfflineOutline },
    {
      value: 3,
      desc: "Active Alerts",
      color: "orange",
      icon: IoAlertCircleOutline,
    },
  ];

  return (
    <Box>
      <Text my="sm" fz="h3" fw={600}>
        System Overview
      </Text>
      <Button>Hello</Button>
      <TextInput
        leftSection={
          <ActionIcon variant="subtle" color="gray">
            <IoMdEye size={30} />
          </ActionIcon>
        }
        rightSection={
          <ActionIcon variant="subtle" color="gray">
            <MdMail size={30} />
          </ActionIcon>
        }
        size="lg"
        // variant="outline"
        // error="Hello my friend"
        label={"Email"}
      />
      <PinInput size="xl" length={6} gap={`20px`} />
      <PasswordInput
        leftSection={
          <ActionIcon variant="subtle" color="gray">
            <IoMdEye size={30} />
          </ActionIcon>
        }
        rightSection={
          <ActionIcon variant="subtle" color="gray">
            <MdMail size={30} />
          </ActionIcon>
        }
        size="lg"
        placeholder="Enter your password"
        label={"Password"}
      />
      <ThemedChip size="lg">
       
      </ThemedChip>
      <Grid>
        {Card_data.map((data, indx) => {
          const Icon = data.icon;
          return (
            <Grid.Col key={indx} span={4}>
              <Card
                shadow="sm"
                padding="lg"
                radius="md"
                withBorder
                style={{
                  borderLeft: `4px solid var(--mantine-color-${data.color}-6)`,
                }}
              >
                <Group justify="space-between" align="center">
                  <Stack gap={0}>
                    <Text
                      fz="h1"
                      fw={600}
                      c={data.desc === "Total Ponds" ? "black" : data.color}
                    >
                      {data.value}
                    </Text>
                    <Text fz="sm" c="dimmed">
                      {data.desc}
                    </Text>
                  </Stack>

                  <ThemeIcon
                    size="xl"
                    radius="md"
                    variant="light"
                    color={data.color}
                  >
                    <Icon size={22} />
                  </ThemeIcon>
                </Group>
              </Card>
            </Grid.Col>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Dashboard;
