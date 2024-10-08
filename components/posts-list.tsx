import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";
import Link from "next/link";
export default async function postsList() {
    const response = await fetch("https://dummyjson.com/posts?limit=10");
    const data = await response.json();
  return (
      <ul>
        {
          data.posts.map((post: { id: Key | null | undefined; title: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; body: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; })=>(
            <li key={post.id} className="mb-3">
              <Link href={`/posts/${post.id}`} >{post.title}</Link>
            </li>
          ))
        }
      </ul>
  )
}
