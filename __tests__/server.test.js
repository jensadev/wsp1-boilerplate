import request from "supertest"
import app from "../server"

describe("Server", () => {
    it("should respond to GET / with 200", async () => {
        const res = await request(app).get("/")
        expect(res.statusCode).toBe(200)
    })
})
