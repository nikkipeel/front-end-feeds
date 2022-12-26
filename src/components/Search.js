import React, { useState, useEffect } from "react"

const Search = () => {
  const [info, setInfo] = useState([])
  const [items, setItems] = useState([])

  useEffect(() => {
    const getRss = async () => {
      // proxy doesn't work in builds
      const res = await fetch(
        `https://api.allorigins.win/get?url=${encodeURIComponent(
          "https://nikkipeel.netlify.app/rss.xml"
        )}`
      )
      const { contents } = await res.json()
      const feed = new window.DOMParser().parseFromString(contents, "text/xml")
      const meta = feed.querySelectorAll("channel")

      const rssInfo = [...meta].map(el => ({
        author: el.querySelector("title").innerHTML,
        description: el.querySelector("description").innerHTML,
      }))
      setInfo(rssInfo)

      const rssItems = feed.querySelectorAll("item")
      const feedItems = [...rssItems].map(el => ({
        link: el.querySelector("link").innerHTML,
        title: el.querySelector("title").innerHTML,
        date: el.querySelector("pubDate").innerHTML,
      }))
      setItems(feedItems)
      console.log("FeedItems in getRss", rssFeed)
    }
    getRss()
  }, [])

  return (
    <>
      <div className="rss-container">
        {items && info ? (
          <>
            <div className="rss-feed">
              {items.map(item => {
                const title = item.title
                  .replaceAll("<![CDATA[", "")
                  .replaceAll("]]>", "")
                const date = new Date(item.date).toDateString()

                return (
                  <>
                    {item.link && (
                      <a href={item.link} className="rss-item">
                        <>
                          {info.map(item => {
                            const author = item.author
                              .replaceAll("<![CDATA[", "")
                              .replaceAll("]]>", "")

                            return <>{author && <em>{author}</em>}</>
                          })}

                          <div className="rss-item--article">
                            {title && <h3>{title}</h3>}
                            {date && <p>{date}</p>}
                          </div>
                          <div className="rss-item--article__link">
                            <strong>Read More</strong>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                            >
                              <path d="M384 32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H384zM160 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h94.1L119 327c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l135-135V328c0 13.3 10.7 24 24 24s24-10.7 24-24V168c0-13.3-10.7-24-24-24H160z" />
                            </svg>
                          </div>
                        </>
                      </a>
                    )}
                  </>
                )
              })}
            </div>
          </>
        ) : (
          "Sorry, we're having trouble loading the API request"
        )}
      </div>
    </>
  )
}

export default Search
