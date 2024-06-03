import Link from "next/link";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <header id="main-header">
      <div id="logo">
        <Link href="/">NextNews</Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink label='News' href='/news'/>
          </li>
          <li>
            {/* <Link href="/archive" className={path.startsWith("archive") ? "active" : undefined}>
            Archive
            </Link> */}
            <NavLink label='Archive' href='/archive'/>
          </li>
        </ul>
      </nav>
    </header>
  );
}
