import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
import { RestLink } from "apollo-link-rest";
import { HttpLink } from "apollo-link-http";

const restLink = new RestLink({
    endpoints: {
        openExchangeRate: "https://open.exchangerate-api.com/v6/",
    },
});

const httpLink = new HttpLink({
    uri: "https://notable-leopard-55.hasura.app/v1/graphql",
    headers: {
        // "x-hasura-admin-secret": "1gUNJM1ECJ1hgkO5Po4ZqIhilM1h5RDFAxjIuKAfgn75TBDxqUKRp92YYuvoGtec",
        Authorization: "Bearer eyJraWQiOiIxNFhPWEU4WmtmTUxZa2JpaU1ldHE4QjB4aFdESWNtck5NY0I2RnRcL3VYQT0iLCJhbGciOiJSUzI1NiJ9.eyJhdF9oYXNoIjoiR3p2dFVXWHl4VnBuaHRJSVlJN1o5dyIsInN1YiI6IjdhNWJmYzc1LTJiMjEtNDRhMi1hNWE2LThjYzg4YTA4NTQ1NCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJiaXJ0aGRhdGUiOiIxMi0wOC0xOTk4IiwiaHR0cHM6XC9cL2hhc3VyYS5pb1wvand0XC9jbGFpbXMiOiJ7XCJ4LWhhc3VyYS11c2VyLWlkXCI6XCI3YTViZmM3NS0yYjIxLTQ0YTItYTVhNi04Y2M4OGEwODU0NTRcIixcIngtaGFzdXJhLWRlZmF1bHQtcm9sZVwiOlwidXNlclwiLFwieC1oYXN1cmEtYWxsb3dlZC1yb2xlc1wiOltcInVzZXJcIl19IiwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMi5hbWF6b25hd3MuY29tXC91cy1lYXN0LTJfcVk1TGF3OGYxIiwiY29nbml0bzp1c2VybmFtZSI6ImlzaWx2aXUiLCJwaWN0dXJlIjoiaHR0cHM6XC9cL3d3dy5iaW9ncmFwaHkuY29tXC8uaW1hZ2VcL3Rfc2hhcmVcL01UYzVPRGMxTlRNNE5qTXlPVGMyTXpjelwvZ2V0dHlpbWFnZXMtNjkzMTM0NDY4LmpwZyIsImF1ZCI6IjUyOThhb242ajFlN3ZqZ25sM2J0djBlaTVtIiwiZXZlbnRfaWQiOiI3ZDM4MjI2Zi0yMDRmLTQ0OTEtYjE4Yi02Nzk3ODliZDA4MGUiLCJ1cGRhdGVkX2F0IjoxMiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2MzkxNjg3NjksIm5hbWUiOiJJZnJpbSBTaWx2aXUiLCJleHAiOjE2MzkxNzIzNjksImlhdCI6MTYzOTE2ODc2OSwianRpIjoiZGRlYTZmMDktYzhhYy00ODBhLWI1NGItNDU1NDA0OTYyYWRhIiwiZW1haWwiOiJpZnJpbS5zaWx2aXUyQGdtYWlsLmNvbSJ9.EYexyrfom7h3ihqPCKtf33uk1p1hM4dc9kCQ-R3ErYTS8B1h-FueJUAAy2B0TLuWPkwjjqdTIK3yw2nu1UNCLG0E6mu-_TeV_j2BhfT6ImRgAQH939cAvItw_dwwJIMXe48BagcjgFQPINQ-LwOzTYNfqWlCUagoVG8-4r4b1LfbFOPXT4c9JoH8yfSAeXvl10oZNe7VHoiayAOcaKFtnuqQUlbrBNXZo0l2qgzf1Ym_Hw_iicI9SMHGi3fjjqq2vrv84-KSz53GndDmFEkxy6wqaD0SOVmPecjzZmniq335c665xtlv9F-81Eq274T7VboNNOZ_VAEm-r7GQQB5aA" 
    },
});

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from([restLink, httpLink]),
});