ignite scaffold chain github.com/dDee-D-six/custom-chain --no-module --address-prefix="custom"
ignite scaffold module name_service --dep="account,bank" --clear-cache
ignite scaffold map bind --module nameservice --index name_service:string