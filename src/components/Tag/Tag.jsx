export default function Tags (props) {
    const item = props.item
    return (
    <div className="info">
        <text>{item.tag[0]}</text>
        <text>{item.tag[1]}</text>
        <text>{item.tag[2]}</text>
    </div>)
}