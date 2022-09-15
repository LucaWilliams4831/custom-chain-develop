/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "ddeedsix.customchain.nameservice";

export interface Bind {
  nameService: string;
  creator: string;
}

const baseBind: object = { nameService: "", creator: "" };

export const Bind = {
  encode(message: Bind, writer: Writer = Writer.create()): Writer {
    if (message.nameService !== "") {
      writer.uint32(10).string(message.nameService);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Bind {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBind } as Bind;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nameService = reader.string();
          break;
        case 2:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Bind {
    const message = { ...baseBind } as Bind;
    if (object.nameService !== undefined && object.nameService !== null) {
      message.nameService = String(object.nameService);
    } else {
      message.nameService = "";
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: Bind): unknown {
    const obj: any = {};
    message.nameService !== undefined &&
      (obj.nameService = message.nameService);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<Bind>): Bind {
    const message = { ...baseBind } as Bind;
    if (object.nameService !== undefined && object.nameService !== null) {
      message.nameService = object.nameService;
    } else {
      message.nameService = "";
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

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
