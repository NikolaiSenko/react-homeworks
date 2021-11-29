import data from './data.json' 
import "./Data.css"
const UserList = ({listItem, listContainer}) => {
    const newData = data.map((item)=>{
      return <div className={listItem} key={item._id}>
        <h3>{item.name.first}</h3>
        <h4>{item.name.last}</h4>
      </div>
    })
    return (
      <div className={listContainer}>{newData}</div>
    )
}
export default UserList;