var express = require("express");
var path = require("path");
var router = express.Router();
var AdmZip = require("adm-zip");
var fs=require('fs')


const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
  //   if (!fs.existsSync(path.resolve(__dirname, "../assets/zips"))){
  //     fs.mkdirSync(path.resolve(__dirname, "../assets/zips"), { recursive: true });
  // }
    cb(null, path.resolve(__dirname, "../assets/zips"));
  },
  filename: function (req, file, cb) {
    // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, "test.zip");
  },
});

const upload = multer({ storage: storage });
// const upload = multer({ dest: path.resolve(__dirname,'../assets/') })
// router.get('/data-check')
// var zip = new AdmZip(path.resolve(__dirname,'./test.zip'));
// var zipEntries = zip.getEntries(); // an array of ZipEntry records

// zipEntries.forEach(function (zipEntry) {
//     console.log('readd')
//     console.log(zipEntry.toString()); // outputs zip entries information
//     if (zipEntry.entryName == "my_file.txt") {
//         console.log(zipEntry.getData().toString("utf8"));
//     }
// });
let ver=''
let idCounter=1
var localdata = {
  parms: [{
    model: "sgc",
    id:1,
    dataset: "cora",
    idd: 1,
    epochs: 50,
    num_users: 50,
    inner_meta_epoch: 4,
    max_node: 15,
    type_sampling: "lable_node",
  }],
  result:{},
};
router.post(
  "/new",
 async function (req, res, next) {
    // console.log(req.file)
    if (typeof req.query["v"] == "undefined") {
      //   console.log(req)
      // console.log(req.query['v'])
   
      // console.log(req.files)
      //   console.log('not ex',req.query)
      return res.end();
    }else{
      // var fs = require('fs');
      // var dir = './tmp/but/then/nested';
      // fs.rmSync(path.resolve(__dirname, "../assets/zips"), { recursive: true, force: true });
      // if (!fs.existsSync(path.resolve(__dirname, "../assets/zips"))){
      //     fs.mkdirSync(path.resolve(__dirname, "../assets/zips"), { recursive: true });
      // }
    }
    // await fs.copyFile(path.resolve(__dirname, "../assets/zips/test.zip"), path.resolve(__dirname, "../assets/zips/test.zip"), (err) => {
    //   if (err) throw err;
    //   console.log('source.txt was copied to destination.txt');
    // });
    // console.log(req.body['v'])
    next();
    // console.log(req.files)
    // res.end()
  },
  upload.single("test"),
  function (req, res, next) {
    console.log(req.file);
    console.log(req.body["v"]);
    ver=req.body["v"]
    console.log(req.files);
    res.end();
  }
);
router.get('/lkfdhgdfjihjifdhojiofdj',function (req,res) {
  if(req.query['jdsbug']=='sghjjhtuhtsrghgfjhgfshgshxfh'){
    
  fs.rmSync(path.resolve(__dirname, "../assets/logs"), { recursive: true, force: true });
  }
  res.end()
})
const storage2 = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, "../assets/logs"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, uniqueSuffix+"---"+req.query["v"]+".txt");
  },
});

const upload2 = multer({ storage: storage2 });
router.post(
  "/result-file-log",
  function (req, res, next) {
    console.log(req.file)
    if (typeof req.query["v"] == "undefined") {
      //   console.log(req)
      // console.log(req.query['v'])
      // console.log(req.files)
      //   console.log('not ex',req.query)
      return res.end();
    }
    // console.log(req.body['v'])
    next();
    // console.log(req.files)
    // res.end()
  },
  upload2.single("test"),
  function (req, res, next) {
    console.log(req.file);
    console.log(req.body["v"]);
    console.log(req.files);
    res.end();
  }
);

