import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function footer() {
    return (
        <footer className='flex-row space-between px-1' >
            <p>© 2023 My Profile. All rights reserved.</p>

            <FontAwesomeIcon icon={faSquareGithub} href='https://github.com/RedactdName'/>
            <FontAwesomeIcon icon={faLinkedin} href='https://linkedin.com/in/lisa-eimicke'/>
            <FontAwesomeIcon icon={faEnvelope} href=''/>


        </footer>
    );
}
export default footer;