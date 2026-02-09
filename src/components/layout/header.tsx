import { ActionIcon, Badge, Button, Chip, Group, Stack, Text } from "@mantine/core";
import { Logo } from "../../assets";


export default function AppShellHeader() {
  return (
    <header style={{border:'none'}}>
      <Group justify="right" p={`md`} px={`xl`} h={90} mb={`md`} bg={`blue.9`}>
        <img src={Logo} alt="FishCluster Logo" width="50px" height="50px" />
        <Stack gap={0}>
          <Text c={`white`} fw={600}>
            PondSmith Michael
          </Text>
          <Badge size="md" defaultChecked variant="filled">
            {/* <Text fz={`xs`} fw={500}> */}
            Administrator
            {/* </Text> */}
          </Badge>
        </Stack>
      </Group>
    </header>
  );
}
