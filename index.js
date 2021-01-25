const express = require("express");
const app = express();

const data = [
  {
    nombre: "Batman",
    foto: "https://pm1.narvii.com/6234/30d5abd9037c39f9edf0544cf55bf3a222e2ce0f_hq.jpg",
    correo: "batman97@gmail.com",
    telefono: "0997426891",
  },
  {
    nombre: "Superman",
    foto: "https://cdn.domestika.org/c_fill,dpr_auto,h_256,t_base_params.format_jpg,w_256/v1543272839/avatars/000/935/688/935688-original.jpg?1543272839",
    correo: "superman58@gmail.com",
    telefono: "0997425231",
  },
  {
    nombre: "Aquaman",
    foto: "https://es.web.img3.acsta.net/pictures/19/02/01/21/02/1004291.jpg",
    correo: "auqueamanh@hotmail.com",
    telefono: "09897456321",
  },
  {
    nombre: "Yugi Muto",
    foto: "https://pm1.narvii.com/6226/34452d4e7d3214599efcf39b471c30ba46429a37_00.jpg",
    correo: "ymuto@hotmail.com",
    telefono: "09501248975",
  },
  {
    nombre: "Seto Kaiba",
    foto: "https://i.pinimg.com/originals/44/69/14/4469147bcabdd4207dbc8bb6b8c6ec35.png",
    correo: "sekaibat@hotmail.com",
    telefono: "09401548978",
  },
  {
    nombre: "Joey Wheeler",
    foto: "https://i.ytimg.com/vi/RLKJqoCA8-k/hqdefault.jpg",
    correo: "wheelerbest@outlook.com",
    telefono: "09401538178",
  },
  {
    nombre: "Corey Taylor",
    foto: "https://pbs.twimg.com/profile_images/2994453589/f261a96aebae17f6acac5cfb58011966.jpeg",
    correo: "ctaylor@hotmail.com",
    telefono: "09401548978",
  },
  {
    nombre: "Joey Jordison",
    foto: "https://a.wattpad.com/useravatar/rimeseal.256.981374.jpg",
    correo: "mjackson5@hotmail.com",
    telefono: "0989256137",
  },
  {
    nombre: "Paul Gray",
    foto: "https://i.pinimg.com/474x/7d/52/97/7d52974661d9935f034afcaaa40e10ff.jpg",
    correo: "paulgray_king@hotmail.com",
    telefono: "0952184730",
  },
  {
    nombre: "Shawn Crahan",
    foto: "https://townsquare.media/site/366/files/2019/05/GettyImages-499815038.jpg?w=980&q=75",
    correo: "scrahan@gmail.com",
    telefono: "08745211523",
  },
  {
    nombre: "Randy Orton",
    foto: "https://pbs.twimg.com/profile_images/418953619283529729/zEV3EulF.jpeg",
    correo: "rorton@gmail.com",
    telefono: "38246931",
  },
  {
    nombre: "Shawn Michael",
    foto: "https://solowrestling.mundodeportivo.com/uploads/RESEM74045hbk2.jpg",
    correo: "smichael@gmail.com",
    telefono: "0978143025",
  },
  {
    nombre: "Dwayne Johnson",
    foto: "https://i.pinimg.com/474x/ac/95/1a/ac951a6b30df48534984de9fdece79e6.jpg",
    correo: "djohnson@gmail.com",
    telefono: "0825143968",
  },
  {
    nombre: "Luis Suárez",
    foto: "https://pbs.twimg.com/profile_images/716794023848108033/q4g4RvZg_400x400.jpg",
    correo: "lsuarez@gmail.com",
    telefono: "0925343962",
  },
  {
    nombre: "Harry Potter",
    foto: "https://pbs.twimg.com/profile_images/3495229598/9fe53e02ce7af89c8012ee4fb7cbfc6d.jpeg",
    correo: "hpotter@hotmail.com",
    telefono: "0865321456",
  },
  {
    nombre: "Hermione Granger",
    foto: "https://pbs.twimg.com/profile_images/740936606224240641/kxhwhrDq.jpg",
    correo: "hgranger@gmail.com",
    telefono: "0978152364",
  },
  {
    nombre: "Ron Weasley",
    foto: "https://pbs.twimg.com/profile_images/378800000365343865/adae1efaaf4396da1a0eeae07002f7ba.jpeg",
    correo: "rweasley@gmail.com",
    telefono: "08245987415",
  },
  {
    nombre: "Ginny Weasley",
    foto: "https://2.bp.blogspot.com/-sjxgZnmEhZg/TZxE3WvnOaI/AAAAAAAAAjI/t1r_O9B5CzE/s1600/1.JPG",
    correo: "gweaslys@gmail.com",
    telefono: "0952473020",
  },
  {
    nombre: "Neymar Jr",
    foto: "https://pbs.twimg.com/profile_images/3754704995/bd97dd53a46661eece203c33922336db.jpeg",
    correo: "neymarjr@gmail.com",
    telefono: "08687223651",
  },
  {
    nombre: "Lionel Messi",
    foto: "https://pbs.twimg.com/profile_images/655891351482073088/ijRVTqET_400x400.jpg",
    correo: "lmessi@hotmail.com",
    telefono: "09285987405",
  },
];

app.get("/data", (request, response) => {
  response.json(data);
});

app.get("/", (request, response) => {
  response.json({ data: data });
});

app.listen(process.env.PORT, () => {
  console.log("SERVIDOR EN ", process.env.PORT);
});
