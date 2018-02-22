var express = require("express");
var mysql   = require("mysql");
var fs      = require("fs");
var app     = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

console.log("Post started ... nn");

//dinoume ta stoixeia tis basis gia na ginei i sundesi
var connection = mysql.createConnection({
    host     : 'localhost',
    port     : '3306',
    user     : 'root',
    password : '',
    database : 'appCook',
    multipleStatements: true
});
//
// //ginetai i sundesi me ti basi
// connection.connect(function(err){
//     if(!err) {
//         console.log("Database is connected ... nn");
//     } else {
//         console.log("Error connecting database ... nn");
//     }
// });

app.post("/signup", function (req, res) {

    var valueEmail = req.body.email;
    var valuePass = req.body.password;
    var valueFname = req.body.fname;
    var valueLname = req.body.lname;
    var insertOK = 2;
    var jsonObj;
    connection.connect(function (err) {
        if (!err) {
            var sql = "SET @insertOK = -1; call sp_signup(?, ?, ?, ?, @insertOK)";
            //"call sp_signin(?, ?, ?, ?)";
            //"SET @insertOK = -1; call sp_signin(?, ?, ?, ?, @insertOK)";
            connection.query(sql, [valueEmail, valuePass, valueFname, valueLname], function (err, rows) {
                if (!err) {
                    if(rows.length=== 3) {
                        var insertOK = 1;
                    }else if(rows.length=== 2){
                        insertOK = -1;
                    }else{
                        insertOK = 3;
                    }

                    res.setHeader('Content-Type', 'application/json');
                    res.send(JSON.stringify(insertOK));
                } else {
                    // Android will handle the situation after the timeout
                }
            });
            //connection.end();
        } else {
            // Android will handle the situation after the timeout
            //connection.end();
        }
    });
});


