package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateBind = "create_bind"
	TypeMsgUpdateBind = "update_bind"
	TypeMsgDeleteBind = "delete_bind"
)

var _ sdk.Msg = &MsgCreateBind{}

func NewMsgCreateBind(
	creator string,
	nameService string,

) *MsgCreateBind {
	return &MsgCreateBind{
		Creator:     creator,
		NameService: nameService,
	}
}

func (msg *MsgCreateBind) Route() string {
	return RouterKey
}

func (msg *MsgCreateBind) Type() string {
	return TypeMsgCreateBind
}

func (msg *MsgCreateBind) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateBind) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateBind) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateBind{}

func NewMsgUpdateBind(
	creator string,
	nameService string,

) *MsgUpdateBind {
	return &MsgUpdateBind{
		Creator:     creator,
		NameService: nameService,
	}
}

func (msg *MsgUpdateBind) Route() string {
	return RouterKey
}

func (msg *MsgUpdateBind) Type() string {
	return TypeMsgUpdateBind
}

func (msg *MsgUpdateBind) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateBind) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateBind) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteBind{}

func NewMsgDeleteBind(
	creator string,
	nameService string,

) *MsgDeleteBind {
	return &MsgDeleteBind{
		Creator:     creator,
		NameService: nameService,
	}
}
func (msg *MsgDeleteBind) Route() string {
	return RouterKey
}

func (msg *MsgDeleteBind) Type() string {
	return TypeMsgDeleteBind
}

func (msg *MsgDeleteBind) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteBind) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteBind) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
