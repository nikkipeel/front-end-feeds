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
    }
    getRss()
  }, [])

  return (
    <>
      <div className="rss-container">
        {!info && !items
          ? "Sorry, we're having trouble loading the API request"
          : ""}

        {info ? (
          <>
            {info.map(item => {
              const author = item.author
                .replaceAll("<![CDATA[", "")
                .replaceAll("]]>", "")
              const description = item.description
                .replaceAll("<![CDATA[", "")
                .replaceAll("]]>", "")
              return (
                <div className="rss-info">
                  {item.author && <h2>{author}</h2>}
                  {item.description && <em>{description}</em>}
                </div>
              )
            })}
          </>
        ) : (
          "no info"
        )}
        {items ? (
          <div class="rss-feed">
            {items.map(item => {
              const title = item.title
                .replaceAll("<![CDATA[", "")
                .replaceAll("]]>", "")

              const date = new Date().toDateString(item.date)

              return (
                <div className="rss-item">
                  <h3>{title}</h3>
                  <p>{date}</p>
                  <a href={item.link}>Read More</a>
                </div>
              )
            })}
          </div>
        ) : (
          "no feed"
        )}
      </div>
    </>
  )
}

export default Search
