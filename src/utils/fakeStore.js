export const func = async () => {
    const a = await fetch('https://fakestoreapi.com/products')
    const res = await a.json();
    console.log(res);
}