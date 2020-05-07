import React from "react"
import BreadCumb from "../BreadCumb"

import { Link, useStaticQuery } from "gatsby"

const News = () => {
  const data = useStaticQuery(graphql`
    query MyQueryssss {
      allContentfulNews(sort: { fields: createdAt, order: DESC }) {
        nodes {
          id
          title
          createdAt(formatString: "")
          thumbnail {
            file {
              url
            }
          }
          thumbnailtext {
            thumbnailtext
          }
        }
      }
    }
  `)
  const items = data.allContentfulNews.nodes
  console.log(items[0].thumbnailtext)
  return (
    <div>
      <BreadCumb title="News" />
      <section class="blog-area ptb-80">
        <div class="container">
          <div class="row">
            {items
              ? items.map(item => (
                  <div class="col-lg-4 col-md-6">
                    <Link to={`/singleNews?id=${item.id}`}>
                      <div class="single-blog-post">
                        <div class="blog-image">
                          <a href="#">
                            <img
                              src={`https:${
                                item.thumbnail
                                  ? item.thumbnail.file.url
                                  : "//encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTXO0n8PPX7KVYDMnJ6iSBVahJPaBYXKE6NEM71lO73ZkZ23LFe"
                              }`}
                              alt="imageBlog"
                            />
                          </a>
                          <div class="date">
                            <i data-feather="calendar"></i>{" "}
                            {new Date(item.createdAt).toDateString()}
                          </div>
                        </div>
                        <div class="blog-post-content">
                          <h3>
                            <Link to={`/singleNews?id=${item.id}`}>
                              {item.title}
                            </Link>
                          </h3>

                          <p>
                            {item.thumbnailtext
                              ? item.thumbnailtext.thumbnailtext
                              : ""}
                          </p>
                          <Link
                            to={`/singleNews?id=${item.id}`}
                            class="read-more-btn"
                          >
                            Read More <i data-feather="arrow-right"></i>{" "}
                          </Link>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))
              : ""}
          </div>
        </div>
        <div class="col-lg-12 col-md-12">
          <div class="pagination-area">
            <nav aria-label="Page navigation">
              <ul class="pagination justify-content-center">
                <li class="page-item">
                  <a class="page-link" href="#">
                    Prev
                  </a>
                </li>

                <li class="page-item active">
                  <a class="page-link" href="#">
                    1
                  </a>
                </li>

                <li class="page-item">
                  <a class="page-link" href="#">
                    2
                  </a>
                </li>

                <li class="page-item">
                  <a class="page-link" href="#">
                    3
                  </a>
                </li>

                <li class="page-item">
                  <a class="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </div>
  )
}

export default News
