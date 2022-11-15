import './Project.css';

const Project = ({ descriptionOne, descriptionTwo, descriptionThree, caption, projectUrl, imageSource, altText, githubUrl, sections }) => {
    let count = 0;
    if (sections === 0) {
        count = 1;
    } else if (sections === 1) {
        count = 2;
    } else if (sections === 2) {
        count = 3;
    } else if (sections === 3) {
        count = 4;
    }
    return (
        <section className={'boxGroup boxSection' + (count)}>
            <div className={'box'}>
                <p>{descriptionOne}</p>
                <p>{descriptionTwo}</p>
                <p>{descriptionThree}</p>
                <p>You can check out the repository on <a href={githubUrl} target="_">GitHub</a></p>
            </div>

            <figure className='box'>
                <a href={projectUrl} target="_"><img src={imageSource}
                    alt={altText} /></a>
                <figcaption>{caption}</figcaption>
            </figure>
        </section>
    )

}

export default Project;