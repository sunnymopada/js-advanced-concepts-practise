
const name = {
  firstName: 'Sunny',
  lastName: 'Mopada',
}

let getFullName = function (degree, time) {
  console.log(this.firstName + ' ' + this.lastName + ' ' + degree + ' ' + time)
}

Function.prototype.mybind = function (...args) {
  const obj = this
  const params = args.slice(1)
  return function (...functionParams) {
    obj.apply(args[0], [...params, ...functionParams])
  }
}

getFullName.bind(name, 'Mr')('Time')

getFullName.mybind(name, 'Mr')('Time')