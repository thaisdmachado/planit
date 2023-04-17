import { useNavigate } from 'react-router-dom';
import ProjectForm from '../project/ProjectForm';
import styles from './NewProject.module.css'

function NewProject() {

    const navigate = useNavigate()

    function createPost(project) {

        project.cost = 0
        project.services = []

        fetch('http://localhost:5000/projects', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            navigate('/projects',  { state: {message: 'Successfully created!'} })
        })
        .catch(err => console.log(err))
    }

    return (
        <div className={styles.newproject_container}>
            <h1>Create your project</h1>
            <p>Create your project so you can add services later</p>
            <ProjectForm handleSubmit={createPost} btnText='Create'/>
        </div>
    )
}

export default NewProject;