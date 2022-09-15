package keeper

import (
	"github.com/dDee-D-six/custom-chain/x/nameservice/types"
)

var _ types.QueryServer = Keeper{}
