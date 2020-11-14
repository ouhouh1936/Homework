import express from "express"; //이 프로젝트의 프레임인 express를 express에서 가져옴
import path from "path"; //경로를 구하기위해 path에서 path를 가져옴

const PORT = 3000; //portfmf 3000으로 정하고 그것을 PORT에 저장함
const app = express(); // express()를 app에 저장함

app.set("view engine", "pug"); // app아 pug써 라고 세팅함
app.use(express.static(path.join(__dirname, "/assets"))); //app아 사용하렴 무엇을? assets에있는 css파일

app.get("/", (rep, res) => {
  //app아 가져오렴 "/"에서 index를
  res.render("index");
});

app.listen(PORT, () => {
  // appd아 들어봐 PORT를 쓰고 서버가 켜지면 이걸 뛰러 "port번호와 start server"이라는 말
  console.log(`${PORT} start server`);
});
