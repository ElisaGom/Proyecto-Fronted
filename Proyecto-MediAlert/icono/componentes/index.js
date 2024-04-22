const btn = document.querySelector('#btnNotificacion');

btn.addEventListener('click',()=>{
    
    if(!("Notification" in window)){
        alert('Este navegador no soporta las notificaciones');
        return;
    }

    (Notification.permission === 'granted')? crearNotificacion() : obtenerPermiso();

});

 async function obtenerPermiso() {
    const respuesta = await Notification.requestPermission();
    (respuesta == 'granted')&& crearNotificacion();
}

function crearNotificacion() {
    
    const notificacion = new Notification('MediAlert',{
        body:'Es momento de tomar tú medicamento!',
        icon: 'https://drive.google.com/file/d/19LBv__ijOknIb4KkbmXXBOlhpj4FamSB/view?usp=sharing',
    });

    const notificacion2 = new Notification('MediAlert',{
        body:'No olvides la importancia de este, tú puedes!',
        icon: 'https://drive.google.com/file/d/19LBv__ijOknIb4KkbmXXBOlhpj4FamSB/view?usp=sharing',
    });

    const notificacion3 = new Notification('MediAlert',{
        body:'Buen trabajo!',
        icon: 'https://drive.google.com/file/d/19LBv__ijOknIb4KkbmXXBOlhpj4FamSB/view?usp=sharing',
        requireInteraction: true,
    });

    notificacion3.addEventListener('click',()=>{
        // Redireccionar
    });

}