app.post("/login", function (req, res) {
    var originRows;
    var valueEmail = req.body.email;
    var valuePass = req.body.password;
    var user = " ";
    var subids = [];
    var catids = [];
    var subs = [];
    var cats = [];
    var faqs = [];
    // connection.connect(function (err) {
    //     console.log("here we are!!!")
    //     if (!err) {
            var sql = "call logindata(?, ?)";
            connection.query(sql, [valueEmail, valuePass], function (err, rows) {
                console.log("I'm in but we have error!!!");
                if (!err) {
                    if(rows.length === 4) {

                        originRows = rows;
                        rows = rows[1];
                        console.log(rows);
                        //--------------------------------------------------------------------------------------------------

                        var sid;
                        for (var i = 0; i < rows.length; i++) {
                            if (rows[i].catid !== 0) {
                                sid = rows[i].subid;
                                if (i === rows.length - 1) {
                                    subids.push(rows[i].subid);
                                } else if (sid !== rows[i + 1].subid) {
                                    subids.push(rows[i].subid);
                                }
                            }
                        }
                        // ============

                        // ============

                        var subsrecs = [];
                        for (var i = 0; i < subids.length; i++) {
                            subsrecs[i] = new Array();
                        }

                        for (var i = 0; i < rows.length; i++) {
                            if (rows[i].catid === 0) {
                                catids.push(rows[i].subid);
                            }
                        }

                        var catssubs = [];
                        for (var i = 0; i < catids.length; i++) {
                            catssubs[i] = new Array();
                        }

                        for (var i = 0; i < subids.length; i++) {
                            for (var j = 0; j < rows.length; j++) {

                                if (rows[j].subid === subids[i]) {

                                    Recipe = {
                                        "rid": rows[j].rid,
                                        "rtitle": rows[j].rtitle,
                                        "rimpath": rows[j].rimpath,
                                        "mdesc": rows[j].mdesc,
                                        "steps": rows[j].steps
                                    };
                                    subsrecs[i].push(Recipe);
                                }
                            }
                            console.log("------------------------------------H sub ", i + 6, " exei tis ", subsrecs[i], "suntages");
                        }
                        console.log("\n\n\n");

                        var ssid;
                        for (var i = 0; i < catids.length; i++) {

                            for (var z = 0; z < subids.length; z++) {
                                for (var j = 0; j < rows.length; j++) {
                                    if (rows[j].catid === catids[i]) {
                                        ssid = rows[j].subid;
                                        if (rows[j].subid === subids[z]) {

                                            Subcategory = {
                                                "type": "SubcategoryTypeId",
                                                "catid": rows[j].subid,
                                                "cattitle": rows[j].subtitle,
                                                "catimpath": rows[j].subimpath,
                                                "recipe": subsrecs[z]
                                            };

                                            if (j === rows.length - 1) {
                                                catssubs[i].push(Subcategory);
                                            } else if (ssid !== rows[j + 1].subid) {
                                                catssubs[i].push(Subcategory);
                                            }
                                        }
                                    }
                                }
                            }
                            console.log("------------------------------------H cat ", i + 1, " exei tis ", catssubs[i]);
                        }

                        for (var j = 0; j < catids.length; j++) {
                            for (var i = 0; i < rows.length; i++) {
                                if (rows[i].catid === 0) {
                                    if (rows[i].subid === catids[j]) {

                                        Category = {
                                            "type": "CategoryTypeId",
                                            "catid": rows[i].subid,
                                            "cattitle": rows[i].subtitle,
                                            "catimpath": rows[i].subimpath,
                                            "subcategory": catssubs[j]
                                        };
                                        cats.push(Category);
                                    }
                                }
                            }
                        }

                        var rows1 = originRows[2];
                        console.log("--------------------------------------For faqs--------------" + rows1);
                        for (var q = 0; q < rows1.length; q++) {

                            FAQs = {
                                "qid": rows1[q].qid,
                                "qtitle": rows1[q].qtitle,
                                "qanswer": rows1[q].qanswer
                            };

                            faqs.push(FAQs);
                            console.log("------------------------------------faqs" + i);
                        }
                        console.log("\n\n\n");

                        Profile = {
                            "fname": originRows[0][0].fname,
                            "lname": originRows[0][0].lname
                            // "uemail": rows[0].uemail,
                            // "password": originRows[0][0].password

                        };

                        user = {
                            "type": "AuthenticUserTypeId",
                            "uemail": rows[0].uemail,
                            "password": originRows[0][0].password,
                            "profile": Profile,
                            "category": cats,
                            "faqs": faqs

                        };

                    }else{
                        user = null;
                    }
                    res.setHeader('Content-Type', 'application/json');
                    res.send(JSON.stringify(user));
                    console.log('Data retrived');
//----------------------------------------------------------------------------------------------------------------------
                } else {
                    // Android will handle the situation after the timeout
                }
            });
            //connection.end();
        // } else {
        //     // Android will handle the situation after the timeout
        //     connection.end();
        // }
    //});
});


//------------------------------------------------------------------------------------------------------------------------

