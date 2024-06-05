// "use client";
// // import { DUMMY_NEWS } from '@/dummy-news';
// import NewsList from "@/components/news-list";
// import { useEffect, useState } from "react";

// export default function NewsPage() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(false);
//   const [news, setNews] = useState(false);
//   useEffect(() => {
//     async function fetchNews() {
//       const response = await fetch("http://localhost:8080/");
//       if (!response.ok) {
//         setError("failed to fetch news");
//         setIsLoading(false);
//       }
//       const news = await response.json();
//       setNews(news);
//       setIsLoading(false);
//     }
//     fetchNews();
//   }, []);
//   if (isLoading) return <p>Loading</p>;
//   if (error) return <p>error</p>;
//   let newsContent;
//   if (news) newsContent = <NewsList news={news} />;
//   return (
//     <>
//       <h1>News Page</h1>
//       {newsContent}
//     </>
//   );
// }
import NewsList from '@/components/news-list';

export default async function NewsPage() {
  const response = await fetch('http://localhost:8080/news');

  if (!response.ok) {
    throw new Error('Failed to fetch news.');
  }

  const news = await response.json();

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
}