import React, { Component } from "react"
import BreadCumb from "../BreadCumb"
import withLocation from "../withLocation"
import { Link, useStaticQuery } from "gatsby"
import { documentToHtmlString } from "@contentful/rich-text-html-renderer"
import parse from "html-react-parser"

const SingleGallery = ({ search }) => {
  const data = useStaticQuery(graphql`
    query MyQuerysssss {
      allContentfulNews {
        nodes {
          title
          createdAt(formatString: "")
          description {
            json
          }
          thumbnail {
            file {
              url
            }
          }
          tags
          id
          thumbnailtext {
            thumbnailtext
          }
        }
      }
    }
  `)

  const items = data.allContentfulNews.nodes.filter(
    item => item.id === search.id
  )[0]

  if (items) {
    const encodedUrl = encodeURIComponent(
      `https://cvrcetbi.com/singleNews?id=${items.id}`
    )
    const encodedTitle = encodeURIComponent(items.title)
    const encodedTags = items.tags ? items.tags.join(",") : ""
    const encodedSummary = items.thumbnailtext
      ? encodeURIComponent(items.thumbnailtext.thumbnailtext)
      : ""
    return (
      <div>
        <BreadCumb title={items.title} />
        <section className="project-details-area ptb-80">
          <div>
            <section className="blog-details-area ptb-80">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 col-md-12 offset-lg-2">
                    <div className="blog-details">
                      <div className="article-img">
                        <img
                          src={`https:${items.thumbnail.file.url}`}
                          alt="blog-details"
                        />
                        <div className="date">
                          {new Date(items.createdAt)
                            .toDateString()
                            .substring(0, 10)}
                        </div>
                      </div>

                      <div className="article-content">
                        <ul className="category">
                          {items.tags
                            ? items.tags.map(item => (
                                <li>
                                  <a href="#">{item}</a>
                                </li>
                              ))
                            : ""}
                        </ul>

                        <h3>{items.title}</h3>

                        <div style={{ textAlign: "justify" }}>
                          {parse(documentToHtmlString(items.description.json))}
                        </div>

                        <div className="share-post">
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
                                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}&summary=${encodedSummary}`}
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
        </section>
      </div>
    )
  } else {
    return <div>Loading</div>
  }
}

export default withLocation(SingleGallery)
