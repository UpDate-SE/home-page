import { Container, Spinner } from 'reactstrap';

import 'scss/css/style.css';
import 'styles/LoadingPage.css';

const LoadingPage = () => (
    <Container
        id='loading-page'
        fluid
        className='d-flex justify-content-center align-items-center'
    >
        <Spinner id='spinner' />
    </Container>
)

export default LoadingPage;