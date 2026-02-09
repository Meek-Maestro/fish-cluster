import { useState } from "react";
import {
  Badge,
  Box,
  Button,
  Center,
  Group,
  Stack,
  Text,
  Title,
  Paper,
} from "@mantine/core";
import { DataTable } from "mantine-datatable";
import { AlertCircle, CheckCircle, Clock } from "lucide-react";

const initialAlerts = [
  {
    id: 1,
    type: "Low Oxygen",
    pondName: "North Pond",
    timestamp: "2026-02-06 09:14",
    severity: "Critical",
    acknowledged: false,
    message: "Dissolved oxygen below critical threshold (4.2 mg/L)",
  },
  {
    id: 2,
    type: "Device Offline",
    pondName: "South Pond",
    timestamp: "2026-02-06 08:02",
    severity: "High",
    acknowledged: false,
    message: "Sensor array has lost connection",
  },
  {
    id: 3,
    type: "Missed Feed",
    pondName: "East Pond",
    timestamp: "2026-02-05 18:45",
    severity: "Medium",
    acknowledged: true,
    message: "Scheduled feed at 09:00 was not executed",
  },
];

const severityColor: Record<string, string> = {
  Critical: "red",
  High: "orange",
  Medium: "yellow",
  Low: "gray",
};

const Alert = () => {
  const [alerts, setAlerts] = useState(initialAlerts);

  const acknowledgeAlert = (id: number) => {
    setAlerts((prev) =>
      prev.map((alert) =>
        alert.id === id ? { ...alert, acknowledged: true } : alert,
      ),
    );
  };

  const activeAlerts = alerts.filter((a) => !a.acknowledged).length;

  return (
    <Stack gap="lg">
      <Group justify="space-between" align="center">
        <div>
          <Title order={3}>Alerts & Events</Title>
          <Text size="sm" c="dimmed" mt={4}>
            {activeAlerts} active {activeAlerts === 1 ? "alert" : "alerts"}
          </Text>
        </div>
        {activeAlerts > 0 && (
          <Badge
            size="lg"
            color="red"
            variant="light"
            leftSection={<AlertCircle size={14} />}
          >
            {activeAlerts} Unacknowledged
          </Badge>
        )}
      </Group>

      <DataTable
        withTableBorder
        borderRadius="sm"
        striped
        highlightOnHover
        records={alerts}
        columns={[
          {
            accessor: "type",
            title: "Alert Type",
            render: ({ type, severity }) => (
              <Group gap="xs">
                <AlertCircle
                  size={16}
                  color={
                    severity === "Critical"
                      ? "#fa5252"
                      : severity === "High"
                        ? "#fd7e14"
                        : "#fab005"
                  }
                />
                <Text fw={500}>{type}</Text>
              </Group>
            ),
          },
          {
            accessor: "pondName",
            title: "Pond",
            render: ({ pondName }) => <Text size="sm">{pondName}</Text>,
          },
          {
            accessor: "message",
            title: "Details",
            render: ({ message }) => (
              <Text size="sm" c="dimmed" lineClamp={1}>
                {message}
              </Text>
            ),
          },
          {
            accessor: "timestamp",
            title: "Timestamp",
            render: ({ timestamp }) => (
              <Group gap="xs">
                <Clock size={14} color="#868e96" />
                <Text size="sm" c="dimmed">
                  {timestamp}
                </Text>
              </Group>
            ),
          },
          {
            accessor: "severity",
            title: "Severity",
            render: ({ severity }) => (
              <Badge color={severityColor[severity]} variant="light">
                {severity}
              </Badge>
            ),
          },
          {
            accessor: "acknowledged",
            title: "Status",
            textAlign: "center",
            render: ({ acknowledged, id }) =>
              acknowledged ? (
                <Group gap="xs" justify="center">
                  <CheckCircle size={16} color="#12b886" />
                  <Text size="sm" c="teal" fw={500}>
                    Acknowledged
                  </Text>
                </Group>
              ) : (
                <Button
                  size="sm"
                  variant="light"
                  color="blue"
                  onClick={() => acknowledgeAlert(id)}
                >
                  Acknowledge
                </Button>
              ),
          },
        ]}
        rowStyle={({ acknowledged }) => ({
          opacity: acknowledged ? 0.6 : 1,
        })}
      />
    </Stack>
  );
};

export default Alert;
