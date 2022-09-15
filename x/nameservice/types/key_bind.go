package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// BindKeyPrefix is the prefix to retrieve all Bind
	BindKeyPrefix = "Bind/value/"
)

// BindKey returns the store key to retrieve a Bind from the index fields
func BindKey(
	nameService string,
) []byte {
	var key []byte

	nameServiceBytes := []byte(nameService)
	key = append(key, nameServiceBytes...)
	key = append(key, []byte("/")...)

	return key
}
