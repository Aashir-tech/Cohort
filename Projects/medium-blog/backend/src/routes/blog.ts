import { Hono } from "hono";
import { PrismaClient } from "../generated/prisma/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";

type Variables = {
  userId: string;
};

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: Variables;
}>();


// Create Blog Route
blogRouter.post("/create", (c) => {
    const userId = c.get("userId");
  
    return c.json({ userId });
  });
  
  blogRouter.put("/update", (c) => {
    return c.text("Updated Blog");
  });
  
  blogRouter.post("/:id", (c) => {
    const id = c.req.param("id");
    return c.text("Blog with this id ", id);
  });
  