/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../nameservice/params";
import { Bind } from "../nameservice/bind";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "ddeedsix.customchain.nameservice";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetBindRequest {
  nameService: string;
}

export interface QueryGetBindResponse {
  bind: Bind | undefined;
}

export interface QueryAllBindRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllBindResponse {
  bind: Bind[];
  pagination: PageResponse | undefined;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
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

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetBindRequest: object = { nameService: "" };

export const QueryGetBindRequest = {
  encode(
    message: QueryGetBindRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.nameService !== "") {
      writer.uint32(10).string(message.nameService);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetBindRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetBindRequest } as QueryGetBindRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nameService = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetBindRequest {
    const message = { ...baseQueryGetBindRequest } as QueryGetBindRequest;
    if (object.nameService !== undefined && object.nameService !== null) {
      message.nameService = String(object.nameService);
    } else {
      message.nameService = "";
    }
    return message;
  },

  toJSON(message: QueryGetBindRequest): unknown {
    const obj: any = {};
    message.nameService !== undefined &&
      (obj.nameService = message.nameService);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetBindRequest>): QueryGetBindRequest {
    const message = { ...baseQueryGetBindRequest } as QueryGetBindRequest;
    if (object.nameService !== undefined && object.nameService !== null) {
      message.nameService = object.nameService;
    } else {
      message.nameService = "";
    }
    return message;
  },
};

const baseQueryGetBindResponse: object = {};

export const QueryGetBindResponse = {
  encode(
    message: QueryGetBindResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.bind !== undefined) {
      Bind.encode(message.bind, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetBindResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetBindResponse } as QueryGetBindResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bind = Bind.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetBindResponse {
    const message = { ...baseQueryGetBindResponse } as QueryGetBindResponse;
    if (object.bind !== undefined && object.bind !== null) {
      message.bind = Bind.fromJSON(object.bind);
    } else {
      message.bind = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetBindResponse): unknown {
    const obj: any = {};
    message.bind !== undefined &&
      (obj.bind = message.bind ? Bind.toJSON(message.bind) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetBindResponse>): QueryGetBindResponse {
    const message = { ...baseQueryGetBindResponse } as QueryGetBindResponse;
    if (object.bind !== undefined && object.bind !== null) {
      message.bind = Bind.fromPartial(object.bind);
    } else {
      message.bind = undefined;
    }
    return message;
  },
};

const baseQueryAllBindRequest: object = {};

export const QueryAllBindRequest = {
  encode(
    message: QueryAllBindRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllBindRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllBindRequest } as QueryAllBindRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllBindRequest {
    const message = { ...baseQueryAllBindRequest } as QueryAllBindRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllBindRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllBindRequest>): QueryAllBindRequest {
    const message = { ...baseQueryAllBindRequest } as QueryAllBindRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllBindResponse: object = {};

export const QueryAllBindResponse = {
  encode(
    message: QueryAllBindResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.bind) {
      Bind.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllBindResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllBindResponse } as QueryAllBindResponse;
    message.bind = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bind.push(Bind.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllBindResponse {
    const message = { ...baseQueryAllBindResponse } as QueryAllBindResponse;
    message.bind = [];
    if (object.bind !== undefined && object.bind !== null) {
      for (const e of object.bind) {
        message.bind.push(Bind.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllBindResponse): unknown {
    const obj: any = {};
    if (message.bind) {
      obj.bind = message.bind.map((e) => (e ? Bind.toJSON(e) : undefined));
    } else {
      obj.bind = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllBindResponse>): QueryAllBindResponse {
    const message = { ...baseQueryAllBindResponse } as QueryAllBindResponse;
    message.bind = [];
    if (object.bind !== undefined && object.bind !== null) {
      for (const e of object.bind) {
        message.bind.push(Bind.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Bind by index. */
  Bind(request: QueryGetBindRequest): Promise<QueryGetBindResponse>;
  /** Queries a list of Bind items. */
  BindAll(request: QueryAllBindRequest): Promise<QueryAllBindResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ddeedsix.customchain.nameservice.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  Bind(request: QueryGetBindRequest): Promise<QueryGetBindResponse> {
    const data = QueryGetBindRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ddeedsix.customchain.nameservice.Query",
      "Bind",
      data
    );
    return promise.then((data) =>
      QueryGetBindResponse.decode(new Reader(data))
    );
  }

  BindAll(request: QueryAllBindRequest): Promise<QueryAllBindResponse> {
    const data = QueryAllBindRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ddeedsix.customchain.nameservice.Query",
      "BindAll",
      data
    );
    return promise.then((data) =>
      QueryAllBindResponse.decode(new Reader(data))
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
