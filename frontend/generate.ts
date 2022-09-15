import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";

const generateKey = async (): Promise<void> => {
  const wallet: DirectSecp256k1HdWallet =
    await DirectSecp256k1HdWallet.generate(24);
  const mnemonic: string = wallet.mnemonic;
  const accounts = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
    prefix: "custom",
  });
  const [account] = await accounts.getAccounts();
  console.log(account.address);
};

generateKey();
