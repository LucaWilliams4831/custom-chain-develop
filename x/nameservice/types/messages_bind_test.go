package types

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/dDee-D-six/custom-chain/testutil/sample"
	"github.com/stretchr/testify/require"
)

func TestMsgCreateBind_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgCreateBind
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgCreateBind{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgCreateBind{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}

func TestMsgUpdateBind_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgUpdateBind
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgUpdateBind{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgUpdateBind{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}

func TestMsgDeleteBind_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgDeleteBind
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgDeleteBind{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgDeleteBind{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}
