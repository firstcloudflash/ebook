fetch("world.json")
  .then(res => res.json())
  .then(data => {
    console.log("Empire Loaded:", data);
  });

document.querySelectorAll(".portal").forEach(portal => {
  portal.addEventListener("click", () => {
    const target = portal.getAttribute("data-target");

    if (target === "story") {
      alert("Entering Story Universe...");
    }

    if (target === "collection") {
      alert("Entering Visual Collection...");
    }

    if (target === "archive") {
      alert("Entering Memory Archive...");
    }
  });
});
