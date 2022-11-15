import './Project.css';

const Project = ({ descriptionOne, descriptionTwo, descriptionThree, caption, projectUrl, imageSource, altText, githubUrl, sections }) => {
    // let count = 0;
    // if (sections === 0) {
    //     count = 1;
    // } else if (sections === 1) {
    //     count = 2;
    // } else if (sections === 2) {
    //     count = 3;
    // } else if (sections === 3) {
    //     count = 4;
    // }
    return (
        <section className={'boxGroup boxSection' + (sections + 1)}>
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

// const numbers = [1, 2, 3, 4];
// return (
//     <div>
//         {
//             numbers.map((item) => {
//                 return (
//                     <section className={'boxGroup boxSection' + (item)}>
//                         <div className={'box'}>
//                             <p>{descriptionOne}</p>
//                             <p>{descriptionTwo}</p>
//                             <p>{descriptionThree}</p>
//                             <p><a href={githubUrl} target="_">
//                                 <i class="devicon-github-original"></i>
//                             </a></p>
//                         </div>

//                         <figure className='box'>
//                             <a href={projectUrl} target="_"><img src={imageSource}
//                                 alt={altText} /></a>
//                             <figcaption>{caption}</figcaption>
//                         </figure>
//                     </section>

//                 )
//             })
//         }
//     </div>
// )