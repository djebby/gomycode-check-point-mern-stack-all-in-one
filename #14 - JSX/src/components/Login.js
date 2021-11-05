import myimg from "../imageInSrc.jpg";
import "./login.css";
let x = 5;
function Login(){
    return (
        <div className="container">
        <div style={{border:"solid 1px black",maxWidth:"100vw", display:"flex", flexDirection:"column", alignContent:"center"}} >
            <h1 className="title red">Firas Djebby</h1>
            <br />
            <div style={ {display:"flex", justifyContent:"space-around"} }>
            <img src={myimg} width="400"/>
            <img src="/imageInPublic.jpg" width="400" />
            </div>
        </div>
        <video width="400"  controls >
        <source src="myVideo.mp4" type="video/mp4" />
        </video>
        </div>

    );
}   
export default Login;