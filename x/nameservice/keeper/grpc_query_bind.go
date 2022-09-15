package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/dDee-D-six/custom-chain/x/nameservice/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) BindAll(c context.Context, req *types.QueryAllBindRequest) (*types.QueryAllBindResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var binds []types.Bind
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	bindStore := prefix.NewStore(store, types.KeyPrefix(types.BindKeyPrefix))

	pageRes, err := query.Paginate(bindStore, req.Pagination, func(key []byte, value []byte) error {
		var bind types.Bind
		if err := k.cdc.Unmarshal(value, &bind); err != nil {
			return err
		}

		binds = append(binds, bind)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllBindResponse{Bind: binds, Pagination: pageRes}, nil
}

func (k Keeper) Bind(c context.Context, req *types.QueryGetBindRequest) (*types.QueryGetBindResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetBind(
		ctx,
		req.NameService,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetBindResponse{Bind: val}, nil
}
