const dbConnect = require("./mongodb");

const insert = async () => {
  const db = await dbConnect();
  const result = await db.insertMany([
    {
      name: "note 5",
      brand: "vivo",
      price: 320,
      category: "mobile",
    },
    {
      name: "iphone 11 pro max",
      brand: "apple",
      price: 1299,
      category: "mobile",
    },
  ]);
  if (result.acknowledged) {
    console.log("data inserted");
  }
};

insert();
