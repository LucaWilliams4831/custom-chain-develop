package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/dDee-D-six/custom-chain/testutil/keeper"
	"github.com/dDee-D-six/custom-chain/testutil/nullify"
	"github.com/dDee-D-six/custom-chain/x/nameservice/keeper"
	"github.com/dDee-D-six/custom-chain/x/nameservice/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNBind(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Bind {
	items := make([]types.Bind, n)
	for i := range items {
		items[i].NameService = strconv.Itoa(i)

		keeper.SetBind(ctx, items[i])
	}
	return items
}

func TestBindGet(t *testing.T) {
	keeper, ctx := keepertest.NameserviceKeeper(t)
	items := createNBind(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetBind(ctx,
			item.NameService,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestBindRemove(t *testing.T) {
	keeper, ctx := keepertest.NameserviceKeeper(t)
	items := createNBind(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveBind(ctx,
			item.NameService,
		)
		_, found := keeper.GetBind(ctx,
			item.NameService,
		)
		require.False(t, found)
	}
}

func TestBindGetAll(t *testing.T) {
	keeper, ctx := keepertest.NameserviceKeeper(t)
	items := createNBind(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllBind(ctx)),
	)
}
