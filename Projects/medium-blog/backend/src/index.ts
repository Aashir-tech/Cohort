import { Hono } from "hono";
import { verify } from "hono/jwt";
import { userRouter } from './routes/user';
import { blogRouter } from './routes/blog';

type Variables = {
  userId: string;
};

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: Variables;
}>();

app.use("/api/v1/blog/*", async (c, next) => {
  const jwt = c.req.header("Authorization");

  if (!jwt) {
    c.status(401);
    return c.json({ error: "Unauthorized" });
  }

  const token = jwt.split(" ")[1];
  const payload = await verify(token, c.env.JWT_SECRET);
  try {
    if (!payload) {
      c.status(401);
      return c.json({ error: "Unauthorized" });
    }

    c.set("userId", JSON.stringify(payload.id));
    await next();
  } catch (error) {
    c.status(501);
    return c.json({
      message: error,
    });
  }
});

app.route('/api/v1/user' , userRouter);
app.route('/api/v1/blog' , blogRouter);

export default app;
