import "./Single.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Chart from "../../components/chart/Chart"
import Lists  from "../../components/table/Lists"
const Single = () => {
  return (
    <div className="single">
      <Sidebar/>
    <div className="singleContainer">
      <Navbar/>
      <div className="top">
        <div className="left">
          <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src="https://wallpapers.com/images/hd/jujutsu-kaisen-manga-pfp-npq8k15qyxyeo4i8.jpg" alt="msi" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">Kayden ode</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">janedoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">phone:</span>
                  <span className="itemValue">+212 706806079</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">64 st hay riyad. Rabat</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">Morocco</span>
                </div>
              </div>
            </div>
        </div>
        <div className="right">
          <Chart aspect={3/1} title="User Spending (Last 6 Months) "/>
        </div>
      </div>
      <div className="bottom">
      <h1 className="title">Last Transactions</h1>
        <Lists/>
      </div>
    </div>
    </div>
  )
}

export default Single