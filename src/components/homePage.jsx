import HomeContent from "./homecontent";
import Navbar from "./navbar";
import SlideGallery from "./slidegallery";

export default function HomePage(){
    return(
        <div>
            <Navbar />
            <SlideGallery />
            <HomeContent />
        </div>
    )
}