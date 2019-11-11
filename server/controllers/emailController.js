require('dotenv').config();
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'yahoo',
    secure: false,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    },
});

async function emailUsers(req, res){
    const {specials, announcments} = req.session.info;
    const mailSpecials = specials.map((el) => {
    return <li>{el.content} {el.price}</li>
    })
    const db = req.app.get('db');
    const users = await db.auth.getAllUsers();
    for (let i = 0; i < users.length; i++){
        let mailOptions = {
            from: `J's Burger <j.s_burger@yahoo.com>`,
            to: users[i].email,
            html: `<b> 
            <div>
            <h2>Hello ${users[i].name}</h2>
            <h3>Here are our specials for today.</h3>
            <ul>
            ${mailSpecials}
            </ul>
            <h3>Announcements</h3>
            <h4>${announcments}</h4>
            </div>
            </b>`
        }
    }
}