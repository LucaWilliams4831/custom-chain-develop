package nameservice_test

import (
	"testing"

	keepertest "github.com/dDee-D-six/custom-chain/testutil/keeper"
	"github.com/dDee-D-six/custom-chain/testutil/nullify"
	"github.com/dDee-D-six/custom-chain/x/nameservice"
	"github.com/dDee-D-six/custom-chain/x/nameservice/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		BindList: []types.Bind{
			{
				NameService: "0",
			},
			{
				NameService: "1",
			},
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.NameserviceKeeper(t)
	nameservice.InitGenesis(ctx, *k, genesisState)
	got := nameservice.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.BindList, got.BindList)
	// this line is used by starport scaffolding # genesis/test/assert
}
