const status200 = "https://tools-httpstatus.pickup-services.com/200"
const status305 = "https://tools-httpstatus.pickup-services.com/305"
const status404 = "https://tools-httpstatus.pickup-services.com/404"
const status500 = "https://tools-httpstatus.pickup-services.com/500"

class StatusCodesPage{
    checkStatus200(){
        cy.request(status200).then((response)=>{
        expect(response.status).to.eq(200)
        expect(response.body).to.include('200 OK')
        })
    }
    checkStatus305(){
        cy.request({
            url: status305,
            failOnStatusCode: false,
            followRedirect: false
        }).then((response)=>{
            expect(response.status).to.eq(305)
            expect(response.body).to.include('305 Use Proxy')
        })
    }
    checkStatus404(){
        cy.request({
            url: status404,
            failOnStatusCode: false
        }).then((response)=>{
            expect(response.status).to.eq(404)
            expect(response.body).to.include('404 Not Found')
        })
    }
    checkStatus500(){
        cy.request({
            url: status500,
            failOnStatusCode: false
        }).then((response)=>{
            expect(response.status).to.eq(500)
            expect(response.body).to.include('500 Internal Server Error')
        })
    }
}
export default StatusCodesPage