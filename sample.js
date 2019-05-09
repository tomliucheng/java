//16进制转10进制
function hexToInt(x){
	return parseInt(x, 16);
}

function hexToAscii(x){
	var a = parseInt(x, 16);
	return String.fromCharCode(a);
}

//链接mysql测试sql语句
var pool = mysql.createPool({
    host     : 'localhost',
    port	 : '3306',
    user     : 'hbj_writer',
    password : 'db_2017_Writer',
    database : 'dev_manager'
});

function ab(sql, arr, callback){
    //建立链接
    pool.getConnection(function(err,connection){
        if(err){
            console.log('getConnection err');
            throw err;
            return;
        }
        connection.query(sql,arr,function(error,results,fields){
            //将链接返回到连接池中，准备由其他人重复使用
            connection.release();
            if(error) throw error;
            //执行回调函数，将数据返回
            callback && callback(results,fields);
        });
    });
};
var sql = 'INSERT INTO odors (odors1, odors2, odors3, odors4) VALUES(?,?,?,?)';
var para = ['192.168.3.3'];

ab(sql, para, (results, fields)=>{
    if (results.length > 0){
        resolve(results)
    }
    reject("no data")
 })

 //16进制数组转浮点数

 function ArrToFloat(arr){
    v1 = parseInt(arr[0],10);
    v2 = parseInt(arr[1],10);
    v3 = parseInt(arr[2],10);
    v4 = parseInt(arr[3],10);

    //小端模式
    var data =  [v4, v3, v2, v1];
    // var data =  [v1,v2,v3,v4];

    var buf = new ArrayBuffer(4);
    var view = new DataView(buf);
    data.forEach(function (b, i) {
        view.setUint8(i, b);
    });

    var num = view.getFloat32(0);
    return num.toFixed(4);
}

//泽天尾气主句，解码0x14命令
var b = [0xAA,0x14,0x1B,0x2F,0x23,0x41,0xFA,0x7E,0x5A,0x3F,0x4A,0x6C,0x8A,0x43,0xC3,0xF5,0xA0,0x42,0xDF,
    0x62,0xAB,0x3D,0x68,0xDB,0x4E,0x3A,0xCA,0xE4,0x31,0x3B,0x1D,0xC9,0x75,0x3F,0x94,0xA6,0x88,0x41,
    0x9C,0xD3,0x1D,0x3F,0x71,0x3D,0xC2,0x40,0x8B,0x6C,0x47,0x41,0x17,0xD9,0x6E,0x3F,0x31,0xA8,0x16,0x44,
    0x5C,0x4F,0x1D,0x43,0xE3,0x4D,0x99,0x3D,0x8C,0x6D,0xA5,0x3A,0x7D,0x6E,0x9E,0x3B,0x71,0x3D,0x50,0x41,0x51,0xAA]

console.log("[汽油]co2： ", ArrToFloat(b.slice(2,6)))
console.log("[汽油]co： ", ArrToFloat(b.slice(6,10)))
console.log("[汽油]no： ", ArrToFloat(b.slice(10,14)))
console.log("[汽油]hc： ", ArrToFloat(b.slice(14,18)))
console.log("[汽油]co/co2： ", ArrToFloat(b.slice(18,22)))
console.log("[汽油]hc/co2： ", ArrToFloat(b.slice(22,26)))
console.log("[汽油]no/co2： ", ArrToFloat(b.slice(26,30)))
console.log("[汽油]不透光度： ", ArrToFloat(b.slice(30,34)))
console.log("[汽油]速度： ", ArrToFloat(b.slice(34,38)))
console.log("[汽油]加速度： ", ArrToFloat(b.slice(38,42)))
console.log("[汽油]车长： ", ArrToFloat(b.slice(42,46)))
console.log("[汽油]co2： ", ArrToFloat(b.slice(46,50)))

console.log("[柴油]co： ", ArrToFloat(b.slice(50,54)))
console.log("[柴油]no： ", ArrToFloat(b.slice(54,58)))
console.log("[柴油]hc： ", ArrToFloat(b.slice(58,62)))
console.log("[柴油]co/co2： ", ArrToFloat(b.slice(62,66)))
console.log("[柴油]hc/co2： ", ArrToFloat(b.slice(66,70)))
console.log("[柴油]no/co2： ", ArrToFloat(b.slice(70,74)))
console.log("[柴油]不透光度： ", ArrToFloat(b.slice(74,78)))