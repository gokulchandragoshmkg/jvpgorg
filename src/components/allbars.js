import Sidebar from "./sidebar";
import Main from "./main";
import TopBar from "./topbar";

function AllBars() {
    return(
        <>
         <TopBar></TopBar>
         <div className="container-fluid">
            <div className="row">
                <Sidebar></Sidebar>
                <Main></Main>
            </div>
        </div>
        </>
    )
}

export default AllBars;