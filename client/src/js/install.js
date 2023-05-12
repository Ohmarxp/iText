const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredPrompt = event;  
   butInstall.classList.toggle("hidden", false);
});

// click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    window.deferredPrompt;
     if (!promptEvent) {
       return;
     }
     promptEvent.prompt();
     window.deferredPrompt = null;
     butInstall.classList.toggle("hidden", true);
});

// handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    deferredPrompt = null;
    console.log('PWA has been added to home screen');
});
