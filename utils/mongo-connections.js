const {MongoClient} = require("mongodb");

module.exports = class ConnectToMongoDB{
    #DB_URL = "localhost:27017/todoList";
    #db = null;

    async #connect(){
        try {
            let client = new MongoClient(this.#DB_URL);
            let db = client.db();
            return db;
        } catch (error) {
            console.log(error);
        }
    }

    async Get(){
        try {
            if(this.#db){
                console.log("the connection is already alive!");
                return this.#db
            }
            this.#db = await this.#connect();
            return this.#db
        } catch (error) {
            console.log(error.message);
        }
    }
}