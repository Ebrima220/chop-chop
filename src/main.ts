import "./style.css";
import { areas, dishes, type Badge } from "./menu";

const focus =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chop";

function badgeClasses(badge: Badge): string {
  if (badge === "Vegetarian") return "bg-leaf-soft text-leaf";
  return "bg-chop-soft text-chop-dark";
}

function renderDishes(root: HTMLElement): void {
  const cards = dishes.map((dish) => {
    const article = document.createElement("article");
    article.className =
      "rounded-xl border border-line bg-surface p-5 transition duration-200 hover:-translate-y-1";

    const image = document.createElement("img");
    image.src = dish.image;
    image.alt = "";
    image.className = "aspect-3/2 w-full rounded-lg object-cover";

    const headingRow = document.createElement("div");
    headingRow.className = "mt-5 flex items-start justify-between gap-3";

    const title = document.createElement("h3");
    title.className = "text-lg font-semibold tracking-tight text-ink";
    title.textContent = dish.name;

    const badge = document.createElement("span");
    badge.className = `shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold ${badgeClasses(dish.badge)}`;
    badge.textContent = dish.badge;

    headingRow.append(title, badge);

    const kitchen = document.createElement("p");
    kitchen.className = "mt-1 text-sm text-ink-3";
    kitchen.textContent = dish.kitchen;

    const priceRow = document.createElement("div");
    priceRow.className = "mt-5 flex items-center justify-between border-t border-line pt-5";

    const price = document.createElement("p");
    price.className = "text-lg font-semibold text-ink";
    price.textContent = dish.price;

    const add = document.createElement("button");
    add.type = "button";
    add.className = `rounded-lg border border-line bg-surface px-4 py-2 text-sm font-semibold text-ink transition duration-200 hover:border-ink hover:bg-ink hover:text-on-dark ${focus}`;
    add.textContent = "Add";

    priceRow.append(price, add);
    article.append(image, headingRow, kitchen, priceRow);
    return article;
  });

  root.replaceChildren(...cards);
}

function renderAreas(root: HTMLElement): void {
  const rows = areas.map((area) => {
    const item = document.createElement("li");
    item.className =
      "flex items-center justify-between rounded-lg border border-line bg-surface px-5 py-4";

    const name = document.createElement("span");
    name.className = "font-semibold text-ink";
    name.textContent = area.name;

    const time = document.createElement("span");
    time.className = "text-sm text-ink-3";
    time.textContent = `${area.minutes} min`;

    item.append(name, time);
    return item;
  });

  root.replaceChildren(...rows);
}

const dishRoot = document.querySelector<HTMLElement>("#dishes");
const areaRoot = document.querySelector<HTMLElement>("#areas");

if (dishRoot) renderDishes(dishRoot);
if (areaRoot) renderAreas(areaRoot);

const menu = document.querySelector<HTMLDialogElement>("#mobile-menu");
const menuOpen = document.querySelector<HTMLButtonElement>("#menu-open");

function setMenuOpen(open: boolean): void {
  if (!menu || !menuOpen) return;
  if (open) menu.showModal();
  else menu.close();
  menuOpen.setAttribute("aria-expanded", String(open));
}

menuOpen?.addEventListener("click", () => setMenuOpen(true));
menu?.addEventListener("close", () => menuOpen?.setAttribute("aria-expanded", "false"));
menu?.addEventListener("click", (event) => {
  if (event.target === menu) menu.close();
});
menu?.querySelector("[data-close]")?.addEventListener("click", () => menu?.close());
menu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => menu?.close());
});

window.matchMedia("(min-width: 40rem)").addEventListener("change", (event) => {
  if (event.matches) menu?.close();
});
