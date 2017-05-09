class staffItem {
    constructor(item) {
        this.info = {};
        this.info.name = item.name;
        this.info.age = item.age || 0;
        this.info.sex = item.sex;
        this.info.id = item.id;
        this.info.descrip = item.descrip || '';
        this.key = ++staffItem.key;
    }
}
staffItem.key = 0;

export default class STAFF {

    constructor() {
        this.allStaff = [
            new staffItem(STAFF.rawData[0]),
            new staffItem(STAFF.rawData[1]),
            new staffItem(STAFF.rawData[2]),
            new staffItem(STAFF.rawData[3]),
            new staffItem(STAFF.rawData[4]),
            new staffItem(STAFF.rawData[5]),
            new staffItem(STAFF.rawData[6]),
            new staffItem(STAFF.rawData[7]),
            new staffItem(STAFF.rawData[8]),
            new staffItem(STAFF.rawData[9]),
            new staffItem(STAFF.rawData[10])
        ];
        this.staff = this.allStaff;
        this.word = ''; //搜索关键字
    }
    addStaffItem(item) {
        let newItem = new staffItem(item);
        this.allStaff.push(newItem);
        this.staff = this.allStaff;
        return this;
    }
    searchStaff(word) {
            this.word = word;
            this.staff = this.allStaff;
            //在staff中搜索
            this.staff = this.staff.filter(item => {
                return item.info.name.indexOf(word) !== -1 ||
                    (item.info.age + '').indexOf(word) !== -1 ||
                    item.info.id.indexOf(word) !== -1 ||
                    item.info.sex.indexOf(word) !== -1;
            });
            return this;
        }
        // 删
    deleteStaff(index) {
            this.staff.splice(index, 1);
            return this;
        }
        // 显示个人信息
    showStaff(index) {
            let person = this.staff[index]
            return person;

        }
        // 筛选

    selectStaff(option) {
            let temp = this;
            /*这里实际上声明的是一个空的对象，所
                    以下面才要添加staff。这也是为什么添加temp有用的原因，
                    每次都给temp一个空的对象，然后重新添加成员*/

            if (option === "0") {
                this.staff = this.allStaff;
                return temp
            }
            this.staff = this.allStaff.filter(item => {
                return item.info.id.indexOf(option) !== -1;

            });
            return temp;
        }
        // 排序
    sortwayStaff(option) {
        let temp = this;
        let allStaff = this.allStaff
        for (let i = 0; i < allStaff.length - 1; i++) {
            console.log(i)
            let tem;
            if (allStaff[i].info.age > allStaff[i + 1].info.age) {

                temp = allStaff[i];
                allStaff[i] = allStaff[i + 1];
                allStaff[i + 1] = tem;
            }
        }
        this.staff = allStaff
        return temp;
    }


}

STAFF.rawData = [{
    descrip: '我是一匹来自远方的狼。',
    sex: '男',
    age: 20,
    name: '张三',
    id: '主任'
}, {
    descrip: '我是一匹来自远方的狼。',
    sex: '女',
    age: 21,
    name: '赵静',
    id: '学生'
}, {
    descrip: '我是一匹来自远方的狼。',
    sex: '女',
    age: 22,
    name: '王二麻',
    id: '学生'
}, {
    descrip: '我是一匹来自远方的狼。',
    sex: '女',
    age: 24,
    name: '李晓婷',
    id: '实习'
}, {
    descrip: '我是一匹来自远方的狼。',
    sex: '男',
    age: 23,
    name: '张春田',
    id: '实习'
}, {
    descrip: '我是一匹来自远方的狼。',
    sex: '男',
    age: 22,
    name: '刘建国',
    id: '学生'
}, {
    descrip: '我是一匹来自远方的狼。',
    sex: '男',
    age: 24,
    name: '张八',
    id: '主任'
}, {
    descrip: '我是一匹来自远方的狗。',
    sex: '男',
    age: 35,
    name: '李四',
    id: '老师'
}, {
    descrip: '我是一匹来自远方的猪。',
    sex: '男',
    age: 42,
    name: '王五',
    id: '学生'
}, {
    descrip: '我是一匹来自远方的牛。',
    sex: '男',
    age: 50,
    name: '赵六',
    id: '实习'
}, {
    descrip: '我是一匹来自远方的马。',
    sex: '男',
    age: 60,
    name: '孙七',
    id: '实习'
}];