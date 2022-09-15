import {
  DirectSecp256k1HdWallet,
  Registry,
  OfflineSigner,
  EncodeObject,
} from "@cosmjs/proto-signing";
import {
  Secp256k1HdWallet,
  createMultisigThresholdPubkey,
  encodeSecp256k1Pubkey,
  makeCosmoshubPath,
  pubkeyToAddress,
  AminoMsg,
} from "@cosmjs/amino";
import { TxRaw } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import {
  SigningStargateClient,
  StargateClient,
  makeMultisignedTx,
  SignerData,
  AminoTypes,
} from "@cosmjs/stargate";
import { SigningCosmWasmClient, CosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { coins } from "@cosmjs/proto-signing";
import { encode } from "uint8-to-base64";
import { MsgCreateBind,   } from "./bind";
import { createBindAdminoTypes } from "./message";

const alice_mnemonic =
  "perfect inquiry index mandate toy coin orchard primary shift moment civil ranch dentist myth asthma horror there myself slice absurd feed oak noodle gather";
const bob_mnemonic =
  "enjoy element close write notable sting afraid order wedding other today south neck speak rabbit motor morning perfect clog all good bless clock addict";
const rpc = "http://localhost:26657";

const customRegistry = new Registry();
customRegistry.register(
  "/ddeedsix.customchain.nameservice.MsgCreateBind",
  MsgCreateBind
);

const alice_binding = async () => { const alice_wallet = await DirectSecp256k1HdWallet.fromMnemonic(alice_mnemonic, {
    prefix: "custom",
  });
  const [alice_account] = await alice_wallet.getAccounts();

  const MsgCreateBind: MsgCreateBind = {
    creator: alice_account.address,
    nameService: "alice.custom",
  }

  const msgCreateBind = {
    typeUrl: "/ddeedsix.customchain.nameservice.MsgCreateBind",
    value: MsgCreateBind,
  };


  const gasLimit = 200000;
  const fee = {
    amount: coins("250000", "stake"),
    gas: gasLimit.toString(),
  };
  
  const alice_client = await SigningCosmWasmClient.connectWithSigner(
    rpc,
    alice_wallet
  );
  const alice_info = await alice_client.getAccount(alice_account.address);
  // const alice_chainId = await alice_client.getChainId();

  // const alice_signerData = {
  //   accountNumber: alice_info.accountNumber,
  //   sequence: alice_info.sequence,
  //   chainId: alice_chainId,
  // };
const client = await SigningCosmWasmClient.connectWithSigner(rpc, alice_wallet,{
    registry: customRegistry,
    aminoTypes: new AminoTypes(createBindAdminoTypes()),
});
const sendData = await client.signAndBroadcast(
  alice_info.address,
  [msgCreateBind],
  fee,
  ""
);
console.log(sendData);
return sendData;
};

const sending = async () => {
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(alice_mnemonic, {
    prefix: "custom",
  });

  const [firstAccount] = await wallet.getAccounts();
  const msgSend = {
    fromAddress: firstAccount.address,
    toAddress: "custom1h7am8y2ua4c2uka3g5xhe3szgazgvjkvfw8s22",
    amount: coins("10000000", "stake"),
  };
  const msg = {
    typeUrl: "/cosmos.bank.v1beta1.MsgSend",
    value: msgSend,
  };
  const gasLimit = 200000;
  const fee = {
    amount: coins("250000", "stake"),
    gas: gasLimit.toString(),
  };
  const client = await SigningStargateClient.connectWithSigner(rpc, wallet);
  const sendData = await client.signAndBroadcast(
    firstAccount.address,
    [msg],
    fee,
    "",
  );
  console.log(sendData);
  return sendData;
};

alice_binding();
// sending()