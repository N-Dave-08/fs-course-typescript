/**
 * 
 * @param username 
 * @param domain 
 * @returns 
 */

function createEmail(username:string, domain: string = "example.com"): string {
    return `${username}@${domain}`
}

console.log(createEmail("dave"))
console.log(createEmail("dave", "domain.com"))