import { getImageUrl } from './utils.js';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./RecipePage.css"

/*function
<Card>
<Card.Img variant="top" src={scr1} style={cardStyle}/>
<Card.Body>
  <Card.Text>
    {props.paragraph}
  </Card.Text>
</Card.Body>
</Card>
</>
*/
function ImageAndTextExample(props) {
    var scr1 = getImageUrl(props.person);
    var cardStyle = {
        width: props.size,
        height: props.size
    }

  return (
    <Row xs={3} className="g-5">
      {Array.from({ length: 2 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={scr1} style={cardStyle} />
            <Card.Body>
              <Card.Title>{props.title}</Card.Title>
              <Card.Text >
                {props.paragraph}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
      );
}
    

export default function Profile() {
    return (
        <div className="d-flex">
          
          <ImageAndTextExample
            title={"Sabrina"}
            paragraph={'The start of something great!'}
            size={100}
            person={{
            imageId : "YRE52hE",
            name : 'Sabrina Gonzalez Paterski'}
            }
          />  
          
            <ImageAndTextExample
            title={"Einstein"}
            paragraph={'Where the recipe starts!!!!'}
            size={100}
            person = {{
            imageId : 'Cc5mTvl',
            name : 'Einstein'
            }}
            />
          
        </div>
    );
}
