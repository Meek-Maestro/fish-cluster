import { MantineProvider } from "@mantine/core";
import { theme } from "../config/mantine";
import AppRootRoute from "../app-route/app-route";
import { Notifications } from "@mantine/notifications";

export default function Main() {
  return (
    <>
      <MantineProvider theme={theme}>
        <Notifications/>
        <App />
      </MantineProvider>
    </>
  );
}

const App = () => {
  return <AppRootRoute/>;
};
