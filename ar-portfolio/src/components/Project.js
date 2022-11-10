import './Project.css';

const Project = ({ descriptionOne, descriptionTwo, descriptionThree, caption, projectUrl, imageSource, altText, githubUrl }) => {
    return (
        <section>
            <div className="box1">
                <p>{descriptionOne}</p>
                <p>{descriptionTwo}</p>
                <p>{descriptionThree}</p>
                <p>You can check out the repository on <a href={githubUrl} target="_">GitHub</a></p>
            </div>

            <figure className="box2">
                <a href={projectUrl} target="_"><img src={imageSource}
                    alt={altText} /></a>
                <figcaption>{caption}</figcaption>
            </figure>
        </section>
    )
};

export default Project;