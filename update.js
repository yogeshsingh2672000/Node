const dbConnect = require("./mongodb");

const updateData = async () => {
  let data = await dbConnect();
  let result = await data.updateOne(
    { name: "macbook air" },
    { $set: { price: 1399 } }
  );
  console.log(result);
};

updateData();
