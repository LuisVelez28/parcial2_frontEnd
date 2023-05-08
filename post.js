function guardar(){
    const form = document.getElementById('formulario');
    form.addEventListener('submit', function(e){
        e.preventDefault();
        const sales = new FormData(form);
        const endPoint = 'http://127.0.0.1:8000/api/sales';
        fetch(endPoint, {
            method: 'POST',
            body: sales
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
    });
}