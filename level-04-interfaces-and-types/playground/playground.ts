{
    type ApiSuccess<T> = {
        status: "success"
        data: T
    }
    type ApiError = {
        status: "error"
        message: string
    }
    type ApiResult<T> = ApiSuccess<T> | ApiError

    type User = {
        id: string
        email: string
    }

    function handleUserResult(result: ApiResult<User>) {
        if (result.status === "success") {
            console.log(result.data.email)
        } else {
            console.log("Error: ", result.message)
        }
    }

    const successResult: ApiResult<User> = {
        status: "success",
        data: {
            id: "k12jn3",
            email: "asd@domain.com"
        }
    }

    handleUserResult(successResult)
}