const express = require('express'),
    cors = require('cors'),
    app = express(),
    mysql = require('mysql'),
    bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.send("Working")
})

const randomNumber = (min, max)=> Math.random() * (max - min) + min;

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    multipleStatements: true,
});

conn.query(`CREATE DATABASE IF NOT EXISTS chefkart;`,(e,r)=>{
    if (e) console.log('err= ', e);
    else {
        conn.changeUser({ database: 'chefkart' })
        conn.query(`
        CREATE TABLE IF NOT EXISTS signup(
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255),
            email VARCHAR(255),
            phnumber VARCHAR(255),
            password VARCHAR(255)
        );
        CREATE TABLE IF NOT EXISTS leads(
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255),
            phnumber VARCHAR(255),
            address VARCHAR(255),
            referrer_email VARCHAR(255),
            date_time VARCHAR(255),
            status VARCHAR(255),
            referrer_reward VARCHAR(255)
        );
        `, (e, r) => {
            if (e) console.log('err= ', e);
        })
    }

})

function GetLeads(referrer_email){
    return new Promise((resolve,reject)=>{
        if(referrer_email){
            conn.query(`SELECT * FROM leads WHERE referrer_email='${referrer_email}'`,(e,r)=>{
                if(e) resolve({msg:'Referrer email not exists' , ok : false});
                else if(r.length){
                    let total = null
                    if(Array.isArray(r)){
                        for(let k of r){
                            if( k && 'object' === typeof k){
                                if(total===null)total=0;
                                total+=Number(k.referrer_reward)
                            }
                        }
                    }
                    resolve({msg : {leads : r , totalRewards : total}, ok : true})
                }else resolve({msg : "Something went wrong. Try again later" , ok: false})
            })
        }else resolve({msg:'Referrer email not exists' , ok : false})
    })
}

app.post("/signup", (req, res) => {
    let d = req.body
    if (d.name && d.email && d.password && d.phNumber) {
        conn.query(`SELECT * FROM signup WHERE email='${d.email}'`, (e, r) => {
            if (e) res.json({ msg: "Something went wrong. Try again later", ok: false });
            else if(!r.length){
                conn.query(`INSERT INTO signup (name,email,phNumber,password) VALUES ('${d.name}','${d.email}','${d.phNumber}','${d.password}')`, (e, r) => {
                    if (e) res.json({ msg: e, ok: false });
                    else {
                        delete d?.password
                        res.json({ msg: d, ok: true })
                    }
                })
            }else res.json({ msg: "User already exists" , ok: false });
        })
    } else res.json({ msg: 'some field are missing', ok: false })
})

app.post("/login", (req, res) => {
    let d = req.body
    if(d.email && d.password){
        conn.query(`SELECT * FROM signup WHERE email='${d.email}'`,(e,r)=>{
            if(e)res.json({msg:"Something went wrong. Try again later",ok:false});
            else if(r[0]){
                r = r[0]
                if(r.password === d.password){
                    delete r?.password
                    res.json({msg:r,ok:true})
                }else res.json({ msg: "Enter correct password" , ok: false })
            }else res.json({ msg: "User not exists" , ok: false });
        })
    }else res.json({ msg: 'some field are missing', ok: false })
    
})

// temporary I'm not validate referrer users
app.post("/add-lead",(req,res)=>{
    let d = req.body , leadStatus = "new" , reward = randomNumber(3,20)
    if(d.name && d.phNumber && d.address && d.referrer_email){
        conn.query(`INSERT INTO leads (name,phnumber,address,referrer_email,date_time,status,referrer_reward) 
        VALUES ('${d.name}','${d.phNumber}','${d.address}','${d.referrer_email}','${Date.now()}','${leadStatus}','${reward}')`, (e, r) => {
            if(e)res.json({msg:"Something went wrong. Try again later",ok:false});
            else{
                res.send({msg:{reward : reward , leadStatus : leadStatus },ok:true})
            }
        })
    }else res.json({ msg: 'some field are missing', ok: false })
})

app.get("/get-leads/:email",(req,res)=>{
    let e = req.params.email
    if(e){
       GetLeads(e).then(d=>res.json(d)).catch(e=>res.json(e))
    }else res.json({ msg: 'some field are missing', ok: false })
    
})

app.listen(3001, _ => console.log("server started"))

