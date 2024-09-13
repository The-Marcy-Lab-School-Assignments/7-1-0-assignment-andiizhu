// TODO: This component should render a single pokemon's stats and image.
import { useState } from "react" // import useState

const PokemonCard = ({imgFront, name, hp, imgBack}) => { // import of all the props from the PokemonCollection file
    const [ref, setRef] = useState(imgFront) // using the useState hook to track which image prop should be displayed

    const handleClick = () => { // event handler if the card is clicked
        ref === imgFront ? setRef(imgBack) : setRef(imgFront) // if the ref is equal to imgFront, the set the ref to imgBack, else set the ref to imgFront
    }

    return (
        <div className="ui card" onClick={handleClick}> {/* onClick for the whole card*/}
            <div>
                <div className="image" >
                <   img alt="pokemon name" src={ref} /> {/* src is equal to ref, which changes which clicked */}
                </div>
                <div className="content">
                    <div className="header">{name[0].toUpperCase() + name.slice(1)}</div>
                </div>
                <div className="extra content">
                    <span>
                        <i className="icon heartbeat red" />
                        {hp}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default PokemonCard