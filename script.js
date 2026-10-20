const personas = {
commuter: {
 initials: "AS", name: "Aarav Sharma", age: "29 years", role: "Office commuter",
 context: "Drives to a busy commercial district on weekdays.",
 goals: "Arrive on time; park quickly; know the total cost.",
 behaviours: "Checks map apps, circles streets, and asks parking attendants.",
 frustrations: "Stale availability, unclear fees, and wasted time.",
 needs: "Nearby options, transparent pricing, updated status, and clear directions."
},
family: {
 initials: "NV", name: "Neha Verma", age: "36 years", role: "Family visitor",
 context: "Visits markets and clinics, sometimes with children or an older relative.",
 goals: "Find safe, accessible parking with a short walk.",
 behaviours: "Chooses familiar lots and asks locals when uncertain.",
 frustrations: "Long walks, confusing entrances, and missing accessibility details.",
 needs: "Entrance guidance, safety cues, accessible-space filters, and clear hours."
}
};
const card = document.querySelector("#persona-card");
function renderPersona(key) {
 const p = personas[key];
 card.innerHTML = `
 <div class="persona-side"><div class="avatar">${p.initials}</div><h2 style="font-size:2rem;margin-top:22px">${p.name}</h2><div class="role">${p.role} · ${p.age}</div><p style="margin-top:18px">${p.context}</p></div>
 <div class="persona-main">
 <div><span class="mini-label">GOALS</span><p>${p.goals}</p></div>
 <div><span class="mini-label">BEHAVIOURS</span><p>${p.behaviours}</p></div>
 <div><span class="mini-label">FRUSTRATIONS</span><p>${p.frustrations}</p></div>
 <div><span class="mini-label">NEEDS</span><p>${p.needs}</p></div>
 </div>`;
 document.querySelectorAll(".tab").forEach(btn => {
   const active = btn.dataset.persona === key;
   btn.classList.toggle("active", active);
   btn.setAttribute("aria-pressed", String(active));
 });
}
document.querySelectorAll(".tab").forEach(btn => btn.addEventListener("click", () => renderPersona(btn.dataset.persona)));
renderPersona("commuter");
