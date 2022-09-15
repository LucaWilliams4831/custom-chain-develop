package nameservice

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/dDee-D-six/custom-chain/x/nameservice/keeper"
	"github.com/dDee-D-six/custom-chain/x/nameservice/types"
)

// InitGenesis initializes the module's state from a provided genesis state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the bind
	for _, elem := range genState.BindList {
		k.SetBind(ctx, elem)
	}
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the module's exported genesis
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.BindList = k.GetAllBind(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