app.post("/allforguest",function(req,res){

    var user = "";
    var subids = [];
    var catids = [];
    var subs = [];
    var cats = [];

    var sql = "call getsimpleuser()";
    connection.query(sql, function(err, rows) {
        if (!err){
            rows = rows[0];
            var sid;
            for(var i=0; i< rows.length; i++) {
                if(rows[i].catid !== 0 ){
                    sid = rows[i].subid;
                    if(i === rows.length-1){
                        subids.push(rows[i].subid);
                    }else if(sid !== rows[i+1].subid){
                        subids.push(rows[i].subid);
                    }
                }
            }
           // ============

           // ============

            var subsrecs = [];
            for(var i=0; i< subids.length; i++) {
                subsrecs[i] = new Array();
            }

            for(var i=0; i< rows.length; i++) {
                if(rows[i].catid === 0){
                    catids.push(rows[i].subid);
                }
            }

            var catssubs = [];
            for(var i=0; i< catids.length; i++) {
                catssubs[i] = new Array();
            }

            for(var i=0; i< subids.length; i++) {
                for(var j=0; j< rows.length; j++) {

                    if(rows[j].subid === subids[i]){

                        Recipe= {
                            "rid"	 : rows[j].rid,
                            "rtitle" : rows[j].rtitle,
                            "rimpath": rows[j].rimpath,
                            "mdesc"	 : rows[j].mdesc,
                            "steps"	 : rows[j].steps
                        };
                        subsrecs[i].push(Recipe);
                    }
                }
                console.log("------------------------------------H sub ", i+6 ," exei tis ", subsrecs[i] , "suntages");
            }
            console.log("\n\n\n");

            var ssid;
            for(var i=0; i< catids.length; i++) {

                for(var z=0; z< subids.length; z++){
                    for(var j=0; j< rows.length; j++) {
                        if(rows[j].catid === catids[i]){
                            ssid = rows[j].subid;
                            if(rows[j].subid === subids[z]){

                                Subcategory= {
                                    "type": "SubcategoryTypeId",
                                    "catid": rows[j].subid,
                                    "cattitle": rows[j].subtitle,
                                    "catimpath": rows[j].subimpath,
                                    "recipe": subsrecs[z]
                                };


                                if(j === rows.length-1){
                                    catssubs[i].push(Subcategory);
                                }else if(ssid !== rows[j+1].subid){
                                    catssubs[i].push(Subcategory);
                                }
                            }
                        }
                    }
                }
                console.log("------------------------------------H cat ", i+1 , " exei tis ", catssubs[i]);
            }

            for (var j = 0; j < catids.length; j++) {
                for (var i = 0; i < rows.length; i++) {
                    if(rows[i].catid === 0){
                        if(rows[i].subid === catids[j]){

                            Category= {
                                "type" : "CategoryTypeId",
                                "catid": rows[i].subid,
                                "cattitle": rows[i].subtitle,
                                "catimpath": rows[i].subimpath,
                                "subcategory": catssubs[j]
                            };
                            cats.push(Category);
                        }
                    }
                }
            }

            user = {
                "type": "SimpleUserTypeId",
                "uemail": rows[0].uemail,
                "category": cats
            };

            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(user));
            console.log('Data retrived');

        }else
            console.log('Error while performing Query.');
    });
    connection.end();
});




app.get("/orektika",function(req,res){
    var img = fs.readFileSync('./photos/orektika/orektika.png');
    res.writeHead(200, {'Content-Type': 'image/png' });
    res.end(img, 'binary');
});

app.get("/salates",function(req,res){
    var img = fs.readFileSync('./photos/salates/salates.png');
    res.writeHead(200, {'Content-Type': 'image/png' });
    res.end(img, 'binary');
});

app.get("/kuriws",function(req,res){
    var img = fs.readFileSync('./photos/kuriws/kuriws.png');
    res.writeHead(200, {'Content-Type': 'image/png' });
    res.end(img, 'binary');
});

app.get("/soupes",function(req,res){
    var img = fs.readFileSync('./photos/soupes/soupes.png');
    res.writeHead(200, {'Content-Type': 'image/png' });
    res.end(img, 'binary');
});

app.get("/gluka",function(req,res){
    var img = fs.readFileSync('./photos/gluka/gluka.png');
    res.writeHead(200, {'Content-Type': 'image/png' });
    res.end(img, 'binary');
});

//-------------------------------------------------------------  orektika subs  ------------------------------------------------------------------------------------

app.get("/orektikaMeKreatika",function(req,res){

    var img = fs.readFileSync('./photos/orektika/orektika_me_kreatika.png');
    res.writeHead(200, {'Content-Type': 'image/png' });
    res.end(img, 'binary');
});

app.get("/orektika/MeKreatika/rolakiaKima",function(req,res){

    var img = fs.readFileSync('./photos/orektika/meKreatika/rolakiaKima.png');
    res.writeHead(200, {'Content-Type': 'image/png' });
    res.end(img, 'binary');
});

app.get("/orektika/MeKreatika/Kotompoukies",function(req,res){
    var img = fs.readFileSync('./photos/orektika/meKreatika/kotompoukiesStoFourno.png');
    res.writeHead(200, {'Content-Type': 'image/png' });
    res.end(img, 'binary');
});

