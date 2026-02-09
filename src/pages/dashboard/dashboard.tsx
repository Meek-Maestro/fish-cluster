import { Box, Card, Grid, Stack, Text } from "@mantine/core";

const Dashboard = () => {
  const Card_data = [
    { value: 20, desc: "Total Ponds", color: "blue" },
    { value: 1, desc: "Critical", color: "red" },
    { value: 1, desc: "Warning", color: "yellow" },
    { value: 15, desc: "Normal", color: "green" },
    { value: 0, desc: "Offline", color: "gray" },
    { value: 3, desc: "Active Alerts", color: "orange" },
  ];

  return (
    <Box>
      <Text my="sm" fz="h3" fw={600}>
        System Overview
      </Text>

      <Grid>
        {Card_data.map((data, indx) => (
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
              <Stack gap={0}>
                <Text
                  fz="h1"
                  fw={600}
                  c={data.desc == "Total Ponds" ? "black" : data.color}
                >
                  {data.value}
                </Text>

                <Text fz="sm" c="dimmed">
                  {data.desc}
                </Text>
              </Stack>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;
