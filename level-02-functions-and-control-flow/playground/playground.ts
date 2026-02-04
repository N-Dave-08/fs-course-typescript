class Counter {
    count = 0

    increment = () => {
        this.count++
    }

    incrementMethod() {
        this.count++
    }
}

const c = new Counter()
const inc1 = c.increment
inc1()

const inc2 = c.incrementMethod

console.log(c.count)