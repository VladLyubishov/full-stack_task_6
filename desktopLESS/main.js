const start = new Date();

window.addEventListener("load", () => {
    console.log(`Страница загружена: ${Date.now() - start} ms`)
})

document.addEventListener("DOMContentLoaded", () => {
    console.log(`DOM загружен: ${Date.now() - start} мс`)
})