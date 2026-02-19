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
        `tg:join?invite=jbSDkmCvBQEyNTk0?address=${encodeURIComponent(
          address
        )}&signature=${encodeURIComponent(signature)}&chainId=${encodeURIComponent(chainId)}`
      );
    }

    run();
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
