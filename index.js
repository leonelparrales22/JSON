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
    foto: "https://static.wikia.nocookie.net/superman/images/4/48/Nuj.png/revision/latest/top-crop/width/360/height/450?cb=20200201181516&path-prefix=es",
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
    nombre: "Tom Cavanagh",
    foto: "https://i.pinimg.com/originals/87/02/39/870239fc24c271f6b464956796fcc551.jpg",
    correo: "dpanabakerfrost@hotmail.com",
    telefono: "09401548978",
  },
  {
    nombre: "Michael Jackson",
    foto: "https://i0.wp.com/www.vinilonegro.com/wp-content/uploads/2015/10/Michael-Jackson-1-e1445792155655.jpg?resize=600%2C381&ssl=1",
    correo: "mjackson5@hotmail.com",
    telefono: "0989256137",
  },
  {
    nombre: "Romeo Santos",
    foto: "https://us.hola.com/imagenes/es/celebrities/2019081927140/romeo-santos-canta-bebe/0-198-527/romeo-santos-portada-m.jpg",
    correo: "rsantos_king@hotmail.com",
    telefono: "0952184730",
  },
  {
    nombre: "Marck Rufalo",
    foto: "https://i.blogs.es/011590/normal_ruffalo/450_1000.jpg",
    correo: "mrufalo85@gmail.com",
    telefono: "08745211523",
  },
  {
    nombre: "Jefferson Pérez",
    foto: "https://i.ytimg.com/vi/fRYlSBn5raI/maxresdefault.jpg",
    correo: "jeffperez@gmail.com",
    telefono: "38246931",
  },
  {
    nombre: "José Martín Galarza Arce",
    foto: "https://robertoramasso.com/contrataciones/contratar-a-au-d.jpg",
    correo: "elaudman@gmail.com",
    telefono: "0978143025",
  },
  {
    nombre: "Mike Bahía",
    foto: "https://los40es00.epimg.net/los40/imagenes/2020/02/21/los40urban/1582299648_829106_1582300207_noticia_normal.jpg",
    correo: "mbahía@gmail.com",
    telefono: "0825143968",
  },
  {
    nombre: "Robert Downey Jr",
    foto: "https://images.clarin.com/2016/09/22/politicamente-incorrecto-el-discurso-de___SkdT03Y4l_340x340.jpg",
    correo: "riroman@gmail.com",
    telefono: "0925343962",
  },
  {
    nombre: "Tobey Maguire",
    foto: "https://pley.today/__export/1583421559199/sites/mui/img/2020/03/05/tobey-maguire-sera-spider-man-otra-vez-en-doctor-strange-2.jpg_691115875.jpg",
    correo: "tmaguire@hotmail.com",
    telefono: "0865321456",
  },
  {
    nombre: "Andrew Garfield",
    foto: "https://i.pinimg.com/originals/57/2e/f2/572ef21ef46af539cb03b9f7e7d3313b.jpg",
    correo: "agarfield@gmail.com",
    telefono: "0978152364",
  },
  {
    nombre: "Chris Evans",
    foto: "https://i.pinimg.com/originals/83/7b/b4/837bb4fce696a993e272ac1f244447f2.jpg",
    correo: "ccapitanevans@gmail.com",
    telefono: "08245987415",
  },
  {
    nombre: "Juan Fernando Velazco",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJmgDY8WS_3HvZrHxkd0dX3OUWmipSlDT9fQ&usqp=CAU",
    correo: "jfvelazco97s@gmail.com",
    telefono: "0952473020",
  },
  {
    nombre: "Marco Antonio Solis",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI1pt44oHhUhp8UMdXDe9nm_z-bPkzXesHZQ&usqp=CAU",
    correo: "masolis@gmail.com",
    telefono: "08687223651",
  },
  {
    nombre: "Christian Castro",
    foto: "https://mx.hola.com/imagenes//famosos/2020090434298/cristian-castro-loco-valdes-agradecimiento/0-154-923/cristianloco-t.jpg?filter=w400&filter=ds75",
    correo: "chcastro@hotmail.com",
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
