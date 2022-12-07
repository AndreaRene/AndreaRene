import Project from './Project';
import './Portfolio.css';
import totr from '../assets/totr.png';
import quickweather from '../assets/quickweather.jpeg';
import quizly from '../assets/quizly.png';
import SmallCal from '../assets/SmallCal.jpg';
import pom from '../assets/pom.png'
import README from '../assets/readmeGen.png'

// const feature = [
//     {
//         descriptionOne: 'I got together with a group of friends and we decided we all wanted to see less hatred online and in social media. One thing that we discussed was the visibility that mental health is getting. We agreed that it is still not enough, so we wanted to make a community.',
//         descriptionTwo: 'With this site, users will be able to come together and support one another through good and bad, ups and downs, thick and thin. Mental health is a serious concern and people need a safe space to be able to talk about it without fear.',
//         caption: 'Peace Of Mind',
//         projectUrl: 'https://peace-of-mind-app.herokuapp.com/',
//         imageSource: pom,
//         altText: 'a small image of the website',
//         githubUrl: 'https://github.com/AndreaRene/Andrea_Rene_Portfolio'
//     },
// ]
const data = [
    {
        descriptionOne: 'A group of friends and I discussed the visibility that mental health is getting. We agreed that it is still not enough.',
        descriptionTwo: 'With this site, users will be able to come together and support one another through good and bad, ups and downs, thick and thin. Mental health is a serious concern and people need a safe space to be able to talk about it without fear.',
        caption: 'Peace Of Mind',
        projectUrl: 'https://peace-of-mind-app.herokuapp.com/',
        imageSource: pom,
        altText: 'a small image of the website',
        githubUrl: 'https://github.com/AndreaRene/Andrea_Rene_Portfolio'
    },
    {
        descriptionOne: 'The app allows the user to either find a recipe for a random cocktail or a specific one by searching by name or ingredient.',
        descriptionTwo: 'It is fully responsive from XL to mobile devices so take it with you to your next get together and have fun!',
        descriptionThree: 'Please drink responsibly and Happy Mixing!',
        caption: 'Trivia on the rocks.',
        projectUrl: 'https://andrearene.github.io/Trivia_on_the_rocks/',
        imageSource: totr,
        altText: 'a small sample shot of the cocktail application',
        githubUrl: 'https://github.com/AndreaRene/Trivia_on_the_rocks'
    },
    {
        descriptionOne: "Here's a lightweight weather dashboard I've put together for some simple information about the weather in any city you can think of. Currently it only searches by city so you will get a surprise!  But keep an eye out for state and country selectors soon! This app looks amazing on mobile so try it out next time you're traveling!",
        caption: 'Quick Weather',
        projectUrl: 'https://andrearene.github.io/Weather_App/',
        imageSource: quickweather,
        altText: 'small image of weather app',
        githubUrl: 'https://github.com/AndreaRene/Weather_App'
    },
    {
        descriptionOne: 'Check out my cute little day planner! Useful for simply planning out your day. No need to keep a bunch of information from day to day. Just one day. Every day. This app shines on mobile devices so take it with you to plan your work day with ease!',
        caption: 'SmallCal',
        projectUrl: 'https://andrearene.github.io/Day_Planner/',
        imageSource: SmallCal,
        altText: 'image of calendar app',
        githubUrl: 'https://github.com/AndreaRene/Day_Planner'
    },
    {
        descriptionOne: "I tried my hand at this little quiz app. Right now it's just five simple questions but I have many ideas about how it could be used.",
        descriptionTwo: "The thing I LOVED about developing this was building it in a way that scaling it and fitting it to any subject is extremely simple. I look forward to digging into it further to find more performant ways to build this in the future!",
        caption: 'Quizly',
        projectUrl: 'https://andrearene.github.io/Development_Quiz_App/',
        imageSource: quizly,
        altText: 'small image of quiz app',
        githubUrl: 'https://github.com/AndreaRene/Development_Quiz_App'
    },
    {
        descriptionOne: 'This command line application will allow the user to create a clean and professional README file through a series of prompts in their terminal. It will then generate the README file that they can use in their repository. ',
        descriptionTwo: 'This README file for this repository was created using this generator.',
        caption: 'README Generator',
        projectUrl: 'https://drive.google.com/file/d/1aPTcs2zxkWzbs2LsGI4GfTGvzT3Chfom/view',
        imageSource: README,
        altText: 'image of calendar app',
        githubUrl: 'https://github.com/AndreaRene/README_Generator'
    },
]

const Portfolio = () => {
    return (
        <main className="workGrid mainSection">
            {/* <header className='featuredWork'>
                <div className='featureBox'>
                    <p>{feature.descriptionOne}</p>
                    <p>{feature.descriptionTwo}</p>
                    <p>You can check out the repository on <a href={feature.githubUrl} target="_">GitHub</a></p>
                </div>
                <figure className='featureBox'>
                    <a href={feature.projectUrl} target="_"><img src={feature.imageSource}
                        alt={feature.altText} /></a>
                    <figcaption>{feature.caption}</figcaption>
                </figure>
            </header> */}
            {data.map((item, i) => {
                return (
                    <Project
                        key={i}
                        sections={i}
                        descriptionOne={item.descriptionOne}
                        descriptionTwo={item.descriptionTwo}
                        descriptionThree={item.descriptionThree}
                        caption={item.caption}
                        projectUrl={item.projectUrl}
                        imageSource={item.imageSource}
                        altText={item.altText}
                        githubUrl={item.githubUrl}
                    />
                )
            })}
        </main >
    )
}

export default Portfolio;


