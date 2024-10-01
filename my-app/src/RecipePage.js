import { getImageUrl } from './utils.js';
import Card from 'react-bootstrap/Card';
import "./RecipePage.css"

            
function ImageAndTextExample(props) {
    var scr1 = getImageUrl(props.person);
    var cardStyle = {
        width: props.size,
        height: props.size
    }

  return (
    <>
      <Card>
        <Card.Img variant="top" src={scr1} style={cardStyle}/>
        <Card.Body>
          <Card.Text>
            {props.paragraph}
          </Card.Text>
        </Card.Body>
      </Card>
      </>
      );
}

export default function Profile() {
    return (
        <div class="flex-container">
          
          <ImageAndTextExample
            paragraph={'The start of something great!'}
            size={100}
            person={{
            imageId : "YRE52hE",
            name : 'Sabrina Gonzalez Paterski'}
            }
          />  
          
            <ImageAndTextExample
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
