package test

import "testing"

func TestSample(t *testing.T) {

	val := 1

	if val != 1 {
		t.Error("What 1 not eq 1")
	}
}
