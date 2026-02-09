import {
  Badge,
  Group,
  Image,
  Modal,
  Stack,
  Text,
  Title,
  Box,
  Paper,
  Progress,
  ThemeIcon,
  Grid,
  Divider,
  Card,
  Button,
} from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import {
  Droplet,
  Thermometer,
  Activity,
  Clock,
  Fish,
  Eye,
  TrendingUp,
  AlertCircle,
  Play,
  StopCircle as Stop,
} from "lucide-react";

const PondDetailsModal = ({ opened, onClose, pond }: any) => {
  console.log(pond, opened);
  if (!pond) return null;

  // Mock sensor data
  const sensorData = {
    dissolvedOxygen: 6.4,
    doTarget: { min: 6.0, max: 8.0 },
    temperature: 27.3,
    tempTarget: { min: 26, max: 30 },
    lastFeed: "2 hours ago",
    feedAmount: "3.2 kg",
    fishCount: 1240,
    healthScore: 94,
    activityLevel: "Normal",
    anomalies: [],
  };

  const getStatusColor = (status: string) => {
    return status === "Active" ? "teal" : "red";
  };

  const getHealthColor = (score: number) => {
    if (score >= 90) return "teal";
    if (score >= 75) return "yellow";
    return "red";
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      size="xl"
      padding="xl"
      radius="md"
      styles={{
        title: {
          fontSize: "1.5rem",
          fontWeight: 700,
        },
      }}
    >
      <Stack gap="lg">
        {/* Header with Status */}
        <Box>
          <Group justify="space-between" mb="xs">
            <Title order={3} style={{ color: "#1a1a1a" }}>
              {pond.pond}
            </Title>
            <Badge
              size="lg"
              color={getStatusColor(pond.status)}
              variant="dot"
              styles={{
                root: { textTransform: "uppercase", fontWeight: 600 },
              }}
            >
              {pond.status}
            </Badge>
          </Group>
          <Text size="sm" c="dimmed">
            Location: Sector A3 • Capacity: 50,000L
          </Text>
        </Box>

        <Divider />

        {/* Sensor Readings Grid */}
        <Box>
          <Text fw={600} size="lg" mb="md" style={{ color: "#2c3e50" }}>
            Sensor Readings
          </Text>
          <Grid gutter="md">
            {/* Dissolved Oxygen */}
            <Grid.Col span={6}>
              <Paper
                p="md"
                radius="md"
                withBorder
                style={{ backgroundColor: "#f0fdf4" }}
              >
                <Group gap="sm" mb="xs">
                  <ThemeIcon color="teal" variant="light" size="lg">
                    <Droplet size={20} />
                  </ThemeIcon>
                  <div>
                    <Text size="xs" c="dimmed" tt="uppercase" fw={500}>
                      Dissolved Oxygen
                    </Text>
                    <Group gap="xs" align="baseline">
                      <Text size="xl" fw={700} style={{ color: "#14b8a6" }}>
                        {sensorData.dissolvedOxygen}
                      </Text>
                      <Text size="sm" c="dimmed">
                        mg/L
                      </Text>
                    </Group>
                  </div>
                </Group>
                <Progress
                  value={
                    ((sensorData.dissolvedOxygen - sensorData.doTarget.min) /
                      (sensorData.doTarget.max - sensorData.doTarget.min)) *
                    100
                  }
                  color="teal"
                  size="sm"
                  radius="xl"
                />
                <Text size="xs" c="dimmed" mt="xs">
                  Target: {sensorData.doTarget.min} - {sensorData.doTarget.max}{" "}
                  mg/L
                </Text>
              </Paper>
            </Grid.Col>

            {/* Temperature */}
            <Grid.Col span={6}>
              <Paper
                p="md"
                radius="md"
                withBorder
                style={{ backgroundColor: "#fef2f2" }}
              >
                <Group gap="sm" mb="xs">
                  <ThemeIcon color="red" variant="light" size="lg">
                    <Thermometer size={20} />
                  </ThemeIcon>
                  <div>
                    <Text size="xs" c="dimmed" tt="uppercase" fw={500}>
                      Temperature
                    </Text>
                    <Group gap="xs" align="baseline">
                      <Text size="xl" fw={700} style={{ color: "#ef4444" }}>
                        {sensorData.temperature}
                      </Text>
                      <Text size="sm" c="dimmed">
                        °C
                      </Text>
                    </Group>
                  </div>
                </Group>
                <Progress
                  value={
                    ((sensorData.temperature - sensorData.tempTarget.min) /
                      (sensorData.tempTarget.max - sensorData.tempTarget.min)) *
                    100
                  }
                  color="red"
                  size="sm"
                  radius="xl"
                />
                <Text size="xs" c="dimmed" mt="xs">
                  Target: {sensorData.tempTarget.min} -{" "}
                  {sensorData.tempTarget.max} °C
                </Text>
              </Paper>
            </Grid.Col>
          </Grid>
        </Box>

        <Divider />

        {/* Feeding Info */}
        <Box>
          <Text fw={600} size="lg" mb="md" style={{ color: "#2c3e50" }}>
            Feeding Status
          </Text>
          <Paper
            p="md"
            radius="md"
            withBorder
            style={{ backgroundColor: "#fefce8" }}
          >
            <Group>
              <ThemeIcon color="yellow" variant="light" size="lg">
                <Clock size={20} />
              </ThemeIcon>
              <div style={{ flex: 1 }}>
                <Text size="sm" c="dimmed">
                  Last feeding
                </Text>
                <Group gap="xs" align="baseline">
                  <Text fw={600} size="lg">
                    {sensorData.lastFeed}
                  </Text>
                  <Badge color="yellow" variant="light" size="sm">
                    {sensorData.feedAmount}
                  </Badge>
                </Group>
              </div>
            </Group>
          </Paper>
        </Box>

        <Divider />

        {/* Pond State & Health */}
        <Box>
          <Text fw={600} size="lg" mb="md" style={{ color: "#2c3e50" }}>
            Pond Health
          </Text>
          <Grid gutter="md">
            <Grid.Col span={6}>
              <Paper p="md" radius="md" withBorder>
                <Group gap="sm" mb="xs">
                  <ThemeIcon color="blue" variant="light" size="lg">
                    <Activity size={20} />
                  </ThemeIcon>
                  <div>
                    <Text size="xs" c="dimmed" tt="uppercase" fw={500}>
                      Current State
                    </Text>
                    <Badge size="xl" color="teal" variant="light" mt="xs">
                      NORMAL
                    </Badge>
                  </div>
                </Group>
              </Paper>
            </Grid.Col>
            <Grid.Col span={6}>
              <Paper p="md" radius="md" withBorder>
                <Group gap="sm" mb="xs">
                  <ThemeIcon color="grape" variant="light" size="lg">
                    <TrendingUp size={20} />
                  </ThemeIcon>
                  <div>
                    <Text size="xs" c="dimmed" tt="uppercase" fw={500}>
                      Health Score
                    </Text>
                    <Text
                      size="xl"
                      fw={700}
                      style={{
                        color:
                          getHealthColor(sensorData.healthScore) === "teal"
                            ? "#14b8a6"
                            : "#eab308",
                      }}
                    >
                      {sensorData.healthScore}/100
                    </Text>
                  </div>
                </Group>
                <Progress
                  value={sensorData.healthScore}
                  color={getHealthColor(sensorData.healthScore)}
                  size="sm"
                  radius="xl"
                />
              </Paper>
            </Grid.Col>
          </Grid>
        </Box>

        <Divider />

        {/* Computer Vision */}
        <Box>
          <Group justify="space-between" mb="md">
            <Text fw={600} size="lg" style={{ color: "#2c3e50" }}>
              Computer Vision Analysis
            </Text>
            <Badge
              leftSection={<Eye size={14} />}
              color="violet"
              variant="light"
            >
              Live Feed
            </Badge>
          </Group>

          <Paper radius="md" withBorder p={0} style={{ overflow: "hidden" }}>
            <Box style={{ position: "relative" }}>
              <Image
                src="https://via.placeholder.com/800x400/1e293b/64748b?text=Live+Camera+Feed"
                radius="md"
                style={{ display: "block" }}
              />
              {/* Overlay info */}
              <Box
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                  padding: "1.5rem 1rem 1rem 1rem",
                }}
              >
                <Group justify="space-between">
                  <Group gap="lg">
                    <div>
                      <Text size="xs" c="gray.3" mb={2}>
                        Activity Level
                      </Text>
                      <Badge color="teal" variant="filled" size="lg">
                        {sensorData.activityLevel}
                      </Badge>
                    </div>
                    <div>
                      <Text size="xs" c="gray.3" mb={2}>
                        Fish Count
                      </Text>
                      <Group gap={4}>
                        <Fish size={16} color="white" />
                        <Text c="white" fw={600} size="lg">
                          ~{sensorData.fishCount.toLocaleString()}
                        </Text>
                      </Group>
                    </div>
                  </Group>
                  {sensorData.anomalies.length === 0 && (
                    <Badge
                      color="teal"
                      size="lg"
                      variant="filled"
                      leftSection={<AlertCircle size={14} />}
                    >
                      No anomalies detected
                    </Badge>
                  )}
                </Group>
              </Box>
            </Box>
          </Paper>

          {/* AI Insights */}
          <Paper
            p="md"
            radius="md"
            mt="sm"
            style={{ backgroundColor: "#f8f9fa", border: "1px solid #e9ecef" }}
          >
            <Group gap="xs">
              <ThemeIcon color="violet" variant="light" size="sm">
                <Activity size={14} />
              </ThemeIcon>
              <Text size="sm" c="dimmed">
                <Text span fw={500} c="dark">
                  AI Analysis:{" "}
                </Text>
                Fish distribution is even, feeding response is strong, no
                surface gasping detected
              </Text>
            </Group>
          </Paper>
        </Box>
        <Card shadow="sm">
          <Text size="lg" fw={500} mb="xs">
            Manual Feeding Controls
          </Text>
          <Group>
            <Button
              onClick={() => {
                showNotification({
                  message: "Manual feeding triggered successfully!",
                });
              }}
              leftSection={<Play size={14} />}
            >
              Trigger Manual Feed
            </Button>
            <Button
              onClick={() =>
                showNotification({
                  color:'red',
                  message: "Manual feeding stopped!",
                })
              }
              bg={`red`}
              leftSection={<Stop size={14} />}
            >
              Stop Feeding
            </Button>
          </Group>
        </Card>
      </Stack>
    </Modal>
  );
};

export default PondDetailsModal;
