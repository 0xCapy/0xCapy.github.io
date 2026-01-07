(function () {
    // If you only want this on the home page, keep this check.
    // Remove this block if you also want grid on tags/categories/archive pages.
    const path = window.location.pathname.replace(/\/+$/, "");
    const isHome = path === "" || path === "/" || path.endsWith("/index.html");
    if (!isHome) return;
  
    const container = document.querySelector(".posts-expand");
    if (!container) return;
  
    const posts = container.querySelectorAll(".post-block");
    // Enable grid only when there are multiple posts (list page).
    if (posts.length >= 2) container.classList.add("posts-grid");
  })();
  