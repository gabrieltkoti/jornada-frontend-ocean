import Tags from "../Tag/Tag"

export default function Card (props){
    const item = props.item

    return (
        <div className='card'> 
            <h2>{item.name}</h2>
            <Tags item={item} />
            <img src={item.image} />
        </div>
    )
}