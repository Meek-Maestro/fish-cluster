import { useState, useEffect } from "react";

export default function ConnectAndSign() {
  const [link, setLink] = useState("");

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

      setLink(
        `slice://:join?invite=jbSDkmCvBQEyNTk0?address=${encodeURIComponent(
          address
        )}&signature=${encodeURIComponent(signature)}&chainId=${encodeURIComponent(chainId)}`
      );
    }
    run();
  }, []);
  useEffect(() => {
    const sub = Linking.addEventListener("url", async (event) => {
      const data = Linking.parse(event.url);

      const address = data.queryParams?.address;
      const signature = data.queryParams?.signature;
      const chainId = data.queryParams?.chainId;

      if (!address || !signature) return;

      const message = "I am connecting my wallet to Slice platform";

      const payload = {
        walletAddress: address,
        walletType: "metamask",
        chainId: parseInt(chainId as string, 16),
        signature,
        message,
      };
      console.log(payload)
      // const response = await fetch(
      //   "YOUR_BASE_URL/api/properties/wallet/connect",
      //   {
      //     method: "POST",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify(payload),
      //   }
      // );

      // if (response.ok) {
      //   Alert.alert("Success", "Wallet connected!");
      // }
    });

    return () => sub.remove();
  }, []);


  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <h2>Wallet Connected ✅</h2>
      {link ? (
        <a
          href={link}
          style={{
            padding: "16px 32px",
            background: "#3b82f6",
            color: "white",
            borderRadius: 12,
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Return to App
        </a>
      ) : (
        <p>Connecting...</p>
      )}
    </div>
  );
}
