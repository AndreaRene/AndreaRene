import Project from './Project';
import './Portfolio.css';
import totr from '../assets/totr.png';
import quickweather from '../assets/quickweather.jpeg';
import quizly from '../assets/quizly.png';
import SmallCal from '../assets/SmallCal.jpg';
import pom from '../assets/pom.png';
import pomv2 from '../assets/pom-v2-v3.png';


const data = [
    {
        descriptionOne: 'After creating Peace of Mind, we had an opportunity to continue working on it. Valeria (a previous contributor) and I continued improving upon the project with a few new friends. We have implemented a MERN stack utilizing graphQL and added a couple new bells to the site overall.',
        caption: 'Peace of Mind V2',
        projectUrl: 'https://peace-of-mind-app-v2.herokuapp.com/',
        imageSource: pomv2,
        altText: 'version two moblie screen shot',
        githubUrl: 'https://github.com/AndreaRene/Peace-Of-Mind_V2'
    },
    {
        
        descriptionOne: 'With this site, users are be able to come together and support one another. Mental health is a serious concern and people need a safe space to be able to talk about it without fear.',
        caption: 'Peace Of Mind',
        descriptionTwo: 'This project is currently spun down. I have left the link for the Github repository, but we recreated the project which you can view in the Peace of Mind V2 section.',
        projectUrl: 'https://github.com/AndreaRene/Peace_of_Mind',
        imageSource: pom,
        altText: 'a small image of the website',
        githubUrl: 'https://github.com/AndreaRene/Peace_of_Mind'
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

]

const Portfolio = () => {
    return (
        <main className="workGrid mainSection">
            
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


