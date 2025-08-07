const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log("[Express] ", req.method, req.originalUrl);
  next();
});

let items = [
  {
    id: 1,
    name: "Item 1",
    description: "First item",
  },
  { id: 2, name: "Item 2", description: "Second item" },
];
let id = 2;

// Create
app.post("/items", (req, res) => {
  console.log("/items");
  const item = { id: id++, ...req.body };
  items.push(item);
  res.status(201).json(item);
});

// Read all
app.get("/items", (req, res) => {
  res.json(items);
});

// Read one
// app.get("/items/:id", (req, res) => {
//   const item = items.find((i) => i.id === Number(req.params.id));
//   if (!item) return res.status(404).json({ error: "Not found" });
//   res.json(item);
// });

// Read one
app.get("/items/:id", (req, res) => {
  let items = [
    {
      id: 1,
      name: "Item" + Math.floor(Math.random() * 100),
      description: "First item",
    },
    { 
      id: 2, 
      name: "Item" + Math.floor(Math.random() * 100),
      description: "Second item" 
    },
  ];
  const item = items.find((i) => i.id === Number(req.params.id));
  if (!item) return res.status(404).json({ error: "Not found" });
  res.json(item);
});


// Update
app.put("/items/:id", (req, res) => {
  const idx = items.findIndex((i) => i.id === Number(req.params.id));
  if (idx === -1) return res.status(404).json({ error: "Not found" });
  items[idx] = { ...items[idx], ...req.body };
  res.json(items[idx]);
});

// Delete
app.delete("/items/:id", (req, res) => {
  const idx = items.findIndex((i) => i.id === Number(req.params.id));
  if (idx === -1) return res.status(404).json({ error: "Not found" });
  const deleted = items.splice(idx, 1);
  res.json(deleted[0]);
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});