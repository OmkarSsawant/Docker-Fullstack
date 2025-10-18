package main

// "github.com/joho/godotenv"

import (
  "net/http"
  "github.com/gin-gonic/gin"
"fmt"
"os"
)

func main(){
	// godotenv.Load("./src/.env")	
	fmt.Println("HEllo")
	s := gin.Default()
	fmt.Println("ENV"+os.Getenv("DB_URI"))
	ConnectDB()
	s.GET("/ping",func (c *gin.Context){
		c.Header("Access-Control-Allow-Origin","*")
		c.JSON(http.StatusOK,gin.H{
			"message":"pong",
		})
	})

	s.GET("/time",func (c *gin.Context){
		c.Header("Access-Control-Allow-Origin","*")
		t := GetTime()
		c.JSON(http.StatusOK,gin.H{
			"from":"go",
			"time": t,
		})
	})

	port := ":"+os.Getenv("PORT")

	if port==":"{
		port = ":8080"
	}
	
	s.Run(port)
	CloseDb()
}