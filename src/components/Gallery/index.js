import React, { Component } from "react"
import BreadCumb from "../BreadCumb"
import { Link, useStaticQuery } from "gatsby"
import "./gallery.css"

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query MyQuerys {
      allContentfulGallery(sort: { fields: createdAt, order: ASC }) {
        nodes {
          title
          tumbnailImage {
            file {
              url
              details {
                image {
                  height
                  width
                }
              }
            }
          }
          id
        }
      }
    }
  `)
  const items = data.allContentfulGallery.nodes

  return (
    <section>
      <BreadCumb title="Gallery" />
      <section className="container" style={{ marginBottom: 100 }}>
        {/* <div id="gallery">
          {items
            ? items.map((item, i) => {
                return (
                  <div style={{ margin: 10 }}>
                    <img src={`https:${item.tumbnailImage.file.url}`} />
                    <Link to={`/singleGallery?id=${item.id}`}>
                      {item.title}
                    </Link>
                  </div>
                )
              })
            : ""}
        </div> */}
        <div
          id="portfolio_grid"
          class="portfolio-grid5 portfolio-masonry masonry-grid-3"
        >
          {items
            ? items.map((item, i) => {
                return (
                  <figure class="item" data-groups='["all", "video"]'>
                    <Link
                      to={`/singleGallery?id=${item.id}`}
                      title="Microsoft Student Partner"
                      class="lightbox mfp-iframe"
                    >
                      <img
                        src={`https:${item.tumbnailImage.file.url}`}
                        alt="Microsoft Student Partner"
                      />

                      <div>
                        <h5 class="name"> {item.title}</h5>
                      </div>
                    </Link>
                  </figure>
                )
              })
            : ""}
        </div>
      </section>
    </section>
  )
}

export default Gallery
