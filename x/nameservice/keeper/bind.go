package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/dDee-D-six/custom-chain/x/nameservice/types"
)

// SetBind set a specific bind in the store from its index
func (k Keeper) SetBind(ctx sdk.Context, bind types.Bind) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BindKeyPrefix))
	b := k.cdc.MustMarshal(&bind)
	store.Set(types.BindKey(
		bind.NameService,
	), b)
}

// GetBind returns a bind from its index
func (k Keeper) GetBind(
	ctx sdk.Context,
	nameService string,

) (val types.Bind, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BindKeyPrefix))

	b := store.Get(types.BindKey(
		nameService,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveBind removes a bind from the store
func (k Keeper) RemoveBind(
	ctx sdk.Context,
	nameService string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BindKeyPrefix))
	store.Delete(types.BindKey(
		nameService,
	))
}

// GetAllBind returns all bind
func (k Keeper) GetAllBind(ctx sdk.Context) (list []types.Bind) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BindKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Bind
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
