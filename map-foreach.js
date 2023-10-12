const data = ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']
console.log(data)


function task41a() {
    for (let i = 0; i < data.length; i++) {
        if (typeof data[i] === 'number') {
            console.log(data[i])
        }
    }
}
// task41a()
function task41b() {
    data.forEach((num) => {
        if (typeof num === 'number') {
            console.log(num)
        }
    })
}
// task41b()


function task42a() {
    for (let i = 0; i < data.length; i++) {
        if (typeof data[i] === 'string') {
            console.log(data[i])
        }
    }
}
// task42a()
function task42b() {
    data.forEach((num) => {
        if (typeof num === 'string') {
            console.log(num)
        }
    })
}
// task42b()



function task43a() {
    for (let i = 0; i < data.length; i++) {
        if (typeof data[i] === 'number') {
            data[i] = Math.pow(data[i], 4)
            console.log(data[i])
        }
    }
}
// task43a()
function task43b() {
    data.forEach((num) => {
        if (typeof num === 'number') {
            num = Math.pow(num, 4)
            console.log(num)
        }
    })
}
// task43b()



function task44a() {
    for (let i = 0; i < data.length; i++) {
        if (typeof data[i] === 'number') {
            data[i] = data[i] + 55
            console.log(data[i])
        }
    }
}
// task44a()
function task44b() {
    data.forEach((num) => {
        if (typeof num === 'number') {
            num = num + 55
            console.log(num)
        }
    })
}
// task44b()


function task45a() {
    for (let i = 0; i < data.length; i++) {
        if (typeof data[i] === 'number') {
            data[i] = data[i] / 2
            console.log(data[i])
        }
    }
}
// task45a()
function task45b() {
    data.forEach((num) => {
        if (typeof num === 'number') {
            num = num / 2
            console.log(num)
        }
    })
}
// task45b()



function task46a() {
    for (let i = 0; i < data.length; i++) {
        if (typeof data[i] === 'number') {
            console.log('number: ' + data[i])
        }
    }
}
// task46a()
function task46b() {
    data.forEach((num) => {
        if (typeof num === 'number') {
            console.log('number: ' + num)
        }
    })
}
// task46b()



function task47a() {
    for (let i = 0; i < data.length; i++) {
        if (typeof data[i] === 'number') {
            console.log('Index: ' + i + ', number: ' + data[i])
        }
    }
}
// task47a()
function task47b() {
    data.forEach((num, index) => {
        if (typeof num === 'number') {
            console.log('Index: ' + index + ', number: ' + num)
        }
    })
}
// task47b()



function task48a() {
    for (let i = 0; i < data.length; i++) {
        if (typeof data[i] === 'number') {
            data[i] = data[i] * i
            console.log(data[i])
        }
    }
}
// task48a()
function task48b() {
    data.forEach((num, index) => {
        if (typeof num === 'number') {
            num = num * index
            console.log(num)
        }
    })
}
// task48b()


function task49a() {
    const data2 = []
    for (let i = 0; i < data.length; i++) {
        if (typeof data[i] === 'number') {
            data2.push(data[i])
        }
    }
    for (let i = 0; i < data2.length; i++) {
        if (i === 0) {
            console.log('pirmas skaičius, nėra iš ko dauginti: ' + data2[i])
        } else {
            console.log(data2[i] * data2[i - 1])
        }
    }
}
// task49a()
function task49b() {
    const data2 = []
    data.forEach((num) => {
        if (typeof num === 'number') {
            {
                data2.push(num)
            }
        }
    })

    data2.forEach((num, index, arr) => {
        if (index === 0) {
            console.log('pirmas skaičius, nėra iš ko dauginti: ' + num)
        } else {
            console.log(num * arr[index - 1])
        }
    }
    )
}
// task49b()



function task410a() {
    for (let i = 0; i < data.length; i++) {
        if (typeof data[i] === 'number') {
            data[i] = data[i] * 5
        }
        if (data[i] > 350) {
            console.log(data[i])
        }
    }
}
// task410a()
function task410b() {
    data.forEach((num) => {
        if (typeof num === 'number') {
            num = num * 5
        }
            if (num > 350) {
                console.log(num)
        }
    })
}
// task410b()



function task411a() {
    for (let i = 0; i < data.length; i++) {
        if (typeof data[i] === 'string') {
            console.log(data[i] + ' has ' + data[i].length + ' symbols')
        }
    }
}
// task411a()
function task411b() {
    data.forEach((num, index) => {
        if (typeof num === 'string') {
            console.log(num + ' has ' + num.length + ' symbols')
        }
    })
}
// task411b()


function task412a() {
    for (let i = 0; i < data.length; i++) {
        if (typeof data[i] === 'string') {
            let letters = data[i].split('')
            let output = letters.join('-')
            console.log(output.toUpperCase())
        }
    }
}
// task412a()
function task412b() {
    data.forEach((num, index) => {
        if (typeof num === 'string') {
            let letters = num.split('')
            let output = letters.join('-')
            console.log(output.toUpperCase())

        }
    })
}
// task412b()



function task413a() {
    for (let i = 0; i < data.length; i++) {
        if (typeof data[i] === 'string') {
            const letters = data[i].split('')
            letters[0] = '_'
            letters[2] = '_'
            console.log(letters.join(''))
        }
    }
}
// task413a()
function task413b() {
    data.forEach((num, index) => {
        if (typeof num === 'string') {
            const letters = num.split('')
            letters[0] = '_'
            letters[2] = '_'
            console.log(letters.join(''))
        }
    })
}
// task413b()



function task414a() {
    for (let i = 0; i < data.length; i++) {
        if (typeof data[i] === 'string') {
            const letters = data[i].split('').reverse('').join('')
            console.log(letters)
        }
    }
}
// task414a()
function task414b() {
    data.forEach((num, index) => {
        if (typeof num === 'string') {
            const letters = num.split('').reverse('').join('')
            console.log(letters)
        }
    })
}
// task414b()



function task415a() {
    for (let i = 0; i < data.length; i++) {
        if (typeof data[i] === 'string') {
            if (i === 0) {
                console.log('Word ' + data[i] + ' is first word in array ' + data[i + 1] + ' is next')
            } 
            else if (i === data.length - 1) {
                console.log('Word ' + data[i] + ' is the last word ir array, ' + data[i - 1] + ' is before')
            }
            else {
                console.log('Word ' + data[i] + ' is between ' + data[i - 1] + ' and ' + data[i + 1] + ' in the array')
            }
        

        }
    }
}
// task415a()
function task415b() {
    data.forEach((num, index, arr) => {
        if (typeof num === 'string') {
            if (index === 0) {
                console.log('Word ' + num + ' is first word in array ' + arr[index + 1] + ' is next')
            } 
            else if (index === data.length - 1) {
                console.log('Word ' + num + ' is the last word ir array, ' + arr[index - 1] + ' is before')
            }
            else {
                console.log('Word ' + num + ' is between ' + arr[index - 1] + ' and ' + arr[index + 1] + ' in the array')
            }}
    }
    )
}
// task415b()
