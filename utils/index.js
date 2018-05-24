const _ = require('lodash');

// WARNING: beware object mutable

/**
 * @params {Object} store
 * @params {String} name
 * @params {Object} scores
 * @params {Number} scores{key}
 */
exports.updateStudentScore = (store, { name, scores }) => {
    // code here
    let s = _.cloneDeep(store)
    _.forEach(scores, (value, key) => {
        let index = _.findIndex(s, {subject: key})
        if (index !== -1) {
            let i = _.findIndex(s[index].students, {name: name})
            i === -1 ? s[index].students.push({
                    name: name,
                    score: value
                }) : s[index].students[i].score = value
        }  else {
            s.push({
                subject: key,
                students: [{ name: name, score: value }]
            })
        }
    })
    return s
};

/**
 * @params {Object} store
 * @params {String} name
 * @params {String} subject
 */
exports.removeStudentScoreBySubject = (store, { name, subject }) => {
    // code here
    let s = _.cloneDeep(store)
    return _.forEach(s, (value) => {
        if (value.subject === subject) {
            value.students = _.remove(value.students, obj => {
                return obj.name !== name
            })
        }
    })
};

/**
 * @params {Object} store
 */
exports.transformData = store => {
    let arr = []
    _.forEach(store, val => {
        _.forEach(val.students, obj => {
            let index = _.findIndex(arr, {name: obj.name})
            if (index !== -1) {
                let o = arr[index]
                o[val.subject] = obj.score
            } else {
                let o = {
                    name: obj.name
                }
                o[val.subject] = obj.score
                arr.push(o)
            }
        })
    })
    return arr
};