app.get("/orektikaMeLaxanika",function(req,res){
    var img = fs.readFileSync('./photos/orektika/orektika_me_laxanika.png');
    res.writeHead(200, {'Content-Type': 'image/png' });
    res.end(img, 'binary');
});

app.get("/orektika/MeLaxanika/gemistoAvokanto",function(req,res){
    var img = fs.readFileSync('./photos/orektika/MeLaxanika/gemistoAvokanto.png');
    res.writeHead(200, {'Content-Type': 'image/png' });
    res.end(img, 'binary');
});

app.get("/orektika/MeLaxanika/muffinsMeKolokith",function(req,res){
    var img = fs.readFileSync('./photos/orektika/MeLaxanika/muffinsMeKolokith.png');
    res.writeHead(200, {'Content-Type': 'image/png' });
    res.end(img, 'binary');
});

app.get("/orektikaMeThalassina",function(req,res){
    var img = fs.readFileSync('./photos/orektika/orektika_me_thalassina.png');
    res.writeHead(200, {'Content-Type': 'image/png' });
    res.end(img, 'binary');
});

app.get("/orektika/MeThalassina/garidesMePiperies",function(req,res){
    var img = fs.readFileSync('./photos/orektika/MeThalassina/garidesMePiperies.png');
    res.writeHead(200, {'Content-Type': 'image/png' });
    res.end(img, 'binary');
});

app.get("/orektika/MeThalassina/kanapedakiaSolomou",function(req,res){
    var img = fs.readFileSync('./photos/orektika/MeThalassina/kanapedakiaSolomou.png');
    res.writeHead(200, {'Content-Type': 'image/png' });
    res.end(img, 'binary');
});

app.get("/orektikaPites",function(req,res){
    var img = fs.readFileSync('./photos/orektika/orektika_pites.png');
    res.writeHead(200, {'Content-Type': 'image/png' });
    res.end(img, 'binary');
});

app.get("/orektikaDiafora",function(req,res){
    var img = fs.readFileSync('./photos/orektika/orektika_diafora.png');
    res.writeHead(200, {'Content-Type': 'image/png' });
    res.end(img, 'binary');
});

//------------------------------------------------------------  salates subs  --------------------------------------------------------------------------------------

app.get("/salatesMeKreatika",function(req,res){
    var img = fs.readFileSync('./photos/salates/salates_me_kreatika.png');
    res.writeHead(200, {'Content-Type': 'image/png' });
    res.end(img, 'binary');
});

app.get("/salates/MeKreatika/kotosalataMeXrwmZumarika",function(req,res){
    var img = fs.readFileSync('./photos/salates/MeKreatika/kotosalataMeXrwmZumarika.png');
    res.writeHead(200, {'Content-Type': 'image/png' });
    res.end(img, 'binary');
});

app.get("/salates/MeKreatika/mexikanikiSalata",function(req,res){
    var img = fs.readFileSync('./photos/salates/MeKreatika/mexikanikiSalata.png');
    res.writeHead(200, {'Content-Type': 'image/png' });
    res.end(img, 'binary');
});

app.get("/salatesMeLaxanika",function(req,res){
    var img = fs.readFileSync('./photos/salates/salates_me_laxanika.png');
    res.writeHead(200, {'Content-Type': 'image/png' });
    res.end(img, 'binary');
});

app.get("/salates/MeLaxanika/glukoxiniSalata",function(req,res){
    var img = fs.readFileSync('./photos/salates/MeLaxanika/glukoxiniSalata.png');
    res.writeHead(200, {'Content-Type': 'image/png' });
    res.end(img, 'binary');
});

app.get("/salates/MeLaxanika/salataGlustridas",function(req,res){
    var img = fs.readFileSync('./photos/salates/MeLaxanika/salataGlustridas.png');
    res.writeHead(200, {'Content-Type': 'image/png' });
    res.end(img, 'binary');
});

