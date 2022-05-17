const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'mydb'
})

connection.connect((err) => {
  // DBへの接続に失敗した場合の処理
  if (err) throw err
})

connection.query('SELECT * FROM user', (err, results, fields) => {
  if (err) throw err

  for (let i = 0; i < results.length; i++) {
    console.log(`no:${i}`)
    console.log(`  id:${results[i].user_id}`)
    console.log(`  name:${results[i].name}`)
    console.log(`  password:${results[i].password}`)
  }
  // console.log(results)
  // 読み込んだデータを以下のフォーマットで出力
  // no: 番号
  //   id:ユーザーID
  //   name:名前
  //   password:パスワード

  // 出力例：
  // no:0
  //   id:user1@sist.ac.jp
  //   name:Hamajo Taro
  //   password:1bcdbccff1c3d3ae287905e0850e6afbb56010276f0a9a52ae1ff7874ef35726
  // no:1
  //   id:user2@sist.ac.jp
  //   name:Hamajo Jiro
  //   password:5f5b24ad65531525ddcccace0598dafaa386e30749babf12c7b0cda2af45c582
  
  // 取得したレコードの数
  // results.length

  // カラムの値の取得
  // results[レコード番号].カラム名
})

connection.end()