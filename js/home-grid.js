(function () {
    // Home index pages in Hexo: "/", "/page/2", "/page/3", ...
    var path = location.pathname.replace(/\/+$/, "") || "/";
    var isHome = (path === "/") || /^\/page\/\d+$/.test(path);
    if (!isHome) return;
  
    var blocks = document.querySelectorAll(".post-block");
    if (!blocks.length) return;
  
    // Find a container that wraps the list of posts.
    // Prefer the lowest common ancestor of first two blocks;
    // if only one block exists, use its parent as the container.
    var a = blocks[0];
    var b = blocks[1] || blocks[0];
  
    var container = a;
    while (container && !container.contains(b)) container = container.parentElement;
  
    // If we ended up on the post itself, move up one level.
    if (container && container.classList && container.classList.contains("post-block")) {
      container = container.parentElement;
    }
  
    if (!container) return;
  
    container.classList.add("home-grid");
  })();
  