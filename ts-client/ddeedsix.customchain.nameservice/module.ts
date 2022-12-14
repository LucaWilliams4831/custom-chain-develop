// Generated by Ignite ignite.com/cli

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, DeliverTxResponse } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { IgniteClient } from "../client"
import { MissingWalletError } from "../helpers"
import { Api } from "./rest";
import { MsgDeleteBind } from "./types/nameservice/tx";
import { MsgCreateBind } from "./types/nameservice/tx";
import { MsgUpdateBind } from "./types/nameservice/tx";


export { MsgDeleteBind, MsgCreateBind, MsgUpdateBind };

type sendMsgDeleteBindParams = {
  value: MsgDeleteBind,
  fee?: StdFee,
  memo?: string
};

type sendMsgCreateBindParams = {
  value: MsgCreateBind,
  fee?: StdFee,
  memo?: string
};

type sendMsgUpdateBindParams = {
  value: MsgUpdateBind,
  fee?: StdFee,
  memo?: string
};


type msgDeleteBindParams = {
  value: MsgDeleteBind,
};

type msgCreateBindParams = {
  value: MsgCreateBind,
};

type msgUpdateBindParams = {
  value: MsgUpdateBind,
};


export const registry = new Registry(msgTypes);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
	prefix: string
	signer?: OfflineSigner
}

export const txClient = ({ signer, prefix, addr }: TxClientOptions = { addr: "http://localhost:26657", prefix: "cosmos" }) => {

  return {
		
		async sendMsgDeleteBind({ value, fee, memo }: sendMsgDeleteBindParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgDeleteBind: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgDeleteBind({ value: MsgDeleteBind.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgDeleteBind: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgCreateBind({ value, fee, memo }: sendMsgCreateBindParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgCreateBind: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgCreateBind({ value: MsgCreateBind.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgCreateBind: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgUpdateBind({ value, fee, memo }: sendMsgUpdateBindParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUpdateBind: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgUpdateBind({ value: MsgUpdateBind.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUpdateBind: Could not broadcast Tx: '+ e.message)
			}
		},
		
		
		msgDeleteBind({ value }: msgDeleteBindParams): EncodeObject {
			try {
				return { typeUrl: "/ddeedsix.customchain.nameservice.MsgDeleteBind", value: MsgDeleteBind.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgDeleteBind: Could not create message: ' + e.message)
			}
		},
		
		msgCreateBind({ value }: msgCreateBindParams): EncodeObject {
			try {
				return { typeUrl: "/ddeedsix.customchain.nameservice.MsgCreateBind", value: MsgCreateBind.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgCreateBind: Could not create message: ' + e.message)
			}
		},
		
		msgUpdateBind({ value }: msgUpdateBindParams): EncodeObject {
			try {
				return { typeUrl: "/ddeedsix.customchain.nameservice.MsgUpdateBind", value: MsgUpdateBind.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUpdateBind: Could not create message: ' + e.message)
			}
		},
		
	}
};

interface QueryClientOptions {
  addr: string
}

export const queryClient = ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

class SDKModule {
	public query: ReturnType<typeof queryClient>;
	public tx: ReturnType<typeof txClient>;
	
	public registry: Array<[string, GeneratedType]>;

	constructor(client: IgniteClient) {		
	
		this.query = queryClient({ addr: client.env.apiURL });
		this.tx = txClient({ signer: client.signer, addr: client.env.rpcURL, prefix: client.env.prefix ?? "cosmos" });
	}
};

const Module = (test: IgniteClient) => {
	return {
		module: {
			DdeedsixCustomchainNameservice: new SDKModule(test)
		},
		registry: msgTypes
  }
}
export default Module;