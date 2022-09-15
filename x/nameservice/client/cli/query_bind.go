package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/dDee-D-six/custom-chain/x/nameservice/types"
	"github.com/spf13/cobra"
)

func CmdListBind() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-bind",
		Short: "list all bind",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllBindRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.BindAll(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddPaginationFlagsToCmd(cmd, cmd.Use)
	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowBind() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-bind [name-service]",
		Short: "shows a bind",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argNameService := args[0]

			params := &types.QueryGetBindRequest{
				NameService: argNameService,
			}

			res, err := queryClient.Bind(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
