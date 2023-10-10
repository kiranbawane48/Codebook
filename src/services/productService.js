export async function getProductList(searchTerm){
    const response = await fetch(`http://localhost:8080/444/products?name_like=${searchTerm ? searchTerm : ""}`);
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}, Message: ${response.statusText}`);
      }
    const data = await response.json()
    return data;
}

export async function getProduct(id){
    const response = await fetch(`http://localhost:8080/444/products/${id}`);
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}, Message: ${response.statusText}`);
      }
    const data = await response.json();
    return data;
}

export async function getFeaturedList(){
    const response = await fetch("http://localhost:8080/444/featured_products");
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}, Message: ${response.statusText}`);
      }  
    const data = await response.json()
      return data;
}