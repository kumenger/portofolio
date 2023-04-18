
import {Card, Button} from 'react-bootstrap';
const Projects = () => {
  return (
    <div className="row container text-center ">
      <div className="col-xs-1 col-s-2 col-md-3 col-lg-4" style={{padding: '2%'}}>
        <Card style={{width: '340px', height: '300px'}} className=" ">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/2uZ4BrSvvm4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen="true"
          ></iframe>
          <Card.Body>
            <Card.Title className="pink">FullStack Discussion forum (MERN)</Card.Title>
            <Button variant="primary">View Online</Button>{' '}
            <Button variant="primary">View Source Code</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="col-xs-2 col-s-2 col-md-3 col-lg-4" style={{padding: '2%'}}>
        <Card style={{width: '340px', height: '300px'}} className=" ">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/u8-RcGNyWOA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen="true"
          ></iframe>

          <Card.Body>
            <Card.Title className="pink">Cient Side Api Implementation</Card.Title>
            <Button variant="primary">View Online</Button>{' '}
            <Button variant="primary">View Source Code</Button>
          </Card.Body>
        </Card>
      </div>
      <div
        className="col-xs-2 col-s-2 col-md-3 col-lg-4"
        style={{padding: '2%'}}
      >
        <Card style={{width: '340px', height: '300px'}} className=' '>
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/8eGOKFtx13U" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen='true'></iframe>
          <Card.Body>
            <Card.Title className='pink'>JavaScript Quiz</Card.Title>

            <Button variant="primary" href='https://kumenger.github.io/coding-quiz-challenge/'>View Online</Button>{' '}
            <Button variant="primary" href='https://github.com/kumenger/coding-quiz-challenge'>View Source Code</Button>
          </Card.Body>
        </Card>

      </div>
      <div
        className="col-xs-2 col-s-2 col-md-3 col-lg-4"
        style={{padding: '2%'}}
      >
        {' '}
        <Card style={{width: '340px', height: '300px'}} className=' '>
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/DQZyZBHORFs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen='true'></iframe>
          <Card.Body>
            <Card.Title className='pink'>Logo Generator</Card.Title>

            
            <Button variant="primary" href='https://github.com/kumenger/logo-creater' target='_black'>View Source Code</Button>
          </Card.Body>
        </Card>
      </div>
      <div
        className="col-xs-2 col-s-2 col-md-3 col-lg-4"
        style={{padding: '2%'}}
      >
        {' '}
        <Card style={{width: '340px', height: '300px'}} className=' '>
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/2uZ4BrSvvm4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen='true'></iframe>
          <Card.Body>
            <Card.Title className='pink'>discussion forum</Card.Title>

            <Button variant="primary">View Online</Button>{' '}
            <Button variant="primary">View Source Code</Button>
          </Card.Body>
        </Card>
      </div>
      <div
        className="col-xs-2 col-s-2 col-md-3 col-lg-4"
        style={{padding: '2%'}}
      >
        {' '}
        <Card style={{width: '340px', height: '300px'}} className=' '>
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/2uZ4BrSvvm4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen='true'></iframe>
          <Card.Body>
            <Card.Title className='pink'>discussion forum</Card.Title>

            <Button variant="primary">View Online</Button>{' '}
            <Button variant="primary">View Source Code</Button>
          </Card.Body>
        </Card>
      </div>
      <div
        className="col-xs-2 col-s-2 col-md-3 col-lg-4"
        style={{padding: '2%'}}
      >
        {' '}
        <Card style={{width: '340px', height: '300px'}} className=' '>
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/2uZ4BrSvvm4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen='true'></iframe>
          <Card.Body>
            <Card.Title className='pink'>discussion forum</Card.Title>

            <Button variant="primary">View Online</Button>{' '}
            <Button variant="primary">View Source Code</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
export default Projects;
