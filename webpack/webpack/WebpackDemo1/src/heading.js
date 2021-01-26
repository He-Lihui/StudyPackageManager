export default ()=>{
    const element = document.createElement('h1')
    element.textContent = "hello world"
    element.addEventListener('click',()=>{
        alert('hello webpack')
    },false)
    return element
}