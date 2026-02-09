import { useEffect, useMemo, useState } from "react";
import {
  Badge,
  Box,
  Button,
  Center,
  Group,
  Select,
  TextInput,
  Text,
} from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { DataTable } from "mantine-datatable";
import { BsArrowRight } from "react-icons/bs";
import { MdSearch } from "react-icons/md";
import { Wifi, WifiOff } from "lucide-react";
import PondDetailsModal from "../../components/common/pond-modal";

const records = [
  {
    id: 1,
    pond: "North Pond",
    status: "Active",
    deviceStatus: "Online",
    updateTime: "2026-02-06",
  },
  {
    id: 2,
    pond: "South Pond",
    status: "Inactive",
    deviceStatus: "Offline",
    updateTime: "2026-02-05",
  },
  {
    id: 3,
    pond: "East Pond",
    status: "Active",
    deviceStatus: "Online",
    updateTime: "2026-02-04",
  },
];

const PAGE_SIZES = [10, 50, 100];

const Ponds = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedPond, setSelectedPond] = useState<any>(null);
  const [opened, setOpened] = useState(false);

  // Filter logic
  const filteredRecords = useMemo(() => {
    return records.filter((record) => {
      const matchesSearch = record.pond
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "all" || record.status.toLowerCase() === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [search, statusFilter]);

  // Pagination logic
  const from = (page - 1) * pageSize;
  const to = from + pageSize;
  const paginatedRecords = filteredRecords.slice(from, to);

  // Reset page when filters change
  useEffect(() => {
    setPage(1);
  }, [search, statusFilter, pageSize]);

  return (
    <>
      <Group mb="md" gap="sm">
        <TextInput
          leftSection={<MdSearch />}
          placeholder="Search ponds..."
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
          style={{ flex: 1, minWidth: 200 }}
        />

        <Select
          placeholder="Filter status"
          value={statusFilter}
          onChange={(value) => setStatusFilter(value ?? "all")}
          data={[
            { label: "All", value: "all" },
            { label: "Active", value: "active" },
            { label: "Inactive", value: "inactive" },
          ]}
          style={{ width: 150 }}
        />
      </Group>

      <DataTable
        withTableBorder
        borderRadius="sm"
        withColumnBorders
        striped
        highlightOnHover
        records={paginatedRecords}
        totalRecords={filteredRecords.length}
        recordsPerPage={pageSize}
        page={page}
        onPageChange={setPage}
        recordsPerPageOptions={PAGE_SIZES}
        onRecordsPerPageChange={setPageSize}
        columns={[
          {
            accessor: "id",
            title: "#",
            textAlign: "right",
            width: 60,
          },
          {
            accessor: "pond",
            title: "Pond Name",
            render: ({ pond }) => (
              <Text fw={500}>{pond}</Text>
            ),
          },
          {
            accessor: "status",
            title: "Status",
            render: ({ status }) => (
              <Badge 
                color={status === "Active" ? "teal" : "#FFC107"}
                variant="light"
              >
                {status}
              </Badge>
            ),
          },
          {
            accessor: "deviceStatus",
            title: "Device Status",
            render: ({ deviceStatus }) => (
              <Group gap="xs">
                {deviceStatus === "Online" ? (
                  <Wifi size={16} color="#12b886" />
                ) : (
                  <WifiOff size={16} color="#FFC107" />
                )}
                <Text size="sm" c={deviceStatus === "Online" ? "teal" : "dimmed"}>
                  {deviceStatus}
                </Text>
              </Group>
            ),
          },
          {
            accessor: "updateTime",
            title: "Last Updated",
            render: ({ updateTime }) => (
              <Text size="sm" c="dimmed">{updateTime}</Text>
            ),
          },
          {
            accessor: "action",
            title: "Actions",
            textAlign: "center",
            render: ({  }) => (
              <Center>
                <Button
                  variant="light"
                  size="sm"
                  rightSection={<BsArrowRight />}
                  onClick={(e) => {
                    // e.stopPropagation();
                    setOpened(true);
                  }}
                >
                  View Details
                </Button>
              </Center>
            ),
          },
        ]}
        onRowClick={({ record }) => {
          setSelectedPond(record);
        }}
      />
      
      <PondDetailsModal
        opened={opened}
        onClose={() => setOpened(false)}
        pond={selectedPond}
      />
    </>
  );
};

export default Ponds;