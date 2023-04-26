import React from "react"
import * as styles from "../styles/projects.module.css"
import Card from "../components/card"
import gastroCancerWebsite from '/static/images/gastroCancerWebsite.png'
import housingMarket from '/static/images/housingMarket.png'
import spotifyTableau from '/static/images/spotifyTableau.png'

const projectData = [
  {
    title: "Deep Learning Website",
    image: gastroCancerWebsite,
    desc:
      "A website that utilises a CNN model to detect microsatellite instability in histological images of Gastrointestinal Cancer Tumours.",
    link: "https://github.com/damian-ngau/FIT3164_team16_website",
    view: "https://fit3164team16website.herokuapp.com/",
  },
  {
    title: "Housing Market Analysis",
    image: housingMarket,
    desc:
      "A website containing visuals to show factors that influence property prices in Melbourne between the years 2016-2018.",
    link: "https://github.com/damian-ngau/the_melbourne_housing_market",
    view: "https://dngau.dev/the_melbourne_housing_market/",
  },
  {
    title: "Spotify Billboard Analysis",
    image: spotifyTableau,
    desc:
      "A dashboard containing visuals to showing songs on the Spotify Billboard",
    link: "",
    view: "https://public.tableau.com/app/profile/damian.ngau/viz/data_visualisation_1/Dashboard1",
  },
  {
    title: "Personal Website",
    image: "",
    desc:
      "This website :)",
    link: "https://github.com/damian-ngau/damian-ngau.github.io",
    view: "https://dngau.dev/",
  },
]

const cards = projectData.map(project => {
  return <Card project={project} />
})

export default function Projects() {
  return (
    <section id="Projects">
      <div>
        <div className={styles.heading}>Projects</div>
        <div className={styles.projects}>{cards}</div>
      </div>
    </section>
  )
}