document.addEventListener(`DOMContentLoaded`, () => {
  fetch('/page manager/pages.json')
  .then(response => response.json())
  .then(pages => {
    const container = document.getElementById("pages")
    console.log(window.location.pathname)
    pages.forEach((page, index) => {
      console.log(index + ": " + page.icon);
      const el = document.createElement('a');
      el.className = `pageBtn`
      if (page.path != window.location.pathname) el.href = page.path
      el.innerHTML = `
        <img src=${page.icon}>
      `;
      container.appendChild(el)
    });
  })
})