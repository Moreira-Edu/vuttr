import * as request from "supertest";
import { app } from "../../app";

describe("tools routes", () => {
  describe("get tools route", () => {
    describe("get without params", () => {
      it("should be a json response type", async () => {
        const { type } = await request.agent(app).get("/tools");
        expect(type).toBe("application/json");
      });
      it("should be a response with status code 200", async () => {
        const { statusCode } = await request.agent(app).get("/tools");
        expect(statusCode).toBe(200);
      });
      it("should return an array of tools", async () => {
        const { body } = await request.agent(app).get("/tools");
        expect(body).toBe([
          {
            id: 1,
            title: "Notion",
            link: "https://notion.so",
            description:
              "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ",
            tags: [
              "organization",
              "planning",
              "collaboration",
              "writing",
              "calendar",
            ],
          },
          {
            id: 2,
            title: "json-server",
            link: "https://github.com/typicode/json-server",
            description:
              "Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.",
            tags: ["api", "json", "schema", "node", "github", "rest"],
          },
          {
            id: 3,
            title: "fastify",
            link: "https://www.fastify.io/",
            description:
              "Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.",
            tags: ["web", "framework", "node", "http2", "https", "localhost"],
          },
        ]);
      });
    });
    describe("get with tag params", () => {
      it.todo("should be a json response type");
      it.todo("should be a response with status code 200");
      it.todo("should return an array of tools filtered by tags");
    });
  });
  describe("post tools route", () => {
    it.todo("should create a new tool");
  });
  describe("put tools route", () => {
    it.todo("should update a tool");
  });
  describe("delete tools route", () => {
    it.todo("should delete a tool by a valid ID");
  });
});
describe("API doc route", () => {
  it("should be a response with status code 301", async () => {
    const { statusCode } = await request.agent(app).get("/api-docs");
    expect(statusCode).toBe(301);
  });
  it("should be a html response type", async () => {
    const { type } = await request.agent(app).get("/api-docs");
    expect(type).toBe("text/html");
  });
});
