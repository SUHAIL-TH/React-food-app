import { useState } from "react"

const Section = ({ title, description, isVisible, setVisible }) => {
    // const [isVisible,setVisible]=useState(visible)
    return (
        <div className="border border-black p-2 m-2">

            <h3 className="font-bold text-gray-500">{title}</h3>
            {isVisible ? <button onClick={() => {
                setVisible(false)
            }} className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">Hide</button> :
                <button onClick={() => {
                    setVisible(true)
                }} className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">Show</button>
            }

            {isVisible && <p>{description}</p>}
        </div>
    )
}


const Instamart = () => {
    const [configSection, setconfigSection] = useState("about")
    return (
        <>
            <h1 className="text-3x1 p-2 m-2 font-bold">Instamart</h1>
            <Section title={"About Instamart"} description={"this is the about section of the instamart Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum voluptates dolor esse perspiciatis aperiam molestias expedita alias, illum sequi, nam mollitia debitis incidunt eos tempora consectetur at quia eius repudiandae"} isVisible={configSection==="about"} setVisible={() => {
                 setconfigSection("about")
            }} />
            <Section title={"Team Instamart"} description={"this is the team section of the instamart Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum voluptates dolor esse perspiciatis aperiam molestias expedita alias, illum sequi, nam mollitia debitis incidunt eos tempora consectetur at quia eius repudiandae."} isVisible={configSection==="team"} setVisible={() => {
                 setconfigSection("team")
            }} />
            <Section title={"Career Instamart"} description={"this is the team section of the instamart Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum voluptates dolor esse perspiciatis aperiam molestias expedita alias, illum sequi, nam mollitia debitis incidunt eos tempora consectetur at quia eius repudiandae."} isVisible={configSection==="career"} setVisible={() => {
                setconfigSection("career")
            }} />

            {/* <AboutInstamart></AboutInstamart>
        <DetailofInstamart/>
        <TeamInstamart/>
        <Product/>
        <Careers/> */}
        </>
    )
}
export default Instamart