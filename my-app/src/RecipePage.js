import { getImageUrl } from './utils.js';

function Block({ person, size=100}) {
    return (
        <img 
        className='block'
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        height={size}
        />
    );
}

function Card(props)
{
    return (
        <div>
            <p>
            {props.paragraph}
            </p>
            <Block
            size={props.size}
            person={{
                imageId : props.person.imageId,
                name : props.person.name
            }}
            />
        </div>
    )
}

export default function Profile() {
    return (
        <div>
        <Card
        paragraph={'The start of something great!'}
        size={100}
        person={{
            imageId : "YRE52hE",
            name : 'Sabrina Gonzalez Paterski'}
        }
        />  
        <Card
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
