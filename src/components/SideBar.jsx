import PropTypes from 'prop-types'


export default function SideBar(props) {
  const {handleToggleModal} = props;

  return (
    <div className="sidebar">
      <div onClick={handleToggleModal} className="bgOverlay"></div>
      <div className="sidebarContents">
        <h2>The Brutal Martian Landscape</h2>
        <div>
          <p>Description</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde non vitae eos, aut doloribus aperiam tenetur animi rerum neque temporibus?</p>
        </div>
        <button onClick={handleToggleModal}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  )
}

SideBar.propTypes = {
  handleToggleModal: PropTypes.func.isRequired,
}
