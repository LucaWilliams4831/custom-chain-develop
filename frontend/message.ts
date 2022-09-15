/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import { AminoConverter } from "@cosmjs/stargate";
import * as Long from "long";
import { AminoMsg, Coin } from "@cosmjs/amino";

export const protobufPackage = "ddeedsix.customchain.tokenmngr";

export interface MsgCreateBind {
  creator: string;
  nameService: string;
}

export interface MsgCreateBindResponse {}

export interface MsgUpdateBind {
  creator: string;
  nameService: string;
}

export interface MsgUpdateBindResponse {}

export interface MsgDeleteBind {
  creator: string;
  nameService: string;
}

export interface MsgDeleteBindResponse {}


const baseMsgUpdateBind: object = {
  creator: "",
  name_service: "",
};

const baseMsgCreateBind: object = {
  creator: "",
  name_service: "",
};

export const MsgCreateBind = {
  encode(message: MsgCreateBind, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.nameService !== "") {
      writer.uint32(18).string(message.nameService);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateBind {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateBind } as MsgCreateBind;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.nameService = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateBind {
    const message = { ...baseMsgCreateBind } as MsgCreateBind;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.nameService !== undefined && object.nameService !== null) {
      message.nameService = String(object.nameService);
    } else {
      message.nameService = "";
    }
    return message;
  },

  toJSON(message: MsgCreateBind): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.nameService !== undefined && (obj.nameService = message.nameService);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateBind>): MsgCreateBind {
    const message = { ...baseMsgCreateBind } as MsgCreateBind;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.nameService !== undefined && object.nameService !== null) {
      message.nameService = object.nameService;
    } else {
      message.nameService = "";
    }
    return message;
  }
};

export const MsgUpdateBind = {
  encode(message: MsgUpdateBind, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.nameService !== "") {
      writer.uint32(18).string(message.nameService);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateBind {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateBind } as MsgUpdateBind;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.nameService = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateBind {
    const message = { ...baseMsgUpdateBind } as MsgUpdateBind;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.nameService !== undefined && object.nameService !== null) {
      message.nameService = String(object.nameService);
    } else {
      message.nameService = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateBind): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.nameService !== undefined && (obj.nameService = message.nameService);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateBind>): MsgUpdateBind {
    const message = { ...baseMsgUpdateBind } as MsgUpdateBind;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.nameService !== undefined && object.nameService !== null) {
      message.nameService = object.nameService;
    } else {
      message.nameService = "";
    }
    return message;
  }
};

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

// if (util.Long !== Long) {
util.Long = Long as any;
configure();
// }


export interface AminoMsgCreateBind extends AminoMsg {
  readonly type: "nameservice/MsgCreateBind";
  readonly value: {
    /** Bech32 account address */
    readonly creator: string;
    /** Bech32 account address */
    readonly nameService: string;
  };
}

export function createBindAdminoTypes(): Record<string, AminoConverter> {
  return {
    "/ddeedsix.customchain.nameservice.MsgCreateBind": {
      aminoType: "nameservice/MsgCreateBind",
      toAmino: ({
        creator,
        nameService,
      }: MsgCreateBind): AminoMsgCreateBind["value"] => ({
        creator: creator,
        nameService: nameService,
      }),
      fromAmino: ({
        creator,
        nameService,
      }: AminoMsgCreateBind["value"]): MsgCreateBind => ({
        creator: creator,
        nameService: nameService,
      })
    }
  };
}