import styles from './Home.module.css'
import pcplanet from '../../img/pcplanet.svg'
import LinkButton from '../layout/LinkButton';

function Home() {
    return (
        <section className={styles.home_container}>
            <h1>Welcome to <span>Plan IT!</span></h1>
            <p>Start managing your projects right now!</p>
            <LinkButton to="/newproject" text="Create Project" />
            <img src={pcplanet} alt="Planet"></img>
        </section>

    )
}

export default Home;