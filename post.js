function guardar(){
    const form = document.getElementById('http://127.0.0.1:8000/api/sales');
    form.addEventListener('submit', function(e){
        e.preventDefault();
        const sale = new FormData(form);
        fetch('', {
            method: '',
            body: sale
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
    });
    location.reload();
}