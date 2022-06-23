import Head from 'next/head'
import Link from 'next/link';
import Typewriter from 'typewriter-effect';





export default function Home() {
  return (
    <div>
      <Head>
        <title>Vishwajit Rikame</title>
      </Head>
      <header className='header'>
        <div className="container">
          <div className="header-inner">
            <div className="logo">
              VishwajitRikame
            </div>
            <div className="rightMenu">
              <ul>
                <li>
                  <Link href="https://vishwajitposts.tumblr.com/">
                    <a target="_blank">Portfolio</a>
                  </Link>
                  </li>
                <li>
                  <Link href="/Vishwajit%20Rikame_Frontend%20Lead.pdf">
                    <a target="_blank">Resume</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="connectwithme">
              <a href="https://api.whatsapp.com/send?phone=9702270708&text=Hi,%20Website%20Query">let's chat</a>
            </div>
          </div>
        </div>
      </header>
      <section className='first-section'>
        <div className="">
          <div className="innerfirst">
            <div className="leftpart">
              <div className='leftpart-inner'>
                <div className="typermain">
                  <h1 className='iam'>Hi! I Am</h1>

                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter.typeString('Vishwajit Rikame')
                        .pauseFor(300)
                        .deleteChars(16)
                        .typeString('Frontend Developer')
                        .pauseFor(300)
                        .deleteChars(20)
                        .typeString('I am Creative.')
                        .pauseFor(300)
                        .deleteChars(14)
                        .typeString('I Love Design.')
                        .pauseFor(300)
                        .deleteChars(14)
                        .typeString('I Love to Develop.')
                        .pauseFor(300)
                        .deleteChars(18)
                        .typeString('Frontend Developer')
                        .callFunction(() => {
                          console.log('String typed out!');
                        })
                        .pauseFor(2500)
                        // .deleteAll()
                        .callFunction(() => {
                          console.log('All strings were deleted');
                        })
                        .start();
                    }}
                  />
                </div>
                {/* <h1 className='myname'>Vishwajit Rikame</h1> */}
                <h4>Team Lead - Frontend Development (Media.net) <br />Ex. Flarepath || Ex. Hogoworks Solutions || Ex. SAPS <br />Freelance Web Developer | FrontEnd Developer | Wordpress Developer</h4>
                <div className='talks-about'>
                  Talks about
                  <span>#frontend</span>
                  <span>#webdevelopment</span>
                  <span>#frontenddeveloper</span>
                  <span>#frontenddevelopment</span>
                </div>
                <div className='max-50p'>
                  <p>
                    Having more than 10 years of Web Developement experience.<br />
                    I am experienced in Frontend development, worked on React JS, PHP frameworks, Emailer.
                  </p>
                </div>
              </div>
              <div className='leftfooter'>
                <div className="leftpart-inner">
                  <div className='social-wrapper'>
                    <ul>
                      <li>
                        <a href="https://www.linkedin.com/in/vishwajitrikame/" target="_blank">
                          <img src="/linkedin-50-w.svg" alt="linkedin" />
                        </a>
                      </li>
                      <li>
                      <a href="https://github.com/vishwajitr/" target="_blank">
                          <img src="/github-50-w.svg" alt="linkedin" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className='copyright'>
                  vishwajitrikame&copy;2022
                  </div>
                </div>
              </div>
            </div>
            <div className="rightpart">
            </div>
          </div>
        </div>
      </section>



      <footer>

      </footer>
    </div>
  )
}
