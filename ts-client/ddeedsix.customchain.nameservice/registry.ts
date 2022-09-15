import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgDeleteBind } from "./types/nameservice/tx";
import { MsgCreateBind } from "./types/nameservice/tx";
import { MsgUpdateBind } from "./types/nameservice/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/ddeedsix.customchain.nameservice.MsgDeleteBind", MsgDeleteBind],
    ["/ddeedsix.customchain.nameservice.MsgCreateBind", MsgCreateBind],
    ["/ddeedsix.customchain.nameservice.MsgUpdateBind", MsgUpdateBind],
    
];

export { msgTypes }