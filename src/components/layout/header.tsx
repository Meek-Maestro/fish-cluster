import { Avatar, Badge, Group, Stack, Text } from "@mantine/core";
import { Logo } from "../../assets";

export default function AppShellHeader() {
  return (
    <header style={{ border: "none", backgroundColor: "" }}>
      <Group justify="right" p={`md`} px={`xl`} h={90} mb={`md`} bg={`#00345C`}>
        {/* <img src={Logo} alt="FishCluster Logo" width="50px" height="50px" /> */}
        <Avatar w={`50px`} h={`50px`} bg={`white`} bd={3}>
          PM
        </Avatar>
        <Stack gap={0}>
          <Text c={`white`} fw={500}>
            PondSmith Michael
          </Text>
          <Badge size="md" defaultChecked variant="filled" bg={`blue.3`}>
            <Text fz={`10px`} fw={400}>
              Administrator
            </Text>
          </Badge>
        </Stack>
      </Group>
    </header>
  );
}
