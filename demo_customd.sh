customd tx nameservice create-bind alice.custom --from alice --chain-id customchain
customd q nameservice list-bind --chain-id customchain

# craete multisig account
customd keys add alice-bob-multisig --multisig alice,bob --multisig-threshold 2
MULTISIG_ADDRESS=$(customd keys show alice-bob-multisig -a)
ALICE_ADDRESS=$(customd keys show alice -a)
BOB_ADDRESS=$(customd keys show bob -a)

# send coins to multisig account
customd tx bank send $ALICE_ADDRESS $MULTISIG_ADDRESS 1000stake --chain-id customchain

# create bind with multisig
customd tx nameservice create-bind multisig.custom --from $MULTISIG_ADDRESS --generate-only --chain-id customchain > tx.json
customd tx sign --from $ALICE_ADDRESS --multisig $MULTISIG_ADDRESS tx.json --sign-mode amino-json --chain-id customchain >> tx-signed-alice.json
customd tx sign --from $BOB_ADDRESS --multisig  $MULTISIG_ADDRESS tx.json --sign-mode amino-json --chain-id customchain >> tx-signed-bob.json
customd tx multisign --from $MULTISIG_ADDRESS tx.json alice-bob-multisig tx-signed-alice.json tx-signed-bob.json --chain-id customchain > tx_ms.json
customd tx broadcast tx_ms.json --chain-id customchain

# query bind
customd q nameservice list-bind --chain-id customchain