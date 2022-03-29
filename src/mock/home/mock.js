let Mock=require("mockjs")
Mock.mock("/api/MyList",[
    {
        id:"mkmmmnhhbm",
        title:"aa",
        num:"1351",
        text:"123"
    },
    {
        id:"ASFFNSJNJJ",
        title:"aa",
        num:"1351",
        text:"25"
    },
    {
        id:"萨迪克发那么",
        title:"aa",
        num:"1351",
        text:"135"
    },
    {
        id:"很艾姬多娜",
        title:"aa",
        num:"1351",
        text:"25"
    },
    {
        id:"中国npm镜像",
        title:"55884n",
        num:"151",
        text:"0"
    },
    {
        id:"ASFFNSJNJJ",
        title:"aa",
        num:"1351",
        text:"25"
    },
    {
        id:"萨迪克发那么",
        title:"aa",
        num:"1351",
        text:"135"
    },
    {
        id:"ASFFNSJNJJ",
        title:"aa",
        num:"1351",
        text:"25"
    },
    {
        id:"萨迪克发那么",
        title:"aa",
        num:"1351",
        text:"135"
    },
    {
        id:"ASFFNSJNJJ",
        title:"aa",
        num:"1351",
        text:"25"
    },
    {
        id:"萨迪克发那么",
        title:"aa",
        num:"1351",
        text:"135"
    }
])
//删除
Mock.mock(/\/api\/mylist\/\d/, "delete", function (config) {
    let arr = config.url.split("/")
    let id = arr.pop()
    data.splice(id, 1)
    data.forEach(function (item, index) {
        item.id = index
    })
    return data
})
