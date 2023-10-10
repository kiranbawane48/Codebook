export async function login(authDetail){
    const requestOptions ={
        method : "POST",
        headers :{"content-Type": "application/json"},
      body: JSON.stringify(authDetail)
      }
     const response = await fetch("http://localhost:8080/login",requestOptions);
     if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}, Message: ${response.statusText}`);
    }
     const data = await response.json();
     console.log(data);
     

     if(data.accessToken){
        sessionStorage.setItem("token", JSON.stringify(data.accessToken));
        sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
      }  
      return data;
}
export async function register(authDetail){
    const requestOptions ={
        method : "POST",
        headers :{"content-Type": "application/json"},
      body: JSON.stringify(authDetail)
      }
     const response = await fetch("http://localhost:8080/register", requestOptions);
     if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}, Message: ${response.statusText}`);
    }
     const data = await response.json();
     
    if(data.accessToken){
      sessionStorage.setItem("token", JSON.stringify(data.accessToken));
      sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
    }
    return data;
}

export function logout(){
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("cbid");
}