import { DirectSecp256k1HdWallet , Registry ,OfflineSigner , EncodeObject} from "@cosmjs/proto-signing";
import { Secp256k1HdWallet , createMultisigThresholdPubkey, encodeSecp256k1Pubkey ,makeCosmoshubPath, pubkeyToAddress, AminoMsg, } from "@cosmjs/amino";
import { TxRaw } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import {
  SigningStargateClient,
  StargateClient,
  makeMultisignedTx,
  SignerData,
  AminoTypes,
} from "@cosmjs/stargate";
import { SigningCosmWasmClient, CosmWasmClient ,} from "@cosmjs/cosmwasm-stargate";
import { coins } from "@cosmjs/proto-signing";
import { encode } from "uint8-to-base64";
import { MsgCreateBind } from "./bind";
import { createBindAdminoTypes } from "./message";


const alice_mnemonic =
  "perfect inquiry index mandate toy coin orchard primary shift moment civil ranch dentist myth asthma horror there myself slice absurd feed oak noodle gather";
const bob_mnemonic =
  "enjoy element close write notable sting afraid order wedding other today south neck speak rabbit motor morning perfect clog all good bless clock addict";
const list_mnemonic = [alice_mnemonic, bob_mnemonic];
const rpc = "http://localhost:26657";

const multisigAccountAddress = "custom10djxz8wmsn82erw0u2atzvlucnkht285p3dzh7";
const customRegistry = new Registry();
customRegistry.register(
  "/ddeedsix.customchain.nameservice.MsgCreateBind",
  MsgCreateBind
);

const signingBindInstruction = (async () => {
  const client = await StargateClient.connect(rpc);
  const accountOnChain = await client.getAccount(multisigAccountAddress);

  const msgSend = {
    fromAddress: accountOnChain.address,
    toAddress: "custom1h7am8y2ua4c2uka3g5xhe3szgazgvjkvfw8s22",
    amount: coins("10000", "stake"),
  };
  const msg = {
    typeUrl: "/cosmos.bank.v1beta1.MsgSend",
    value: msgSend,
  };

  const MsgCreateBind: MsgCreateBind = {
    creator: multisigAccountAddress,
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

  return {
    accountNumber: accountOnChain.accountNumber,
    sequence: accountOnChain.sequence,
    chainId: await client.getChainId(),
    // msgs: [msg],
    msgs: [msgCreateBind],
    fee: fee,
    memo: "bindign with multisig",
  };
})();

const signatureBind = async() =>{
  const [
    [pubkey0, signature0, bodyBytes],
    [pubkey1, signature1],
  ] = await Promise.all(
    list_mnemonic.map(async (i) => {
      // Signing environment
      const wallet:OfflineSigner = await Secp256k1HdWallet.fromMnemonic(i, {prefix: "custom"});
      const pubkey = await encodeSecp256k1Pubkey((await wallet.getAccounts())[0].pubkey);
      const address = (await wallet.getAccounts())[0].address;
      

      // for test send
      // const signingClient = await SigningStargateClient.offline(wallet, {
      //   registry: customRegistry,
      // });

      // for test bind
      const signingClient = await SigningStargateClient.offline(wallet, {
        registry: customRegistry,
        aminoTypes: new AminoTypes(createBindAdminoTypes())
      });
      const signerData: SignerData = {
        accountNumber: (await signingBindInstruction).accountNumber,
        sequence: (await signingBindInstruction).sequence,
        chainId: (await signingBindInstruction).chainId,
      };
      // console.log("signerData", signerData);
      const { bodyBytes: bb, signatures } = await signingClient.sign(
        address,
        (await signingBindInstruction).msgs,
        (await signingBindInstruction).fee,
        (await signingBindInstruction).memo,
        signerData,
      );
      return [pubkey, signatures[0], bb] as const;
    }),
  );
  // console.log(bodyBytes);
  // console.log(pubkey0, signature0, pubkeyToAddress(pubkey0, "custom")); //alice
  // console.log(pubkey1, signature1, pubkeyToAddress(pubkey1, "custom")); 
  return {bodyBytes, pubkey0, signature0, pubkey1, signature1};
}

const multisigBind = async () => {
  const {pubkey0, signature0, pubkey1, signature1, bodyBytes} = await signatureBind();
  const multisigPubkey = await createMultisigThresholdPubkey(
    [pubkey0, pubkey1],
    2,
  );
  const multisigAddress = pubkeyToAddress(multisigPubkey, "custom");
  const address0 = pubkeyToAddress(pubkey0, "custom");
  const address1 = pubkeyToAddress(pubkey1, "custom");
  
  const wallet = await Secp256k1HdWallet.fromMnemonic(
    alice_mnemonic,
    { prefix: "custom" }, // Replace with your own Bech32 address prefix
  );


   const broadcaster = await SigningStargateClient.connectWithSigner(
    rpc,
    wallet,
    {
      registry: customRegistry,
      aminoTypes: new AminoTypes(createBindAdminoTypes())
    }
  )

  // const broadcaster = await SigningCosmWasmClient.connect(rpc); //for test send
  // console.log("####################",broadcaster,"########################");
  const signedTx = await makeMultisignedTx(
    multisigPubkey,
    (await signingBindInstruction).sequence,
    (await signingBindInstruction).fee,
    bodyBytes,
    new Map<string, Uint8Array>([
      [address0, signature0],
      [address1, signature1],
    ]),
  );
  
  // ensure signature is valid
  const result = await broadcaster.broadcastTx(Uint8Array.from(TxRaw.encode(signedTx).finish()));
  console.log(result);
}

// multisigSend();
multisigBind();