{
    type Success = {
        status: "success"
        data: string
    }
    type Error = {
        status: "error"
        message: string
    }

    type Result = Success | Error

    function handleResult(value: Result): void {
        if (value.status === "success") {
            console.log('Success! ', value.data)
        } else if (value.status === "error") {
            console.log('Error! ', value.message)
        }
    }

    const successResult: Result = {
        status: "success",
        data: "this is your data"
    }
    handleResult(successResult)

    const failResult: Result = {
        status: "error",
        message: "you got an error"
    }
    handleResult(failResult)
}