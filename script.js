// =========================
// NYXA PREMIUM
// =========================

// Floating animation
const heroImage = document.querySelector(".heroImage");

let angle = 0;

function animateHero() {

    angle += 0.01;

    if(heroImage){

        if (heroImage) {
    heroImage.style.transform = `translateY(${Math.sin(angle) * 12}px) rotate(${Math.sin(angle) * 1.2}deg) scale(1)`;
}

    }

    requestAnimationFrame(animateHero);

}

animateHero();


// =========================
// Mouse Glow
// =========================

const glow1 = document.querySelector(".glow1");
const glow2 = document.querySelector(".glow2");

document.addEventListener("mousemove",(e)=>{

    const x = e.clientX;
    const y = e.clientY;

    if(glow1){

        glow1.style.left = (x-300)+"px";
        glow1.style.top  = (y-300)+"px";

    }

    if(glow2){

        glow2.style.left = (window.innerWidth-x-300)+"px";
        glow2.style.top  = (window.innerHeight-y-300)+"px";

    }

});


// =========================
// Fade In Animation
// =========================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll(".section,.community,.tokenCard,.step,.glass")
.forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});


// =========================
// Navbar Background
// =========================

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        header.style.background="rgba(8,8,18,.82)";
        header.style.borderColor="rgba(255,255,255,.15)";

    }else{

        header.style.background="rgba(12,12,22,.55)";
        header.style.borderColor="rgba(255,255,255,.08)";

    }

});


// =========================
// Buttons Hover
// =========================

document.querySelectorAll(".buyBtn,.joinBtn").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.boxShadow="0 0 60px #8b5cf6";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.boxShadow="0 0 30px rgba(124,58,237,.45)";

    });

});
document.querySelectorAll(".tokenCard,.step").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px) scale(1.02)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0)";

});

});
// HERO REVEAL

window.addEventListener("load",()=>{

document.querySelector(".heroLeft").style.opacity="1";
document.querySelector(".heroLeft").style.transform="translateX(0)";

document.querySelector(".heroRight").style.opacity="1";
document.querySelector(".heroRight").style.transform="translateX(0)";

});
// =========================
// COPY CONTRACT ADDRESS
// =========================

const copyBtn = document.getElementById("copyBtn");

if (copyBtn) {
    copyBtn.addEventListener("click", () => {

        const contract = document.getElementById("contract");

        navigator.clipboard.writeText(contract.value);

        copyBtn.textContent = "✅ Copied!";

        setTimeout(() => {
            copyBtn.textContent = "📋 Copy Address";
        }, 2000);
    });
}
// =========================
// MOBILE MENU
// =========================

const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector("nav");

if (menuToggle && nav) {

    menuToggle.addEventListener("click", () => {

        nav.classList.toggle("active");

    });

}
