const Latam = "LATAM AIRLINES BRASIL";
db.resumoVoos.insertOne({
  empresa: Latam,
  totalVoosDomesticos: db.voos.find({
  natureza: "Doméstica",
  "empresa.nome": Latam,
  }).count(),
});
db.resumoVoos.find({
  empresa: Latam,
}, { _id: 0, empresa: 1, totalVoosDomesticos: 1 });