import "./support.css"


const ProfileNavItem = ({ id, title, active, setActive }) => {

  return (

      <div
        className={active ? "item active" : "item"}
        onClick={() => setActive(id)}  >
        {title}
      </div>

  )
}

export default ProfileNavItem