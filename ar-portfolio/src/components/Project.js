import './Project.css';

const Project = ({ descriptionOne, descriptionTwo, descriptionThree, caption, projectUrl, imageSource, altText, githubUrl, boxes }) => {
    let count = 0;
    if (boxes === 0) {
        count = 0;
    } else if (boxes === 1) {
        count = 2;
    } else if (boxes === 2) {
        count = 4;
    } else if (boxes === 3) {
        count = 6;
    }
    return (
        <section className='boxSection'>
            <div className={'box box' + (count + 1)}>
                <p>{descriptionOne}</p>
                <p>{descriptionTwo}</p>
                <p>{descriptionThree}</p>
                <p>You can check out the repository on <a href={githubUrl} target="_">GitHub</a></p>
            </div>

            <figure className={'box box' + (count + 2)}>
                <a href={projectUrl} target="_"><img src={imageSource}
                    alt={altText} /></a>
                <figcaption>{caption}</figcaption>
            </figure>
        </section>
    )

}

export default Project;