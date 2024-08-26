import React from "react"

export default function UseWindowSize (){
    const [windowSize, setWindowSize] = React.useState({
        width: undefined,
        height: undefined
    })

    React.useEffect(() => {

        function handleResize(){
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }

        handleResize()

        window.addEventListener("resize", handleResize)

        function cleanUp(){
            window.removeEventListener("resize", handleResize)
        }

        return cleanUp;
    }, [])

    return windowSize;
}