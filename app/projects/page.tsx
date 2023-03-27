import { Metadata } from "next";
import Link from "next/link";

import "/public/assets/css/main.css";

export const metadata: Metadata = {
    title: "Projects - leonlarsson.com",
    description: "Links to personal projects.",
    openGraph: {
        type: "website",
        url: "https://leonlarsson.com/projects",
        title: "Projects - leonlarsson.com",
        description: "Links to personal projects.",
        images: "/assets/images/avatar.png"
    },
    twitter: {
        card: "summary",
        title: "Projects - leonlarsson.com",
        description: "Links to personal projects.",
        images: "/assets/images/avatar.png"
    }
};

export default () => {
    return (
        <div id="wrapper">
            <section id="main">
                <div>
                    <h1>Various projects</h1>
                    <hr />
                    <span style={{ fontWeight: 900 }}>Fun:</span>

                    <Project
                        name="Battlefield V Menu Playground"
                        link="https://bfvmenu.leonlarsson.com/"
                        githubLink="https://github.com/leonlarsson/bfvmenu"
                    />

                    <Project
                        name="Battlefield 1 Palette Recreation"
                        link="https://bf1palette.leonlarsson.com/"
                        githubLink="https://github.com/leonlarsson/bf1palette"
                    />

                    <Project
                        name="You Spin Me Right Round"
                        link="https://joy.leonlarsson.com/"
                        githubLink="https://github.com/leonlarsson/joy-meme"
                    />

                    <br />
                    <span style={{ fontWeight: 900 }}>Tools:</span>

                    <Project
                        name="This website"
                        link="/"
                        githubLink="https://github.com/leonlarsson/leon-home"
                        nextLink={true}
                    />

                    <Project
                        name="Log Sorter"
                        link="https://logsorter.net/"
                        githubLink="https://github.com/leonlarsson/logsorter"
                    />

                    <Project
                        name="Battlefield 1 Morse Solver"
                        link="https://bf1morse.leonlarsson.com/"
                        githubLink="https://github.com/leonlarsson/bf1morse"
                    />

                    <Project
                        name="Battlefield Stats Discord Bot"
                        link="https://battlefieldstats.com/"
                        githubLink="https://github.com/leonlarsson/bfstats-web"
                        extra={{
                            name: "API",
                            link: "https://api.battlefieldstats.com/",
                            githubLink: "https://github.com/leonlarsson/bfstats-api"
                        }}
                    />

                    <Project
                        name="Raccoon HTTP API"
                        link="https://api.onlyraccoons.com/"
                        githubLink="https://github.com/leonlarsson/http-raccoons"
                    />

                    <Project
                        name="Zeppelin Case Stats"
                        link="https://zeppelin-stats.leonlarsson.com/"
                        githubLink="https://github.com/leonlarsson/zeppelin-case-stats"
                    />

                    <Project
                        name="Redirect / Link Service"
                        link="https://x.leon.ms/"
                        githubLink="https://github.com/leonlarsson/link-redirector-worker"
                    />

                    <Project
                        name="THE FINALS Leaderboard"
                        link="https://the-finals-leaderboard.leonlarsson.com/"
                        githubLink="https://github.com/leonlarsson/the-finals-leaderboard"
                    />

                    <a className="fa-brands fa-github fa-2xl" style={{ marginTop: 40 }} href="https://github.com/leonlarsson" target="_blank" title="GitHub" />
                    <hr />
                    <ul style={{ textAlign: "left" }}>
                        <li><Link href="/">Home</Link></li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

const Project = ({ name, link, githubLink, nextLink = false, extra }: ProjectProps) => {
    return (
        <div className="project">
            {nextLink ? <Link href={link}>{name}</Link> : <a href={link} target="_blank">{name}</a>} {githubLink && <a href={githubLink} target="_blank" className="fa-brands fa-github" />}
            {extra && <> (<a href={extra.link} target="_blank">{extra.name}</a> {extra.githubLink && <a href={extra.githubLink} target="_blank" className="fa-brands fa-github" />})</>}
        </div>
    );
};

interface ProjectProps {
    name: string;
    link: string;
    githubLink?: string;
    nextLink?: boolean;
    extra?: {
        name: string;
        link: string;
        githubLink?: string;
    };
};