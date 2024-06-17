const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// Configuración de la conexión a MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'parqueo_jc'
});

db.connect(err => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos MySQL');
});

// Ruta para insertar datos
app.post('/insert', (req, res) => {
  const { nombre, usuario, password, perfil, foto} = req.body;
  const sql = 'INSERT INTO usuarios (nombre, usuario, password, perfil, foto) VALUES (?,?,?,?;?)';
  db.query(sql, [nombre, usuario, password, perfil, foto], (err, result) => {
    if (err) {
      return res.status(500).send('Error al insertar datos');
    }
    res.send('Datos insertados correctamente');
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
