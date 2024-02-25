const test1 = (a) => {
    a=1
    console.log('test'+a)
}

const test2 = () => {
    console.log('test2')
}

test1(test2())