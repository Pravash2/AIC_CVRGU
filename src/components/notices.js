import React, { useState } from "react"
import BreadCumb from "./BreadCumb"
import { useStaticQuery, Link } from "gatsby"
import "./resource.css"

let tags = []

const Resources = () => {
  const data = useStaticQuery(graphql`
    query MyQuery6 {
      allContentfulNotice {
        edges {
          node {
            links
            title
            tags
            id
          }
        }
      }
    }
  `)
  const [count, setCount] = useState(-1)

  data.allContentfulNotice.edges.map(d => {
    tags = [...tags, ...d.node.tags]
  })

  const myfun = a => {
    return data.allContentfulNotice.edges.filter(
      item => item.node.tags.map(it => it.toLowerCase()).indexOf(a) !== -1
    )
  }
  tags = [...new Set(tags.map(item => item.toLowerCase()))]
  console.log(count)
  return (
    <div id="resource" style={{}}>
      <BreadCumb title="Notices" />
      <h1 className="heading">Browse through Notices </h1>
      <ul className="main">
        {tags
          ? tags.map((item, i) => {
              return (
                <li
                  className="firstlist"
                  onClick={() =>
                    count === -1
                      ? setCount(i)
                      : count === i
                      ? setCount(-1)
                      : setCount(i)
                  }
                >
                  <i className="fa fa-arrow-right"></i> {item}
                  {i === count ? (
                    <ul style={{ listStyle: "none" }}>
                      {myfun(item).map(itm => {
                        return (
                          <li className="secondlist">
                            <i class="fa fa-fighter-jet" aria-hidden="true"></i>{" "}
                            <a href={itm.node.links} target="_blank" download>
                              {itm.node.title}
                            </a>
                          </li>
                        )
                      })}
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
              )
            })
          : ""}
      </ul>
    </div>
  )
}

export default Resources