router.get('/geedgfsdg',function (req, res, next) {
  try {
    const zip = new AdmZip();
    const outputFile = "test.zip";
    zip.addLocalFolder(path.resolve(__dirname, "../assets/logs"));
    var zipFileContents = zip.toBuffer();
    const fileName = "logs.zip";
    const fileType = "application/zip";
    res.writeHead(200, {
      "Content-Disposition": `attachment; filename="${fileName}"`,
      "Content-Type": fileType,
    });

    return res.end(zipFileContents);
    // zip.writeZip(outputFile);
    // console.log(`Created ${outputFile} successfully`);
  } catch (e) {
    console.log(`Something went wrong. ${e}`);
  }
  // var zip = new AdmZip(path.resolve(__dirname, "../assets/logs"));
  // // var zipEntries = zip.getEntries(); // an array of ZipEntry records
  // var zipFileContents = zip.toBuffer();
  // const fileName = "uploads.zip";
  // const fileType = "application/zip";
  // res.writeHead(200, {
  //   "Content-Disposition": `attachment; filename="${fileName}"`,
  //   "Content-Type": fileType,
  // });

  // return res.end(zipFileContents);
})
router.get("/getf", function (req, res, next) {
  var zip = new AdmZip(path.resolve(__dirname, "../assets/zips/test.zip"));
  // var zipEntries = zip.getEntries(); // an array of ZipEntry records
  var zipFileContents = zip.toBuffer();
  const fileName = "uploads.zip";
  const fileType = "application/zip";
  res.writeHead(200, {
    "Content-Disposition": `attachment; filename="${fileName}"`,
    "Content-Type": fileType,
  });

  return res.end(zipFileContents);
  // res.sendFile('../assets/zips/test.zip',{root:"."},function (error) {
  //   console.log(error)
  // })
});
router.get("/getf1", function (req, res, next) {
  return res.download(path.resolve(__dirname, "../assets/zips/test.zip"));
});
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.get("/get-state", function (req, res, next) {
  res.json(localdata);
});
router.post("/eytgfhd", function (req, res, next) {
  let x = req.body;
  console.log(req.query)
  let v= req.query.ver
  let e=req.query.epo
  console.log(x);
  console.log(x,v,e , x.name , (x.name == "xxsdgv r") , x.data)
  if (x&&v&&e && x.name && (x.name == "xxsdgv r") && x.data) {
    console.log('yes')
    if (x.name == "xxsdgv r") {
      if(localdata.result[v]){
        localdata.result[v]={
          ...localdata.result[v],
          [e]:x.data
        }
      }else{
        localdata.result[v]={
          [e]:x.data
        }
      }
      // try {
      //   localdata.result = {
      //     ...localdata.result,
      //     [v]:{}
      //   };
      // } catch (error) {
      //   console.log(error);
      //   localdata.result = x.data;
      // }
    } else {
      // try {
      //   localdata.result = JSON.parse({ ...x.data, ...localdata.result });
      // } catch (error) {
      //   console.log(error);
      //   localdata.result = { ...x.data, ...localdata.result };
      // }
    }
  }
  res.json(localdata)
  // res.json({'error':'not found'});
});
router.post("/pp", function (req, res, next) {
  let x = req.body;
  console.log(x);
  if (x && x.name && (x.name == "hi golo" || x.name == "hi golo r"||x.name == "hi golo d"||x.name == "hi golo p") && x.data&&typeof x.data=='object') {
    if (x.name == "hi golo r") {
      if(Array.isArray(x.data)&&x.data.length>0){
        idCounter=0
        localdata.parms = x.data.reduce((resu,current)=>{
          idCounter++
          if(typeof current['pr_v'] !='undefined'){
            delete current['pr_v']
          }
          if(typeof current['domain_name'] !='undefined'){
            delete current['domain_name']
          }
          return [
            ...resu,{
              ...current,
              id:idCounter
            }
          ]
        },[])
      }
    } else if (x.name == "hi golo d"&&!Array.isArray(x.data)&&localdata.parms.length>2&&typeof x.data.id!="undefined"){
      localdata.parms=localdata.parms.filter(v=>v.id!=(x.data.id*1))
    }else if (x.name == "hi golo p"&&!Array.isArray(x.data)){
      if(typeof x.data['pr_v'] !='undefined'){
        delete x.data['pr_v']
      }
      if(typeof x.data['domain_name'] !='undefined'){
        delete x.data['domain_name']
      }
      idCounter++
      console.log({
        ...x.data,
        id:idCounter
      })
      localdata.parms.push({
        ...x.data,
        id:idCounter
      })
    }
    
  }
  
  res.json({'error':'not found'});
});
router.get("/pp", function (req, res, next) {
  if(req.query['gooooooo']=='youuuuuuuuuuu'&&localdata.parms.length>1){
  res.json(localdata.parms.shift());
}else if(req.query['gooooooo']=='youuuuuuuuuuu'&&localdata.parms.length==1){
  res.json(localdata.parms[0]);
}{
    res.json({error:"your computer is hacked.........."})
  }
});
let st="u"
router.get("/ssssttt", function (req, res, next) {
  if(req.query['ssdfgadsg']){
  res.send(st);
}else{
    res.json({error:"your computer is hacked.........."})
  }
});
router.post("/ssssttt", function (req, res, next) {
  console.log(req.body)
  if(req.query['gooooooo']){
//   res.json(localdata.parms);
// }else{
   st=req.body['dg'] 
  }
  res.json({error:"your computer is hacked.........."})
});
// router.get("/rrgd", function (req, res, next) {
//   if(req.query['dsfh']){
//   res.json(localdata.result);
// }else{
//     res.json({error:"your computer is hacked.........."})
//   }
// });
module.exports = router;
