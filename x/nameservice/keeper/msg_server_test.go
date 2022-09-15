package keeper_test

import (
	"context"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/dDee-D-six/custom-chain/testutil/keeper"
	"github.com/dDee-D-six/custom-chain/x/nameservice/keeper"
	"github.com/dDee-D-six/custom-chain/x/nameservice/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.NameserviceKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
