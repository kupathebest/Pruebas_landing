const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
  });

module.exports = {
    index: (req, res) => {
        res.render("index",
         {title: "Even It"}
         )
    },
    enviarMail: async (req, res) => {
        
        const {name, mail, msj} = req.body

    await transport.sendMail({
        from: "Even It contacto <no-reply@evenit.com>",
        to: "silvajuanpablo92@gmail.com",
        subject: "Even It contacto",
        html: `<h1>Recibiste una nueva consulta en el sitio</h1>

        <h3>Datos del contacto</h3>
        
        <ul>
            <li>Nombre: ${name}</li>
            <li>Mail: ${mail}</li>
            <li>Mensaje: ${msj}</li>
        </ul>
        `
    })
        res.redirect("/")
    }
}