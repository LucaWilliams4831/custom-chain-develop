package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/dDee-D-six/custom-chain/x/nameservice/types"
)

func (k msgServer) CreateBind(goCtx context.Context, msg *types.MsgCreateBind) (*types.MsgCreateBindResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetBind(
		ctx,
		msg.NameService,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var bind = types.Bind{
		Creator:     msg.Creator,
		NameService: msg.NameService,
	}

	k.SetBind(
		ctx,
		bind,
	)
	return &types.MsgCreateBindResponse{}, nil
}

func (k msgServer) UpdateBind(goCtx context.Context, msg *types.MsgUpdateBind) (*types.MsgUpdateBindResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetBind(
		ctx,
		msg.NameService,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var bind = types.Bind{
		Creator:     msg.Creator,
		NameService: msg.NameService,
	}

	k.SetBind(ctx, bind)

	return &types.MsgUpdateBindResponse{}, nil
}

func (k msgServer) DeleteBind(goCtx context.Context, msg *types.MsgDeleteBind) (*types.MsgDeleteBindResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetBind(
		ctx,
		msg.NameService,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveBind(
		ctx,
		msg.NameService,
	)

	return &types.MsgDeleteBindResponse{}, nil
}
