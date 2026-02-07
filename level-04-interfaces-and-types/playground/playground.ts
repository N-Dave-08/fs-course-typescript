type ApiSuccess<T> = {
    status: "success"
    data: T
}
type ApiError = {
    status: "error"
    message: string
    errorCode?: string
}
type ApiResult<T> = ApiSuccess<T> | ApiError

type User = {
    id: string
    email: string
}

function renderUser(result: ApiResult<User>) {
    switch (result.status) {
        case "success":
            return result.data.email
        case "error":
            return `Error: ${result.message}`
    }
}

const errorResult: ApiResult<User> = {
    status: "error",
    message: "this is error"
}

console.log(renderUser(errorResult))