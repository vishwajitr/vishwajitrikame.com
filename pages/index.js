import Head from 'next/head'
import Link from 'next/link';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Vishwajit Rikame</title>
      </Head>
      <header className='header'>
        <div className="rightMenu">
          <ul>
            <li>About Me</li>
            <li>
            <Link href="../public/Vishwajit%20Rikame_Frontend%20Lead.pdf">
              Resume
              </Link>
              </li>
            <li>Contact Me</li>
          </ul>
        </div>
      </header>
      <section className='first-section'>
        <div className='full-container'></div>
        <h1>Vishwajit Rikame</h1>
        <h4>Team Lead - Frontend Development (Media.net) <br/>Ex. Flarepath || Ex. Hogoworks Solutions || Ex. SAPS <br/>Freelance Web Developer | FrontEnd Developer | Wordpress Developer</h4>  
        <div className='talks-about'>
        Talks about 
        <span>#frontend</span>
        <span>#webdevelopment</span>
        <span>#frontenddeveloper</span>
        <span>#frontenddevelopment</span>
        </div>
        <div className='max-50p'>
          <p>
          Overall 10+ Years of experience in IT right from Junior Web Developer to Team Lead - Frontend Development.

Skilled Frontend Engineer with 4 years of experience Project Leading and Mentoring Team members.

I am experienced in Frontend development, worked on React JS, PHP frameworks, Emailer.
          </p>
        </div>
      </section>

      <footer>

      </footer>
    </div>
  )
}
