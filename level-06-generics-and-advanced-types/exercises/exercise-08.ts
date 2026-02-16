{
    type NonNullable<T> = T extends null | undefined ? never : T

    type Test1 = NonNullable<string> // string
    type Test2 = NonNullable<string | null> // string but might be null
    type Test3 = NonNullable<number | undefined> // number
    type Test4 = NonNullable<null> // never

    function processValue<T>(value: NonNullable<T>): void {
        console.log("Processing... ", value)
    }

    processValue("hello") // okay
    processValue(23) // okay
    //processValue(null) // error because when the type is null or undefined, the type would be never

    type ArrayElementType<T> = T extends (infer U)[] ? U : never

    type StringArrayType = ArrayElementType<string[]>
    const fruits: StringArrayType[] = ["orange", "lemon"]

    type NumberArrayType = ArrayElementType<number[]>
    const nums: NumberArrayType[] = [1, 2, 3]

    type NotArray = ArrayElementType<string>
    // const notArray: NotArray = "something" // error because its type is never as it is not array
}