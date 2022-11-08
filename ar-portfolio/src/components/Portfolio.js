import Project from './Project'
import './Portfolio.css'
import totr from '../assets/totr.png'
import pom from '../assets/pom.png'

const data = [
    {
        descriptionOne: 'The app allows the user to either find a recipe for a random cocktail or a specific one by searching by name or ingredient.',
        descriptionTwo: 'It is fully responsive from XL to mobile devices so take it with you to your next get together and have fun!',
        descriptionThree: 'Please drink responsibly and Happy Mixing!',
        caption: 'Trivia on the rocks.',
        projectUrl: 'https://andrearene.github.io/Trivia_on_the_rocks/',
        imageSource: totr,
        altText: 'a small sample shot of the cocktail application',
    },
    {
        descriptionOne: 'The app allows the user to either find a recipe for a random cocktail or a specific one by searching by name or ingredient.',
        descriptionTwo: 'It is fully responsive from XL to mobile devices so take it with you to your next get together and have fun!',
        descriptionThree: 'Please drink responsibly and Happy Mixing!',
        caption: 'Trivia on the rocks.',
        projectUrl: 'https://andrearene.github.io/Trivia_on_the_rocks/',
        imageSource: totr,
        altText: 'a small sample shot of the cocktail application'
    }
]

const Portfolio = () => {
    return (
        <main>
            {data.map(item => {
                return (
                    <Project descriptionOne={item.descriptionOne}
                        descriptionTwo={item.descriptionTwo}
                        descriptionThree={item.descriptionThree}
                        caption={item.caption}
                        projectUrl={item.projectUrl}
                        imageSource={item.imageSource}
                        altText={item.altText}
                    />
                )
            })}
        </main >
    )
}

export default Portfolio;


