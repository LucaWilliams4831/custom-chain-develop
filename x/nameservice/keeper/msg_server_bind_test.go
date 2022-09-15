package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	keepertest "github.com/dDee-D-six/custom-chain/testutil/keeper"
	"github.com/dDee-D-six/custom-chain/x/nameservice/keeper"
	"github.com/dDee-D-six/custom-chain/x/nameservice/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func TestBindMsgServerCreate(t *testing.T) {
	k, ctx := keepertest.NameserviceKeeper(t)
	srv := keeper.NewMsgServerImpl(*k)
	wctx := sdk.WrapSDKContext(ctx)
	creator := "A"
	for i := 0; i < 5; i++ {
		expected := &types.MsgCreateBind{Creator: creator,
			NameService: strconv.Itoa(i),
		}
		_, err := srv.CreateBind(wctx, expected)
		require.NoError(t, err)
		rst, found := k.GetBind(ctx,
			expected.NameService,
		)
		require.True(t, found)
		require.Equal(t, expected.Creator, rst.Creator)
	}
}

func TestBindMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateBind
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgUpdateBind{Creator: creator,
				NameService: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgUpdateBind{Creator: "B",
				NameService: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgUpdateBind{Creator: creator,
				NameService: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.NameserviceKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)
			expected := &types.MsgCreateBind{Creator: creator,
				NameService: strconv.Itoa(0),
			}
			_, err := srv.CreateBind(wctx, expected)
			require.NoError(t, err)

			_, err = srv.UpdateBind(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				rst, found := k.GetBind(ctx,
					expected.NameService,
				)
				require.True(t, found)
				require.Equal(t, expected.Creator, rst.Creator)
			}
		})
	}
}

func TestBindMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteBind
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgDeleteBind{Creator: creator,
				NameService: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgDeleteBind{Creator: "B",
				NameService: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgDeleteBind{Creator: creator,
				NameService: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.NameserviceKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)

			_, err := srv.CreateBind(wctx, &types.MsgCreateBind{Creator: creator,
				NameService: strconv.Itoa(0),
			})
			require.NoError(t, err)
			_, err = srv.DeleteBind(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				_, found := k.GetBind(ctx,
					tc.request.NameService,
				)
				require.False(t, found)
			}
		})
	}
}
