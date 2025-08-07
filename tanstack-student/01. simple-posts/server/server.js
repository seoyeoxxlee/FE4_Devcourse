// server.js
const express = require("express");
const cors = require("cors");

const POSTS = require("./data/posts.json");
const COMMENTS = require("./data/comments.json");
const USERS = require("./data/users.json");

const app = express();
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  setTimeout(() => {
    next();
  }, 0); // 2000ms = 2초
});

// GET /posts?_page=1&_limit=10
app.get("/posts", (req, res) => {
  const page = parseInt(req.query._page, 10) || 1;
  const limit = parseInt(req.query._limit, 10) || 10;
  const start = (page - 1) * limit;
  const end = start + limit;

  res.set("x-total-count", POSTS.length);
  res.json(POSTS.slice(start, end));
});

// GET /posts/:id
app.get("/posts/:id", (req, res) => {
  const post = POSTS.find((p) => p.id === +req.params.id);
  if (!post) return res.status(404).json({ message: "Post not found" });
  res.json(post);
});

// GET /posts/:postId/comments
// comments.json 에서 postId 기준으로 필터링
app.get("/posts/:postId/comments", (req, res) => {
  console.log(`comments:${req.params.postId}`);

  const postId = +req.params.postId;
  const post = POSTS.find((p) => p.id === postId);
  if (!post) return res.status(404).json({ message: "Post not found" });

  const postComments = COMMENTS.filter((c) => c.postId === postId);
  res.json(postComments);
});

// 삭제용 API - 게시글
app.delete("/posts/:id", (req, res) => {
  const postId = +req.params.id;
  const index = POSTS.findIndex((p) => p.id === postId);

  if (index === -1) {
    return res.status(404).json({ message: "Post not found" });
  }

  POSTS.splice(index, 1); // 삭제
  res.status(200).json({ message: "Post deleted" });
});

// 삭제용 API - 댓글
app.delete("/comments/:id", (req, res) => {
  const commentId = +req.params.id;
  const index = COMMENTS.findIndex((c) => c.id === commentId);

  if (index === -1) {
    return res.status(404).json({ message: "Comment not found" });
  }

  COMMENTS.splice(index, 1); // 삭제
  res.status(200).json({ message: "Comment deleted" });
});

// GET /users/:id
// users.json 에서 id 기준으로 조회
app.get("/users/:id", (req, res) => {
  console.log(`user:${req.params.id}`);
  const user = USERS.find((u) => u.id === +req.params.id);
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
});

// (필요시) 전체 유저 목록
app.get("/users", (req, res) => {
  res.json(USERS);
});

// 서버 실행
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 JSON API server running at http://localhost:${PORT}`);
});
