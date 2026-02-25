// Acciones de los botones del menú de la tarjeta QR

const ACTIONS = {
  catalogo: () => {
    // Aquí puedes cambiar al enlace de tu catálogo (Drive, web, etc.)
    window.location.href = "#catalogo2026";
  },
  promos: () => {
    // Podrías llevar a una sección de promociones dentro del mismo sitio
    window.location.href = "#promociones";
  },
  whatsapp: () => {
    // Reemplaza el número por el oficial de la tienda si cambia
    window.open("https://wa.me/51940824283?text=Hola%20Club%20Karolay%20Jeans%2C%20vengo%20desde%20su%20tarjeta%20digital%20QR.%20Quiero%20m%C3%A1s%20informaci%C3%B3n%20%F0%9F%91%9F", "_blank");
  },
  redes: () => {
    // Aquí puedes priorizar Instagram o un Linktree si usas uno
    window.open("https://www.instagram.com", "_blank");
  },
  ubicacion: () => {
    // Enlace a Google Maps del local
    window.open("https://maps.google.com?q=CC+Don+Ramon+Siglo+XX+Arequipa", "_blank");
  },
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".bio-btn[data-action]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const actionKey = btn.getAttribute("data-action");
      const action = ACTIONS[actionKey];
      if (typeof action === "function") {
        action();
      }
    });
  });
});

