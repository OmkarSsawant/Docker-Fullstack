package main

import (
	"context"
	"os"
	"time"

	"github.com/jackc/pgx/v5"
)

var conn *pgx.Conn

func ConnectDB() {
	con, err := pgx.Connect(context.Background(), os.Getenv("DB_URI"))
	if err != nil {
		panic(err)

	}
	conn = con
}

func GetTime() time.Time {
	var t time.Time
	err := conn.QueryRow(context.Background(), "SELECT NOW() as time").Scan(&t)
	if err != nil {
		panic("Db Error")
	}
	return t
}

func CloseDb() error {
	err := conn.Close(context.Background())
	conn = nil
	return err
}
