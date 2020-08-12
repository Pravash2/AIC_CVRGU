import React, { Component } from "react"
import BreadCumb from "../BreadCumb"
import withLocation from "../withLocation"
import { Link, useStaticQuery } from "gatsby"
import { documentToHtmlString } from "@contentful/rich-text-html-renderer"

import parse from "html-react-parser"

const SingleGallery = ({ search }) => {
  const data = useStaticQuery(graphql`
    query MyQueryss {
      allContentfulGallery {
        edges {
          node {
            id
            date
            category
            eventsImages {
              file {
                url
              }
              title
            }
            title
            description {
              json
            }
            updatedAt(formatString: "")
          }
        }
      }
    }
  `)

  const items = data.allContentfulGallery.edges.filter(
    (item) => item.node.id === search.id
  )[0]
    ? data.allContentfulGallery.edges.filter(
        (item) => item.node.id === search.id
      )[0].node
    : []
  if (items) {
    const encodedUrl = encodeURIComponent(
      `https://AIC-CGU.com/singleGallery?id=${items.id}`
    )
    const encodedTitle = encodeURIComponent(items.title)
    const encodedTags = items.category ? items.category.join(",") : ""
    return (
      <div>
        <BreadCumb title={items.title} />
        <section className="project-details-area ptb-80">
          <div className="container">
            <section class="section">
              <div
                id="portfolio_grid"
                class="portfolio-grid5 portfolio-masonry masonry-grid-3"
              >
                {items.eventsImages
                  ? items.eventsImages.map((item, i) => {
                      return (
                        <figure class="item" data-groups='["all", "video"]'>
                          <a>
                            <img src={`https:${item.file.url}`} />
                            <div>
                              <h5 class="name"> {item.title}</h5>
                            </div>
                          </a>
                        </figure>
                      )
                    })
                  : ""}
              </div>
            </section>
            <div style={{ clear: "both" }} className="row">
              <div className="col-lg-12 col-md-12">
                <div className="project-details-desc">
                  <div style={{ textAlign: "justify" }}>
                    {items.description
                      ? parse(documentToHtmlString(items.description.json))
                      : ""}
                  </div>

                  <div className="project-details-information">
                    <div className="single-info-box">
                      <h4>Location</h4>
                      <p>{items.locations}</p>
                    </div>

                    <div className="single-info-box">
                      <h4>Category</h4>
                      {items.category
                        ? items.category.map((item) => <p>{item}</p>)
                        : ""}
                    </div>

                    <div className="single-info-box">
                      <h4>Date</h4>
                      <p>
                        {items.date ? new Date(items.date).toDateString() : ""}
                      </p>
                    </div>

                    <div className="single-info-box">
                      <h4>Share</h4>
                      <ul>
                        <li>
                          <a
                            href={`https://www.facebook.com/sharer.php?u=${encodedUrl}`}
                          >
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}&hashtags=${encodedTags}`}
                          >
                            <i className="fa fa-twitter"></i>
                          </a>
                        </li>

                        <li>
                          <a
                            href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`}
                          >
                            <i className="fa fa-linkedin"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  } else {
    return <div>Hello</div>
  }
}

export default withLocation(SingleGallery)
