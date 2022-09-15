/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "ddeedsix.customchain.nameservice";

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

const baseMsgCreateBind: object = { creator: "", nameService: "" };

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
    message.nameService !== undefined &&
      (obj.nameService = message.nameService);
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
  },
};

const baseMsgCreateBindResponse: object = {};

export const MsgCreateBindResponse = {
  encode(_: MsgCreateBindResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateBindResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateBindResponse } as MsgCreateBindResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateBindResponse {
    const message = { ...baseMsgCreateBindResponse } as MsgCreateBindResponse;
    return message;
  },

  toJSON(_: MsgCreateBindResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCreateBindResponse>): MsgCreateBindResponse {
    const message = { ...baseMsgCreateBindResponse } as MsgCreateBindResponse;
    return message;
  },
};

const baseMsgUpdateBind: object = { creator: "", nameService: "" };

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
    message.nameService !== undefined &&
      (obj.nameService = message.nameService);
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
  },
};

const baseMsgUpdateBindResponse: object = {};

export const MsgUpdateBindResponse = {
  encode(_: MsgUpdateBindResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateBindResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateBindResponse } as MsgUpdateBindResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateBindResponse {
    const message = { ...baseMsgUpdateBindResponse } as MsgUpdateBindResponse;
    return message;
  },

  toJSON(_: MsgUpdateBindResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateBindResponse>): MsgUpdateBindResponse {
    const message = { ...baseMsgUpdateBindResponse } as MsgUpdateBindResponse;
    return message;
  },
};

const baseMsgDeleteBind: object = { creator: "", nameService: "" };

export const MsgDeleteBind = {
  encode(message: MsgDeleteBind, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.nameService !== "") {
      writer.uint32(18).string(message.nameService);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteBind {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteBind } as MsgDeleteBind;
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

  fromJSON(object: any): MsgDeleteBind {
    const message = { ...baseMsgDeleteBind } as MsgDeleteBind;
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

  toJSON(message: MsgDeleteBind): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.nameService !== undefined &&
      (obj.nameService = message.nameService);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteBind>): MsgDeleteBind {
    const message = { ...baseMsgDeleteBind } as MsgDeleteBind;
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
  },
};

const baseMsgDeleteBindResponse: object = {};

export const MsgDeleteBindResponse = {
  encode(_: MsgDeleteBindResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteBindResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteBindResponse } as MsgDeleteBindResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteBindResponse {
    const message = { ...baseMsgDeleteBindResponse } as MsgDeleteBindResponse;
    return message;
  },

  toJSON(_: MsgDeleteBindResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDeleteBindResponse>): MsgDeleteBindResponse {
    const message = { ...baseMsgDeleteBindResponse } as MsgDeleteBindResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateBind(request: MsgCreateBind): Promise<MsgCreateBindResponse>;
  UpdateBind(request: MsgUpdateBind): Promise<MsgUpdateBindResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeleteBind(request: MsgDeleteBind): Promise<MsgDeleteBindResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateBind(request: MsgCreateBind): Promise<MsgCreateBindResponse> {
    const data = MsgCreateBind.encode(request).finish();
    const promise = this.rpc.request(
      "ddeedsix.customchain.nameservice.Msg",
      "CreateBind",
      data
    );
    return promise.then((data) =>
      MsgCreateBindResponse.decode(new Reader(data))
    );
  }

  UpdateBind(request: MsgUpdateBind): Promise<MsgUpdateBindResponse> {
    const data = MsgUpdateBind.encode(request).finish();
    const promise = this.rpc.request(
      "ddeedsix.customchain.nameservice.Msg",
      "UpdateBind",
      data
    );
    return promise.then((data) =>
      MsgUpdateBindResponse.decode(new Reader(data))
    );
  }

  DeleteBind(request: MsgDeleteBind): Promise<MsgDeleteBindResponse> {
    const data = MsgDeleteBind.encode(request).finish();
    const promise = this.rpc.request(
      "ddeedsix.customchain.nameservice.Msg",
      "DeleteBind",
      data
    );
    return promise.then((data) =>
      MsgDeleteBindResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
