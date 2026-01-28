{
    let num: number = 10
    let str: string = "5"
    let result = num + Number(str)

    console.log(result)
}
// just wrapped it in a block scope to avoid 'Cannot redeclare block-scoped variable 'num'.ts(2451)' error