package nameservice

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"github.com/dDee-D-six/custom-chain/testutil/sample"
	nameservicesimulation "github.com/dDee-D-six/custom-chain/x/nameservice/simulation"
	"github.com/dDee-D-six/custom-chain/x/nameservice/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = nameservicesimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgCreateBind = "op_weight_msg_bind"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateBind int = 100

	opWeightMsgUpdateBind = "op_weight_msg_bind"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateBind int = 100

	opWeightMsgDeleteBind = "op_weight_msg_bind"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteBind int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	nameserviceGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		BindList: []types.Bind{
			{
				Creator:     sample.AccAddress(),
				NameService: "0",
			},
			{
				Creator:     sample.AccAddress(),
				NameService: "1",
			},
		},
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&nameserviceGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgCreateBind int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateBind, &weightMsgCreateBind, nil,
		func(_ *rand.Rand) {
			weightMsgCreateBind = defaultWeightMsgCreateBind
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateBind,
		nameservicesimulation.SimulateMsgCreateBind(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateBind int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateBind, &weightMsgUpdateBind, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateBind = defaultWeightMsgUpdateBind
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateBind,
		nameservicesimulation.SimulateMsgUpdateBind(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteBind int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteBind, &weightMsgDeleteBind, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteBind = defaultWeightMsgDeleteBind
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteBind,
		nameservicesimulation.SimulateMsgDeleteBind(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
