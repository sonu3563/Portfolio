"use client";

import { useState } from "react";
import Image from "next/image";

export default function PortfolioPage({ isActive }) {
  const [activeCategory, setActiveCategory] = useState("all")
  const [isSelectOpen, setIsSelectOpen] = useState(false)

  const projects = [
  { id: 1, title: "Cumulus.rip", category: "Full Stack Website Development", image: "/assets/images/cumulus.png", link: "https://www.cumulus.rip/" },
  { id: 2, title: "Toyflix", category: "Mobile Application development", image: "/assets/images/toyflix.png", link: "https://apps.apple.com/in/app/toyflix/id1501836409" },
  { id: 3, title: "Tripwix", category: "Full Stack Website Development", image: "/assets/images/tripwix.png", link: "https://www.tripwix.com/en" },
  { id: 4, title: "Melon Taxi", category: "Mobile Application development", image: "/assets/images/melontaxi.png", link: "https://apps.apple.com/in/app/melon-taxi/id6741466242" },
  { id: 5, title: "Culturelink.", category: "Full Stack Website Development", image: "/assets/images/culturelink.png", link: "http://64.227.111.183/" },
  { id: 6, title: "SugarPlum Tech", category: "Full Stack Website Development", image: "/assets/images/sugarplum.png", link: "https://demo.sugarplumtech.com/sign-in?redirect_url=https%3A%2F%2Fdemo.sugarplumtech.com%2Fdashboard" },
  { id: 7, title: "Shopper", category: "Full Stack Website Development", image: "/assets/images/shopper.png", link: "https://ecommerce-mu-coral-50.vercel.app/" },
  { id: 8, title: "Armenia Expedition", category: "Full Stack Website Development", image: "/assets/images/amer.png", link: "https://tranquil-zabaione-9a73ec.netlify.app/" },
  { id: 9, title: "Vip Bio", category: "Full Stack Website Development", image: "/assets/images/vipbio.png", link: "https://peppy-horse-8c7438.netlify.app/" },
]

  const categories = ["all", "Full Stack Website Development", "Mobile Application development"]

  const handleFilterClick = (category) => {
    setActiveCategory(category)
    setIsSelectOpen(false)
  }

  const toggleSelect = () => setIsSelectOpen(!isSelectOpen)

  return (
    <article className={`portfolio ${isActive ? "active" : ""}`} data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        {/* Filter buttons for desktop */}
        <ul className="filter-list">
          {categories.map((category) => (
            <li key={category} className="filter-item">
              <button
                className={activeCategory === category ? "active" : ""}
                onClick={() => handleFilterClick(category)}
                data-filter-btn
              >
                {category === "all" ? "All" : category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            </li>
          ))}
        </ul>

        {/* Filter dropdown for mobile */}
        <div className="filter-select-box">
          <button className={`filter-select ${isSelectOpen ? "active" : ""}`} onClick={toggleSelect} data-select>
            <div className="select-value" data-select-value>
              {activeCategory === "all" ? "Select category" : activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
            </div>
            <div className="select-icon">
              <ion-icon name="chevron-down"></ion-icon>
            </div>
          </button>

          <ul className={`select-list ${isSelectOpen ? "active" : ""}`}>
            {categories.map((category) => (
              <li key={category} className="select-item">
                <button onClick={() => handleFilterClick(category)} data-select-item>
                  {category === "all" ? "All" : category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Projects grid */}
        <ul className="project-list">
          {projects
            .filter((project) => activeCategory === "all" || activeCategory === project.category)
            .map((project) => (
              <li key={project.id} className="project-item active" data-filter-item data-category={project.category}>
                <a href={project.link ? project.link : "#"} target="_blank" rel="noopener noreferrer">
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <ion-icon name="eye-outline"></ion-icon>
                    </div>
                    <Image src={project.image} alt={project.title} width={300} height={200} loading="lazy" />
                  </figure>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-category">{project.category}</p>
                </a>
              </li>
            ))}
        </ul>
      </section>
    </article>
  )
}
