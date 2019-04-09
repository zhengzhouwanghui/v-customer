import AV from "leancloud-storage";


const APP_ID ='0rsYEgBUGo2PPThshHMxw6XY-gzGzoHsz';
const APP_KEY = 'sTK0AaWuOhHh7JadN1EwYG9N';

AV.init({
    appId:APP_ID,
    appKey:APP_KEY
});
//console.log(AV);
let TestData = AV.Object.extend('db');
let query = new AV.Query('db')
let testData = new TestData(); 

export default {testData,query};
