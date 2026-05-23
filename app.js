/* =========================================
   EMPIRE OF EMOTIONS — WORLD ENGINE JS
   Dual Reality Interaction System
========================================= */


/* -----------------------------------------
   1. REALITY SWITCH SYSTEM
----------------------------------------- */

let currentRealm = "a"; // default: forest reality

function switchRealm() {
  const body = document.body;

  if (currentRealm === "a") {
    body.classList.remove("realm-a");
    body.classList.add("realm-b");
    currentRealm = "b";

    triggerRealmEffect("ethereal");
  } 
  else {
    body.classList.remove("realm-b");
    body.classList.add("realm-a");
    currentRealm = "a";

    triggerRealmEffect("forest");
  }
}


/* Optional: click anywhere hero to switch world */
document.querySelector(".hero").addEventListener("click", switchRealm);



/* -----------------------------------------
   2. REALM TRANSITION EFFECT (FEEL SYSTEM)
----------------------------------------- */

function triggerRealmEffect(type) {
  const flash = document.createElement("div");

  flash.style.position = "fixed";
  flash.style.inset = "0";
  flash.style.zIndex = "9999";
  flash.style.pointerEvents = "none";
  flash.style.opacity = "0";

  if (type === "ethereal") {
    flash.style.background = "radial-gradient(circle, rgba(82,232,199,0.25), transparent)";
  } else {
    flash.style.background = "radial-gradient(circle, rgba(232,169,50,0.25), transparent)";
  }

  document.body.appendChild(flash);

  // fade in/out pulse
  flash.animate([
    { opacity: 0 },
    { opacity: 1 },
    { opacity: 0 }
  ], {
    duration: 700,
    easing: "ease-in-out"
  });

  setTimeout(() => flash.remove(), 750);
}



/* -----------------------------------------
   3. PORTAL INTERACTIONS
----------------------------------------- */

document.querySelectorAll(".portal").forEach(portal => {
  portal.addEventListener("click", () => {

    const text = portal.innerText.toLowerCase();

    if (text.includes("story")) {
      enterStory();
    }

    if (text.includes("collection")) {
      enterCollection();
    }

    if (text.includes("archive")) {
      enterArchive();
    }

  });
});



function enterStory() {
  pulseMessage("Entering Story Layer...");
  console.log("Story system activated");
}

function enterCollection() {
  pulseMessage("Entering Visual Collection...");
  console.log("Collection system activated");
}

function enterArchive() {
  pulseMessage("Entering Memory Archive...");
  console.log("Archive system activated");
}



/* -----------------------------------------
   4. SYSTEM FEEDBACK (NO ALERTS — PREMIUM STYLE)
----------------------------------------- */

function pulseMessage(message) {
  const el = document.createElement("div");

  el.textContent = message;

  el.style.position = "fixed";
  el.style.bottom = "40px";
  el.style.left = "50%";
  el.style.transform = "translateX(-50%)";

  el.style.padding = "12px 20px";
  el.style.borderRadius = "12px";
  el.style.background = "rgba(0,0,0,0.6)";
  el.style.color = "white";
  el.style.backdropFilter = "blur(10px)";
  el.style.border = "1px solid rgba(255,255,255,0.1)";
  el.style.zIndex = "9999";

  document.body.appendChild(el);

  el.animate([
    { opacity: 0, transform: "translateX(-50%) translateY(10px)" },
    { opacity: 1, transform: "translateX(-50%) translateY(0px)" },
    { opacity: 0 }
  ], {
    duration: 1500,
    easing: "ease-in-out"
  });

  setTimeout(() => el.remove(), 1500);
}



/* -----------------------------------------
   5. SUBTLE SPARKLE BEHAVIOR ENGINE
----------------------------------------- */

setInterval(() => {
  createSparkleBurst();
}, 2500);


function createSparkleBurst() {
  const spark = document.createElement("div");

  spark.style.position = "fixed";
  spark.style.width = "4px";
  spark.style.height = "4px";
  spark.style.borderRadius = "50%";
  spark.style.pointerEvents = "none";
  spark.style.zIndex = "9998";

  // random position
  spark.style.left = Math.random() * 100 + "vw";
  spark.style.top = Math.random() * 100 + "vh";

  // color based on realm
  if (currentRealm === "a") {
    spark.style.background = "rgba(232,169,50,0.8)";
    spark.style.boxShadow = "0 0 10px rgba(232,169,50,0.6)";
  } else {
    spark.style.background = "rgba(82,232,199,0.8)";
    spark.style.boxShadow = "0 0 10px rgba(82,232,199,0.6)";
  }

  document.body.appendChild(spark);

  spark.animate([
    { transform: "scale(0)", opacity: 0 },
    { transform: "scale(1)", opacity: 1 },
    { transform: "scale(0)", opacity: 0 }
  ], {
    duration: 1200,
    easing: "ease-out"
  });

  setTimeout(() => spark.remove(), 1200);
}
