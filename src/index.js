import { app } from "./app.js";

const PORT = process.env.PORT || 7001;
const key = process.env.APIKEY;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} ${key}`);
});
