import style from "./Navbar.module.css";

function Navbar (){
    return <div className={style.parent}>
        <div className="left">Student_Details</div>
        <div className="rigt">
        <a href="" style={{padding:"10px"}}>Home</a>
           <a href="" style={{padding:"10px"}}>About</a>
           <a href="" style={{padding:"10px"}}>Service</a>
           <a href="" style={{padding:"10px"}}>Contact</a>
        </div>
    </div>
}
export default Navbar;