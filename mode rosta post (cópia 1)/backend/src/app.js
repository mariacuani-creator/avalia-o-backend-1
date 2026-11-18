import express from "express";
const app = express();
app.use(express.json());
let usuarios = [];
app.get("/usuarios", (req, res) => {
  res.send("Respondido")
  res.status(200).json(usuarios);
});




app.post("/usuarios", (req, res) => {
  console.log(req.body); 
  usuarios.push(req.body); 
  res.status(201).json({
    mensagem: "Cliente cadastrado",
    usuarios,
  });
});
app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});