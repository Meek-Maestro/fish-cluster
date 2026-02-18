import { useEffect } from "react";

export default function ConnectAndSign() {
  useEffect(() => {
    async function run() {
      const accounts = await (window as any).ethereum.request({
        method: "eth_requestAccounts",
      });

      const address = accounts[0];

      const message = "I am connecting my wallet to Slice platform";

      const signature = await (window as any).ethereum.request({
        method: "personal_sign",
        params: [message, address],
      });

      const chainId = await (window as any).ethereum.request({
        method: "eth_chainId",
      });

      window.location.href =
        `slice://wallet-verified?address=${address}&signature=${signature}&chainId=${chainId}`;
    }

    run();
  }, []);

  return <>Connecting...</>;
}
