"use client";

import { useState, useEffect } from "react";
import { mina } from "@/lib/wallet";
import { connect } from "@/lib/wallet";

import { Button } from "@nextui-org/button";
import { subtitle, title } from "@/components/primitives";
import { Input } from "@nextui-org/input";

const tokenName = "mina-protocol";

export default function SendPage() {
  const [amount, setAmount] = useState("");
  const [recipient, setRecipient] = useState("");
  const [connected, setConnected] = useState(false);

  const handleConnectWallet = () => {
    connect()
      .then(() => setConnected(true))
      .catch((err) => console.log(err));
  };

  const handleSend = async () => {
    try {
      mina
        ?.sendPayment({
          amount: amount,
          to: recipient,
          fee: "",
          memo: "",
        })
        .catch((err: any) => err);
    } catch (error: any) {
      console.error(error);
    }
  };
  return (
    <div className="pb-6 relative">
      <h1 className={`${title()}`}>Send</h1>

      <div className="flex flex-col gap-2 text-left mt-10">
        <h2 className={subtitle({ noMargin: true })}>
          Provide a specific amount and the recipient Mina address to transfer
          testnet Mina on Zeko
        </h2>
        <h2 className={subtitle({ noMargin: true })}>
          These have no value, monetary or otherwise, and are solely useful for
          experimenting on testnets.
        </h2>
        <h2 className={subtitle({ noMargin: true })}>
          tMINA cannot be sold and is not redeemable for any cryptocurrency or
          digital asset.
        </h2>
      </div>
      <div className="w-full flex flex-col gap-2 mt-10">
        <div className="p-4 pl-0 pb-0">
          <div className="text-md mb-2">You are sending</div>
          <div className="flex flex-row gap-5 items-center">
            <Input
              className="w-full md:w-[33rem]"
              variant="bordered"
              placeholder="0"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
            />
            <div className="text-2xl">tMINA</div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col gap-2 mt-10">
        <span className="text-md">To</span>
        <Input
          className="w-full md:w-[40rem] mb-5"
          variant="bordered"
          type="email"
          placeholder="B62..."
          value={recipient}
          onChange={(event) => setRecipient(event.target.value)}
        />
        {connected ? (
          <Button
            color="primary"
            className="w-full md:w-fit"
            radius="sm"
            onClick={handleSend}
          >
            SEND ➜
          </Button>
        ) : (
          <Button
            color="primary"
            className="w-full md:w-fit"
            radius="sm"
            onClick={handleConnectWallet}
          >
            Connect Wallet ➜
          </Button>
        )}
      </div>
    </div>
  );
}