app.get("/salatesMeThalassina",function(req,res){
    var img = fs.readFileSync('./photos/salates/salates_me_thalassina.png');
    res.writeHead(200, {'Content-Type': 'image/png' });
    res.end(img, 'binary');
});

app.get("/salates/MeThalassina/makaronotonosalata",function(req,res){
    var img = fs.readFileSync('./photos/salates/MeThalassina/makaronotonosalata.png');
    res.writeHead(200, {'Content-Type': 'image/png' });
    res.end(img, 'binary');
});

app.get("/salates/MeThalassina/poluxrwmiMeTono",function(req,res){
    var img = fs.readFileSync('./photos/salates/MeThalassina/poluxrwmiMeTono.png');
    res.writeHead(200, {'Content-Type': 'image/png' });
    res.end(img, 'binary');
});

app.get("/salatesMeZumarika",function(req,res){
    var img = fs.readFileSync('./photos/salates/salates_me_zumarika.png');
    res.writeHead(200, {'Content-Type': 'image/png' });
    res.end(img, 'binary');
});

app.get("/salatesDiafores",function(req,res){
    var img = fs.readFileSync('./photos/salates/salates_diafores.png');
    res.writeHead(200, {'Content-Type': 'image/png' });
    res.end(img, 'binary');
});

//------------------------------------------------------------  kyriws subs  --------------------------------------------------------------------------------------
app.get("/kuriwsMeKreatika",function(req,res){
    var img = fs.readFileSync('./photos/kuriws/kuriws_me_kreatika.png');
    res.writeHead(200, {'Content-Type': 'image/png' });
    res.end(img, 'binary');
});

app.get("/kuriwsMeLaxanika",function(req,res){
    var img = fs.readFileSync('./photos/kuriws/kuriws_me_laxanika.png');
    res.writeHead(200, {'Content-Type': 'image/png' });
    res.end(img, 'binary');
});

app.get("/kuriwsMeThalassina",function(req,res){
    var img = fs.readFileSync('./photos/kuriws/kuriws_me_thalassina.png');
    res.writeHead(200, {'Content-Type': 'image/png' });
    res.end(img, 'binary');
});

app.get("/kuriwsMeZumarika",function(req,res){
    var img = fs.readFileSync('./photos/kuriws/kuriws_me_zumarika.png');
    res.writeHead(200, {'Content-Type': 'image/png' });
    res.end(img, 'binary');
});

app.get("/kuriwsMeOspria",function(req,res){
    var img = fs.readFileSync('./photos/kuriws/kuriws_me_ospria.png');
    res.writeHead(200, {'Content-Type': 'image/png' });
    res.end(img, 'binary');
});

//------------------------------------------------------------  soupes subs  --------------------------------------------------------------------------------------
app.get("/soupesMeKreatika",function(req,res){
    var img = fs.readFileSync('./photos/soupes/soupes_me_kreatika.png');
    res.writeHead(200, {'Content-Type': 'image/png' });
    res.end(img, 'binary');
});

app.get("/soupesMeLaxanika",function(req,res){
    var img = fs.readFileSync('./photos/soupes/soupes_me_laxanika.png');
    res.writeHead(200, {'Content-Type': 'image/png' });
    res.end(img, 'binary');
});

app.get("/soupesMeThalassina",function(req,res){
    var img = fs.readFileSync('./photos/soupes/soupes_me_thalassina.png');
    res.writeHead(200, {'Content-Type': 'image/png' });
    res.end(img, 'binary');
});

app.get("/soupesMeZumarika",function(req,res){
    var img = fs.readFileSync('./photos/soupes/soupes_me_zumarika.png');
    res.writeHead(200, {'Content-Type': 'image/png' });
    res.end(img, 'binary');
});

app.get("/soupesMeOspria",function(req,res){
    var img = fs.readFileSync('./photos/soupes/soupes_me_ospria.png');
    res.writeHead(200, {'Content-Type': 'image/png' });
    res.end(img, 'binary');
});


var server = app.listen(8081, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port);

});