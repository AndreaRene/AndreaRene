import './Project.css';

const Project = ({ descriptionOne, descriptionTwo, descriptionThree, caption, projectUrl, imageSource, altText, githubUrl, sections }) => {

    return (
        <section className={'boxGroup boxSection' + (sections + 1)}>
            <div className={'box'}>
                <div className='title'>
                    <a href={projectUrl} target="_" className='projectLink'>{caption}</a>
                    <a href={githubUrl} target="_">
                        <i class="devicon-github-original repoIcons"></i>
                    </a>
                </div>
                <p>{descriptionOne}</p>
                <p>{descriptionTwo}</p>
                <p>{descriptionThree}</p>

            </div>

            <figure className='box'>
                <img src={imageSource}
                    alt={altText} />

            </figure>
        </section>
    )

}

export default Project;