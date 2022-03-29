let Mock = require("mockjs")
Mock.mock("/api/login", 'post', function (config) {
    let obj = JSON.parse(config.body)
    let username = obj.username
    let pass = obj.pass
    if (username == "admin" && pass == "123456") {
        return {
            status: 200,
            message: "success",
            data: {
                username: "admin",
                pass: "123456",
                token: "2000"
            }
        }
    } else {
        return {
            status: 200,
            message: "fail",
            data: {
                message: "用户名或密码错误"
            }
        }
    }
})